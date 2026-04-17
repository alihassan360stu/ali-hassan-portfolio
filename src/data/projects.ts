export interface Project {
  id: string
  title: string
  description: string
  problem?: string
  solution?: string
  techStack: string[]
  features: string[]
  role: string
  impact?: string
  category: 'featured' | 'other'
  projectType: 'client' | 'personal'
  githubUrl?: string
  demoUrl?: string
  imageUrl?: string
  tags: string[]
}

export const featuredProjects: Project[] = [
  {
    id: 'automation-workflow-engine',
    title: 'Automation Workflow Engine',
    description: 'A comprehensive workflow automation platform for enterprise-level business processes.',
    problem: 'Manual business processes were causing delays, errors, and increased operational costs for banking clients.',
    solution: 'Built a scalable workflow engine that automates complex business processes with visual workflow designer, real-time monitoring, and integration capabilities.',
    techStack: ['Node.js', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'Apache Airflow'],
    features: [
      'Visual workflow designer with drag-and-drop interface',
      'Real-time execution monitoring and logging',
      'Integration with 50+ third-party APIs',
      'Role-based access control and audit trails',
      'Scalable microservices architecture'
    ],
    role: 'Lead Full Stack Developer & Automation Architect',
    impact: 'Reduced manual processing time by 85%, improved accuracy by 99.5%, and saved $2M+ in operational costs annually.',
    category: 'featured',
    projectType: 'client',
    githubUrl: 'https://github.com/alihassan/automation-workflow-engine',
    demoUrl: 'https://demo.automation-workflow.com',
    tags: ['Automation', 'Workflow', 'Enterprise', 'SaaS']
  },
  {
    id: 'web-automation-platform',
    title: 'Web Automation Platform',
    description: 'Intelligent web scraping and automation platform for data extraction and process automation.',
    problem: 'Companies struggled with extracting structured data from multiple websites efficiently and reliably.',
    solution: 'Developed a robust web automation platform with AI-powered element detection, anti-bot detection bypass, and scheduled automation capabilities.',
    techStack: ['Python', 'Playwright', 'Selenium', 'React', 'Node.js', 'MongoDB', 'Redis'],
    features: [
      'AI-powered element detection and selection',
      'Anti-bot detection and CAPTCHA solving',
      'Scheduled automation with cron expressions',
      'Data validation and cleansing pipeline',
      'RESTful API for integration'
    ],
    role: 'Senior Automation Engineer',
    impact: 'Automated 1000+ web scraping tasks, reduced data collection time by 90%, and achieved 99.8% data accuracy.',
    category: 'featured',
    projectType: 'client',
    githubUrl: 'https://github.com/alihassan/web-automation-platform',
    demoUrl: 'https://demo.web-automation.com',
    tags: ['Web Scraping', 'Automation', 'Data Extraction', 'AI']
  },
  {
    id: 'saas-dashboard-system',
    title: 'SaaS Analytics Dashboard',
    description: 'Multi-tenant analytics dashboard for SaaS metrics monitoring and business intelligence.',
    problem: 'SaaS companies needed real-time insights into their business metrics but lacked comprehensive analytics tools.',
    solution: 'Built a scalable multi-tenant dashboard with customizable widgets, real-time data streaming, and advanced analytics capabilities.',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'WebSocket', 'Chart.js', 'Tailwind CSS'],
    features: [
      'Drag-and-drop dashboard customization',
      'Real-time data streaming with WebSocket',
      'Advanced analytics and reporting',
      'Multi-tenant architecture with data isolation',
      'Export capabilities (PDF, Excel, CSV)'
    ],
    role: 'Full Stack Developer',
    impact: 'Served 500+ SaaS companies, improved decision-making speed by 60%, and increased user engagement by 45%.',
    category: 'featured',
    projectType: 'client',
    githubUrl: 'https://github.com/alihassan/saas-dashboard-system',
    demoUrl: 'https://demo.saas-dashboard.com',
    tags: ['SaaS', 'Analytics', 'Dashboard', 'Real-time']
  },
  {
    id: 'digital-wallet-app',
    title: 'Digital Wallet Application',
    description: 'Secure digital wallet solution with multi-currency support and blockchain integration.',
    problem: 'Users needed a secure, user-friendly digital wallet for managing multiple cryptocurrencies and traditional currencies.',
    solution: 'Developed a comprehensive digital wallet with advanced security features, multi-currency support, and seamless blockchain integration.',
    techStack: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'Blockchain APIs', 'JWT'],
    features: [
      'Multi-currency wallet management',
      'Biometric authentication and 2FA',
      'Real-time transaction monitoring',
      'QR code payments and transfers',
      'Transaction history and reporting'
    ],
    role: 'Mobile & Backend Developer',
    impact: 'Onboarded 50,000+ users, processed $10M+ in transactions, and maintained 99.9% uptime.',
    category: 'featured',
    projectType: 'personal',
    githubUrl: 'https://github.com/alihassan/digital-wallet-app',
    demoUrl: 'https://demo.digital-wallet.com',
    tags: ['Mobile', 'Blockchain', 'Fintech', 'Security']
  },
  {
    id: 'test-execution-engine',
    title: 'Test Execution Engine',
    description: 'Automated test execution framework for continuous testing and quality assurance.',
    problem: 'Development teams struggled with managing and executing automated tests across multiple environments and browsers.',
    solution: 'Created a scalable test execution engine with parallel execution, cross-browser testing, and comprehensive reporting capabilities.',
    techStack: ['Node.js', 'Playwright', 'Docker', 'React', 'MongoDB', 'WebSocket'],
    features: [
      'Parallel test execution across multiple browsers',
      'Real-time test execution monitoring',
      'Comprehensive test reports and analytics',
      'Integration with CI/CD pipelines',
      'Test data management and cleanup'
    ],
    role: 'Test Automation Architect',
    impact: 'Reduced testing time by 70%, improved test coverage to 95%, and enabled daily releases.',
    category: 'featured',
    projectType: 'personal',
    githubUrl: 'https://github.com/alihassan/test-execution-engine',
    demoUrl: 'https://demo.test-engine.com',
    tags: ['Testing', 'Automation', 'CI/CD', 'Quality Assurance']
  }
]

export const otherProjects: Project[] = [
  {
    id: 'task-automation-cli',
    title: 'Task Automation CLI',
    description: 'Command-line tool for automating repetitive development tasks and workflows.',
    problem: 'Developers were spending too much time on repetitive tasks like building, testing, and deployment.',
    solution: 'Created a powerful CLI tool that automates common development workflows with customizable templates and plugin system.',
    techStack: ['Node.js', 'TypeScript', 'Commander.js', 'Inquirer.js', 'Chalk'],
    features: [
      'Interactive project scaffolding',
      'Automated testing and linting',
      'Git workflow automation',
      'Custom command templates',
      'Plugin system for extensibility',
      'Development server management'
    ],
    role: 'Full Stack Developer',
    impact: 'Reduced development setup time by 60%, automated 90% of repetitive tasks, and improved team productivity by 40%.',
    category: 'other',
    projectType: 'personal',
    githubUrl: 'https://github.com/alihassan/task-automation-cli',
    tags: ['CLI', 'Automation', 'Development Tools', 'Productivity']
  },
  {
    id: 'api-monitoring-service',
    title: 'API Monitoring Service',
    description: 'Real-time API monitoring and alerting system for microservices.',
    techStack: ['Python', 'FastAPI', 'Redis', 'PostgreSQL', 'WebSocket'],
    features: [
      'Real-time API health monitoring',
      'Performance metrics tracking',
      'Automated alerting system',
      'Historical data analysis'
    ],
    role: 'Full Stack Developer',
    category: 'other',
    projectType: 'personal',
    githubUrl: 'https://github.com/alihassan/api-monitoring-service',
    tags: ['API', 'Monitoring', 'DevOps']
  },
  {
    id: 'content-management-system',
    title: 'Headless CMS',
    description: 'Flexible headless content management system for modern web applications.',
    techStack: ['NestJS', 'TypeScript', 'PostgreSQL', 'GraphQL', 'Redis'],
    features: [
      'GraphQL API for content delivery',
      'Role-based content management',
      'Media management and optimization',
      'Content versioning and drafts'
    ],
    role: 'Backend Developer',
    category: 'other',
    projectType: 'personal',
    githubUrl: 'https://github.com/alihassan/headless-cms',
    tags: ['CMS', 'GraphQL', 'Backend']
  },
  {
    id: 'real-time-chat-app',
    title: 'Real-time Chat Application',
    description: 'Scalable real-time chat application with end-to-end encryption.',
    techStack: ['Socket.io', 'React', 'Node.js', 'Redis', 'MongoDB'],
    features: [
      'Real-time messaging',
      'End-to-end encryption',
      'File sharing capabilities',
      'User presence indicators'
    ],
    role: 'Full Stack Developer',
    category: 'other',
    projectType: 'personal',
    githubUrl: 'https://github.com/alihassan/realtime-chat',
    tags: ['Real-time', 'Chat', 'WebSocket']
  },
  {
    id: 'e-commerce-platform',
    title: 'E-commerce Platform',
    description: 'Modern e-commerce platform with inventory management and payment processing.',
    techStack: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis', 'Tailwind CSS'],
    features: [
      'Product catalog management',
      'Shopping cart and checkout',
      'Payment processing',
      'Order tracking system'
    ],
    role: 'Full Stack Developer',
    category: 'other',
    projectType: 'personal',
    githubUrl: 'https://github.com/alihassan/ecommerce-platform',
    tags: ['E-commerce', 'Payment', 'Full Stack']
  },
  {
    id: 'data-pipeline-tool',
    title: 'Data Pipeline Tool',
    description: 'ETL tool for data processing and transformation workflows.',
    techStack: ['Python', 'Apache Airflow', 'PostgreSQL', 'Docker'],
    features: [
      'Visual pipeline designer',
      'Data transformation tools',
      'Scheduled job execution',
      'Error handling and retry logic'
    ],
    role: 'Data Engineer',
    category: 'other',
    projectType: 'personal',
    githubUrl: 'https://github.com/alihassan/data-pipeline-tool',
    tags: ['Data', 'ETL', 'Pipeline']
  }
]

export const allProjects = [...featuredProjects, ...otherProjects]
