import { notFound } from "next/navigation";
import { Calendar, Clock } from "lucide-react";

// This would typically fetch from a CMS or markdown files
const blogPosts: Record<
  string,
  {
    title: string;
    content: string;
    date: string;
    readTime: string;
    category: string;
  }
> = {
  "getting-started-with-nextjs-14": {
    title: "Getting Started with Next.js 14",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Web Development",
    content: `
# Getting Started with Next.js 14

Next.js 14 introduces exciting new features that make building modern web applications easier and more efficient. In this guide, we'll explore the key concepts and get you started on your journey.

## What's New in Next.js 14

The App Router has been significantly improved, offering better performance and developer experience. Server Components are now the default, allowing you to build faster applications with less JavaScript.

## Getting Started

To create a new Next.js 14 project, run:

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

This will set up a new project with all the latest features and best practices.

## Key Features

- **App Router**: The new routing system that makes navigation intuitive
- **Server Components**: Reduce client-side JavaScript and improve performance
- **Turbopack**: Faster bundling for development
- **Improved TypeScript Support**: Better type safety and developer experience

## Conclusion

Next.js 14 is a powerful framework that makes building modern web applications a joy. Start building today!
    `,
  },
  "building-scalable-apis-nodejs": {
    title: "Building Scalable APIs with Node.js",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "Backend Development",
    content: `
# Building Scalable APIs with Node.js

Building APIs that can handle millions of requests requires careful planning and implementation. Let's explore the key principles.

## Architecture Principles

Scalable APIs need to be stateless, cacheable, and designed with horizontal scaling in mind.

## Performance Optimization

- Use connection pooling
- Implement caching strategies
- Optimize database queries
- Use load balancing

## Security Best Practices

Always validate input, use HTTPS, implement rate limiting, and follow OWASP guidelines.
    `,
  },
  "introduction-machine-learning-python": {
    title: "Introduction to Machine Learning with Python",
    date: "2024-01-05",
    readTime: "12 min read",
    category: "AI/ML",
    content: `
# Introduction to Machine Learning with Python

Machine learning is transforming how we solve complex problems. This guide will introduce you to the fundamentals.

## What is Machine Learning?

Machine learning is a subset of artificial intelligence that enables systems to learn and improve from experience.

## Getting Started with TensorFlow

TensorFlow is one of the most popular frameworks for building ML models. Let's create a simple model.
    `,
  },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 md:px-6">
      <article className="prose prose-invert max-w-none">
        <div className="mb-8">
          <span className="rounded-md bg-primary/10 px-2 py-1 text-sm text-primary">
            {post.category}
          </span>
          <h1 className="mt-4 text-4xl font-bold">{post.title}</h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
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
        </div>
        <div className="whitespace-pre-wrap text-foreground">
          {post.content}
        </div>
      </article>
    </div>
  );
}
