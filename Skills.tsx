
import React from 'react';
import { Code, Globe, Database, Terminal, Layout, Layers } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-blue-500" />,
      skills: ["C", "C++", "Python", "Java", "PHP"]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="text-emerald-500" />,
      skills: ["HTML5", "CSS3", "Responsive Design"]
    },
    {
      title: "Databases & OS",
      icon: <Database className="text-purple-500" />,
      skills: ["SQL", "Linux (Basic)"]
    },
    {
      title: "Productivity Tools",
      icon: <Layout className="text-orange-500" />,
      skills: ["MS Excel", "PowerPoint", "MS Word", "Power BI"]
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Proficiency</h2>
        <p className="text-gray-600 max-w-xl mx-auto">Foundational knowledge across multiple domains of computer science and software development.</p>
        <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="mb-6 flex items-center justify-between">
              <div className="p-3 bg-gray-50 rounded-xl">
                {category.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-6 text-gray-800">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIdx) => (
                <span key={sIdx} className="px-3 py-1.5 bg-gray-50 text-gray-700 text-xs font-semibold rounded-lg border border-gray-100">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
