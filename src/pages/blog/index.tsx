import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Blog() {
  return (
    <Layout>
      <div className="space-y-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Blog & Insights</h1>

        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold">How AI Boosted My Testing Workflow</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Jan 1, 2024</p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Using AI to automate repetitive QA tasks.
            </p>
            <Link href="#" className="underline text-accent">
              Read more -&gt;
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold">Building ChattyData: A Voice-Powered Python Assistant</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Feb 12, 2024</p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Lessons learned from creating a voice interface for data queries.
            </p>
            <Link href="#" className="underline text-accent">
              Read more -&gt;
            </Link>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
