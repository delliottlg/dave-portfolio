import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 flex items-center justify-between">
        <nav className="space-x-4">
          <Button asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/projects">Projects</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/research">Research</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/resume">Resume</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/blog">Blog</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/contact">Contact</Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1 p-6 md:p-12 lg:p-24">{children}</main>
    </div>
  );
}
