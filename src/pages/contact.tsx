import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Contact() {
  return (
    <Layout>
      <div className="space-y-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Contact</h1>

        <Card>
          <CardContent>
            <p className="mb-4">I&apos;d love to hear from you!</p>
            <ul className="space-y-2">
              <li>
                <Link href="mailto:elliott2081@gmail.com" className="underline text-accent">
                  Email
                </Link>
              </li>
              <li>
                <Link href="https://github.com/" className="underline text-accent">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/" className="underline text-accent">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
