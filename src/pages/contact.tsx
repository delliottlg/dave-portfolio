import Layout from "@/components/layout";
import Link from "next/link";

export default function Contact() {
  return (
    <Layout>
      <main className="min-h-screen pt-32 pb-20">
        {/* Header */}
        <section className="px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-light tracking-[0.3em] text-gray-500 uppercase mb-4">Get in Touch</p>
            <h1 className="text-6xl md:text-7xl font-extralight text-white mb-6">Let's Connect</h1>
            <p className="text-xl text-gray-400 font-light max-w-2xl">
              Ready to transform your business with AI? I'm available for consulting, 
              advisory roles, and strategic partnerships.
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Direct Contact */}
            <div>
              <h2 className="text-2xl font-light text-white mb-8">Direct Contact</h2>
              
              <div className="space-y-6">
                <a href="mailto:consulting@daveelliott.ai" className="group block">
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <p className="text-lg text-white group-hover:text-gray-300 transition-colors duration-200">
                    consulting@daveelliott.ai
                  </p>
                </a>
                
                <a href="https://linkedin.com/in/daveelliott" target="_blank" rel="noopener noreferrer" className="group block">
                  <p className="text-sm text-gray-500 mb-1">LinkedIn</p>
                  <p className="text-lg text-white group-hover:text-gray-300 transition-colors duration-200">
                    /in/daveelliott
                  </p>
                </a>
                
                <div>
                  <p className="text-sm text-gray-500 mb-1">Location</p>
                  <p className="text-lg text-white">
                    San Francisco, CA
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    Available for remote & on-site engagements globally
                  </p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-2xl font-light text-white mb-8">How I Can Help</h2>
              
              <div className="space-y-4">
                <div className="p-4 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors duration-200">
                  <h3 className="text-white font-light mb-1">Technical Advisory</h3>
                  <p className="text-sm text-gray-400">Strategic guidance on AI/ML initiatives and architecture</p>
                </div>
                
                <div className="p-4 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors duration-200">
                  <h3 className="text-white font-light mb-1">Implementation</h3>
                  <p className="text-sm text-gray-400">Hands-on development of production AI systems</p>
                </div>
                
                <div className="p-4 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors duration-200">
                  <h3 className="text-white font-light mb-1">Team Augmentation</h3>
                  <p className="text-sm text-gray-400">Interim CTO/technical leadership for scaling teams</p>
                </div>
                
                <div className="p-4 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors duration-200">
                  <h3 className="text-white font-light mb-1">Speaking & Workshops</h3>
                  <p className="text-sm text-gray-400">Keynotes and training on AI innovation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Response Time */}
        <section className="px-6 pt-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-green-400 mt-2 animate-pulse"></div>
                <div>
                  <h3 className="text-lg font-light text-white mb-2">Currently Available</h3>
                  <p className="text-gray-400 font-light">
                    I typically respond within 24 hours. For urgent matters, please mention it in your subject line.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pt-32">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extralight text-white mb-6">
              Ready to innovate?
            </h2>
            <p className="text-lg text-gray-400 font-light mb-8 max-w-2xl mx-auto">
              Let's discuss how AI can transform your business and create competitive advantages.
            </p>
            <a 
              href="mailto:consulting@daveelliott.ai" 
              className="inline-flex items-center text-white border border-white/20 px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              Send me an email
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
