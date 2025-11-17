"use client";

import { Github, Linkedin, Mail, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "Email", icon: Mail, href: "mailto:your.email@example.com" },
  ];

  const experiences = [
    {
      company: "Tech Company",
      role: "Senior Full Stack Developer",
      period: "2022 - Present",
      achievements: [
        "Led development of scalable web applications using React, Node.js, and cloud technologies",
        "Implemented CI/CD pipelines reducing deployment time by 40%",
        "Mentored junior developers and established coding best practices",
      ],
    },
    {
      company: "Startup Inc",
      role: "Full Stack Developer",
      period: "2020 - 2022",
      achievements: [
        "Built and maintained multiple client-facing applications",
        "Optimized database queries improving application performance by 35%",
        "Collaborated with cross-functional teams to deliver features on time",
      ],
    },
  ];

  const education = [
    {
      institution: "University Name",
      degree: "Bachelor of Science in Computer Engineering",
      period: "2016 - 2020",
      description:
        "Specialized in Software Engineering and Artificial Intelligence",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Python", "REST APIs", "GraphQL"],
    },
    {
      category: "Database",
      items: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
    },
    { category: "DevOps", items: ["Docker", "AWS", "CI/CD", "Git", "Linux"] },
    {
      category: "AI/ML",
      items: ["TensorFlow", "PyTorch", "OpenAI API", "Machine Learning"],
    },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration and admin dashboard",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      link: "#",
    },
    {
      title: "AI Chat Application",
      description:
        "Real-time chat application with AI-powered responses and sentiment analysis",
      tech: ["React", "Python", "OpenAI API", "WebSocket"],
      link: "#",
    },
    {
      title: "Task Management System",
      description:
        "Collaborative task management tool with real-time updates and notifications",
      tech: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
      link: "#",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
      {/* Introduction Section */}
      <section id="introduction" className="mb-16 scroll-mt-20">
        <div className="flex flex-col gap-8 md:flex-row md:items-start">
          <div className="flex-shrink-0">
            <div className="h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 p-1">
              <div className="h-full w-full rounded-full bg-background"></div>
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  America/Toronto
                </span>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    English
                  </Button>
                  <Button variant="ghost" size="sm">
                    Sinhala
                  </Button>
                </div>
              </div>
              <Button className="gap-2">
                <Calendar className="h-4 w-4" />
                Schedule a call
              </Button>
            </div>

            <div>
              <h1 className="text-4xl font-bold md:text-5xl">
                Sithara Pitiyage
              </h1>
              <p className="mt-2 text-xl text-muted-foreground">
                Computer Engineer | Full Stack Developer | AI Engineer
              </p>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Icon className="h-5 w-5" />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>

            <p className="max-w-2xl text-muted-foreground">
              Sithara is a Toronto-based computer engineer with a passion for
              transforming complex challenges into elegant software solutions.
              With expertise spanning full-stack development, artificial
              intelligence, and cloud technologies, Sithara brings innovative
              ideas to life through clean code and thoughtful design.
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="mb-16 scroll-mt-20">
        <h2 className="mb-8 text-3xl font-bold">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle>{exp.company}</CardTitle>
                    <CardDescription className="text-primary">
                      {exp.role}
                    </CardDescription>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-5">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-muted-foreground">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="mb-16 scroll-mt-20">
        <h2 className="mb-8 text-3xl font-bold">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle>{edu.institution}</CardTitle>
                    <CardDescription>{edu.degree}</CardDescription>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {edu.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mb-16 scroll-mt-20">
        <h2 className="mb-8 text-3xl font-bold">Technical Skills</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{skill.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="rounded-md bg-primary/10 px-3 py-1 text-sm text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-16 scroll-mt-20">
        <h2 className="mb-8 text-3xl font-bold">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link href={project.link}>
                  <Button variant="outline" size="sm" className="w-full">
                    View Project
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
