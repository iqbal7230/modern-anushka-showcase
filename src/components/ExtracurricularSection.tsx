import { Users, ShoppingCart, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExtracurricularSection = () => {
  const activities = [
    {
      title: "Student Committee for Organizing Placements (SCOP)",
      icon: Users,
      description: "Part of SCOP team to support campus placement activities and coordinate with visiting recruiters.",
      skills: ["Leadership", "Coordination", "Communication", "Event Management"]
    },
    {
      title: "Sales Operations - Zappfresh",
      icon: ShoppingCart,
      description: "Assisted in managing sales operations during a Zappfresh promotional event, ensuring smooth setup and customer satisfaction.",
      skills: ["Customer Service", "Operations Management", "Problem Solving", "Team Collaboration"]
    },
    {
      title: "University-Level Debates",
      icon: MessageSquare,
      description: "Actively participated in university-level debates, strengthening public speaking and persuasive communication skills.",
      skills: ["Public Speaking", "Critical Thinking", "Research", "Persuasion"]
    }
  ];

  return (
    <section id="extracurricular" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Leadership & Activities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building leadership skills and making meaningful contributions beyond academics
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Card key={index} className="group border-0 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-xl bg-gradient-primary group-hover:scale-110 transition-transform duration-300">
                    <activity.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors leading-tight">
                  {activity.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {activity.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Skills Developed:</h4>
                  <div className="flex flex-wrap gap-2">
                    {activity.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 text-xs bg-accent rounded-full text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Leadership Quote */}
        <div className="mt-12 text-center">
          <Card className="max-w-3xl mx-auto border-0 shadow-elegant bg-gradient-primary">
            <CardContent className="pt-8 pb-8">
              <blockquote className="text-lg text-primary-foreground italic">
                "Leadership is not about being in charge. It's about taking care of those in your charge and contributing to the community's growth."
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExtracurricularSection;