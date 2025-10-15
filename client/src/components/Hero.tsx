import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Linkedin, Github } from "lucide-react";
import { contactInfo } from "@/data/portfolio-data";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        {/* Greeting */}
        <div className="inline-block">
          <span className="text-sm font-medium text-muted-foreground bg-accent px-4 py-2 rounded-full border border-border">
            Hello, I'm
          </span>
        </div>

        {/* Name with gradient */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight">
          <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
            Elton Chipuka
          </span>
        </h1>

        {/* Title */}
        <p className="text-xl sm:text-2xl lg:text-3xl font-display font-semibold text-muted-foreground">
          Software Developer
        </p>

        {/* Tagline */}
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Dedicated to designing scalable solutions and leveraging technology to drive
          organizational efficiency. Passionate about full-stack development and system
          optimization.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="min-w-[160px]"
            data-testid="button-view-work"
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="min-w-[160px]"
            data-testid="button-download-resume"
          >
            <a href="/attached_assets/Elton-Chipuka-Resume_1760532240418.pdf" download>
              Download Resume
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 pt-8">
          <Button
            size="icon"
            variant="ghost"
            asChild
            data-testid="link-email"
          >
            <a href={`mailto:${contactInfo.email}`} aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
          <Button
            size="icon"
            variant="ghost"
            asChild
            data-testid="link-linkedin"
          >
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button
            size="icon"
            variant="ghost"
            asChild
            data-testid="link-github"
          >
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            data-testid="button-scroll-down"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
