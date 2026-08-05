export type Project = {
  title: string;
  description: string;
  url?: string;
  github?: string;
  period?: string;
  icon?: string;
  featured?: boolean;
  tags?: string[];
  features?: string[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  employment?: string;
  description: string;
  points: string[];
  tags: string[];
};

export const social = {
  email: "veerabhadraswamy97@gmail.com",
  github: "https://github.com/ultra-hash/",
  codepen: "https://codepen.io/ultrahash/",
  linkedin: "https://www.linkedin.com/in/veerabhadra-swamy-uppu/",
};

export const skills = {
  LANGUAGE: ["Core Java", "Python", "JavaScript (ES6)", "SQL", "HTML", "CSS"],
  FRAMEWORKS: ["Express", "React", "Node", "Django", "Bootstrap"],
  DATABASES: ["MySQL", "SQLite", "MongoDB"],
  TOOLS: ["Git & Github", "Docker", "Jenkins", "Linux", "Nginx"],
  "WINDCHILL CUSTOMIZATION": [
    "Custom Parts",
    "ACLs",
    "Workflows",
    "OIRs",
    "Classification",
    "Custom Actions",
    "Event Listeners",
    "OOTB Loader Enhancements",
  ],
  "WINDCHILL ADMINISTRATION": [
    "Installation",
    "CPS",
    "Rehost",
    "Clone",
    "Migration",
    "License Management",
    "Reports",
    "Environment Management",
  ],
};

export const featuredProjects: Project[] = [
  {
    title: "URL Shortener API",
    period: "Oct 2023",
    github: "https://github.com/ultra-hash/urlshortner-expressjs-api",
    description:
      "Scalable, production-grade REST API that generates concise short URLs and equips users with key performance metrics to make informed, data-driven decisions.",
    features: [
      "Designed and implemented a relational database schema for efficient storage and retrieval, with full CRUD operations on MySQL",
      "Hardened API security — authentication tokens to prevent unauthorized access and encryption of sensitive data",
      "Performance-tested with 3,000 virtual users: 746.95ms avg request time, 10,01,787 requests at 1600.35 req/s over 10 minutes, 99% success rate",
      "Leveraged Docker for simplified, consistent deployment across environments",
      "Comprehensive API documentation — input params, data formats, authentication, status codes, and error messages",
    ],
    tags: ["Express JS", "REST API", "JWT Token", "Authorization", "MySQL", "Docker", "JavaScript"],
    featured: true,
  },
  {
    title: "Web Hosting Platform",
    period: "Sep 2022",
    github: "https://github.com/ultra-hash/webhosting-platform",
    description:
      "End-to-end web hosting platform empowering users to deploy and manage their own static or PHP-based dynamic websites. Combines secure authentication, automated infrastructure provisioning, and file delivery — each account gets up to 5 custom subdomains and an auto-provisioned, permission-scoped MySQL database.",
    features: [
      "Secure user registration, login, and session management",
      "Dual-path verification — email verification and password reset for account safety",
      "Up to 5 custom subdomains of the user's choice",
      "Automated MySQL database provisioning per user at email verification — isolated with least-privilege permissions",
      "Self-service website file uploads per owned subdomain",
      "Automatic incident detection and instant admin notifications keep the platform observable",
    ],
    tags: ["PHP", "MySQL", "Subdomains", "Web Hosting", "Authentication"],
    featured: true,
  },
  {
    title: "NxtTrends",
    period: "Jun 2023",
    description:
      "Responsive, modern e-commerce experience inspired by Amazon and Flipkart — bringing a full retail flow online with secure, authenticated sessions.",
    url: "https://uvswamynxttrend.ccbp.tech/",
    github: "https://github.com/ultra-hash/nxtTrends",
    features: [
      "Built login, home, products, product-details, and cart pages with React Router, reusable components, and form inputs",
      "Persisted user session via JWT in local storage, authorizing every API call via request headers",
      "Filter products by category, rating, and search input with ease",
      "Protected routes redirect unauthenticated users to login, securing home, products, details, and cart",
    ],
    tags: ["React JS", "Routing", "REST API Calls", "Local Storage", "JWT Token", "Context API", "Authentication"],
    featured: true,
  },
  {
    title: "NxtWatch",
    period: "Aug 2023",
    description:
      "YouTube-inspired streaming platform with full authentication — browse Trending, Gaming, and Saved videos, search and play detailed video views, and toggle Light/Dark themes.",
    url: "https://uvswamynxtwatch.ccbp.tech/",
    github: "https://github.com/ultra-hash/NxtWatch",
    features: [
      "Implemented login, home, trending, gaming, and saved-videos pages with React Router, components, props, state, lists, event handlers, and form inputs",
      "Authenticated users via a login POST API call with username and password",
      "Persisted login with JWT in local storage, authorizing subsequent API requests via headers",
      "Protected routes redirect unauthenticated users to the login page across all restricted views",
    ],
    tags: ["React JS", "Routing", "REST API Calls", "Local Storage", "JWT Token", "Context API", "Authentication"],
    featured: true,
  },
  {
    title: "Serverless HRMS",
    period: "In Progress",
    description:
      "A serverless Human Resource Management System designed for scalability and cost efficiency — leveraging a serverless architecture to handle HR workflows without managing infrastructure.",
    tags: ["Serverless", "HRMS", "Cloud", "REST APIs"],
    featured: true,
  },
];

export const otherProjects: Project[] = [
  {
    title: "Jobby",
    url: "https://uvswamyjobby.ccbp.tech/",
    description:
      "Developed a job portal application. Users can log in to access job posts, and filters can be applied to retrieve specific job data. Leveraged React class components for a modular, organized, and maintainable structure.",
    tags: [
      "React",
      "React-router-dom",
      "Authentication",
      "RESTFul-API's",
      "Class Components",
      "CSS",
    ],
  },
  {
    title: "NxtSlides",
    description:
      "Designed a React-based slide app with a two section layout. The left section features slide previews, dynamically updating based on changes in the active large slide. Users can seamlessly add new slides.",
    tags: ["React", "Class Components", "State management", "CSS"],
  },
  {
    title: "Match Game",
    period: "2023",
    url: "https://uvswamymatch.ccbp.tech/",
    description:
      "Developed a React-based image matching game featuring three categories (fruits, animals, places). Select the correct image within 60 seconds to score high.",
    tags: ["React", "Class components", "State management", "CSS"],
  },
];

export const experience: Experience[] = [
  {
    role: "PLM Implementation Support Engineer",
    company: "Datafrond",
    period: "Aug 2024 - Present",
    location: "Hyderabad, Telangana, India · Remote",
    employment: "Full-time",
    description:
      "Evaluate and implement new technologies while owning multiple projects end-to-end — from technical planning and stakeholder communication to execution tracking and release management.",
    points: [
      "Partnered directly with the CEO/CTO to translate business strategy into technical roadmaps, define implementation plans, decompose complex initiatives into actionable workstreams, and lead execution by delegating work across support engineers through successful project delivery.",
      "Engineered and delivered customer-specific PTC Windchill customizations—including workflows, soft types, OIRs, lifecycle templates, and configuration-driven business rules—to align enterprise PLM processes with customer requirements, streamline engineering workflows, and improve operational efficiency.",
      "Owned the end-to-end architecture, implementation, and production delivery of automated Windchill CI/CD pipelines using Jenkins and Nexus, automating build, artifact management, and deployment processes. Standardized and successfully deployed the solution across four enterprise customer implementations, improving release efficiency, deployment consistency, and end-to-end release traceability.",
      "Developed Python and SQL automation for ETVL (Extract, Transform, Validate, and Load) activities supporting enterprise PLM migrations to PTC Windchill, while leveraging and extending out-of-the-box data loaders with custom loading capabilities to streamline migration workflows, improve data quality, and reduce dataset evaluation time from hours to minutes (~95%).",
      "Designed and delivered internal automation platforms and business-critical integrations that transformed operational workflows, enabling real-time data visibility, compliance monitoring, and executive reporting. Automated cross-system validation and reporting processes, replacing manual weekend audits with continuous daily visibility. Eliminated recurring third-party subscription costs, reduced redundant cross-system updates by ~2 hours per employee per week, and saved management an additional ~2 hours weekly in report consolidation and decision support.",
      "Installed, configured, and supported enterprise PTC Windchill environments, performing CPS upgrades, rehosting, Remote File Server configuration, and CAD worker integration (Creo, SolidWorks, Inventor, and Document Worker), while diagnosing and resolving complex platform issues.",
    ],
    tags: ["Windchill", "Python", "Jenkins", "Nexus", "CI/CD", "SQL", "Data Migration"],
  },
  {
    role: "PLM Trainee L1",
    company: "Datafrond",
    period: "Mar 2024 - Aug 2024",
    description:
      "Built a strong foundation in product lifecycle management and Windchill, while contributing to operations and customer support.",
    points: [
      "Learned Windchill and deepened understanding of product lifecycle management",
      "Resolved customer queries and problems related to Windchill with high satisfaction",
      "Performed weekly Windchill monitoring to maintain system integrity and performance",
      "Developed automated Windchill builds, deployments, and installations for efficient operations",
    ],
    tags: ["Windchill", "Python", "Jenkins", "Automation"],
  },
  {
    role: "Python Developer",
company: "Freelance",
    period: "Oct 2022 - Nov 2022",
    location: "Remote",
    description:
      "Built and automated a live stock-market data pipeline tailored to client requirements.",
    points: [
      "Developed and automated a process for fetching live stock market data",
      "Processed and stored data in Excel sheets per client requirements and data models",
      "Implemented dynamic data fetching based on futures and options expiries for better accuracy",
      "Completed the project within two weeks and provided ongoing support for bug fixes",
    ],
    tags: ["Python", "Integration", "Automation", "Excel"],
  },
];

export const badges = [
  "d899355c-5ca1-4c4a-8b8a-8d8e8cdf3f83",
  "b869545d-38ef-483c-9187-3b888407a2cc",
  "67eabf9d-6eac-48f7-9fc4-cee87acbd7dd",
  "c0d547e0-46c2-48a3-b1e8-8e4ff5ec865f",
  "8e775cd0-eaf5-4614-a615-04738e279089",
];