export interface Skill {
  name: string
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  category: string
}

export const skills: Skill[] = [
  // Web Development
  { name: 'React.js', level: 'expert', category: 'Web Development' },
  { name: 'Next.js', level: 'expert', category: 'Web Development' },
  { name: 'Node.js', level: 'advanced', category: 'Web Development' },
  { name: 'Express.js', level: 'advanced', category: 'Web Development' },
  { name: 'NestJS', level: 'intermediate', category: 'Web Development' },
  { name: 'TypeScript', level: 'expert', category: 'Web Development' },
  { name: 'JavaScript', level: 'expert', category: 'Web Development' },
  { name: 'Tailwind CSS', level: 'expert', category: 'Web Development' },
  
  // Automation
  { name: 'Selenium', level: 'expert', category: 'Automation' },
  { name: 'Playwright', level: 'expert', category: 'Automation' },
  { name: 'Mocha', level: 'advanced', category: 'Automation' },
  { name: 'Chai', level: 'advanced', category: 'Automation' },
  { name: 'Apache Airflow', level: 'intermediate', category: 'Automation' },
  { name: 'n8n', level: 'advanced', category: 'Automation' },
  { name: 'Puppeteer', level: 'advanced', category: 'Automation' },
  
  // Desktop Automation
  { name: 'Pywinauto', level: 'advanced', category: 'Desktop Automation' },
  { name: 'PyJAB', level: 'intermediate', category: 'Desktop Automation' },
  { name: 'AutoHotkey', level: 'intermediate', category: 'Desktop Automation' },
  
  // Databases
  { name: 'MySQL', level: 'advanced', category: 'Databases' },
  { name: 'PostgreSQL', level: 'advanced', category: 'Databases' },
  { name: 'MongoDB', level: 'intermediate', category: 'Databases' },
  { name: 'Redis', level: 'intermediate', category: 'Databases' },
  
  // DevOps & Tools
  { name: 'Linux', level: 'advanced', category: 'DevOps & Tools' },
  { name: 'GitHub', level: 'expert', category: 'DevOps & Tools' },
  { name: 'Docker', level: 'intermediate', category: 'DevOps & Tools' },
  { name: 'CI/CD', level: 'advanced', category: 'DevOps & Tools' },
  { name: 'AWS', level: 'intermediate', category: 'DevOps & Tools' },
  
  // Mobile Development
  { name: 'React Native', level: 'intermediate', category: 'Mobile Development' },
  { name: 'TypeScript (Mobile)', level: 'advanced', category: 'Mobile Development' },
  { name: 'Expo', level: 'intermediate', category: 'Mobile Development' },
]

export const skillCategories = Array.from(new Set(skills.map(skill => skill.category)))
