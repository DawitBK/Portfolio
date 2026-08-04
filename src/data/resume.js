export const resumeData = {
    personalInfo: {
        name: "Dawit Bayou Kassie",
        title: "Lead Senior Software Engineer",
        tagline: "Full-Stack Development · DevOps & Platform Engineering · Applied AI",
        location: "Addis Ababa, Ethiopia",
        email: "dawitbk01@gmail.com",
        phone: "+251 921 640 101",
        linkedin: "https://www.linkedin.com/in/dawit-b-kassie",
        github: "https://github.com/DawitBK",
        summary: "Solo/near-solo full-stack and platform engineer who designs, builds, and operates production enterprise systems end to end — backend, frontend, database, identity, and infrastructure. Currently the primary engineer behind a multi-sector conglomerate's internal platform ecosystem, spanning identity & access management, document management, guest management, and meeting-room scheduling, while authoring the organization's engineering standards and driving its DevOps and applied-AI modernization roadmap."
    },
    stats: [
        { label: "Years of Experience", value: "3+" },
        { label: "Enterprise Platforms Built", value: "4" },
        { label: "Personal Projects", value: "5+" },
        { label: "Certifications", value: "2" },
    ],
    skills: {
        frontend: ["React", "Next.js", "Vue", "Angular", "TypeScript", "Tailwind CSS", "SASS/SCSS", "Framer Motion"],
        backend: ["Node.js", "Express.js", "NestJS", "REST & Webhook APIs", "Socket.IO", "Microservices"],
        database: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Redis", "Prisma", "Sequelize", "TypeORM"],
        platformDevops: ["Docker & Docker Compose", "CI/CD", "Apache & Nginx (reverse proxy)", "Linux server administration", "Git", "Vercel", "Railway"],
        identitySecurity: ["OIDC / OAuth 2.0 identity providers", "JWT auth", "RBAC & ACL permission models", "Multi-tenant architecture", "HMAC-signed webhooks"],
        aiEngineering: ["AI-assisted development workflows (Claude Code)", "Agentic coding & multi-agent orchestration", "Prompt engineering for dev tooling"],
        design: ["Figma", "Adobe Illustrator", "Photoshop", "Premiere Pro"]
    },
    skillGroupMeta: {
        frontend: { label: "Frontend", color: "brand" },
        backend: { label: "Backend", color: "violet" },
        database: { label: "Database", color: "emerald" },
        platformDevops: { label: "Platform & DevOps", color: "amber" },
        identitySecurity: { label: "Identity & Security", color: "rose" },
        aiEngineering: { label: "Applied AI & Automation", color: "cyan" },
        design: { label: "Design", color: "fuchsia" },
    },
    experience: [
        {
            title: "Lead Senior Software Engineer",
            company: "A multi-sector conglomerate",
            period: "2026 – Present",
            location: "Addis Ababa, Ethiopia (On-site)",
            current: true,
            description: "Sole/near-solo engineer responsible for architecting and delivering the organization's internal enterprise platform ecosystem end to end, while authoring its engineering standards and driving DevOps and applied-AI modernization.",
            highlights: [
                "Designed and built an enterprise identity & access management platform — an OIDC-based identity provider, admin console, and unified application launcher — serving as the single sign-on layer across every internal system.",
                "Architected a multi-tenant document & records management system with hierarchical organization/department/folder structure, role- and ACL-based permissions, e-signing, and hash-chained audit-logged approval workflows.",
                "Built a guest & visitor management system and a meeting-room booking platform, each integrated into the shared identity layer through a distinct, purpose-fit single sign-on pattern.",
                "Authored a 20-document internal engineering standards set covering architecture, deployment, and SDLC practices, and is now driving the organization's DevOps and applied-AI modernization roadmap.",
                "Operates as the platform's primary technical authority, having absorbed full ownership of a former colleague's systems with no formal handover."
            ]
        },
        {
            title: "Web Developer & Visual Designer",
            company: "Edge Communication Technologies P.L.C",
            period: "Sep 2025 – Oct 2025",
            location: "Addis Ababa, Ethiopia (On-site)",
            description: "Developed and optimized a modern, responsive corporate website. Improved UI/UX consistency and brand-aligned design quality."
        },
        {
            title: "Freelance Full-Stack Developer, DevOps Engineer & Creative Designer",
            company: "Freelance",
            period: "Jan 2023 – Present",
            highlights: [
                "Built and deployed full-stack applications using React, NestJS, Express, and PostgreSQL, with secure APIs and Dockerized deployments.",
                "Designed responsive UI layouts for web and mobile apps, and created logos, icons, and full branding systems.",
                "Edited promotional, corporate, and explainer videos, applying transitions, sound design, captions, and visual effects."
            ]
        }
    ],
    education: [
        {
            degree: "BSc in Electrical & Computer Engineering",
            institution: "Addis Ababa Institute of Technology (AAiT)",
            year: "Oct 2022"
        },
        {
            degree: "Full-Stack & DevOps Engineer Certification",
            institution: "Addis Ababa University",
            year: "May 2025"
        }
    ],
    projects: {
        enterprise: [
            {
                title: "Enterprise Identity & Access Management Platform",
                description: "Centralized OIDC-based identity provider, admin console, and unified application launcher acting as the single sign-on layer for the organization's internal systems.",
                tech: ["Node.js", "Express", "OIDC", "Next.js", "JWT", "PostgreSQL"],
                confidential: true
            },
            {
                title: "Multi-Tenant Document & Records Management System",
                description: "Enterprise document/records platform with hierarchical org structure, RBAC/ACL permissions, e-signing, hash-chained audit logging, and a unified multi-step approval engine.",
                tech: ["Node.js", "Express", "Sequelize", "Next.js", "PostgreSQL", "Redis", "Docker"],
                confidential: true
            },
            {
                title: "Guest & Visitor Management System",
                description: "Front-desk guest management platform for tracking visitor check-in and check-out — the first of the four systems live in production.",
                tech: ["Express", "Sequelize", "Next.js"],
                confidential: true
            },
            {
                title: "Meeting Room Booking Platform",
                description: "Scheduling system for internal meeting rooms with role-based access and calendar-based conflict resolution.",
                tech: ["Express", "Prisma", "Next.js", "PostgreSQL"],
                confidential: true
            }
        ],
        personal: [
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
                title: "Library Manager System",
                description: "Full-featured library management system supporting borrowing/return workflows and staff roles.",
                tech: ["NestJS", "React", "PostgreSQL"],
                links: {
                    github: "https://github.com/DawitBK/Library_Management_System",
                    live: "https://library-management-system-lyart-pi.vercel.app/"
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
