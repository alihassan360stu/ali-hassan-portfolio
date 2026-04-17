export interface Experience {
  id: string
  company: string
  position: string
  location: string
  startDate: string
  endDate?: string
  current?: boolean
  description: string
  responsibilities?: string[]
  achievements: string[]
  technologies: string[]
  modules?: string[]
}

export const experiences: Experience[] = [
  {
    id: 'auton8',
    company: 'Auton8',
    position: 'Full Stack & Automation Engineer',
    location: 'Remote',
    startDate: 'March 2022',
    current: true,
    description: 'Built enterprise-grade automation systems, workflow engines, and SaaS-based execution platforms focused on web automation, API orchestration, and test execution systems. Designed and developed dynamic workflow modules for API-based operations, delivered scalable backend services, integrated real-time tracking/logging/reporting, and collaborated on a SaaS dashboard for managing automation workflows used in enterprise banking operations.',
    responsibilities: [
      'Designed and developed a workflow automation module for executing dynamic tasks and API-based operations',
      'Built scalable backend systems using Node.js, Express.js, NestJS, and Python',
      'Developed automation pipelines for web testing, data validation, and API testing',
      'Integrated real-time execution tracking, logging, and reporting systems',
      'Worked on enterprise-level automation solutions used in banking workflows',
      'Designed reusable automation modules for multiple internal systems',
      'Collaborated on a SaaS-style dashboard for managing automation workflows',
      'Led the revamp project of Auton8, improving architecture and system design',
      'Trained multiple employees on automation workflows and system usage'
    ],
    achievements: [
      'Reduced manual testing effort by 60% using automated workflow systems',
      'Improved execution performance of automation pipelines by 40%',
      'Built reusable automation frameworks used across multiple enterprise projects',
      'Delivered production-grade automation systems for real business operations',
      'Improved system reliability through structured error handling and logging'
    ],
    technologies: [
      'Next.js',
      'Node.js',
      'Express.js',
      'NestJS',
      'TypeScript',
      'Selenium',
      'Playwright',
      'Mocha',
      'Chai',
      'Electron.js',
      'Python',
      'PyJAB',
      'MongoDB',
      'PostgreSQL',
      'MySQL',
      'Linux Deployment',
      'GitHub'
    ],
    modules: [
      'Automation Workflow Engine',
      'Web Testing Framework',
      'Execution Monitoring Dashboard',
      'API Integration Layer for Automation Tasks',
      'JAB (Java Access Bridge) Automation System',
      'Admin Access & Role-Based User Management System',
      'Lead Revamp Module (Auton8 Project)',
      'Multi-Employee Task Distribution System'
    ]
  },
  {
    id: 'islamabad-software-house',
    company: 'Islamabad-Based Software House',
    position: 'Full Stack & Frontend Lead Engineer',
    location: 'Islamabad',
    startDate: '~1 Year',
    description: 'Worked as a Full Stack and Frontend Lead Engineer in a 12–15 member engineering team at an Islamabad-based software company. Responsible for leading frontend architecture, contributing to full-stack development, and delivering multiple enterprise and client-based solutions.',
    responsibilities: [
      'Worked as a Frontend Lead Engineer, responsible for UI architecture, code structure, and frontend best practices',
      'Contributed as a Full Stack Developer across multiple production-level applications',
      'Collaborated with a 12–15 member engineering team including backend developers, designers, and QA engineers',
      'Participated in system design, requirement analysis, and technical planning',
      'Built scalable and reusable frontend components with performance optimization',
      'Worked on both client-based and internal enterprise projects'
    ],
    achievements: [
      'Delivered multiple production-grade enterprise and client-based solutions in a team of 12–15 engineers'
    ],
    technologies: [
      'React.js',
      'Next.js',
      'Node.js',
      'Express.js',
      'Python',
      'Odoo',
      'MongoDB',
      'PostgreSQL',
      'MySQL',
      'Redis',
      'Tailwind CSS',
      'MUI',
      'GitHub',
      'Linux Deployment'
    ],
    modules: [
      'ERP-Based E-Commerce Platform (Full Ownership)',
      'Hotel Management & Reservation System (Tazamun Project)',
      'KPI Dashboard System',
      'Odoo-based systems and integrations',
      'Internal enterprise applications',
      'Workflow automation module improvements'
    ]
  }
]

export const education = [
  {
    id: 'bachelors',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Karachi',
    location: 'Karachi, Pakistan',
    startDate: '2016',
    endDate: '2020',
    gpa: '3.2/4.0'
  }
]
