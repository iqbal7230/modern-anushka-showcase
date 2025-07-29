import { GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EducationSection = () => {
  const education = [
    {
      institution: "IILM University",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      location: "Greater Noida, Uttar Pradesh",
      duration: "2022 – 2026",
      type: "University"
    },
    {
      institution: "Mayoor School, Noida",
      degree: "Class X, XII (CBSE)",
      location: "Noida, Uttar Pradesh", 
      duration: "2020 – 2022",
      type: "School"
    }
  ];

  const coursework = [
    "The Complete Full-Stack Web Development Bootcamp – Udemy",
    "Deloitte Data Analytics Job Simulation – Forage",
    "TATA GenAI Powered Data Analytics Job Simulation – Forage",
    "Learn Python Programming: Beginner to Master – Udemy"
  ];

  return (
    <section id="education" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Education & Learning
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in computer science and continuously learning new technologies
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 shadow-soft">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-primary">
                      <GraduationCap className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {edu.institution}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{edu.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4" />
                    {edu.duration}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">{edu.degree}</h3>
                <p className="text-muted-foreground">{edu.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Relevant Coursework */}
        <Card className="border-0 shadow-soft">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Relevant Coursework</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-4">
              {coursework.map((course, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                  <span className="text-sm">{course}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EducationSection;