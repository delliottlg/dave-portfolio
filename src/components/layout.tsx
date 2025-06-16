import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/80 border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-extralight tracking-tight text-white hover:text-gray-300 transition-colors duration-200">
            DE
          </Link>
          
          <div className="hidden md:flex items-center space-x-12">
            <Link href="/projects" className="text-sm font-light text-gray-400 hover:text-white transition-colors duration-200">
              Work
            </Link>
            <Link href="/research" className="text-sm font-light text-gray-400 hover:text-white transition-colors duration-200">
              Research
            </Link>
            <Link href="/blog" className="text-sm font-light text-gray-400 hover:text-white transition-colors duration-200">
              Insights
            </Link>
            <Link href="/contact" className="text-sm font-light text-gray-400 hover:text-white transition-colors duration-200">
              Contact
            </Link>
          </div>
          
          <Link href="/contact" className="hidden md:inline-flex items-center text-sm font-light text-white border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300">
            Let's Talk
          </Link>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
