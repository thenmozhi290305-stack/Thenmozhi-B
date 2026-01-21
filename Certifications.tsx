
import React from 'react';
import { Award, CheckCircle, ExternalLink, Users } from 'lucide-react';

const Certifications: React.FC = () => {
  const certs = [
    { title: "Java Programming (54%)", issuer: "NPTEL (July-Oct 2024)", highlight: true },
    { title: "Python (Spoken Tutorial)", issuer: "IIT Bombay" },
    { title: "HTML (Spoken Tutorial)", issuer: "IIT Bombay" },
    { title: "Cloud-Based Automation", issuer: "Value-Added Course" },
    { title: "Data Visualization using Power BI", issuer: "Value-Added Course" }
  ];

  const workshops = [
    { title: "Network Administration", body: "ENLIGHTEN Academy - National Level Webinar" },
    { title: "Python for Data Science", body: "Skill Enhancement Program" }
  ];

  const extracurricular = [
    { title: "NSS Volunteer", body: "National Service Scheme - NGM College (2023-2025)" },
    { title: "NSS Parade Participant", body: "Active participant in ceremonial events" }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Beyond the Classroom</h2>
        <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Certifications */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-blue-600" />
            <h3 className="text-xl font-bold uppercase tracking-wider text-gray-700">Certifications</h3>
          </div>
          <div className="space-y-4">
            {certs.map((c, i) => (
              <div key={i} className={`p-4 rounded-xl border flex gap-3 ${c.highlight ? 'bg-blue-50 border-blue-200' : 'bg-white border-gray-100'}`}>
                <CheckCircle size={20} className={c.highlight ? 'text-blue-600' : 'text-green-500'} />
                <div>
                  <p className="font-bold text-sm">{c.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{c.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seminars & Workshops */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <ExternalLink className="text-purple-600" />
            <h3 className="text-xl font-bold uppercase tracking-wider text-gray-700">Workshops</h3>
          </div>
          <div className="space-y-4">
            {workshops.map((w, i) => (
              <div key={i} className="p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                <p className="font-bold text-gray-800">{w.title}</p>
                <p className="text-sm text-gray-500 mt-2">{w.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Extra Curricular */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <Users className="text-orange-600" />
            <h3 className="text-xl font-bold uppercase tracking-wider text-gray-700">Activities</h3>
          </div>
          <div className="space-y-4">
            {extracurricular.map((e, i) => (
              <div key={i} className="p-5 bg-white rounded-xl border border-gray-100 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-12 h-12 bg-orange-50 -mr-6 -mt-6 rounded-full group-hover:scale-150 transition-transform duration-500 opacity-50"></div>
                <p className="font-bold text-gray-800 relative z-10">{e.title}</p>
                <p className="text-sm text-gray-500 mt-2 relative z-10">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
