
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are a helpful AI assistant representing Thenmozhi B (a Computer Science Student). 
Thenmozhi is a dedicated professional pursuing B.Sc CS at Nallamuthu Gounder Mahalingam College (2023-2026).
Key facts to use in answers:
- Educational background: B.Sc CS (70.94%), HSC (69%), SSLC (100% - impressive!).
- Technical Skills: C, C++, Python, Java, PHP, SQL, HTML, CSS, Linux.
- Certifications: Cloud-Based Automation, Power BI, Python & HTML (IIT Bombay), Java (NPTEL).
- Extra-curricular: Active NSS Volunteer and Parade participant.
- Soft Skills: Excellent communication, team collaboration, multitasking.
- Contact: +91 63832 53387, thenmozhi290305@gmail.com.
Be professional, encouraging, and informative. Keep responses concise.
`;

export const getGeminiResponse = async (userMessage: string) => {
  // Always use const ai = new GoogleGenAI({apiKey: process.env.API_KEY});
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    // The response.text property directly returns the string output.
    return response.text || "I'm sorry, I couldn't process that. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The assistant is currently resting. Please contact Thenmozhi directly at her email.";
  }
};
