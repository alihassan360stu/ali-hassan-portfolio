export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
  category: string
}

export const services: Service[] = [
  {
    id: 'saas-development',
    title: 'SaaS Development',
    description: 'Build scalable SaaS platforms with secure architecture, authentication, dashboards, and API-driven backend systems.',
    features: [
      'Secure authentication and role-based access',
      'Dashboards and admin panels',
      'API-first backend design',
      'Scalable database and data modeling',
      'Deployment-ready architecture'
    ],
    icon: 'cloud',
    category: 'Development'
  },
  {
    id: 'web-automation-engineering',
    title: 'Web Automation Engineering',
    description: 'Automate complex workflows using Java Access Bridge (JAB) and Selenium to reduce manual effort and increase efficiency.',
    features: [
      'Java Access Bridge (JAB) automation for desktop apps',
      'Selenium browser automation',
      'Reliable selectors, retries, and error handling',
      'Automation reporting and logs',
      'Workflow analysis and optimization'
    ],
    icon: 'globe',
    category: 'Automation'
  },
  {
    id: 'backend-api-development',
    title: 'Backend & API Development',
    description: 'Design and develop high-performance REST APIs and backend systems using Node.js, Express, and TypeScript.',
    features: [
      'REST API design and implementation',
      'Authentication and authorization',
      'Validation, error handling, and logging',
      'API documentation and testing',
      'Integration with databases and external services'
    ],
    icon: 'api',
    category: 'Development'
  },
  {
    id: 'performance-optimization',
    title: 'Performance & System Optimization',
    description: 'Optimize applications for speed, scalability, and production-grade reliability.',
    features: [
      'Frontend performance improvements',
      'Backend performance profiling',
      'Caching strategies',
      'Scalability and load considerations',
      'Production monitoring approach'
    ],
    icon: 'zap',
    category: 'Optimization'
  }
]
