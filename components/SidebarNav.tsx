"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const sections = [
  { name: "Introduction", href: "#introduction" },
  { name: "Work Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Technical Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

export default function SidebarNav() {
  const pathname = usePathname();

  // Only show sidebar on home page
  if (pathname !== "/") {
    return null;
  }

  return (
    <aside className="fixed left-0 top-16 hidden h-[calc(100vh-4rem)] w-64 border-r border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:block">
      <nav className="p-6">
        <ul className="space-y-1">
          {sections.map((section) => (
            <li key={section.name} className="relative">
              <div className="absolute left-0 top-0 h-px w-8 bg-border"></div>
              <Link
                href={section.href}
                className={cn(
                  "block border-l-2 border-transparent py-2 pl-6 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                )}
              >
                {section.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
