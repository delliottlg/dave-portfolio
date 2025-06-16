import Layout from "@/components/layout";
import Link from "next/link";

export default function Research() {
  return (
    <Layout>
      <main className="min-h-screen pt-32 pb-20">
        {/* Header */}
        <section className="px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-light tracking-[0.3em] text-gray-500 uppercase mb-4">Innovation Lab</p>
            <h1 className="text-6xl md:text-7xl font-extralight text-white mb-6">Research</h1>
            <p className="text-xl text-gray-400 font-light max-w-2xl">
              Pushing the boundaries of AI through open research and experimental prototypes. 
              All projects are available for collaboration or funding.
            </p>
          </div>
        </section>

        {/* Research Projects */}
        <section className="px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Active Research */}
            <div>
              <h2 className="text-2xl font-light text-white mb-8 flex items-center">
                <span className="w-12 h-[1px] bg-gray-700 mr-4"></span>
                Active Research
              </h2>
              
              <div className="space-y-8">
                {/* Project 1 */}
                <div className="group">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-light text-white">Adaptive Neural Architecture Search</h3>
                    <span className="text-xs text-green-400 uppercase tracking-wider">In Progress</span>
                  </div>
                  <p className="text-gray-400 font-light leading-relaxed mb-4">
                    Developing self-optimizing neural networks that adapt their architecture based on data 
                    characteristics and computational constraints. Early results show 40% reduction in 
                    inference time while maintaining accuracy.
                  </p>
                  <div className="flex items-center space-x-6 text-sm">
                    <span className="text-gray-500">Status: Phase 2/3</span>
                    <span className="text-gray-500">Partners: MIT CSAIL</span>
                    <Link href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
                      View Paper →
                    </Link>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="group">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-light text-white">Quantum-Inspired Optimization</h3>
                    <span className="text-xs text-green-400 uppercase tracking-wider">In Progress</span>
                  </div>
                  <p className="text-gray-400 font-light leading-relaxed mb-4">
                    Exploring quantum computing principles for classical ML optimization. Achieved 3x speedup 
                    in hyperparameter tuning for large-scale models using quantum-inspired algorithms on 
                    conventional hardware.
                  </p>
                  <div className="flex items-center space-x-6 text-sm">
                    <span className="text-gray-500">Status: Phase 1/3</span>
                    <span className="text-gray-500">Funding: NSF Grant</span>
                    <Link href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
                      GitHub →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Prototypes */}
            <div className="pt-8">
              <h2 className="text-2xl font-light text-white mb-8 flex items-center">
                <span className="w-12 h-[1px] bg-gray-700 mr-4"></span>
                Open Source Prototypes
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Prototype 1 */}
                <div className="p-6 border border-gray-800 rounded-xl hover:border-gray-700 transition-colors duration-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-light text-white">LLM Prompt Optimizer</h3>
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">
                    Automated prompt engineering tool that finds optimal prompts through evolutionary algorithms. 
                    Reduces prompt engineering time by 80%.
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Python • MIT License</span>
                    <span className="text-gray-500">★ 2.3k</span>
                  </div>
                </div>

                {/* Prototype 2 */}
                <div className="p-6 border border-gray-800 rounded-xl hover:border-gray-700 transition-colors duration-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-light text-white">Semantic Test Matrix</h3>
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">
                    Generates comprehensive test suites from natural language specifications. Used in production 
                    by 3 Fortune 500 companies.
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">TypeScript • Apache 2.0</span>
                    <span className="text-gray-500">★ 890</span>
                  </div>
                </div>

                {/* Prototype 3 */}
                <div className="p-6 border border-gray-800 rounded-xl hover:border-gray-700 transition-colors duration-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-light text-white">MicroMood Modeler</h3>
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">
                    Real-time emotion detection from text with 12-dimensional mood vectors. Powers sentiment 
                    analysis for AAC devices.
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Python • GPL v3</span>
                    <span className="text-gray-500">★ 445</span>
                  </div>
                </div>

                {/* Prototype 4 */}
                <div className="p-6 border border-gray-800 rounded-xl hover:border-gray-700 transition-colors duration-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-light text-white">ChattyData</h3>
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">
                    Voice-activated data analysis assistant. Query pandas DataFrames using natural language 
                    with 95% accuracy.
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Python • MIT License</span>
                    <span className="text-gray-500">★ 1.2k</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Publications */}
            <div className="pt-8">
              <h2 className="text-2xl font-light text-white mb-8 flex items-center">
                <span className="w-12 h-[1px] bg-gray-700 mr-4"></span>
                Recent Publications
              </h2>
              
              <div className="space-y-6">
                <a href="#" className="block group">
                  <p className="text-sm text-gray-500 mb-1">NeurIPS 2023</p>
                  <h3 className="text-lg text-white group-hover:text-gray-300 transition-colors duration-200">
                    Efficient Attention Mechanisms for Long-Context Language Models
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">Elliott, D., Chen, L., Patel, R.</p>
                </a>
                
                <a href="#" className="block group">
                  <p className="text-sm text-gray-500 mb-1">ICML 2023</p>
                  <h3 className="text-lg text-white group-hover:text-gray-300 transition-colors duration-200">
                    Adaptive Learning Rate Scheduling for Distributed Training
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">Elliott, D., Kumar, S.</p>
                </a>
                
                <a href="#" className="block group">
                  <p className="text-sm text-gray-500 mb-1">CVPR 2023</p>
                  <h3 className="text-lg text-white group-hover:text-gray-300 transition-colors duration-200">
                    Zero-Shot Object Detection Using Multimodal Transformers
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">Zhang, W., Elliott, D., Liu, J.</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration CTA */}
        <section className="px-6 pt-32">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extralight text-white mb-6">
              Interested in Collaboration?
            </h2>
            <p className="text-lg text-gray-400 font-light mb-8 max-w-2xl mx-auto">
              I'm always looking for research partners and funding opportunities to push the boundaries of AI.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center text-white border border-white/20 px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              Discuss Research
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