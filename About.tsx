
import React from 'react';
import { Target, Users, Zap, MessageSquare } from 'lucide-react';

const About: React.FC = () => {
  const qualities = [
    { icon: <MessageSquare size={24} />, title: "Communication", desc: "Excellent verbal and written skills in English, Tamil, and Telugu." },
    { icon: <Users size={24} />, title: "Team Collaboration", desc: "Proven ability to work effectively within diverse groups and projects." },
    { icon: <Zap size={24} />, title: "Multitasking", desc: "Successfully balancing academic rigor with volunteering and certifications." },
    { icon: <Target size={24} />, title: "Problem Solving", desc: "Strong analytical mind with a focus on logical solutions and efficiency." }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Objective</h2>
        <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="lg:w-1/2">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            "To obtain a challenging position in the IT industry where I can contribute to organizational growth while working in a dynamic environment."
          </p>
          <p className="text-gray-600 leading-relaxed">
            With a specialization in Computer Science, I focus on bridging the gap between theoretical concepts and practical applications. My journey is defined by academic excellence, a drive for continuous learning, and a commitment to social responsibility through the National Service Scheme (NSS).
          </p>
          
          <div className="mt-10 grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
              <p className="text-3xl font-bold text-blue-600">70.94%</p>
              <p className="text-sm text-gray-500 mt-1">B.Sc Current GPA</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
              <p className="text-3xl font-bold text-green-600">100%</p>
              <p className="text-sm text-gray-500 mt-1">SSLC Benchmark</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {qualities.map((q, idx) => (
            <div key={idx} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                {q.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{q.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{q.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
