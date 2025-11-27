import { Project, Experience, Education, SkillCategory, Achievement } from './types';

export const PROFILE = {
  name: "Satya Pujith Botuku",
  role: "Full Stack Developer & AI Automation Engineer",
  email: "satyapoojith2@gmail.com",
  phone: "+91-9391994524",
  location: "Hyderabad, India",
  about: "I'm a full-stack developer who builds intelligent applications with AI integration. I specialize in developing AI automation solutions that transform ideas into scalable, production-ready systems with seamless user experiences.",
  social: {
    github: "https://github.com/SatyaPujith",
    linkedin: "https://www.linkedin.com/in/botukusatyapujith/",
    leetcode: "https://leetcode.com/u/SatyaPujith/",
    geeksforgeeks: "https://www.geeksforgeeks.org/user/23951a5k85/",
    portfolio: "#"
  }
};

export const PROJECTS: Project[] = [
  {
    title: "StudyAI",
    subtitle: "Intelligent Learning Ecosystem",
    date: "Oct 2025",
    description: [
      "AI-powered educational platform generating dynamic study plans and quizzes.",
      "Real-time collaboration via secure WebSocket layers and JWT authentication.",
      "Integrated Gemini AI and Jitsi Meet for seamless dual video conferencing."
    ],
    tech: ["React", "Node.js", "MongoDB", "Socket.IO", "Gemini AI"],
    links: { 
      github: "https://github.com/SatyaPujith/StudyAI-",
      live: "study-ai-delta.vercel.app" 
    }
  },
  {
    title: "OJO",
    subtitle: "Wikipedia for Everyone’s Journey",
    date: "Sept 2025",
    description: [
      "Visualizes human life journeys from education to career milestones.",
      "Interactive frontend built with React 19, Vite, and shadcn/ui.",
      "Powered by Next.js, Elastic Search, and Gemini AI for intelligent data synthesis."
    ],
    tech: ["React 19", "Next.js", "Elastic Search", "TypeScript", "D3.js"],
    links: { 
      github: "https://github.com/SatyaPujith/OjO-Updated",
      live: "ojo-ai.onrender.com"
    }
  },
  {
    title: "Carsor AI",
    subtitle: "Vehicle Diagnostics Platform",
    date: "July 2025",
    description: [
      "AI-driven platform for Tata vehicles to diagnose issues via voice and sound.",
      "Implemented RAG architecture for context-aware issue reporting.",
      "Features real-time analytics dashboards and repair history tracking."
    ],
    tech: ["Next.js", "MongoDB", "RAG", "Gemini AI", "Vector DB"],
    links: { 
      github: "https://github.com/SatyaPujith/CarsorAI-Updated",
      live: "carsor-ai-updated.vercel.app"
    }
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Summer Research Intern",
    company: "Institute Of Aeronautical Engineering",
    location: "Hyderabad",
    date: "May 2025",
    points: [
      "Designed 'Smart HealthGuard': AI-based DDI checker for underserved communities.",
      "Achieved 84% accuracy using Random Forest and SMOTE techniques.",
      "Enhanced prediction pipeline using custom encoders and RxNorm API."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Institute of Aeronautical Engineering",
    degree: "B.Tech CSE (Data Science)",
    date: "Exp. May 2027",
    score: "8.3/10 GPA"
  },
  {
    institution: "Narayana Junior College",
    degree: "Intermediate",
    date: "June 2023",
    score: "92.7%"
  },
  {
    institution: "Narayana High School",
    degree: "SSC",
    date: "March 2021",
    score: "100.0%"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "SQL"]
  },
  {
    category: "Front-End",
    skills: ["React.js", "Next.js 15", "Vue.js", "Tailwind CSS", "HTML5/CSS3"]
  },
  {
    category: "Back-End",
    skills: ["Node.js", "Express.js", "Flask", "Laravel", "Mongoose"]
  },
  {
    category: "Databases",
    skills: ["MongoDB", "MySQL", "SQLite", "Vector DB"]
  },
  {
    category: "Tools",
    skills: ["Git/GitHub", "Docker", "Postman", "Vite", "XAMPP"]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "WebNova Hackathon 2025",
    event: "2nd Place",
    date: "Nov 2025",
    description: "Secured for developing 'Study-AI'."
  },
  {
    title: "Techno Udbhav Hackathon 2025",
    event: "1st Place",
    date: "Mar 2025",
    description: "Secured in web app development for 'StarNova'."
  },
  {
    title: "TCS Codevita S12",
    event: "Global Rank 1398",
    date: "Feb 2025",
    description: "Ranked among 5 lakh participants from 96 countries."
  },
  {
    title: "Zignasa Hackathon",
    event: "2nd Runner-up",
    date: "Dec 2024",
    description: "Developed 'Fashion Fusion' - outfit matching platform."
  },
  {
    title: "Forge-Alumnus Code-A-Thon",
    event: "2nd Runner-up",
    date: "Mar 2024",
    description: "Completed two tasks among three with in the time."
  }
];

export const SYSTEM_INSTRUCTION = `
You are Satya.AI, the AI assistant for Satya Pujith Botuku's portfolio.
You help visitors learn about Satya's work, projects, skills, and experience.
Be friendly, professional, and informative. Use a conversational tone.
Answer questions about Satya's background, technical skills, projects, and achievements.
Context:
${JSON.stringify({ PROFILE, PROJECTS, EXPERIENCE, SKILLS })}
`;