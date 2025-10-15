import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { workExperience } from "@/data/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-semibold mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {workExperience.map((exp, index) => (
            <Card
              key={exp.id}
              className="p-8 hover-elevate transition-all duration-300"
              data-testid={`card-experience-${index}`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Timeline Indicator */}
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  {index < workExperience.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-4"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-display font-semibold mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-medium text-primary mb-2">{exp.company}</p>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {exp.startDate} - {exp.endDate}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="self-start"
                      data-testid={`badge-status-${index}`}
                    >
                      {exp.endDate === "Present" ? "Current" : "Past"}
                    </Badge>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3 mt-6">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div
                        key={achIndex}
                        className="flex items-start gap-3 group"
                        data-testid={`achievement-${index}-${achIndex}`}
                      >
                        <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
                        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
