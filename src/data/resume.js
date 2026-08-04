export const resumeData = {
    personalInfo: {
        name: "Dawit Bayou Kassie",
        title: "Lead Senior Software Engineer",
        tagline: "Full-Stack, Cloud & DevOps Engineering | Applied AI",
        location: "Addis Ababa, Ethiopia",
        email: "dawitbk01@gmail.com",
        phone: "+251 921 640 101",
        linkedin: "https://www.linkedin.com/in/dawit-b-kassie",
        github: "https://github.com/DawitBK",
        languages: "English (Fluent) · Amharic (Native)",
        summary: "Senior software engineer with three-plus years of experience designing and building production systems, from multi-tenant SaaS platforms to enterprise-grade internal tools and centralized identity infrastructure. Currently leads architecture-level design and delivery for a multi-sector conglomerate's internal platform ecosystem, coordinating a mix of engineers and AI coding agents. Strongest in Node.js, NestJS, Express, and TypeScript, and comfortable owning a project end to end, from requirements gathering and BRD/FRS/TDD authorship through architecture, implementation, deployment, and verification."
    },
    stats: [
        { label: "Years of Experience", value: "3+" },
        { label: "Enterprise Platforms Built", value: "4" },
        { label: "Personal Projects", value: "5+" },
        { label: "Certifications", value: "2" },
    ],
    skills: {
        backend: ["Node.js", "NestJS", "Express.js", "TypeScript", "JavaScript (ES6+)", "REST & GraphQL API design", "WebSockets / Socket.IO", "Python (Django, FastAPI)", "Java (Spring Boot)"],
        architecture: ["Microservices", "Event-driven architecture", "Domain-Driven Design", "Clean Architecture", "Multi-tenant SaaS design", "Kafka", "RabbitMQ", "BullMQ", "Redis Streams", "Rate limiting & circuit breakers"],
        frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "SASS/SCSS", "Redux", "Zustand", "Context API", "Component-driven & micro-frontend architecture"],
        platformDevops: ["AWS (EC2, S3, RDS, Lambda, IAM)", "Microsoft Azure", "Docker", "Kubernetes", "Terraform", "Ansible", "GitHub Actions", "GitLab CI/CD", "Jenkins", "Prometheus & Grafana", "ELK stack", "Linux", "Nginx"],
        database: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Sequelize", "TypeORM", "Prisma", "Meilisearch", "Elasticsearch", "pgvector semantic search"],
        identitySecurity: ["JWT", "OAuth 2.0", "SSO", "RBAC", "Keycloak / Authentik / Zitadel", "OWASP practices", "AES-256-GCM encryption"],
        aiEngineering: ["LLM integration & RAG", "Vector search (pgvector, embeddings)", "Agentic system design", "AI-assisted development (Claude, Codex, Cursor)"],
        design: ["Figma", "Adobe Illustrator", "Photoshop", "Premiere Pro"]
    },
    skillGroupMeta: {
        backend: { label: "Backend & APIs" },
        architecture: { label: "Architecture & Async Systems" },
        frontend: { label: "Frontend" },
        platformDevops: { label: "Cloud & DevOps" },
        database: { label: "Databases & Search" },
        identitySecurity: { label: "Security & Identity" },
        aiEngineering: { label: "Applied AI" },
        design: { label: "Design" },
    },
    experience: [
        {
            title: "Lead Senior Software Engineer",
            company: "A multi-sector conglomerate",
            period: "2026 - Present",
            location: "Addis Ababa, Ethiopia (On-site)",
            current: true,
            description: "Leads architecture and engineering for enterprise-wide internal platforms supporting operations across a large diversified conglomerate, spanning multiple business units and thousands of users.",
            highlights: [
                "Owns architecture and delivery across several enterprise projects, including a document and archive management system, a guest management platform, a retail ERP system, and centralized SSO infrastructure, coordinating a mix of engineers and AI coding agents.",
                "Architects centralized identity and access management infrastructure, evaluating providers including Keycloak, Authentik, Zitadel, and a custom OIDC build against existing Active Directory infrastructure.",
                "Introduced the verification discipline the team now runs on: every task requires live HTTP request/response and SQL output as proof before it is marked done.",
                "Established CI/CD pipelines, containerized deployment environments, and infrastructure automation practices that reduce manual release overhead and improve deployment reliability.",
                "Owns architecture documentation, requirements specs, and executive reporting: BRDs, FRS, TDDs, CEO/CTO-facing presentations, and internal training material."
            ]
        },
        {
            title: "Web Developer",
            company: "Edge Communication Technologies P.L.C",
            period: "Sep 2025 - Oct 2025",
            location: "Addis Ababa, Ethiopia (On-site)",
            highlights: [
                "Developed and maintained responsive corporate platforms and internal business applications serving both public-facing and operational needs.",
                "Improved frontend consistency, deployment workflows, and platform performance, reducing page load times and standardizing component architecture.",
                "Collaborated with technical and operational teams to scope requirements and deliver production-ready systems on tight timelines."
            ]
        },
        {
            title: "Full Stack, Cloud & DevOps Engineer",
            company: "Freelance",
            period: "Jan 2023 - Aug 2025",
            location: "Remote",
            highlights: [
                "Designed, built, and deployed full-stack applications for clients across multiple industries using MERN and PERN architectures, from initial scoping through production launch.",
                "Built backend APIs, authentication systems, and database schemas tailored to each client's actual read/write patterns rather than a one-size-fits-all template.",
                "Implemented DevOps pipelines and containerized environments, standardizing build, test, and deploy stages with Docker, GitHub Actions, and cloud hosting platforms.",
                "Managed AWS and Azure deployments end to end, including networking, storage, compute, and IAM policy, configuring security and performance requirements per project."
            ]
        }
    ],
    education: [
        {
            degree: "BSc in Electrical & Computer Engineering",
            institution: "Addis Ababa Institute of Technology (AAiT)",
            year: "2022"
        },
        {
            degree: "Full-Stack & DevOps Engineer Certification",
            institution: "Addis Ababa University",
            year: "2025"
        }
    ],
    projects: {
        enterprise: [
            {
                title: "Enterprise Multi-Tenant Guest Management SaaS Platform",
                description: "A multi-tenant guest and visitor management platform built from the ground up as isolated microservices, currently the only one of these systems live in production.",
                tech: ["NestJS", "Next.js", "TypeScript", "PostgreSQL", "Redis", "BullMQ", "Docker", "Kubernetes", "WebSockets", "AWS"],
                highlights: [
                    "Architected as modular microservices with isolated tenant environments, shared infrastructure, and independent per-service scaling.",
                    "Shipped a 7-role guest-management platform integrating door-access hardware, OTP two-factor auth, QR/PIN credentialing, and ID scanning with watchlist screening.",
                    "Built the approval/escalation workflow engine and the WebSocket layer handling real-time credential delivery, plus the centralized auth and tenant lifecycle management reused across the platform.",
                    "Ran the QA retest pass, trained internal IT staff, and carried the project through UAT to go-live on AWS with full CI/CD and Kubernetes-based container orchestration."
                ],
                confidential: true
            },
            {
                title: "Enterprise Document & Archive Management System",
                description: "A document and archive management platform using RAG architecture, enabling natural-language retrieval over large internal repositories in place of keyword-only lookup.",
                tech: ["Node.js", "NestJS", "PostgreSQL", "MinIO", "Redis", "BullMQ", "Meilisearch", "pgvector", "RAG"],
                highlights: [
                    "Implemented semantic search with vector embeddings and pgvector, and integrated LLM-powered summarization and Q&A so non-technical staff can query large document sets without manual review.",
                    "Designed the RBAC and audit layer: permissions spanning many roles and users, hash-chained audit logs, AES-256-GCM encryption at rest, e-signatures, legal hold, and retention scheduling.",
                    "Built automated ingestion pipelines for document classification, metadata extraction, and lifecycle access control across multiple document formats and source systems."
                ],
                confidential: true
            },
            {
                title: "Centralized SSO & User Management Platform",
                description: "An identity platform providing single sign-on across a suite of distributed enterprise applications, eliminating isolated authentication.",
                tech: ["NestJS", "Node.js", "JWT", "OAuth 2.0", "RBAC", "PostgreSQL"],
                highlights: [
                    "Eliminated isolated per-app authentication and reduced credential management overhead across the application suite.",
                    "Implemented OAuth 2.0 flows and JWT-based session management with configurable token lifetimes, refresh strategies, and audit logging.",
                    "Designed tenant-aware RBAC with fine-grained permission scoping, supporting multi-role users across organizational hierarchies."
                ],
                confidential: true
            },
            {
                title: "Enterprise Resource Planning Platform",
                description: "A retail ERP platform covering point-of-sale, inventory, and back-office operations for a multi-location retail business.",
                tech: ["Next.js", "Express", "PostgreSQL"],
                highlights: [
                    "Built inventory and stock-management modules with real-time stock tracking, reorder thresholds, and synchronization across branches.",
                    "Developed bookkeeping and financial modules, including ledger entries, expense tracking, and financial ratio reporting, plus executive decision-support views summarizing sales, margin, and inventory turnover across branches.",
                    "Designed secure REST APIs and role-based access controls separating store-level operations from headquarters-level administration."
                ],
                confidential: true
            }
        ],
        personal: [
            {
                title: "Library Management System",
                description: "Full-featured library management system supporting borrowing and return workflows and staff roles.",
                tech: ["NestJS", "React", "PostgreSQL"],
                links: {
                    github: "https://github.com/DawitBK/Library_Management_System",
                    live: "https://library-management-system-lyart-pi.vercel.app/"
                }
            },
            {
                title: "Martronics",
                description: "Full-stack e-commerce platform with product listing, cart management, and checkout.",
                tech: ["React", "Node.js", "Express", "Swagger"],
                links: {
                    github: "https://github.com/DawitBK/martronics",
                    live: "https://martronics.vercel.app"
                }
            },
            {
                title: "FoodWagen",
                description: "Product listing web app with reusable components and form validation.",
                tech: ["Next.js", "TypeScript", "Tailwind UI"],
                links: {
                    github: "https://github.com/DawitBK/foodwagen",
                    live: "https://foodwagen-sand.vercel.app/"
                }
            },
            {
                title: "Food Delivery API",
                description: "Scalable REST API designed for food delivery platforms.",
                tech: ["Node.js", "REST API"],
                links: {
                    github: "https://github.com/DawitBK/food_delivery_api"
                }
            },
            {
                title: "EdgeCommTech",
                description: "Modern corporate website for Edge Communication Technologies.",
                tech: ["Web Development", "UI/UX"],
                links: {
                    live: "https://new.edgecomm-tech.com/"
                }
            }
        ]
    }
};
