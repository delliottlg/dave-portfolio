// Dave Elliott Portfolio - Next.js with TypeScript structure

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <main className="relative z-10 min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="space-y-8">
            {/* Premium subtitle */}
            <p className="text-sm font-light tracking-[0.3em] text-gray-500 uppercase">
              Full Stack Developer & Software Engineer
            </p>
            
            {/* Main title with premium typography */}
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-extralight tracking-tight">
              <span className="block text-white">Dave</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">Elliott</span>
            </h1>
            
            {/* Sophisticated tagline */}
            <p className="text-xl md:text-2xl font-light text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Building modern web applications with clean code and thoughtful design. 
              <span className="block mt-2 text-lg text-gray-500">
                Passionate about creating intuitive user experiences and scalable solutions.
              </span>
            </p>
            
            {/* Premium CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <Link href="/projects" className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                <button className="relative px-8 py-4 bg-black border border-gray-800 rounded-lg leading-none flex items-center">
                  <span className="text-gray-300 group-hover:text-white transition duration-200">View Portfolio</span>
                  <svg className="w-4 h-4 ml-2 text-gray-500 group-hover:text-white transition duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
              <Link href="/contact" className="text-gray-500 hover:text-white transition duration-200 px-8 py-4">
                Schedule Consultation →
              </Link>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-600">
            <div className="animate-bounce">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="text-sm font-light tracking-[0.3em] text-gray-500 uppercase mb-4">Selected Work</p>
            <h2 className="text-5xl md:text-6xl font-extralight text-white">Featured Projects</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Project 1 */}
            <Link href="#" className="group cursor-pointer">
              <Card className="h-full transition-transform duration-300 group-hover:-translate-y-1">
                <CardContent>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-600">2024</span>
                  </div>
                  
                  <h3 className="text-2xl font-light text-white mb-3">E-Commerce Dashboard</h3>
                  <p className="text-gray-400 font-light leading-relaxed mb-6">
                    Full-stack analytics dashboard for online retailers. Real-time sales tracking and inventory management.
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      <span className="text-xs text-gray-600">React</span>
                      <span className="text-xs text-gray-600">Node.js</span>
                      <span className="text-xs text-gray-600">MongoDB</span>
                    </div>
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Project 2 */}
            <Link href="#" className="group cursor-pointer">
              <Card className="h-full transition-transform duration-300 group-hover:-translate-y-1">
                <CardContent>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-600">2024</span>
                  </div>
                  
                  <h3 className="text-2xl font-light text-white mb-3">Task Management App</h3>
                  <p className="text-gray-400 font-light leading-relaxed mb-6">
                    Collaborative project management tool with real-time updates and team communication features.
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      <span className="text-xs text-gray-600">Next.js</span>
                      <span className="text-xs text-gray-600">PostgreSQL</span>
                      <span className="text-xs text-gray-600">TypeScript</span>
                    </div>
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Project 3 */}
            <Link href="#" className="group cursor-pointer">
              <Card className="h-full transition-transform duration-300 group-hover:-translate-y-1">
                <CardContent>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-600">2023</span>
                  </div>
                  
                  <h3 className="text-2xl font-light text-white mb-3">Weather Forecast App</h3>
                  <p className="text-gray-400 font-light leading-relaxed mb-6">
                    Clean, modern weather application with location-based forecasts and interactive weather maps.
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      <span className="text-xs text-gray-600">React</span>
                      <span className="text-xs text-gray-600">API Integration</span>
                      <span className="text-xs text-gray-600">Tailwind</span>
                    </div>
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Project 4 */}
            <Link href="#" className="group cursor-pointer">
              <Card className="h-full transition-transform duration-300 group-hover:-translate-y-1">
                <CardContent>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-600">2023</span>
                  </div>
                  
                  <h3 className="text-2xl font-light text-white mb-3">Blog Platform</h3>
                  <p className="text-gray-400 font-light leading-relaxed mb-6">
                    Modern blogging platform with markdown support, SEO optimization, and responsive design.
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      <span className="text-xs text-gray-600">Next.js</span>
                      <span className="text-xs text-gray-600">MDX</span>
                      <span className="text-xs text-gray-600">Vercel</span>
                    </div>
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-black via-gray-950/50 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-sm font-light tracking-[0.3em] text-gray-500 uppercase mb-4">Services</p>
            <h2 className="text-5xl md:text-6xl font-extralight text-white mb-12">What I Offer</h2>
            
            <div className="space-y-16">
              <div className="group">
                <h3 className="text-2xl font-light text-white mb-4 flex items-center">
                  <span className="w-8 h-[1px] bg-gray-700 mr-4"></span>
                  Full Stack Development
                </h3>
                <p className="text-gray-400 font-light leading-relaxed ml-12">
                  End-to-end web application development using modern frameworks and best practices. 
                  From responsive frontends to scalable backends, I build solutions that work.
                </p>
              </div>
              
              <div className="group">
                <h3 className="text-2xl font-light text-white mb-4 flex items-center">
                  <span className="w-8 h-[1px] bg-gray-700 mr-4"></span>
                  UI/UX Design
                </h3>
                <p className="text-gray-400 font-light leading-relaxed ml-12">
                  Creating intuitive and visually appealing user interfaces. Focus on usability, 
                  accessibility, and modern design principles to enhance user experience.
                </p>
              </div>
              
              <div className="group">
                <h3 className="text-2xl font-light text-white mb-4 flex items-center">
                  <span className="w-8 h-[1px] bg-gray-700 mr-4"></span>
                  API Development
                </h3>
                <p className="text-gray-400 font-light leading-relaxed ml-12">
                  Building robust RESTful APIs and integrating third-party services. 
                  Ensuring secure, efficient data flow between applications and services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <p className="text-sm font-light tracking-[0.3em] text-gray-500 uppercase mb-4">Expertise</p>
              <h2 className="text-5xl md:text-6xl font-extralight text-white mb-8">Technical Skills</h2>
              <p className="text-gray-400 font-light leading-relaxed">
                Proficient in modern web development technologies and tools. 
                I focus on writing clean, maintainable code and delivering quality solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-light tracking-wider text-gray-500 uppercase mb-4">Core Technologies</h4>
                <ul className="space-y-2 text-gray-400 font-light">
                  <li>JavaScript / TypeScript</li>
                  <li>React / Next.js</li>
                  <li>Node.js / Express</li>
                  <li>HTML / CSS / Tailwind</li>
                  <li>Git / GitHub</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-light tracking-wider text-gray-500 uppercase mb-4">Specializations</h4>
                <ul className="space-y-2 text-gray-400 font-light">
                  <li>Responsive Design</li>
                  <li>Database Design</li>
                  <li>API Integration</li>
                  <li>Performance Optimization</li>
                  <li>Testing & Debugging</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 border-t border-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-extralight text-white mb-8">
            Let's Build Something Together
          </h2>
          <p className="text-xl text-gray-400 font-light mb-12 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it and discuss how I can help.
          </p>
          <Link href="/contact" className="inline-flex items-center text-white hover:text-gray-300 transition-colors duration-300 text-lg">
            Schedule a Consultation
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
    </Layout>
  );
}
