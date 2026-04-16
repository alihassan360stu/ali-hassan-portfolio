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
    description: 'Building scalable, multi-tenant SaaS applications with modern architecture and best practices.',
    features: [
      'Multi-tenant architecture design',
      'Scalable database design',
      'Subscription management',
      'Analytics and reporting',
      'API development and documentation'
    ],
    icon: 'cloud',
    category: 'Development'
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    description: 'Designing and implementing automated workflows to streamline business processes and reduce manual effort.',
    features: [
      'Process analysis and optimization',
      'Custom workflow engine development',
      'Integration with existing systems',
      'Real-time monitoring and logging',
      'Error handling and recovery'
    ],
    icon: 'git-branch',
    category: 'Automation'
  },
  {
    id: 'web-automation',
    title: 'Web Automation',
    description: 'Creating robust web automation solutions for testing, data extraction, and process automation.',
    features: [
      'Web scraping and data extraction',
      'Automated testing frameworks',
      'Browser automation',
      'CAPTCHA solving integration',
      'Anti-detection techniques'
    ],
    icon: 'globe',
    category: 'Automation'
  },
  {
    id: 'api-development',
    title: 'API Development',
    description: 'Building RESTful and GraphQL APIs with proper documentation, testing, and security measures.',
    features: [
      'RESTful API design',
      'GraphQL development',
      'API documentation',
      'Authentication and authorization',
      'Rate limiting and caching'
    ],
    icon: 'api',
    category: 'Development'
  },
  {
    id: 'performance-optimization',
    title: 'Performance Optimization',
    description: 'Optimizing application performance, database queries, and infrastructure for better user experience.',
    features: [
      'Database query optimization',
      'Caching strategies',
      'Code optimization',
      'Infrastructure tuning',
      'Performance monitoring'
    ],
    icon: 'zap',
    category: 'Optimization'
  },
  {
    id: 'bug-fixing-optimization',
    title: 'Bug Fixing & Optimization',
    description: 'Identifying and fixing bugs, optimizing code quality, and improving application reliability.',
    features: [
      'Bug identification and fixing',
      'Code refactoring',
      'Performance improvements',
      'Security vulnerability fixes',
      'Code review and optimization'
    ],
    icon: 'bug',
    category: 'Optimization'
  }
]
