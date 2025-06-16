import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";

export default function Research() {
  return (
    <Layout>
      <div className="space-y-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Research & Experiments</h1>

        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold">LLM Prompt Optimizer</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Benchmark tool for language model prompts.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold">Semantic Test Matrix Generator</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Generates test combinations from JSON schemas.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold">Micro-Mood Modeler</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Analyzes tone of short phrases. (Coming Soon)
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold">ChattyData</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Voice-powered data assistant. (Coming Soon)
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
