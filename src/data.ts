/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TabData } from './types';

export interface SocialLink {
  id: 'linkedin' | 'github' | 'leetcode' | 'kaggle' | 'email' | 'phone';
  label: string;
  url: string;
  display: string;
}

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  tech: string[];
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
  kaggleUrl?: string;
}

export interface ExperienceData {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface ResearchPaper {
  id: string;
  title: string;
  subtitle: string;
  publisher: string;
  year: string;
  url: string;
  tags: string[];
  highlights: string[];
}


// Jagjeet's authentic social profiles
export const socialLinks: SocialLink[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/jagjeet-singh-dhillon-022b822b7',
    display: 'linkedin.com/in/jagjeet-singh-dhillon-022b822b7'
  },
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/TheJd04',
    display: 'github.com/TheJd04'
  },
  {
    id: 'leetcode',
    label: 'LeetCode',
    url: 'https://leetcode.com/u/THEJD04',
    display: 'leetcode.com/u/THEJD04'
  },
  {
    id: 'kaggle',
    label: 'Kaggle',
    url: 'https://kaggle.com/jagjeetsinghdhillon',
    display: 'kaggle.com/jagjeetsinghdhillon'
  },
  {
    id: 'email',
    label: 'Email',
    url: 'mailto:dhillonjd.04@gmail.com',
    display: 'dhillonjd.04@gmail.com'
  },
  {
    id: 'phone',
    label: 'Phone Protocol',
    url: 'tel:+919802581601',
    display: '+91 98025 81601'
  }
];

// Jagjeet's real-world projects
export const projectsData: ProjectData[] = [
  {
    id: 'ragchatbot',
    title: 'Enterprise RAG Assistant',
    subtitle: 'Full-Stack AI Chatbot with Citation & Voice',
    year: '2026',
    tech: ['Next.js 15', 'FastAPI', 'Python 3.11', 'ChromaDB', 'SQLite', 'Tailwind CSS'],
    highlights: [
      'Built a full-stack Enterprise RAG Assistant with real-time SSE streaming, voice synthesis, and a citation inspector drawer.',
      'Developed a backend powered by FastAPI with ChromaDB vector search and SQLite persistence, deployed on Render.',
      'Designed a universal cyberpunk dark theme frontend in Next.js 15, deployed on Vercel.'
    ],
    liveUrl: 'https://frontend-the-jd.vercel.app/dashboard/chat',
    githubUrl: 'https://github.com/TheJd04/Rag--chat-bot-'
  },
  {
    id: 'gharsuraksha',
    title: 'GharSuraksha',
    subtitle: 'AI Home Inventory & Insurance Intelligence',
    year: '2026',
    tech: ['React', 'Next.js', 'Gemini Vision AI', 'Tailwind CSS'],
    highlights: [
      'Built an AI-powered platform for Indian households to catalog 400+ home items instantly via photos, estimating values automatically.',
      'Reduces insurance claim generation time by over 80% and eliminates guesswork by cross-referencing inventory against policy documents to identify coverage gaps.',
      'Secures sensitive user data with bank-grade encryption, ensuring 100% privacy while providing actionable intelligence for home protection.'
    ],
    liveUrl: 'https://gharsuraksha.vercel.app/',
    githubUrl: 'https://github.com/TheJd04/GharSuraksha'
  },
  {
    id: 'dualdesk',
    title: 'DualDesk',
    subtitle: 'Dual WhatsApp Desktop App',
    year: '2025',
    tech: ['Electron.js', 'JavaScript', 'HTML', 'CSS'],
    highlights: [
      'Designed and shipped a production-ready Windows desktop app letting users run two WhatsApp (or Instagram/Snapchat) accounts in fully sandboxed, side-by-side panes.',
      'Increases user efficiency by 50% for those managing multiple accounts by eliminating repeated QR logins through permanent session storage.',
      'Built a native Windows notification bridge that surfaces messages from both accounts as real OS-level alerts, even when minimized.'
    ],
    liveUrl: 'https://dualdesk-site.vercel.app',
    githubUrl: 'https://github.com/TheJd04/DualDesk'
  },
  {
    id: 'vaani',
    title: 'Vaani',
    subtitle: 'Local-First Voice Dictation Tool',
    year: '2025',
    tech: ['Python', 'faster-whisper', 'Groq API', 'PyInstaller', 'HTML/CSS/JS'],
    highlights: [
      'Shipped a local-first Windows dictation app — hold a hotkey anywhere on the OS, speak, release, and the transcribed text lands directly at the cursor.',
      'Increases typing efficiency by up to 300% (approx. 120 WPM dictation vs 40 WPM typing) by allowing users to use voice-to-text instead of manually typing.',
      'Integrated faster-whisper for fully offline transcription and optional Groq cloud API for faster turnaround, with zero audio leaving the machine in local mode.'
    ],
    liveUrl: 'https://vaani-voice-app.netlify.app/',
    githubUrl: 'https://github.com/TheJd04/Vanni-'
  },
  {
    id: 'biopulse',
    title: 'BioPulse Elite',
    subtitle: 'AI Industrial Dashboard',
    year: '2026',
    tech: ['Python', 'Flask', 'React.js', 'Scikit-learn', 'OpenAI GPT-4o', 'MySQL', 'Docker'],
    highlights: [
      'Built a full-stack AI platform with 3 live operational dashboards integrating 5 production ML models (ANN @ 98.39% accuracy) for real-time predictions every 5 seconds.',
      'Implemented a GPT-4o-powered conversational AI interface and fleet route optimizer, reducing manual coordination overhead for fleet managers by an estimated 40%.'
    ],
    githubUrl: 'https://github.com/TheJd04/BioPulseAI'
  },
  {
    id: 'jobalert',
    title: 'AI Job Intelligence Dashboard',
    subtitle: 'Multi-Source Scraping & Gemini LLM Pipeline',
    year: '2026',
    tech: ['Next.js', 'TypeScript', 'Gemini API', 'Web Scraping', 'n8n', 'Vercel'],
    highlights: [
      'Built a full-stack AI Job Intelligence Dashboard that scrapes 4 job platforms in real-time, scores listings against a candidate profile using Gemini LLM, and auto-generates tailored cover letters and interview prep materials — deployed live on Vercel.',
      'Phase 1 ships a multi-source web scraping pipeline (LinkedIn, Indeed, Naukri, Internshala) orchestrated via n8n, a Gemini-powered fit-score engine, saved-jobs bookmarks, a 4-stage application tracker (Saved → Applied → Interviewing → Offer), toast notifications, and analytics charts — all persisted in localStorage with zero backend.'
    ],
    liveUrl: 'https://ai-powered-job-alert.vercel.app',
    githubUrl: 'https://github.com/TheJd04/AI_Powered_job_alert'
  },
  {
    id: 'careercoach',
    title: 'Personalized Career Coach',
    subtitle: 'Multi-Agent AI Consultant',
    year: '2025',
    tech: ['Python', 'CrewAI', 'LangChain', 'OpenAI API', 'Streamlit'],
    highlights: [
      'Built a multi-agent AI consultant system using CrewAI that analyzes user resumes, maps skills to active market demand, and constructs personalized career roadmaps.',
      'Accelerates career planning by 10x, generating actionable, data-driven roadmaps in seconds instead of hours of manual research.'
    ],
    liveUrl: 'https://personalized-career-coach-lovat.vercel.app/',
    githubUrl: 'https://github.com/TheJd04/Personalized-Career-Coach'
  },
  {
    id: 'faultdetect',
    title: 'AI Fault Detection & Maintenance',
    subtitle: 'AIOps Predictive Maintenance Platform',
    year: '2026',
    tech: ['SvelteKit', 'Three.js', 'Drizzle ORM', 'Neon Postgres', 'Vercel', 'DSP'],
    highlights: [
      'Developed a full-stack AIOps Predictive Maintenance Platform featuring real-time DSP spectral envelope demodulation.',
      'Built interactive Three.js 3D mechanical digital twins to map live physical telemetry onto virtual components.',
      'Implemented automated LLM-broker load failover routing to ensure high availability and resilient model inference.'
    ],
    liveUrl: 'https://ai-fault-detection.vercel.app',
    githubUrl: 'https://github.com/TheJd04/AI-Fault-Detection-Maintenance'
  },
  {
    id: 'resumescreen',
    title: 'Resume Screening App',
    subtitle: 'NLP Candidate Shortlist Pipeline',
    year: '2024',
    tech: ['Python', 'Scikit-learn', 'NLP', 'Streamlit'],
    highlights: [
      'Automated candidate shortlisting by building an NLP pipeline that ranks and filters resumes against job descriptions.',
      'Cuts manual recruiter screening time by over 70%, allowing instant scored rankings of candidates via a responsive Streamlit dashboard.'
    ],
    liveUrl: 'https://resume-screening-app-nine.vercel.app',
    githubUrl: 'https://github.com/TheJd04/Resume-screening-App'
  },
  {
    id: 'lowlanguagetranslator',
    title: 'Low Language Translator',
    subtitle: 'Multilingual Intelligence Engine',
    year: '2026',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Flask', 'Python', 'VADER', 'TextBlob', 'SQLite'],
    highlights: [
      'Built an end-to-end NLP microservice & React SPA breaking linguistic barriers for low-resource languages (Punjabi, Swahili, Yoruba, Hindi, Welsh, Amharic, Zulu, Basque).',
      'Engineered multi-dimensional emotion sentiment analysis featuring positive/negative/neutral polarity, model confidence, and a visual 1–10 intensity scale meter.',
      'Developed backend /api/metrics telemetry endpoint exposing real-time inference latency (42.8ms) and throughput (120 req/s) with native Web Speech audio synthesis and SQLite persistence.'
    ],
    liveUrl: 'https://low-language-translator-nlp.vercel.app',
    githubUrl: 'https://github.com/TheJd04/low-language-translator-nlp-'
  }
];

// Jagjeet's published research papers
export const researchPapersData: ResearchPaper[] = [
  {
    id: 'fuzzy-ga-crop-disease',
    title: 'A Hybrid Fuzzy-GA Machine Learning System for Accurate Crop Disease Diagnosis',
    subtitle: 'IEEE Conference Publication',
    publisher: 'IEEE Xplore',
    year: '2026',
    url: 'https://ieeexplore.ieee.org/document/11620273',
    tags: ['EfficientNet', 'Genetic Algorithm (GA)', 'Fuzzy Logic', 'DenseNet', 'Machine Learning', 'Computer Vision', 'Smart Agriculture'],
    highlights: [
      'Engineered a three-stage classification framework combining EfficientNet for feature extraction, Genetic Algorithm (GA) for optimized feature selection, and a DenseNetFuzzy classifier for uncertainty-aware prediction.',
      'Dramatically enhanced model robustness and field generalization under noisy conditions, varied lighting, and real-world agricultural environments while providing interpretable confidence scores.',
      'Outperformed 20 existing models in comparative benchmarks, providing a unified architecture designed for real-world smart agriculture deployment.'
    ]
  }
];


// Jagjeet's authentic work experience
export const experienceDataList: ExperienceData[] = [
  {
    id: 'pancarbo',
    role: 'Data & IT Engineering Intern',
    company: 'Pancarbo Greenfuels Pvt. Ltd.',
    location: 'Mohali, India',
    period: 'Mar 2026 – Jul 2026 (4-Month Training)',
    highlights: [
      'Designed automated Python/Pandas ETL pipelines that replaced a manual data consolidation process, cutting weekly reporting preparation time.',
      'Optimized SQL queries and added Python data-validation checks, improving data accuracy and ensuring consistent, trustworthy inputs for business decision-making.'
    ]
  },
  {
    id: 'cognifyz',
    role: 'Software Developer Intern',
    company: 'Cognifyz Technologies',
    location: 'Remote',
    period: 'Jan 2026 – Feb 2026',
    highlights: [
      'Developed Python backend features and REST API endpoints powering front-end reporting dashboards; containerized services with Docker.',
      'Collaborated in a remote, cross-functional team through structured code reviews, improving codebase quality and shipping production features.'
    ]
  },
  {
    id: 'iitjammu',
    role: 'AI & GenAI Intern',
    company: 'IIT Jammu – Career Development Services',
    location: 'Jammu, India',
    period: 'Jun 2025 – Aug 2025',
    highlights: [
      'Built LangChain + OpenAI API-powered AI agent workflows under IIT faculty mentorship, applying LLM automation to practical institutional use cases.'
    ]
  },
  {
    id: 'octanet',
    role: 'Software Engineering Intern',
    company: 'OctaNet Services Pvt. Ltd.',
    location: 'Remote',
    period: 'Jul 2024 – Aug 2024',
    highlights: [
      'Assisted with front-end maintenance, debugging, and SQL-based data cleaning to support consistent web platform functionality for live clients.'
    ]
  }
];

// Core skills grouped by category
export const skillsByGroup = {
  Languages: ['Python', 'JavaScript (ES6+)', 'SQL', 'C/C++'],
  Frameworks: ['SvelteKit', 'React.js', 'Three.js', 'Flask', 'Node.js', 'Drizzle ORM', 'Pandas', 'Scikit-learn', 'LangChain'],
  Databases: ['MySQL', 'PostgreSQL', 'Neon Postgres'],
  CloudDevOps: ['AWS', 'Docker', 'CI/CD', 'Oracle Cloud OCI'],
  Tools: ['Git', 'GitHub', 'Jupyter', 'VS Code', 'n8n', 'Electron.js']
};

export const educationData = {
  degree: 'B.Tech, Computer Science Engineering',
  school: 'Amity University, Mohali',
  period: '2022 – 2026',
  gpa: '7.18 CGPA (8th Sem)'
};

export interface CertificationData {
  name: string;
  issuer: string;
  badge?: string;
  issueDate?: string;
  validUntil?: string;
  certId?: string;
  isOfficial?: boolean;
}

export const certificationsList: CertificationData[] = [
  { 
    name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate', 
    issuer: 'Oracle Corporation',
    badge: 'Oracle Certified Foundations Associate',
    issueDate: 'August 19, 2025',
    validUntil: 'August 19, 2027',
    certId: '102362864OCI25AICFA',
    isOfficial: true
  },
  { name: 'AWS Certified Data Engineer Associate 2026', issuer: 'Udemy' },
  { name: 'AI Agents Certification', issuer: 'IIT Jammu', isOfficial: true },
  { name: 'Ultimate RAG Bootcamp — LangChain, LangGraph & LangSmith', issuer: 'Udemy' },
  { name: 'Decoding DevOps – From Basics to Advanced with AI', issuer: 'Udemy' },
  { name: 'The Complete Prompt Engineering for AI Bootcamp', issuer: 'Udemy' },
  { name: 'Data Analyst: Professional Certificate in Data Analysis', issuer: 'Udemy' },
  { name: 'SQL Boot Camp', issuer: 'Udemy' },
  { name: 'The Git & GitHub Bootcamp', issuer: 'Udemy' }
];

export const LINKEDIN_CERTS_URL = 'https://www.linkedin.com/in/jagjeet-singh-dhillon-022b822b7/details/certifications/';

// Keeping compatibility with Navbar and default tabs, while redirecting them to use our new rich content
export const tabDataList: TabData[] = [
  {
    id: 'project_cv',
    label: 'ABOUT',
    title: 'IDENTITY DEPLOYMENT:',
    subtitle: 'JAGJEET SINGH DHILLON',
    highlightText: 'SOFTWARE ENGINEER',
    widgets: {
      about: {
        title: 'SUMMARY',
        content: 'Computer Science Engineering graduate (B.Tech, 2026) with a shipped desktop application (DualDesk), 4 professional internships, and production experience building Python/Flask backends, full-stack platforms, and AI automation tools. Proven ability to take projects from idea to live deployment.'
      },
      skills: {
        title: 'CORE STACK',
        isList: true,
        content: [
          'Python (Flask)',
          'React.js & Node.js',
          'AI Agents (LangChain, CrewAI)',
          'SQL (MySQL, PostgreSQL)',
          'Cloud & DevOps (AWS, OCI, Docker)',
          'Workflow Automation (n8n)'
        ]
      },
      experience: {
        title: 'EDUCATION',
        content: 'B.Tech in Computer Science Engineering at Amity University, Mohali (2022 - 2026). 7.18 CGPA (8th Sem).'
      },
      contact: {
        title: 'SECURE CREDENTIALS',
        content: 'dhillonjd.04@gmail.com | Mohali, India | Status: Active Node'
      }
    }
  },
  {
    id: 'portfolio',
    label: 'PROJECTS',
    title: 'TACTICAL REPOSITORIES:',
    subtitle: 'PRODUCTION READY',
    highlightText: 'AI & DESKTOP SOLUTIONS',
    widgets: {
      about: {
        title: 'DUALDESK',
        content: 'Shipped production-ready Windows desktop app built with Electron.js that lets users run two WhatsApp/Instagram accounts side-by-side. Live at dualdesk-site.vercel.app with permanent session storage.'
      },
      skills: {
        title: 'FEATURED PROJECTS',
        isList: true,
        content: [
          'GharSuraksha (AI Home Insurance)',
          'DualDesk App (Live & Shipped)',
          'Vaani — Voice Dictation (Live & Shipped)',
          'BioPulse Elite (AI Industrial Dash)',
          'AI Job Intelligence Dashboard (Live & Deployed)',
          'Personalized Career Coach (AI Agent)',
          'AI Fault Detection (AIOps Platform)',
          'Resume Screening NLP App (Streamlit)',
          'Low Language Translator (Live NLP Engine)'
        ]
      },
      experience: {
        title: 'BIOPULSE ELITE',
        content: 'Built a full-stack AI platform with 3 live operational dashboards integrating 5 production ML models (ANN @ 98.39% accuracy) delivering real-time predictions every 5 seconds.'
      },
      contact: {
        title: 'KAGGLE & GITHUB INTEGRATIONS',
        content: 'All source repositories and notebooks are verified live and secure.'
      }
    }
  },
  {
    id: 'blog',
    label: 'EXPERIENCE',
    title: 'MISSION DEPLOYMENTS:',
    subtitle: 'FOUR COMPLETED',
    highlightText: 'PROFESSIONAL INTERNSHIPS',
    widgets: {
      about: {
        title: 'DATA & IT INTERN',
        content: 'Pancarbo Greenfuels Pvt. Ltd. (Mar – Jul 2026, 4-Month Training). Designed automated Pandas ETL pipelines replacing manual processes, cutting weekly reporting preparation, and optimizing MySQL database schemas.'
      },
      skills: {
        title: 'ROLES COMPLETED',
        isList: true,
        content: [
          'Data & IT Intern (Pancarbo)',
          'Software Developer Intern (Cognifyz)',
          'AI & GenAI Intern (IIT Jammu)',
          'Software Engineering Intern (OctaNet)'
        ]
      },
      experience: {
        title: 'SOFTWARE DEVELOPER INTERN',
        content: 'Cognifyz Technologies (Jan - Feb 2026). Developed Python backends, designed REST API endpoints powering reporting dashboards, and containerized microservices with Docker.'
      },
      contact: {
        title: 'ACADEMIC INTERNSHIPS',
        content: 'IIT Jammu (GenAI Agent Workflows) & OctaNet Services (Frontend Maintenance & Cleanups).'
      }
    }
  },
  {
    id: 'contact',
    label: 'CONTACT',
    title: 'LINK INITIATION:',
    subtitle: 'SECURED COMMS PROTOCOLS',
    highlightText: 'ESTABLISH DIRECT FEED',
    widgets: {
      about: {
        title: 'INCOMING CONNECTION',
        content: 'Ready to establish handshake. High-bandwidth communication protocols are open for full-stack engineering, AI agents pipelines, and secure cloud system design.'
      },
      skills: {
        title: 'AVAILABLE CHANNELS',
        isList: true,
        content: [
          'Encrypted Email Direct',
          'Professional LinkedIn link',
          'Tactical GitHub Repository',
          'LeetCode Node Profile',
          'Kaggle Analytics Feed',
          'Secure Mobile Hotline'
        ]
      },
      experience: {
        title: 'NETWORKING LOCATIONS',
        content: 'Mohali, Chandigarh, Delhi NCR, and open to Remote Deployments globally.'
      },
      contact: {
        title: 'CREDENTIAL PROTOCOLS',
        content: 'dhillonjd.04@gmail.com | +91 98025 81601 | node_id: THEJD04'
      }
    }
  }
];
