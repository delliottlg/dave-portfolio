import Layout from "@/components/layout";
import TerminalDemo from "@/components/TerminalDemo";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Projects() {
  return (
    <Layout>
      <div className="space-y-6 max-w-4xl mx-auto">
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">Interactive CLI Demo</h2>
            <TerminalDemo />
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold">CloudSync Analytics Dashboard</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Real-time data visualization platform built with React and D3.js for monitoring cloud infrastructure metrics.
            </p>
            <Link href="#" className="underline text-accent">
              GitHub
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold">TaskFlow Pro</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              AI-powered project management tool with natural language processing for automated task categorization.
            </p>
            <Link href="#" className="underline text-accent">
              Live Demo
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold">SecureVault API</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              RESTful API service with end-to-end encryption for secure document storage and sharing.
            </p>
            <Link href="#" className="underline text-accent">
              Documentation
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold">DevMetrics CLI</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Command-line tool for tracking developer productivity metrics and generating team performance reports.
            </p>
            <Link href="#" className="underline text-accent">
              GitHub
            </Link>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
