import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github, Copy, Check } from "lucide-react";
import { contactInfo } from "@/data/portfolio-data";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    toast({
      title: "Copied to clipboard",
      description: `${field} has been copied to your clipboard.`,
    });
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-semibold mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or innovative
            projects. Feel free to reach out!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          {/* Email */}
          <Card className="p-6 hover-elevate transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-semibold mb-1">Email</h3>
                <p className="text-sm text-muted-foreground break-all mb-3">
                  {contactInfo.email}
                </p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(contactInfo.email, "Email")}
                    data-testid="button-copy-email"
                  >
                    {copiedField === "Email" ? (
                      <Check className="h-4 w-4 mr-2" />
                    ) : (
                      <Copy className="h-4 w-4 mr-2" />
                    )}
                    {copiedField === "Email" ? "Copied" : "Copy"}
                  </Button>
                  <Button
                    size="sm"
                    asChild
                    data-testid="button-email"
                  >
                    <a href={`mailto:${contactInfo.email}`}>Send Email</a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Phone */}
          <Card className="p-6 hover-elevate transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-semibold mb-1">Phone</h3>
                <p className="text-sm text-muted-foreground mb-3">{contactInfo.phone}</p>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => copyToClipboard(contactInfo.phone, "Phone")}
                  data-testid="button-copy-phone"
                >
                  {copiedField === "Phone" ? (
                    <Check className="h-4 w-4 mr-2" />
                  ) : (
                    <Copy className="h-4 w-4 mr-2" />
                  )}
                  {copiedField === "Phone" ? "Copied" : "Copy"}
                </Button>
              </div>
            </div>
          </Card>

          {/* Location */}
          <Card className="p-6 hover-elevate transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-semibold mb-1">Location</h3>
                <p className="text-sm text-muted-foreground">{contactInfo.location}</p>
              </div>
            </div>
          </Card>

          {/* Social Links */}
          <Card className="p-6 hover-elevate transition-all duration-300">
            <h3 className="font-display font-semibold mb-4">Connect With Me</h3>
            <div className="flex gap-3">
              <Button
                size="icon"
                variant="outline"
                asChild
                data-testid="button-linkedin"
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
                variant="outline"
                asChild
                data-testid="button-github"
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
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="p-8 bg-primary/5 border-primary/20">
            <h3 className="text-xl font-display font-semibold mb-3">
              Ready to collaborate?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how I can contribute to your next project
            </p>
            <Button
              size="lg"
              asChild
              data-testid="button-contact-cta"
            >
              <a href={`mailto:${contactInfo.email}`}>Start a Conversation</a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
