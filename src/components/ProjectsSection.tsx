import { Code, Calendar, ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Object Detection Model",
      date: "October 2023",
      description: "Designed and implemented a real-time object detection application within the browser using TensorFlow.js and the COCO-SSD pre-trained model.",
      highlights: [
        "Built an interactive web interface capable of detecting and classifying multiple object types via the user's webcam",
        "Ensured a lightweight, fully client-side experience with no server dependency",
        "Enabled cross-platform accessibility"
      ],
      technologies: ["TensorFlow.js", "JavaScript", "COCO-SSD", "WebRTC"]
    },
    {
      title: "AI Student Helper",
      date: "November 2024",
      description: "Developed a student-focused productivity tool to centralise academic tasks, study materials, and reminders.",
      highlights: [
        "Created an intuitive and responsive front-end interface to enhance usability",
        "Integrated smart scheduling and task management logic on the back end",
        "Provided intelligent study suggestions and time management features"
      ],
      technologies: ["React.js", "Node.js", "AI/ML", "Task Management"]
    },
    {
      title: "Crop Yield Prediction System",
      date: "March 2025",
      description: "Developed a machine learning system to forecast crop yields using environmental and historical agricultural data.",
      highlights: [
        "Applied feature engineering, data preprocessing, and model training",
        "Improved prediction accuracy through advanced ML techniques",
        "Designed to support farmers and agricultural analysts in data-driven planning"
      ],
      technologies: ["Python", "Machine Learning", "Data Science", "Agriculture Analytics"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions in AI, machine learning, and web development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group border-0 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-gradient-primary group-hover:scale-110 transition-transform duration-300">
                    <Code className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4" />
                    {project.date}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs bg-accent rounded-full text-accent-foreground">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 pt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;