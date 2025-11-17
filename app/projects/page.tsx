import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with secure payment integration, admin dashboard, and real-time inventory management. Features include user authentication, product catalog, shopping cart, order processing, and analytics.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "TypeScript"],
      github: "https://github.com",
      demo: "https://demo.example.com",
      image: "/project-placeholder.jpg",
    },
    {
      title: "AI Chat Application",
      description:
        "Real-time chat application powered by AI with sentiment analysis, message encryption, and multi-user support. Includes features like chat history, file sharing, and customizable AI personalities.",
      tech: ["React", "Python", "OpenAI API", "WebSocket", "FastAPI"],
      github: "https://github.com",
      demo: "https://demo.example.com",
      image: "/project-placeholder.jpg",
    },
    {
      title: "Task Management System",
      description:
        "Collaborative task management tool with real-time updates, notifications, and team collaboration features. Includes project boards, time tracking, and comprehensive reporting.",
      tech: ["Next.js", "TypeScript", "MongoDB", "Socket.io", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://demo.example.com",
      image: "/project-placeholder.jpg",
    },
    {
      title: "Cloud Infrastructure Dashboard",
      description:
        "Monitoring and management dashboard for cloud infrastructure with real-time metrics, alerting, and automated scaling. Supports multiple cloud providers and custom integrations.",
      tech: ["React", "Node.js", "AWS", "Docker", "Grafana"],
      github: "https://github.com",
      demo: "https://demo.example.com",
      image: "/project-placeholder.jpg",
    },
    {
      title: "Machine Learning Model API",
      description:
        "RESTful API for serving machine learning models with automatic scaling, versioning, and A/B testing capabilities. Includes comprehensive documentation and monitoring.",
      tech: ["Python", "FastAPI", "TensorFlow", "Docker", "Kubernetes"],
      github: "https://github.com",
      demo: "https://demo.example.com",
      image: "/project-placeholder.jpg",
    },
    {
      title: "Social Media Analytics Platform",
      description:
        "Analytics platform for social media metrics with data visualization, sentiment analysis, and trend prediction. Features include custom reports and automated insights.",
      tech: ["Next.js", "Python", "PostgreSQL", "Chart.js", "Redis"],
      github: "https://github.com",
      demo: "https://demo.example.com",
      image: "/project-placeholder.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:px-6">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">Projects</h1>
        <p className="text-lg text-muted-foreground">
          A collection of projects showcasing my work in full-stack development,
          AI/ML, and cloud technologies.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg"
          >
            <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/40"></div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription className="line-clamp-3">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-2">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                </Link>
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="default" size="sm" className="w-full gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
