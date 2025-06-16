// Dave Elliott Portfolio - Next.js with TypeScript structure

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
    <main className="relative z-10 min-h-screen p-6 md:p-12 lg:p-24">
      <section className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold">Hi, I&apos;m Dave Elliott</h1>
        <p className="text-lg">
          Developer and technologist focused on automation, AI, and accessible technology. I build tools that help people communicate and organizations move faster.
        </p>
        <div className="flex space-x-4">
          <Link href="/projects">
            <Button>View My Work</Button>
          </Link>
          <Link href="/contact">
            <Button variant="secondary">Contact Me</Button>
          </Link>
        </div>
      </section>

      <section className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">AAC Test Automation Suite</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Unity-based regression test system for augmentative communication devices. Includes both manual and automated flows.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">QA Test Management App</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Simple, human-readable web interface for tracking and executing QA tests. Built with Flask and deployed on Vercel.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">Unity VR AAC Interface</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                A prototype communication interface for VR headsets, exploring spatial card interactions and text-to-speech in immersive environments.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">Smart Glasses Companion</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                A small AI-powered companion app for wearable displays, designed to assist with reminders, context-aware suggestions, and journaling.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mt-24 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">How I Can Help</h2>
        <p className="text-lg text-gray-800 dark:text-gray-200">
          Whether you&apos;re a small business looking to modernize or a larger org seeking efficient ways to scale, I can help you:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Automate repetitive tasks using AI and scripts to save time and reduce errors</li>
          <li>Prototype new app ideas, including mobile, web, or Unity-based experiences</li>
          <li>Design and run automated testing systems to improve software quality</li>
          <li>Create videos or interactive demos to showcase your products and workflows</li>
          <li>Use digital tools to streamline communication, training, or onboarding</li>
        </ul>
        <p className="mt-4 text-gray-800 dark:text-gray-200">
          Let&apos;s talk about how smart tools and thoughtful design can expand your business.
        </p>
      </section>

      <section className="mt-24 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">AI + Software Testing</h2>
        <p className="text-lg text-gray-800 dark:text-gray-200">
          I specialize in using AI and automation to improve the software development lifecycle:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Auto-generating tests from user stories using language models</li>
          <li>Building smarter test runners with helpful UI and logic</li>
          <li>Integrating AI into QA workflows to speed up feedback loops</li>
          <li>Reducing regression risk with intelligent, adaptive test suites</li>
        </ul>
        <p className="mt-4 text-gray-800 dark:text-gray-200">
          I&apos;ve helped teams build better products faster by combining traditional software testing with the emerging power of AI. Ask me how.
        </p>
      </section>

      <section className="mt-24 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Research & Experiments</h2>
        <p className="text-lg text-gray-800 dark:text-gray-200">
          I like to experiment with emerging technologies and publish working prototypes when possible. A few data science and AI prototypes currently in the works:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 dark:text-gray-300">
          <li><strong>LLM Prompt Optimizer:</strong> Python script that runs performance benchmarks across multiple model providers for phrase prediction</li>
          <li><strong>Semantic Test Matrix Generator:</strong> Tool that outputs test combinations for NLP outputs using configurable JSON schemas</li>
          <li><strong>Micro-Mood Modeler:</strong> Uses AI to analyze tone from short input phrases to guide AAC suggestions and emotional nuance</li>
          <li><strong>ChattyData:</strong> Lightweight voice-activated assistant for running simple pandas or numpy-based data queries out loud</li>
        </ul>
        <p className="mt-4 text-gray-800 dark:text-gray-200">
          These are all real prototypes in various stages — some already work, some just need love. Reach out if you&apos;re interested in collaborating or funding fun ideas.
        </p>
      </section>
    </main>
    </Layout>
  );
}
