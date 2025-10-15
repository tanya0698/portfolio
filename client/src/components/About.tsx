import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin } from "lucide-react";
import { education } from "@/data/portfolio-data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-semibold mb-4" data-testid="heading-about">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-8 transition-all duration-700 delay-200 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Professional Summary */}
          <Card className="p-8 hover-elevate transition-all duration-300" data-testid="card-professional-summary">
            <h3 className="text-xl font-display font-semibold mb-4" data-testid="heading-professional-summary">
              Professional Summary
            </h3>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-summary">
              Dedicated and detail-oriented Software Developer with expertise in full-stack
              development and system optimization. Adept at designing scalable solutions
              while maintaining high standards of quality. Passionate about leveraging
              technology to drive organizational efficiency.
            </p>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground italic">
                "Building innovative solutions that make a real impact on business operations
                and user experience."
              </p>
            </div>
          </Card>

          {/* Education */}
          <Card className="p-8 hover-elevate transition-all duration-300" data-testid="card-education">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-display font-semibold mb-2" data-testid="heading-education">Education</h3>
                <p className="font-medium text-foreground mb-1" data-testid="text-degree">{education.degree}</p>
                <p className="text-muted-foreground mb-2" data-testid="text-institution">{education.institution}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>{education.location}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {education.startDate} - {education.endDate}
                </p>
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {education.grade}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Languages */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Languages:</span> English, Shona
          </p>
        </div>
      </div>
    </section>
  );
}
