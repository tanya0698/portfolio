import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { createServer } from "http";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Request logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  // Create the HTTP server
  const server = createServer(app);

  // Register API routes first
  await registerRoutes(app);

  // Global error handler
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    log(`Error: ${message}`, "server");
  });

  // Determine environment
  const isDev = process.env.NODE_ENV === "development";

  if (isDev) {
    log("Starting Vite in middleware mode...", "vite");
    await setupVite(app, server);
  } else {
    log("Serving static build files...", "express");
    try {
      serveStatic(app);
    } catch (error: any) {
      log(error.message, "express");
      process.exit(1);
    }
  }

  // Serve the app on the specified or default port
  const port = parseInt(process.env.PORT || "5000", 10);
  const host = "127.0.0.1"; //

  server.listen(port, host, () => {
    log(
      `🚀 Server running on http://${host}:${port} [${
        isDev ? "development" : "production"
      }]`,
      "server"
    );
  });
})();
