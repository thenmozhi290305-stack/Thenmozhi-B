
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    { icon: <Mail className="text-blue-600" />, label: "Email", value: "thenmozhi290305@gmail.com", href: "mailto:thenmozhi290305@gmail.com" },
    { icon: <Phone className="text-green-600" />, label: "Phone", value: "+91 63832 53387", href: "tel:+916383253387" },
    { icon: <MapPin className="text-red-600" />, label: "Address", value: "2/56, Post office Street, Villamarathupatti, Tirupur-642207", href: "#" }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/3 space-y-6">
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          {contactInfo.map((info, i) => (
            <a 
              key={i} 
              href={info.href}
              className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-white transition-all group"
            >
              <div className="p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                {info.icon}
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{info.label}</p>
                <p className="font-medium text-gray-800 break-words">{info.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="lg:w-2/3">
          <form className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl shadow-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                <input type="text" placeholder="John Doe" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
              <input type="text" placeholder="Inquiry regarding..." className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
            </div>
            <div className="mb-8">
              <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
              <textarea rows={4} placeholder="Tell me more..." className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"></textarea>
            </div>
            <button type="submit" className="w-full md:w-auto px-10 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
              Send Message
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
