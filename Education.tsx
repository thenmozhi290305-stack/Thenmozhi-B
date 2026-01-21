
import React from 'react';
import { Calendar, GraduationCap, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const steps = [
    {
      year: "2023 - 2026",
      degree: "Bachelor of Science in Computer Science",
      institution: "Nallamuthu Gounder Mahalingam College",
      university: "Bharathiyar University, Coimbatore",
      grade: "70.94% (Current)",
      desc: "Specialization in core Computer Science concepts."
    },
    {
      year: "2022 - 2023",
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Government Higher Secondary School, Udukkampalayam",
      grade: "69%",
      desc: "Science Stream"
    },
    {
      year: "2020 - 2021",
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Nallamuthu Gounder Natchimuthu Gounder Higher Secondary School, Reddiarur",
      grade: "100%",
      desc: "Achieved a perfect score in board examinations."
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Journey</h2>
        <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative border-l-2 border-blue-200 ml-3 md:ml-6 space-y-12">
          {steps.map((item, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12">
              <div className="absolute -left-[9px] md:-left-[11px] top-0 w-4 md:w-5 h-4 md:h-5 bg-blue-600 rounded-full border-4 border-white shadow-sm"></div>
              
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit">
                    <Calendar size={14} />
                    {item.year}
                  </span>
                  <span className="text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full w-fit">
                    Score: {item.grade}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{item.degree}</h3>
                <div className="flex flex-col gap-1 text-gray-600 mb-4">
                  <p className="flex items-center gap-2 font-medium">
                    <GraduationCap size={18} />
                    {item.institution}
                  </p>
                  {item.university && (
                    <p className="flex items-center gap-2 text-sm ml-6">
                      <MapPin size={14} />
                      {item.university}
                    </p>
                  )}
                </div>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
