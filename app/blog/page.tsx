import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Getting Started with Next.js 14",
      description:
        "A comprehensive guide to building modern web applications with Next.js 14, covering the App Router, Server Components, and best practices.",
      date: "2024-01-15",
      readTime: "5 min read",
      slug: "getting-started-with-nextjs-14",
      category: "Web Development",
    },
    {
      title: "Building Scalable APIs with Node.js",
      description:
        "Learn how to design and implement RESTful APIs that can handle millions of requests, with focus on performance, security, and maintainability.",
      date: "2024-01-10",
      readTime: "8 min read",
      slug: "building-scalable-apis-nodejs",
      category: "Backend Development",
    },
    {
      title: "Introduction to Machine Learning with Python",
      description:
        "An introduction to machine learning concepts and practical implementation using Python, TensorFlow, and real-world datasets.",
      date: "2024-01-05",
      readTime: "12 min read",
      slug: "introduction-machine-learning-python",
      category: "AI/ML",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:px-6">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">Blog</h1>
        <p className="text-lg text-muted-foreground">
          Thoughts, tutorials, and insights on software development, AI, and
          technology.
        </p>
      </div>

      <div className="space-y-6">
        {blogPosts.map((post, index) => (
          <Card key={index} className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="mb-2">
                <span className="rounded-md bg-primary/10 px-2 py-1 text-xs text-primary">
                  {post.category}
                </span>
              </div>
              <CardTitle className="text-2xl">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription className="text-base">
                {post.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground">More blog posts coming soon...</p>
      </div>
    </div>
  );
}
