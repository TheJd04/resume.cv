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
    id: 'dualdesk',
    title: 'DualDesk',
    subtitle: 'Dual WhatsApp Desktop App',
    year: '2025',
    tech: ['Electron.js', 'JavaScript', 'HTML', 'CSS'],
    highlights: [
      'Designed and shipped a production-ready Windows desktop app letting users run two WhatsApp (or Instagram/Snapchat) accounts in fully sandboxed, side-by-side panes.',
      'Engineered persistent session storage so QR logins persist permanently across system restarts, eliminating repeated authentication friction.',
      'Built a native Windows notification bridge that surfaces messages from both accounts as real OS-level alerts, even when minimized.'
    ],
    liveUrl: 'https://dualdesk-site.vercel.app',
    githubUrl: 'https://github.com/TheJd04/DualDesk'
  },
  {
    id: 'biopulse',
    title: 'BioPulse Elite',
    subtitle: 'AI Industrial Dashboard',
    year: '2026',
    tech: ['Python', 'Flask', 'React.js', 'Scikit-learn', 'OpenAI GPT-4o', 'MySQL', 'Docker'],
    highlights: [
      'Built a full-stack AI platform with 3 live operational dashboards integrating 5 production ML models (ANN @ 98.39% accuracy) for real-time predictions every 5 seconds.',
      'Implemented a GPT-4o-powered conversational AI interface and fleet route optimizer, reducing manual coordination overhead for fleet managers.'
    ],
    githubUrl: 'https://github.com/TheJd04'
  },
  {
    id: 'jobalert',
    title: 'AI-Powered Job Alert System',
    subtitle: 'Automated Scraping & Alert Pipeline',
    year: '2025',
    tech: ['Python', 'n8n', 'Web Scraping', 'Workflow Automation'],
    highlights: [
      'Built an automated job monitoring pipeline that scrapes live listings, filters by user-defined criteria, and delivers instant WhatsApp alerts via n8n.',
      'Reduced hours of daily manual searching to a fully automated, zero-touch, zero-friction notification loop.'
    ],
    githubUrl: 'https://github.com/TheJd04/AI_Powered_job_alert'
  },
  {
    id: 'careercoach',
    title: 'Personalized Career Coach',
    subtitle: 'Multi-Agent AI Consultant',
    year: '2025',
    tech: ['Python', 'CrewAI', 'LangChain', 'OpenAI API', 'Streamlit'],
    highlights: [
      'Built a multi-agent AI consultant system using CrewAI that analyzes user resumes, maps skills to active market demand, and constructs personalized career roadmaps.'
    ],
    githubUrl: 'https://github.com/TheJd04/Personalized-Career-Coach'
  },
  {
    id: 'faultdetect',
    title: 'AI Fault Detection & Maintenance',
    subtitle: 'Predictive Machinery Analytics',
    year: '2025',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Flask', 'MySQL'],
    highlights: [
      'Built an end-to-end ML pipeline encompassing data ingestion, feature engineering, and classification model training to detect machinery faults before failure occurs.',
      'Enabled proactive maintenance decisions that significantly reduce costly unplanned industrial downtime.'
    ],
    kaggleUrl: 'https://kaggle.com/jagjeetsinghdhillon'
  },
  {
    id: 'resumescreen',
    title: 'Resume Screening App',
    subtitle: 'NLP Candidate Shortlist Pipeline',
    year: '2024',
    tech: ['Python', 'Scikit-learn', 'NLP', 'Streamlit'],
    highlights: [
      'Automated candidate shortlisting by building an NLP pipeline that ranks and filters resumes against job descriptions, cutting recruiter manual screening time.',
      'Created a highly responsive interface with instant scored rankings via a Streamlit dashboard.'
    ],
    githubUrl: 'https://github.com/TheJd04'
  }
];

// Jagjeet's authentic work experience
export const experienceDataList: ExperienceData[] = [
  {
    id: 'pancarbo',
    role: 'Data & IT Engineering Intern',
    company: 'Pancarbo Greenfuels Pvt. Ltd.',
    location: 'Mohali, India',
    period: 'Mar 2026 – Jun 2026',
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
  Frameworks: ['Flask', 'React.js', 'Node.js', 'REST APIs', 'JWT Auth', 'Pandas', 'Scikit-learn', 'LangChain', 'Selenium'],
  Databases: ['MySQL', 'PostgreSQL'],
  CloudDevOps: ['AWS', 'Docker', 'CI/CD', 'Oracle Cloud OCI'],
  Tools: ['Git', 'GitHub', 'Jupyter', 'VS Code', 'n8n', 'Electron.js']
};

export const educationData = {
  degree: 'B.Tech, Computer Science Engineering',
  school: 'Amity University, Mohali',
  period: '2022 – 2026',
  gpa: 'CGPA: 7.0'
};

export const certificationsList = [
  { name: 'AWS Certified Data Engineer Associate 2026', issuer: 'Udemy' },
  { name: 'Ultimate RAG Bootcamp — LangChain, LangGraph & LangSmith', issuer: 'Udemy' },
  { name: 'Decoding DevOps – From Basics to Advanced with AI', issuer: 'Udemy' },
  { name: 'The Complete Prompt Engineering for AI Bootcamp', issuer: 'Udemy' },
  { name: 'Data Analyst: Professional Certificate in Data Analysis', issuer: 'Udemy' },
  { name: 'SQL Boot Camp', issuer: 'Udemy' },
  { name: 'The Git & GitHub Bootcamp', issuer: 'Udemy' },
  { name: 'Oracle Cloud OCI Associate', issuer: 'Oracle' },
  { name: 'AI Agents Certification', issuer: 'IIT Jammu' },
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
        content: 'B.Tech in Computer Science Engineering at Amity University, Mohali (2022 - 2026). Cumulative GPA: 7.0.'
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
          'DualDesk App (Live & Shipped)',
          'BioPulse Elite (AI Industrial Dash)',
          'AI-Powered Job Alert (n8n & Scraping)',
          'Personalized Career Coach (AI Agent)',
          'AI Fault Detection (Predictive ML)',
          'Resume Screening NLP App (Streamlit)'
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
        content: 'Pancarbo Greenfuels Pvt. Ltd. (Mar - Jun 2026). Designed automated Pandas ETL pipelines replacing manual processes, cutting weekly reporting preparation, and optimizing MySQL database schemas.'
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
