
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleGenAI } from "@google/genai";
import { 
  Menu, X, ChevronRight, ExternalLink, Award, Target, Users, Zap, 
  MessageSquare, Code, Globe, Database, Layout, Calendar, 
  GraduationCap, MapPin, CheckCircle, Mail, Phone, Send, 
  MessageCircle, Bot, Loader2 
} from 'lucide-react';

// --- Types ---
interface Message {
  role: 'user' | 'model';
  text: string;
}

// --- Gemini Service ---
const SYSTEM_INSTRUCTION = `
You are a helpful AI assistant representing Thenmozhi B (a Computer Science Student). 
Thenmozhi is pursuing B.Sc CS at Nallamuthu Gounder Mahalingam College (2023-2026).
Key facts to use in answers:
- Education: B.Sc CS (70.94%), HSC (69%), SSLC (100% - perfect score!).
- Technical Skills: C, C++, Python, Java, PHP, SQL, HTML, CSS, Linux.
- Certifications: Cloud-Based Automation, Power BI, Python & HTML (IIT Bombay), Java (NPTEL).
- Extra-curricular: Active NSS Volunteer and Parade participant.
- Contact: +91 63832 53387, thenmozhi290305@gmail.com.
Be professional, concise, and helpful. Represent her talent and academic excellence.
`;

const getGeminiResponse = async (userMessage: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "I'm sorry, I couldn't process that.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The assistant is offline. Please email thenmozhi290305@gmail.com.";
  }
};

// --- Sub-Components ---

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-effect py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold tracking-tighter">
          <span className="text-blue-600">THEN</span>MOZHI.B
        </a>
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-widest">
              {item.name}
            </a>
          ))}
        </div>
        <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-xl py-6 px-8 flex flex-col space-y-4">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-800 hover:text-blue-600">
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative pt-32 pb-20 lg:pt-56 lg:pb-40 overflow-hidden bg-white">
    <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[100px] opacity-60"></div>
    <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] bg-purple-50 rounded-full blur-[100px] opacity-60"></div>
    <div className="container mx-auto px-6 relative z-10 text-center">
      <span className="inline-flex items-center gap-2 px-5 py-2 mb-8 text-xs font-bold tracking-[0.2em] text-blue-700 uppercase bg-blue-50 rounded-full border border-blue-100 shadow-sm animate-pulse">
        <Zap size={14} /> Available for Internships
      </span>
      <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
        Hi, I'm <span className="gradient-text">Thenmozhi B</span><br />
        Computer Science Student
      </h1>
      <p className="text-lg md:text-2xl text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
        Dedicated to academic excellence and efficient software development. 
        Pursuing B.Sc in Computer Science with a drive for innovation.
      </p>
      <div className="flex flex-wrap justify-center gap-5">
        <a href="#contact" className="px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl shadow-2xl hover:bg-blue-600 transition-all hover:-translate-y-1 flex items-center gap-3">
          Contact Me <ChevronRight size={20} />
        </a>
        <a href="#education" className="px-10 py-5 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 transition-all flex items-center gap-3">
          Academic History <ExternalLink size={20} />
        </a>
      </div>
      <div className="mt-20 flex justify-center items-center gap-12 opacity-80 grayscale hover:grayscale-0 transition-all">
        <div className="text-center">
          <p className="text-3xl font-black text-slate-900">100%</p>
          <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">SSLC Record</p>
        </div>
        <div className="w-px h-10 bg-slate-200"></div>
        <div className="text-center">
          <p className="text-3xl font-black text-slate-900">70.9%</p>
          <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">B.Sc Current</p>
        </div>
        <div className="w-px h-10 bg-slate-200"></div>
        <div className="text-center">
          <p className="text-3xl font-black text-slate-900">05+</p>
          <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">Core Techs</p>
        </div>
      </div>
    </div>
  </section>
);

const About = () => {
  const qualities = [
    { icon: <MessageSquare size={26} />, title: "Communication", desc: "Fluent in English, Tamil, and Telugu." },
    { icon: <Users size={26} />, title: "Teamwork", desc: "Collaborative and effective in group projects." },
    { icon: <Zap size={26} />, title: "Multitasking", desc: "Managing studies and professional courses." },
    { icon: <Target size={26} />, title: "Analysis", desc: "Analytical and logical problem solver." }
  ];
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-black mb-8">About Me</h2>
            <div className="w-16 h-2 bg-blue-600 mb-8 rounded-full"></div>
            <p className="text-2xl text-slate-700 italic leading-snug mb-8">
              "Aspiring to contribute to organizational growth while working in a dynamic environment."
            </p>
            <p className="text-lg text-slate-500 leading-relaxed mb-10">
              I am a focused B.Sc Computer Science student at Nallamuthu Gounder Mahalingam College. 
              My journey is marked by a 100% score in board exams and a passion for modern IT solutions.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <p className="text-3xl font-black text-blue-600">70.94%</p>
                <p className="text-xs font-bold text-slate-400 uppercase mt-1">B.Sc GPA</p>
              </div>
              <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <p className="text-3xl font-black text-green-600">100%</p>
                <p className="text-xs font-bold text-slate-400 uppercase mt-1">SSLC Result</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualities.map((q, i) => (
              <div key={i} className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-slate-50 text-slate-400 group-hover:bg-blue-600 group-hover:text-white rounded-2xl flex items-center justify-center mb-6 transition-all">
                  {q.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{q.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  const data = [
    { year: "2023 - 2026", degree: "B.Sc Computer Science", school: "Nallamuthu Gounder Mahalingam College", result: "70.94% (Current)" },
    { year: "2022 - 2023", degree: "Higher Secondary (HSC)", school: "Govt Higher Secondary School, Udukkampalayam", result: "69%" },
    { year: "2020 - 2021", degree: "SSLC Board Exam", school: "NGNG Higher Secondary School, Reddiarur", result: "100%" }
  ];
  return (
    <section id="education" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-black text-center mb-20">Academic Journey</h2>
        <div className="max-w-4xl mx-auto space-y-12">
          {data.map((item, i) => (
            <div key={i} className="relative pl-12 border-l-4 border-slate-50 group">
              <div className="absolute -left-[14px] top-0 w-6 h-6 bg-white border-4 border-slate-100 rounded-full group-hover:border-blue-600 transition-colors"></div>
              <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-transparent group-hover:border-blue-100 group-hover:bg-white group-hover:shadow-2xl transition-all">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-4 py-1.5 bg-blue-600 text-white text-xs font-black rounded-full uppercase tracking-tighter">{item.year}</span>
                  <span className="text-emerald-600 font-black text-xl">{item.result}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">{item.degree}</h3>
                <p className="text-slate-500 font-bold flex items-center gap-2"><MapPin size={18} /> {item.school}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const sets = [
    { title: "Languages", skills: ["C", "C++", "Python", "Java", "PHP"] },
    { title: "Web Tech", skills: ["HTML5", "CSS3", "Responsive UI"] },
    { title: "Tools", skills: ["Power BI", "SQL", "MS Excel", "Linux"] }
  ];
  return (
    <section id="skills" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-black mb-16">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {sets.map((set, i) => (
            <div key={i} className="p-10 bg-slate-800 rounded-[3rem] border border-slate-700 hover:border-blue-500 transition-all">
              <h3 className="text-xl font-bold mb-8 text-slate-300 uppercase tracking-widest">{set.title}</h3>
              <div className="flex flex-wrap gap-3">
                {set.skills.map((s, j) => (
                  <span key={j} className="px-5 py-2 bg-slate-700 text-sm font-semibold rounded-xl border border-slate-600">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Certifications = () => {
  const certs = ["Java Programming (NPTEL)", "Python & HTML (IIT Bombay)", "Cloud-Based Automation", "Power BI Data Visualization"];
  return (
    <section id="certifications" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-black text-center mb-20">Certifications & Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-10 bg-blue-50 rounded-[3rem] border border-blue-100">
            <h3 className="text-2xl font-black mb-6 flex items-center gap-3"><Award className="text-blue-600" /> Professional Courses</h3>
            <ul className="space-y-4">
              {certs.map((c, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-slate-700"><CheckCircle size={20} className="text-blue-600" /> {c}</li>
              ))}
            </ul>
          </div>
          <div className="p-10 bg-purple-50 rounded-[3rem] border border-purple-100">
            <h3 className="text-2xl font-black mb-6 flex items-center gap-3"><Users className="text-purple-600" /> Extra Curricular</h3>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-slate-800">NSS Volunteer (2023-2025)</p>
                <p className="text-sm text-slate-500">Active participation in National Service Scheme activities.</p>
              </div>
              <div className="h-px bg-purple-200"></div>
              <div>
                <p className="font-bold text-slate-800">NSS Parade Participant</p>
                <p className="text-sm text-slate-500">Selected for ceremonial parade events.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-24 bg-slate-50">
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/3">
          <h2 className="text-4xl font-black mb-8">Let's Connect</h2>
          <p className="text-slate-500 mb-12 text-lg leading-relaxed">I am looking for internship opportunities where I can grow and contribute.</p>
          <div className="space-y-6">
            <div className="flex items-center gap-5 p-6 bg-white rounded-3xl shadow-sm">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center"><Mail /></div>
              <div><p className="text-xs font-bold text-slate-400">Email</p><p className="font-bold text-sm">thenmozhi290305@gmail.com</p></div>
            </div>
            <div className="flex items-center gap-5 p-6 bg-white rounded-3xl shadow-sm">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center"><Phone /></div>
              <div><p className="text-xs font-bold text-slate-400">Phone</p><p className="font-bold text-sm">+91 63832 53387</p></div>
            </div>
          </div>
        </div>
        <div className="lg:w-2/3">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-12 rounded-[3rem] border border-slate-100 shadow-xl" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" className="px-6 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-500 shadow-inner" />
            <input type="email" placeholder="Email Address" className="px-6 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-500 shadow-inner" />
            <textarea rows={5} placeholder="Message" className="md:col-span-2 px-6 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-500 shadow-inner"></textarea>
            <button className="px-10 py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-3 w-fit">Send Message <Send size={20} /></button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello! I'm Thenmozhi's Assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight; }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const text = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text }]);
    setLoading(true);
    const botResponse = await getGeminiResponse(text);
    setMessages(prev => [...prev, { role: 'model', text: botResponse }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-10 right-10 z-[60]">
      {!isOpen ? (
        <button onClick={() => setIsOpen(true)} className="w-20 h-20 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all animate-bounce">
          <MessageCircle size={36} />
        </button>
      ) : (
        <div className="w-[350px] md:w-[450px] h-[600px] bg-white rounded-[2.5rem] shadow-2xl flex flex-col border border-slate-100 animate-slideUp overflow-hidden">
          <div className="p-6 bg-slate-900 text-white flex justify-between items-center">
            <div className="flex items-center gap-3"><Bot size={24} className="text-blue-400" /> <span className="font-black text-sm uppercase">AI Assistant</span></div>
            <button onClick={() => setIsOpen(false)}><X size={24} /></button>
          </div>
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed shadow-sm ${m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-white text-slate-800'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && <div className="flex justify-start"><div className="bg-white p-4 rounded-3xl shadow-sm"><Loader2 className="animate-spin text-blue-600" size={20} /></div></div>}
          </div>
          <div className="p-6 bg-white border-t border-slate-100 flex gap-3">
            <input type="text" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSend()} placeholder="Ask me something..." className="flex-1 px-6 py-4 bg-slate-100 rounded-2xl focus:outline-none text-sm font-medium" />
            <button onClick={handleSend} disabled={loading} className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center hover:bg-blue-700 disabled:bg-slate-300"><Send size={22} /></button>
          </div>
        </div>
      )}
    </div>
  );
};

const App = () => (
  <div className="min-h-screen">
    <Header />
    <Hero />
    <About />
    <Education />
    <Skills />
    <Certifications />
    <Contact />
    <footer className="bg-slate-900 text-white py-12 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold tracking-tighter">THENMOZHI B</h2>
        <p className="text-slate-500 uppercase tracking-widest text-[10px] font-bold mt-2">Computer Science Student • 2026 Batch</p>
        <p className="text-slate-600 text-xs mt-8 uppercase tracking-widest">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </footer>
    <ChatBot />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
