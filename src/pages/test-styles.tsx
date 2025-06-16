import { Card } from "@/components/ui/card";

export default function TestStyles() {
  return (
    <main className="min-h-screen p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold">Style Test Page</h1>
        
        <section>
          <h2 className="text-2xl mb-4">Glass Cards</h2>
          <div className="grid gap-4">
            <Card>
              <h3 className="text-xl mb-2">Default Card</h3>
              <p>This uses the default Card component styling.</p>
            </Card>
            
            <div className="glass rounded-xl p-6">
              <h3 className="text-xl mb-2">Glass Utility</h3>
              <p>This uses the custom .glass utility class.</p>
            </div>
            
            <div className="backdrop-blur-md bg-white/10 dark:bg-white/5 border border-gray-200 dark:border-card-border rounded-xl shadow-lg p-6">
              <h3 className="text-xl mb-2">Manual Glass</h3>
              <p>This uses individual Tailwind classes.</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl mb-4">Colors</h2>
          <div className="space-y-2">
            <div className="p-4 bg-accent text-black rounded">Accent Color</div>
            <div className="p-4 bg-code-bg text-white rounded">Code Background</div>
            <div className="p-4 border-2 border-card-border rounded">Card Border</div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl mb-4">Typography</h2>
          <p className="font-mono">This should be in JetBrains Mono font.</p>
          <pre><code>Code block test</code></pre>
        </section>
      </div>
    </main>
  );
}