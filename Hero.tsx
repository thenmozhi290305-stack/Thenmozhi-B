
import React from 'react';
import { ChevronRight, ExternalLink, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-700 uppercase bg-blue-100 rounded-full">
            Available for Internships
          </span>
          <h1 className="text-4xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
            Hi, I'm <span className="gradient-text">Thenmozhi B</span><br />
            Computer Science Student
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            An aspiring IT professional currently pursuing a B.Sc in Computer Science. 
            Passionate about problem-solving, web technologies, and building efficient software solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-all flex items-center gap-2 group"
            >
              Let's Connect
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#education" 
              className="px-8 py-4 bg-white text-gray-900 font-bold rounded-xl border border-gray-200 shadow-sm hover:border-blue-300 transition-all flex items-center gap-2"
            >
              View Portfolio
              <ExternalLink size={20} />
            </a>
          </div>

          <div className="inline-flex items-center gap-4 px-6 py-3 bg-white border border-gray-100 rounded-2xl shadow-sm">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              <Award size={20} />
            </div>
            <div className="text-left">
              <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider leading-none mb-1">Top Achievement</p>
              <p className="font-bold text-sm">100% Score in SSLC Board Exams</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
