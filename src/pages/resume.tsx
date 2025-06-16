import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Resume() {
  return (
    <Layout>
      <div className="space-y-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Resume</h1>

        <Card>
          <CardContent>
            <h2 className="text-lg font-semibold mb-2">Education</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">B.S. in Computer Science</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-lg font-semibold mb-2">Professional Experience</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Extensive background in automation and testing.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-lg font-semibold mb-2">Technical Skills</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Python, Unity, React, AI, automation</p>
          </CardContent>
        </Card>

        <Link href="/resume.pdf" download className="underline text-accent">
          Download Resume
        </Link>
      </div>
    </Layout>
  );
}
