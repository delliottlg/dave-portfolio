import Layout from "@/components/layout";
import Link from "next/link";

export default function Blog() {
  return (
    <Layout>
      <main className="min-h-screen pt-32 pb-20">
        {/* Header */}
        <section className="px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-light tracking-[0.3em] text-gray-500 uppercase mb-4">Insights</p>
            <h1 className="text-6xl md:text-7xl font-extralight text-white mb-6">Thoughts on AI</h1>
            <p className="text-xl text-gray-400 font-light max-w-2xl">
              Exploring the intersection of artificial intelligence, engineering excellence, 
              and business transformation.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Post 1 */}
            <article className="group cursor-pointer">
              <Link href="#">
                <div className="border-t border-gray-900 pt-8">
                  <div className="flex items-start justify-between mb-4">
                    <p className="text-sm text-gray-500">March 15, 2024</p>
                    <span className="text-xs text-gray-600 uppercase tracking-wider">AI Architecture</span>
                  </div>
                  
                  <h2 className="text-3xl font-light text-white mb-4 group-hover:text-gray-300 transition-colors duration-200">
                    Building Production-Ready LLM Systems at Scale
                  </h2>
                  
                  <p className="text-gray-400 font-light leading-relaxed mb-6">
                    A deep dive into architecting enterprise LLM applications that handle millions of requests daily. 
                    Learn how to design for reliability, implement effective caching strategies, and optimize for cost 
                    without sacrificing performance.
                  </p>
                  
                  <div className="flex items-center text-white group-hover:text-gray-300 transition-colors duration-200">
                    <span className="text-sm">Read article</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </article>

            {/* Post 2 */}
            <article className="group cursor-pointer">
              <Link href="#">
                <div className="border-t border-gray-900 pt-8">
                  <div className="flex items-start justify-between mb-4">
                    <p className="text-sm text-gray-500">February 28, 2024</p>
                    <span className="text-xs text-gray-600 uppercase tracking-wider">Machine Learning</span>
                  </div>
                  
                  <h2 className="text-3xl font-light text-white mb-4 group-hover:text-gray-300 transition-colors duration-200">
                    The Hidden Costs of ML Technical Debt
                  </h2>
                  
                  <p className="text-gray-400 font-light leading-relaxed mb-6">
                    Why most ML projects fail in production and how to avoid common pitfalls. Based on experience 
                    deploying 200+ models, I share practical strategies for building maintainable ML systems that 
                    deliver long-term value.
                  </p>
                  
                  <div className="flex items-center text-white group-hover:text-gray-300 transition-colors duration-200">
                    <span className="text-sm">Read article</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </article>

            {/* Post 3 */}
            <article className="group cursor-pointer">
              <Link href="#">
                <div className="border-t border-gray-900 pt-8">
                  <div className="flex items-start justify-between mb-4">
                    <p className="text-sm text-gray-500">January 15, 2024</p>
                    <span className="text-xs text-gray-600 uppercase tracking-wider">Edge Computing</span>
                  </div>
                  
                  <h2 className="text-3xl font-light text-white mb-4 group-hover:text-gray-300 transition-colors duration-200">
                    Real-time AI: Achieving Sub-10ms Inference on Edge
                  </h2>
                  
                  <p className="text-gray-400 font-light leading-relaxed mb-6">
                    Exploring techniques for deploying neural networks on resource-constrained devices. From model 
                    quantization to custom CUDA kernels, learn how we achieved real-time performance for autonomous 
                    systems.
                  </p>
                  
                  <div className="flex items-center text-white group-hover:text-gray-300 transition-colors duration-200">
                    <span className="text-sm">Read article</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </article>

            {/* Post 4 */}
            <article className="group cursor-pointer">
              <Link href="#">
                <div className="border-t border-gray-900 pt-8">
                  <div className="flex items-start justify-between mb-4">
                    <p className="text-sm text-gray-500">December 10, 2023</p>
                    <span className="text-xs text-gray-600 uppercase tracking-wider">Leadership</span>
                  </div>
                  
                  <h2 className="text-3xl font-light text-white mb-4 group-hover:text-gray-300 transition-colors duration-200">
                    Leading AI Teams: Bridging Research and Production
                  </h2>
                  
                  <p className="text-gray-400 font-light leading-relaxed mb-6">
                    Lessons learned from building and scaling AI teams at Fortune 500 companies. How to create a 
                    culture that balances innovation with delivery, and strategies for translating cutting-edge 
                    research into business value.
                  </p>
                  
                  <div className="flex items-center text-white group-hover:text-gray-300 transition-colors duration-200">
                    <span className="text-sm">Read article</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </article>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="px-6 pt-32">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-2xl p-12 border border-gray-800 text-center">
              <h2 className="text-3xl font-light text-white mb-4">Stay Updated</h2>
              <p className="text-gray-400 font-light mb-8 max-w-2xl mx-auto">
                Get insights on AI engineering, leadership, and innovation delivered to your inbox.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center text-white border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export const getStaticProps = async () => {
  return {
    props: {},
  };
};