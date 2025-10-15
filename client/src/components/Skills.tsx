import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Server,
  Database,
  Wrench,
  GitBranch,
  ListTodo,
} from "lucide-react";
import { skillCategories } from "@/data/portfolio-data";

const categoryIcons: Record<string, any> = {
  "Frontend Development": Code2,
  "Backend Development": Server,
  "Databases & ORM": Database,
  "Programming Languages": Code2,
  "DevOps & Tools": Wrench,
  "Project Management": ListTodo,
  "Version Control & Collaboration": GitBranch,
};

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-semibold mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = categoryIcons[category.category] || Code2;
            return (
              <Card
                key={index}
                className="hover-elevate transition-all duration-300"
                data-testid={`card-skill-category-${index}`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-base font-display">
                      {category.category}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs font-medium"
                        data-testid={`skill-${index}-${skillIndex}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
