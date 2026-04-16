export interface Experience {
  id: string
  company: string
  position: string
  location: string
  startDate: string
  endDate?: string
  current?: boolean
  description: string
  achievements: string[]
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    id: 'auton8',
    company: 'Auton8',
    position: 'Full Stack Developer / Automation Engineer',
    location: 'Remote',
    startDate: '2022',
    endDate: 'Present',
    current: true,
    description: 'Leading the development of automation platforms and workflow systems for enterprise clients. Building scalable SaaS solutions that streamline business processes and reduce manual effort.',
    achievements: [
      'Built comprehensive automation workflow engine serving 50+ enterprise clients',
      'Designed and implemented real-time execution system processing 1M+ tasks daily',
      'Reduced client operational costs by 60% through automation solutions',
      'Led a team of 5 developers in building scalable microservices architecture',
      'Implemented advanced security measures for financial industry compliance'
    ],
    technologies: [
      'Node.js', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 
      'Docker', 'Apache Airflow', 'Selenium', 'Playwright', 'AWS'
    ]
  },
  {
    id: 'previous-company',
    company: 'Tech Solutions Inc.',
    position: 'Software Developer',
    location: 'Karachi, Pakistan',
    startDate: '2020',
    endDate: '2022',
    description: 'Developed web applications and automation tools for various clients. Gained experience in full-stack development and test automation.',
    achievements: [
      'Developed 10+ web applications using React and Node.js',
      'Implemented automated testing frameworks reducing bugs by 40%',
      'Built custom automation scripts for data processing',
      'Collaborated with cross-functional teams to deliver projects on time'
    ],
    technologies: [
      'React', 'Node.js', 'Express.js', 'MongoDB', 'Jest', 
      'Cypress', 'Python', 'Selenium'
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
    gpa: '3.8/4.0'
  }
]
