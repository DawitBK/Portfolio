export const person = {
    name: 'Dawit Bayou Kassie',
    role: 'Solutions Architect & Full-Stack Engineer',
    location: 'Addis Ababa, Ethiopia',
    email: 'dawitbk01@gmail.com',
    phone: '+251 921 640 101',
    github: 'https://github.com/DawitBK',
    linkedin: 'https://www.linkedin.com/in/dawit-b-kassie',
    resume: '/Dawit-Bayou-Kassie-Resume.pdf',
    lead: 'I design identity platforms, multi-tenant SaaS and internal systems, and I write the tests, runbooks and documents that let other people run them.',
};

export const headline = ['Systems whose', 'guarantees can be', 'checked.'];

export const atAGlance = [
    ['Based in', 'Addis Ababa, Ethiopia'],
    ['Focus', 'Identity, multi-tenant SaaS, internal platforms'],
    ['Stack', 'NestJS, TypeScript, PostgreSQL, Next.js, Docker'],
    ['Open to', 'Senior engineering, architecture and technical lead roles, local or remote'],
];

export const proof = [
    { value: '3,000+', label: 'automated tests across three enterprise systems' },
    { value: '3', label: 'enterprise platforms designed and built' },
    { value: '4', label: 'open-source applications on one stack' },
    { value: '3+', label: 'years building production systems' },
];

export const capabilities = [
    {
        title: 'Architecture and identity',
        body: 'Single sign-on with OpenID Connect, role-based access, tenant isolation and audit trails that show tampering. I decide where each rule lives so it cannot be skipped.',
    },
    {
        title: 'Full-stack delivery',
        body: 'NestJS and Node APIs with typed contracts, Next.js and React front ends, PostgreSQL schemas shaped by real read and write patterns, queues and real-time updates.',
    },
    {
        title: 'Release and operations',
        body: 'Repeatable releases with preflight checks, rollback and backups; signed releases and licences; CI pipelines; step-by-step runbooks for the people who operate the system.',
    },
];

export const production = [
    {
        title: 'Single sign-on platform',
        tag: 'Employer system, private',
        summary: 'One sign-in for every internal system, built as a custom OpenID Connect provider instead of adopting an off-the-shelf one that did not fit the existing Active Directory.',
        points: [
            'Authorization code with PKCE, signed tokens, Active Directory integration, an admin console and an application launcher.',
            'Back-channel logout: when someone signs out or is disabled, a signed notice reaches every connected system and ends their sessions there.',
            'Offline-signed licences that systems verify without calling home, including a rule that a system tied to SSO ends with SSO.',
        ],
        proof: '831 automated tests',
        stack: ['Node.js', 'TypeScript', 'PostgreSQL', 'OpenID Connect', 'Next.js'],
    },
    {
        title: 'Document and records system',
        tag: 'Employer system, private',
        summary: 'Document and archive management where staff can ask questions in plain language instead of searching by keyword.',
        points: [
            'Semantic search with embeddings and pgvector, with LLM summaries and question answering over large document sets.',
            'Access control with 29 permissions across six roles, hash-chained audit logs, AES-256-GCM encryption at rest, e-signatures, legal hold and retention scheduling.',
            'Automated ingestion: classification, metadata extraction and lifecycle access control across document formats.',
        ],
        proof: '1,639 automated tests',
        stack: ['NestJS', 'PostgreSQL', 'MinIO', 'Redis', 'BullMQ', 'Meilisearch', 'pgvector'],
    },
    {
        title: 'Guest management platform',
        tag: 'Employer system, private',
        summary: 'Multi-tenant visitor management, taken through QA and UAT and live on the company\'s own server behind an Apache reverse proxy.',
        points: [
            'Seven roles, an approval and escalation workflow, and real-time credential delivery over WebSockets.',
            'Door-access hardware integration, two-factor sign-in by one-time code, QR and PIN credentials, and ID scanning with watchlist screening.',
            'Trained the internal IT staff who operate it.',
        ],
        proof: '605 automated tests',
        stack: ['Node.js', 'Next.js', 'PostgreSQL', 'Redis', 'BullMQ', 'WebSockets'],
    },
    {
        title: 'Release and licensing security',
        tag: 'Employer platform, private',
        summary: 'A repeatable way to ship to a server only a few people may touch.',
        points: [
            'Preflight checks, settings applied at release time with automatic rollback, backups and written runbooks.',
            'Signed releases, a tamper watcher, and owner-only operations kept out of any automated agent\'s permissions.',
            'Independent code reviews whose findings are fixed before release.',
        ],
        proof: 'Rehearsed, with rollback',
        stack: ['Node.js', 'PowerShell', 'Cryptographic signing'],
    },
];

export const openSource = [
    {
        title: 'Retail OS',
        url: 'https://github.com/DawitBK/retail-os',
        summary: 'Point of sale, weighted-average inventory and double-entry accounting, built so the stock and the books cannot disagree.',
        points: [
            'Every entry balances: enforced by the application and again by a deferred database trigger at commit.',
            'Posted history is immutable, even with SQL; a void posts the mirror entry.',
            'Two tills never sell the last unit twice or push a customer past a credit limit. Money is integer minor units, never a float.',
        ],
        stack: ['NestJS 12', 'Drizzle', 'PostgreSQL 18', 'Next.js 16'],
    },
    {
        title: 'JobPilot',
        url: 'https://github.com/DawitBK/jobpilot',
        summary: 'Multi-tenant job-search platform: career graph, jobs from public feeds, a transparent matching engine, and applications only a person can approve.',
        points: [
            'Tenant isolation is enforced by the database with row-level security; a session with no tenant sees nothing.',
            'An 18-state application machine where the browser worker and the AI cannot approve; a constraint refuses to store such an event.',
            'A hash-chained audit trail that shows tampering. Status: API and web app built; the AI features are specified, not built.',
        ],
        stack: ['NestJS 12', 'Drizzle', 'PostgreSQL 18', 'Row-level security'],
    },
    {
        title: 'Martronics and Library Management',
        url: 'https://github.com/DawitBK/martronics',
        summary: 'Two earlier apps, an e-commerce store and a library back office, rebuilt as enterprise-grade services. The originals are tagged and kept.',
        points: [
            'Rotating refresh tokens with reuse detection, optimistic concurrency, idempotent checkout and lending, and an OpenAPI contract.',
            'A holds queue where a returned copy is set aside for the longest-waiting member, and fines that block borrowing.',
            'Both sign in through OpenID Connect with back-channel logout.',
        ],
        stack: ['NestJS', 'Drizzle', 'PostgreSQL 18', 'Next.js'],
        extraLink: { label: 'Library repository', url: 'https://github.com/DawitBK/library-management-system' },
    },
];

export const demos = [
    { name: 'Identity portal', kind: 'Single sign-on', url: 'https://saas-portal-iota.vercel.app/sso/portal', note: 'The launcher every other demo signs in through.' },
    { name: 'Document management', kind: 'DMS', url: 'https://saas-dms.vercel.app/dms', note: 'Approvals, e-signing, retention and search.' },
    { name: 'Guest management', kind: 'GMS', url: 'https://saas-gms.vercel.app/gms', note: 'Visitors, approvals and door credentials.' },
    { name: 'Retail OS', kind: 'Point of sale and accounting', url: 'https://saas-retail.vercel.app', note: 'Sales, stock and double-entry books.' },
    { name: 'JobPilot', kind: 'Job search', url: 'https://saas-jobpilot.vercel.app', note: 'Matching and an application pipeline.' },
    { name: 'Martronics', kind: 'E-commerce', url: 'https://saas-martronics.vercel.app', note: 'Electronics storefront with checkout.' },
    { name: 'Library', kind: 'Library catalogue', url: 'https://saas-library.vercel.app', note: 'Public catalogue and staff desk.' },
    { name: 'Martronics, original', kind: 'First version', url: 'https://martronics.vercel.app', note: 'The original storefront the rebuild replaces.' },
    { name: 'Library, original', kind: 'First version', url: 'https://library-management-system-lyart-pi.vercel.app', note: 'The original front end the rebuild replaces.' },
];

export const principles = [
    {
        title: 'Put the rule where it cannot be skipped.',
        body: 'If two things must never disagree, the database refuses the write that would make them disagree. Application code is a convenience; the constraint is the guarantee.',
    },
    {
        title: 'Every guarantee has a test that proves it.',
        body: 'My READMEs list each guarantee next to the test that checks it. A claim without a test is a hope.',
    },
    {
        title: 'Build it so someone else can run it.',
        body: 'Preflight checks, rollback, backups and runbooks written for the operator, not the author. A release nobody else can repeat is not finished.',
    },
    {
        title: 'Ask for proof, from people and from agents.',
        body: 'After catching AI coding agents reporting work that was not done, every task requires live request and response output or SQL as evidence before it counts.',
    },
];

export const experience = [
    {
        role: 'Solutions Architect & Full Stack Engineer',
        org: 'A multi-sector conglomerate',
        period: '2026 to present',
        place: 'Addis Ababa, on-site',
        points: [
            'Lead architecture and delivery of the group\'s internal platform: single sign-on, a document and records system, a guest management system and a retail ERP, coordinating engineers and AI coding agents.',
            'Built the OpenID Connect single sign-on service with back-channel logout, and designed licensing and release security.',
            'Run the verification discipline: more than 3,000 automated tests, status reports checked in CI, and independent reviews before release.',
            'Own requirements, design documents, executive reporting and internal training material.',
        ],
    },
    {
        role: 'Web Developer',
        org: 'Edge Communication Technologies P.L.C',
        period: 'Sep to Oct 2025',
        place: 'Addis Ababa, on-site',
        points: [
            'Built and maintained corporate platforms and internal business applications.',
            'Standardized the component architecture and deployment workflow, and cut page load times.',
        ],
    },
    {
        role: 'Full Stack, Cloud & DevOps Engineer',
        org: 'Freelance',
        period: 'Jan 2023 to 2025',
        place: 'Remote',
        points: [
            'Designed, built and deployed full-stack applications for clients in several industries, from scoping to launch.',
            'Set up container and CI/CD pipelines and managed AWS and Azure deployments including networking, storage and IAM.',
        ],
    },
];

export const skills = [
    ['Backend', 'Node.js, NestJS, Express, TypeScript, REST and OpenAPI (Zod), WebSockets'],
    ['Frontend', 'React, Next.js, TypeScript, Tailwind CSS, Zustand'],
    ['Data', 'PostgreSQL (triggers, row-level security, migrations), Drizzle, Prisma, Redis, MongoDB, Meilisearch, pgvector'],
    ['Identity and security', 'OpenID Connect, OAuth 2.0, PKCE, SSO, RBAC, JWT, signed releases and licences, AES-256-GCM, OWASP practices'],
    ['Architecture', 'Multi-tenant SaaS, transactional outbox, event-driven design, Domain-Driven and Clean Architecture, BullMQ, Kafka, RabbitMQ'],
    ['Cloud and operations', 'Docker, GitHub Actions, GitLab CI/CD, Nginx and Apache, Linux and Windows Server, Terraform, Kubernetes, AWS, Azure'],
    ['Applied AI', 'LLM integration, RAG and semantic search, agentic system design, AI-assisted development with proof-based verification'],
];

export const education = [
    { title: 'BSc, Electrical & Computer Engineering', place: 'Addis Ababa Institute of Technology', year: '2022' },
    { title: 'Full Stack & DevOps Engineer Certification', place: 'Addis Ababa University', year: '2025' },
];

export const languages = 'English (fluent) and Amharic (native)';
