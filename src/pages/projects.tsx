import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Projects() {
  return (
    <Layout>
      <main className="min-h-screen pt-32 pb-20">
        {/* Header */}
        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <p className="text-sm font-light tracking-[0.3em] text-gray-500 uppercase mb-4">Complete Portfolio</p>
            <h1 className="text-6xl md:text-7xl font-extralight text-white mb-6">Selected Work</h1>
            <p className="text-xl text-gray-400 font-light max-w-3xl">
              A curated collection of projects showcasing AI innovation, enterprise solutions, and technical excellence.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
            {/* Neural Analytics Platform */}
            <Link href="#" className="group cursor-pointer">
              <Card className="h-full transition-all duration-300 group-hover:-translate-y-1">
                <CardContent>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center">
                      <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-600">2024</span>
                  </div>
                  
                  <h3 className="text-3xl font-light text-white mb-4">Neural Analytics Platform</h3>
                  <p className="text-gray-400 font-light leading-relaxed mb-8">
                    Enterprise-scale ML pipeline processing 100M+ daily events. Reduced decision latency by 87% for Fortune 100 client. 
                    Built with TensorFlow, Kubernetes, and custom React dashboards.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="w-20 font-light">Client</span>
                      <span className="text-gray-400">Fortune 100 Financial Services</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="w-20 font-light">Impact</span>
                      <span className="text-gray-400">$12M annual savings</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="w-20 font-light">Stack</span>
                      <span className="text-gray-400">TensorFlow, K8s, React, Python</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-white group-hover:text-gray-300 transition-colors duration-300">
                    <span className="text-sm">View Case Study</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Quantum Language Model */}
            <Link href="#" className="group cursor-pointer">
              <Card className="h-full transition-all duration-300 group-hover:-translate-y-1">
                <CardContent>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center">
                      <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-600">2024</span>
                  </div>
                  
                  <h3 className="text-3xl font-light text-white mb-4">Quantum Language Model</h3>
                  <p className="text-gray-400 font-light leading-relaxed mb-8">
                    Next-generation NLP architecture achieving 94.2% accuracy on complex reasoning tasks. Patent pending. 
                    Breakthrough performance in multi-modal understanding.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="w-20 font-light">Type</span>
                      <span className="text-gray-400">Research & Development</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="w-20 font-light">Status</span>
                      <span className="text-gray-400">Patent Pending</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="w-20 font-light">Stack</span>
                      <span className="text-gray-400">PyTorch, CUDA, Rust, JAX</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-white group-hover:text-gray-300 transition-colors duration-300">
                    <span className="text-sm">Read Research Paper</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Zero-Trust Infrastructure */}
            <Link href="#" className="group cursor-pointer">
              <Card className="h-full transition-all duration-300 group-hover:-translate-y-1">
                <CardContent>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center">
                      <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-600">2023</span>
                  </div>
                  
                  <h3 className="text-3xl font-light text-white mb-4">Zero-Trust Infrastructure</h3>
                  <p className="text-gray-400 font-light leading-relaxed mb-8">
                    Military-grade security framework processing $2B+ in daily transactions. 99.999% uptime over 18 months. 
                    Blockchain-verified audit trail with quantum-resistant encryption.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="w-20 font-light">Client</span>
                      <span className="text-gray-400">Global Payment Processor</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="w-20 font-light">Scale</span>
                      <span className="text-gray-400">$2B+ daily volume</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="w-20 font-light">Stack</span>
                      <span className="text-gray-400">Go, Blockchain, AWS, HSM</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-white group-hover:text-gray-300 transition-colors duration-300">
                    <span className="text-sm">View Architecture</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Real-time Vision AI */}
            <Link href="#" className="group cursor-pointer">
              <Card className="h-full transition-all duration-300 group-hover:-translate-y-1">
                <CardContent>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center">
                      <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-600">2023</span>
                  </div>
                  
                  <h3 className="text-3xl font-light text-white mb-4">Real-time Vision AI</h3>
                  <p className="text-gray-400 font-light leading-relaxed mb-8">
                    Edge computing solution for autonomous systems. Sub-10ms inference on embedded hardware. 
                    Deployed across 10,000+ devices with OTA update capabilities.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="w-20 font-light">Client</span>
                      <span className="text-gray-400">Automotive OEM</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="w-20 font-light">Performance</span>
                      <span className="text-gray-400">Sub-10ms latency</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="w-20 font-light">Stack</span>
                      <span className="text-gray-400">C++, CUDA, TensorRT, OpenCV</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-white group-hover:text-gray-300 transition-colors duration-300">
                    <span className="text-sm">View Demo</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Additional Projects */}
            <Link href="#" className="group cursor-pointer">
              <Card className="h-full transition-all duration-300 group-hover:-translate-y-1">
                <CardContent>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 flex items-center justify-center">
                      <svg className="w-7 h-7 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-600">2023</span>
                  </div>
                  
                  <h3 className="text-3xl font-light text-white mb-4">AI Operations Platform</h3>
                  <p className="text-gray-400 font-light leading-relaxed mb-8">
                    Unified MLOps platform managing 200+ models in production. Automated retraining, 
                    A/B testing, and performance monitoring at scale.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="w-20 font-light">Client</span>
                      <span className="text-gray-400">Tech Unicorn</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="w-20 font-light">Scale</span>
                      <span className="text-gray-400">200+ models</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="w-20 font-light">Stack</span>
                      <span className="text-gray-400">Kubeflow, MLflow, Airflow</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-white group-hover:text-gray-300 transition-colors duration-300">
                    <span className="text-sm">Explore Platform</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Voice Intelligence Suite */}
            <Link href="#" className="group cursor-pointer">
              <Card className="h-full transition-all duration-300 group-hover:-translate-y-1">
                <CardContent>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 flex items-center justify-center">
                      <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-600">2022</span>
                  </div>
                  
                  <h3 className="text-3xl font-light text-white mb-4">Voice Intelligence Suite</h3>
                  <p className="text-gray-400 font-light leading-relaxed mb-8">
                    Real-time transcription and sentiment analysis for call centers. Processing 1M+ calls daily 
                    with 98.5% accuracy across 12 languages.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="w-20 font-light">Client</span>
                      <span className="text-gray-400">Global Contact Center</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="w-20 font-light">Volume</span>
                      <span className="text-gray-400">1M+ calls/day</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="w-20 font-light">Stack</span>
                      <span className="text-gray-400">Whisper, BERT, Redis, Go</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-white group-hover:text-gray-300 transition-colors duration-300">
                    <span className="text-sm">View Results</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="px-6 pt-32">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extralight text-white mb-6">
              Have a project in mind?
            </h2>
            <p className="text-lg text-gray-400 font-light mb-8">
              Let's discuss how we can work together to bring your vision to life.
            </p>
            <Link href="/contact" className="inline-flex items-center text-white hover:text-gray-300 transition-colors duration-300">
              Start a Conversation
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
