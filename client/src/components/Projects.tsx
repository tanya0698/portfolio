import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";
import { projects } from "@/data/portfolio-data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-semibold mb-4" data-testid="heading-projects">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of innovative solutions delivering measurable business impact
          </p>
        </div>

        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group hover-elevate hover:shadow-lg transition-all duration-300"
              data-testid={`card-project-${index}`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <CardTitle className="text-lg font-display group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs"
                      data-testid={`tech-${index}-${techIndex}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Metrics */}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-start gap-2">
                    <TrendingUp className="h-4 w-4 text-chart-2 mt-0.5 flex-shrink-0" />
                    <p className="text-sm font-medium text-chart-2">
                      {project.metrics}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
