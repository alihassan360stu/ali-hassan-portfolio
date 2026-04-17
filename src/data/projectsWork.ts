export type ProjectCategory = 'client' | 'automation' | 'personal'

export interface ProjectMedia {
  screenshots?: string[]
  videoUrl?: string
}

export interface WorkProject {
  id: string
  category: ProjectCategory
  title: string
  description: string
  vip?: boolean
  experienceLevel?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Enterprise'
  role?: string
  contributions?: string[]
  features?: string[]
  techStack: string[]
  badge?: 'Confidential' | 'Automation' | 'Featured'
  liveDemoUrl?: string
  sourceCodeUrl?: string
  media?: ProjectMedia
}

export const workProjects: WorkProject[] = [
  {
    id: 'client-auton8-saas',
    category: 'client',
    title: 'Auton8 Automation Management (SaaS)',
    description:
      'SaaS-based automation testing platform to manage and execute test cases across web, API, and performance testing with org-based collaboration, execution history, and reporting.',
    vip: true,
    experienceLevel: 'Enterprise',
    role: 'Full Stack Developer',
    contributions: [
      'Developed core modules for test case management and data-driven execution',
      'Built multiple REST APIs for test execution and reporting',
      'Implemented real-time features using WebSockets and polling',
      'Worked on scheduling and execution workflows',
      'Contributed to backend execution engine (Selenium-based automation)'
    ],
    features: [
      'Secure authentication and role-based access control (multi-organization support)',
      'End-to-end test case management (create, execute, and track history)',
      'Data-driven test execution with dynamic input handling',
      'API and performance testing capabilities',
      'Real-time test execution updates using WebSockets and polling',
      'Interactive dashboards with execution reports and analytics',
      'Test case creation via manual input and recorder-based automation',
      'Scheduled test execution and workflow management'
    ],
    techStack: [
      'JavaScript',
      'TypeScript',
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Selenium',
      'Mocha',
      'Material UI'
    ],
    badge: 'Confidential',
    media: {
      screenshots: [
        '/projects/auton8/create test.jpg',
        '/projects/auton8/step create.jpg',
        '/projects/auton8/test list.jpg',
        '/projects/auton8/run details.jpg',
        '/projects/auton8/test result.jpg',
        '/projects/auton8/api creation.jpg',

      ]
    }
  },
  {
    id: 'client-auton8-execution-engine',
    category: 'client',
    title: 'Auton8 Execution Engine (Microservices System)',
    description:
      'Distributed microservices execution system for large-scale automated test runs in enterprise environments. Branch-based grouping decouples execution from the main app and streams results back in real time.',
    vip: true,
    experienceLevel: 'Enterprise',
    role: 'Full Stack Developer',
    contributions: [
      'Designed and implemented branch-based execution architecture',
      'Built integration between main system and execution engine',
      'Developed APIs for fetching and managing test execution data',
      'Implemented real-time result streaming between services',
      'Worked on execution orchestration (sequential & parallel processing)',
      'Contributed to scalable microservices architecture for test automation'
    ],
    features: [
      'Decoupled execution system using microservices architecture',
      'Branch-based test case grouping and management',
      'Support for large-scale parallel and sequential test execution',
      'Reduced load on main application server',
      'Real-time execution result streaming',
      'Centralized execution history and reporting system',
      'Scalable architecture for handling 200+ concurrent test executions',
      'Integration with Selenium-based automation engine'
    ],
    techStack: [
      'JavaScript',
      'TypeScript',
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Selenium',
      'WebSockets',
      'Streams',
      'Mocha',
      'HTML',
      'CSS'
    ],
    badge: 'Confidential',
    media: {
      screenshots: [
        '/projects/microservices/create multi branch.jpg',
        '/projects/microservices/branch list.jpg',
        '/projects/microservices/status.jpg'
      ]
    }
  },
  {
    id: 'client-finance-automation',
    category: 'client',
    title: 'Auton8 Workflow Automation Management Tool (SaaS)',
    description:
      'A comprehensive workflow automation management platform developed for enterprise clients (e.g., banking sector) to design, manage, and execute complex workflows at scale. Users can create nested workflows with scheduling, parallel execution, live monitoring, detailed logs, breakpoints, re-execution of specific jobs, and stop controls — all backed by robust role-based access control and bulk workflow management.',
    vip: true,
    experienceLevel: 'Enterprise',
    role: 'Full Stack Developer',
    contributions: [
      'Designed and developed workflow management modules',
      'Implemented nested workflow architecture and execution logic',
      'Built real-time live status updates',
      'Developed APIs for job control (execute, stop, re-run specific jobs)',
      'Implemented role-based access control system with multiple permission levels',
      'Worked on parallel execution handling and scheduling system',
      'Built bulk workflow edit module for large-scale updates'
    ],
    features: [
      'Workflow creation and management with nested workflow support',
      'Job management (routine, service, COB processes)',
      'Workflow scheduling and automated execution',
      'Parallel and sequential workflow execution',
      'Real-time execution monitoring with progress tracking',
      'Detailed task logs and execution history',
      'Breakpoint support during execution for debugging',
      'Re-execution of specific jobs without restarting full workflow',
      'Ability to stop/kill running executions',
      'Role-based access control (30+ permission types)',
      'Admin controls for user management and organization-level access',
      'Multi-organization support with user sharing capabilities',
      'Bulk workflow edit functionality (update multiple workflows simultaneously)'
    ],
    techStack: [
      'JavaScript',
      'TypeScript',
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'WebSockets',
      'Cron',
      'Apache Airflow',
      'Python',
      'PostgreSQL',
      'Polling',
      'HTML',
      'CSS',
      'Material UI'
    ],
    badge: 'Confidential',
    media: {
      screenshots: [
        '/projects/workflow/workflow_design.jpg',
        '/projects/workflow/nested_workflow.jpg',
        '/projects/workflow/executions.jpg',
        '/projects/workflow/workflow_create.jpg',
        '/projects/workflow/update_properties.jpg',
      ]
    }
  },
  {
    id: 'automation-n8n-lead-routing',
    category: 'automation',
    title: 'JAB Automation Agent',
    description:
      'Desktop automation agent built in Python to automate a complex Java-based application using Java Accessibility via the Java Access Bridge (JAB). Runs as a terminal agent that dynamically detects and loads automation modules from JSON configurations, captures step-by-step screenshots, and generates detailed execution reports. Supports both single runs and bulk execution via CSV-based configurations. (Confidential: source code, live URLs, screenshots, and application details cannot be shared.)',
    vip: true,
    experienceLevel: 'Advanced',
    role: 'Python Automation Developer',
    contributions: [
      'Designed and developed the complete automation agent in Python',
      'Implemented Java UI automation using Java Access Bridge (JAB)',
      'Built dynamic module loading system using JSON configurations',
      'Developed execution engine for step-by-step automation',
      'Implemented screenshot capturing and detailed reporting system',
      'Added bulk execution feature using CSV configurations',
      'Designed terminal-based user interaction flow'
    ],
    features: [
      'Automation of Java desktop applications using Java Access Bridge (JAB)',
      'Terminal-based agent for execution',
      'Dynamic module loading using JSON configuration',
      'Step-by-step screenshots and summaries',
      'Detailed execution reports (time, status, errors)',
      'Bulk execution support using CSV files',
      'Automatic detection of modules and execution files'
    ],
    techStack: [
      'Python',
      'Java Access Bridge (JAB)',
      'JSON',
      'CSV',
      'CLI'
    ],
    badge: 'Confidential'
  },
  {
    id: 'personal-portfolio',
    category: 'personal',
    title: 'Developer Portfolio',
    description:
      'A high-end personal portfolio built to showcase enterprise automation and full-stack work with a VIP, mobile-first UI. Includes structured sections (Hero, About, Skills, Projects, Experience, Services, Contact), expandable project case studies with media viewer, and refined UX for performance, readability, and accessibility.',
    vip: true,
    experienceLevel: 'Advanced',
    role: 'Full Stack Developer (Owner)',
    contributions: [
      'Designed and implemented the complete UI/UX, layout system, and responsive behavior (mobile-first)',
      'Built reusable section components and consistent styling with Tailwind + glassmorphism design language',
      'Implemented an advanced Projects & Work system with tabs, VIP badges, detailed modal case studies, and fullscreen media viewer',
      'Fixed hydration-safe client logic for window-based behavior (mobile detection / reduced motion)',
      'Improved accessibility with semantic structure, button labels, and keyboard close support for overlays'
    ],
    features: [
      'VIP, professional design with glass panels, gradients, and strong typography hierarchy',
      'Projects & Work tabs: Client / Automation / Personal with fast filtering and counts',
      'Project case study modal with responsibilities, features, tech stack, and media gallery',
      'Fullscreen image viewer with visible close button and ESC support',
      'Mobile optimizations: reduced heavy animations, tighter spacing, better readability',
      'Stable header behavior with smooth anchor scrolling offsets',
      'Expandable experience cards to keep the page compact while preserving detail',
      'Contact section with structured cards + social links'
    ],
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Lucide Icons'
    ],
    badge: 'Featured',
    media: {
      screenshots: [
        '/projects/portflolio/hero_section .jpg',
        '/projects/portflolio/skills.jpg',
        '/projects/portflolio/projects.jpg',
        '/projects/portflolio/details.jpg',
        '/projects/portflolio/experience.jpg',
        '/projects/portflolio/services.jpg',
        '/projects/portflolio/in_touch .jpg',
      ]
    }
  }
]
