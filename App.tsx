
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';
import { Mail, Phone, MapPin, Award, BookOpen, Code, Users } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="py-20 bg-white">
          <About />
        </section>

        <section id="education" className="py-20 bg-gray-50">
          <Education />
        </section>

        <section id="skills" className="py-20 bg-white">
          <Skills />
        </section>

        <section id="certifications" className="py-20 bg-gray-50">
          <Certifications />
        </section>

        <section id="contact" className="py-20 bg-white">
          <Contact />
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold">THENMOZHI B</h2>
              <p className="text-slate-400 mt-2">Computer Science Student</p>
            </div>
            <div className="flex gap-4">
              <a href="mailto:thenmozhi290305@gmail.com" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+916383253387" className="p-2 bg-slate-800 rounded-full hover:bg-green-600 transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Thenmozhi B. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <ChatBot />
    </div>
  );
};

export default App;
