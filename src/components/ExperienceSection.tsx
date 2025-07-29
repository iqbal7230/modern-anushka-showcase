import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExperienceSection = () => {
  const experience = {
    company: "Navcara",
    position: "Data Science Associate Intern",
    duration: "February 2025 – August 2025",
    location: "Remote",
    responsibilities: [
      "Built and maintained ETL pipelines, data models, and Action Flows within the Celonis EMS platform to support process optimization.",
      "Created dashboards and reports to deliver data-driven insights to stakeholders.",
      "Wrote and optimized SQL queries; integrated systems using REST APIs.",
      "Worked with Oracle Fusion for end-to-end process mining."
    ]
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-secondary bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Gaining practical experience in data science and process optimization
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-elegant hover:shadow-2xl transition-all duration-500 group">
            <CardHeader className="pb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-primary group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {experience.position}
                    </CardTitle>
                    <p className="text-xl font-semibold text-muted-foreground">
                      {experience.company}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{experience.location}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-4">Key Responsibilities:</h3>
                <ul className="space-y-3">
                  {experience.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start gap-3 group/item">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                      <span className="text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors">
                        {responsibility}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;