import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/data/portfolio-data";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Elton Chipuka. All rights reserved.</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Button
              size="icon"
              variant="ghost"
              asChild
              data-testid="footer-link-email"
            >
              <a href={`mailto:${contactInfo.email}`} aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              asChild
              data-testid="footer-link-linkedin"
            >
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              asChild
              data-testid="footer-link-github"
            >
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover-elevate px-3 py-2 rounded-md"
            data-testid="button-back-to-top"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
