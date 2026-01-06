import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 opacity-50 z-0"></div>
        <div className="z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 animate-fade-in-up">
            Hi, I'm <span className="text-white">John Doe</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-100">
            A Creative Developer building modern, functional, and beautiful web experiences.
          </p>
          <div className="flex justify-center gap-4 animate-fade-in-up delay-200">
             <a href="#projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30">
              View Work
            </a>
            <Link to="/contact" className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 rounded-full font-semibold transition-all transform hover:scale-105">
              Contact Me
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>
      </section>

      {/* About Highlights */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-700 rounded-xl hover:shadow-xl transition-shadow border border-slate-600">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <p className="text-gray-400">Building fast, responsive, and accessible websites using modern frameworks.</p>
            </div>
            <div className="p-6 bg-slate-700 rounded-xl hover:shadow-xl transition-shadow border border-slate-600">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
              <p className="text-gray-400">Creating intuitive and visually appealing interfaces that users love.</p>
            </div>
            <div className="p-6 bg-slate-700 rounded-xl hover:shadow-xl transition-shadow border border-slate-600">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Performance</h3>
              <p className="text-gray-400">Optimizing applications for maximum speed and efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Card 1 */}
            <div className="group relative overflow-hidden rounded-xl border border-slate-700 bg-slate-800">
              <div className="aspect-video bg-gradient-to-tr from-purple-500 to-indigo-500 group-hover:scale-105 transition-transform duration-300"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">E-Commerce Platform</h3>
                <p className="text-gray-400 mb-4">A full-featured online store with cart, checkout, and payment integration.</p>
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-slate-700 rounded-full text-xs">React</span>
                  <span className="px-3 py-1 bg-slate-700 rounded-full text-xs">Node.js</span>
                  <span className="px-3 py-1 bg-slate-700 rounded-full text-xs">MongoDB</span>
                </div>
                <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center">
                  View Project <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </a>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group relative overflow-hidden rounded-xl border border-slate-700 bg-slate-800">
              <div className="aspect-video bg-gradient-to-tr from-emerald-500 to-teal-500 group-hover:scale-105 transition-transform duration-300"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Task Management App</h3>
                <p className="text-gray-400 mb-4">A productivity tool for teams to organize and track their work efficiently.</p>
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-slate-700 rounded-full text-xs">Vue.js</span>
                  <span className="px-3 py-1 bg-slate-700 rounded-full text-xs">Firebase</span>
                </div>
                <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center">
                  View Project <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in working together?</h2>
          <p className="text-xl text-blue-100 mb-8">I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
          <Link to="/contact" className="px-8 py-3 bg-white text-indigo-900 hover:bg-gray-100 rounded-full font-bold shadow-lg transition-all transform hover:scale-105">
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
