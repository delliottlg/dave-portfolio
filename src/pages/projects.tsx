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
            <h3 className="text-lg font-semibold">AAC Test Automation Suite</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Unity-based regression test system for AAC devices.
            </p>
            <Link href="#" className="underline text-accent">
              GitHub
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold">Unity VR AAC Interface</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Prototype VR communication interface.
            </p>
            <Link href="#" className="underline text-accent">
              Demo
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold">Smart Glasses Companion</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              AI-powered companion app for wearable displays.
            </p>
            <Link href="#" className="underline text-accent">
              GitHub
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold">QA Test Management App</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Web interface for tracking QA tests.
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
