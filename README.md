# Sithara Pitiyage - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- **Home Page** with comprehensive bio sections:

  - Introduction with profile and social links
  - Work Experience
  - Education
  - Technical Skills
  - Featured Projects

- **Projects Page** showcasing portfolio projects with details and links

- **Blog Page** structure ready for future blog posts

- **Dark Theme** with modern, clean design

- **Responsive Design** that works on all devices

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **Lucide React** - Beautiful icon library

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── blog/          # Blog pages
│   ├── projects/      # Projects page
│   ├── layout.tsx     # Root layout
│   ├── page.tsx       # Home page
│   └── globals.css    # Global styles
├── components/
│   ├── ui/            # shadcn/ui components
│   └── Header.tsx     # Navigation header
└── lib/
    └── utils.ts       # Utility functions
```

## Customization

### Update Personal Information

Edit the content in `app/page.tsx` to update:

- Name, title, and bio
- Work experience
- Education
- Skills
- Projects

### Update Social Links

Modify the `socialLinks` array in `app/page.tsx` with your actual social media profiles.

### Add Blog Posts

Blog posts can be added to the `blogPosts` object in `app/blog/[slug]/page.tsx` or integrated with a CMS like Contentful, Sanity, or markdown files.

## Build for Production

```bash
npm run build
npm start
```

## License

MIT
