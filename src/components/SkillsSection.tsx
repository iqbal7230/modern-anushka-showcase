import { Code, Database, BarChart3, Wrench, Monitor } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "JavaScript", "HTML", "CSS", "SQL"],
      color: "bg-gradient-primary"
    },
    {
      title: "Frameworks & Technologies",
      icon: Monitor,
      skills: ["Node.js", "React.js", "TensorFlow.js"],
      color: "bg-gradient-secondary"
    },
    {
      title: "Developer Tools",
      icon: Wrench,
      skills: ["VS Code", "Git"],
      color: "bg-gradient-primary"
    },
    {
      title: "Process Mining Tools",
      icon: Database,
      skills: ["Celonis"],
      color: "bg-gradient-secondary"
    },
    {
      title: "Data Visualization & BI",
      icon: BarChart3,
      skills: ["Power BI", "Tableau"],
      color: "bg-gradient-primary"
    },
    {
      title: "Other Tools",
      icon: Monitor,
      skills: ["Microsoft Office"],
      color: "bg-gradient-secondary"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-secondary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for data science, web development, and process optimization
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group border-0 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-xl ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-2 bg-accent rounded-lg text-sm font-medium text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Note */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto border-0 shadow-soft bg-gradient-subtle">
            <CardContent className="pt-6">
              <p className="text-muted-foreground">
                <strong>Continuously learning:</strong> Staying updated with the latest technologies in AI, machine learning, and web development through online courses, simulations, and hands-on projects.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;