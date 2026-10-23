export const person = {
    name: 'Dawit Bayou Kassie',
    role: 'Solutions Architect & Full-Stack Engineer',
    location: 'Addis Ababa, Ethiopia',
    email: 'dawitbk01@gmail.com',
    phone: '+251 921 640 101',
    github: 'https://github.com/DawitBK',
    linkedin: 'https://www.linkedin.com/in/dawit-b-kassie',
    resume: '/Dawit-Bayou-Kassie-Resume.pdf',
    lead: 'I design, build and run the systems a company depends on, such as identity, records, access and ERP, from the first requirement to a supported live service. I leave behind the tests, runbooks and decision records that let someone else run them.',
};

export const headline = ['Systems whose', 'guarantees can be', 'checked.'];

export const heroGuarantees = [
    { text: 'A disabled person is signed out of every system', where: 'sso' },
    { text: 'Every journal entry balances at commit', where: 'retail-os' },
    { text: 'A session with no tenant sees nothing', where: 'jobpilot' },
    { text: 'Only a person can approve an application', where: 'jobpilot' },
];

export const atAGlance = [
    ['Based in', 'Addis Ababa, Ethiopia'],
    ['Focus', 'Identity, ERP and business systems, multi-tenant SaaS, internal platforms'],
    ['Stack', 'NestJS, TypeScript, PostgreSQL, Next.js, Docker'],
    ['Open to', 'Senior engineering, architecture and technical lead roles. Addis Ababa or remote.'],
];

export const proof = [
    { value: '3,000+', label: 'automated tests across three enterprise systems' },
    { value: '3', label: 'enterprise platforms, from requirements to release' },
    { value: '4', label: 'open-source applications on one shared stack' },
    { value: '3+', label: 'years shipping production systems' },
];

export const sections = {
    capabilities: {
        kicker: 'What I do',
        title: 'One engineer across the whole system.',
        lede: 'My value is in the joins: requirement to design, design to code, code to operations, and engineers to the people who use what they build.',
    },
    lifecycle: {
        kicker: 'How I deliver',
        title: 'A lifecycle I run the same way every time.',
        lede: 'Seven stages, each with an artefact I produce. Security is a property of the design at every stage, not a review at the end.',
    },
    work: {
        kicker: 'Selected work',
        title: 'Systems built to this standard.',
        lede: 'Three enterprise platforms I built for an employer, and four applications I publish in the open.',
    },
    demos: {
        kicker: 'Live demos',
        title: 'See them running.',
        lede: 'Company-neutral editions on demo data. Start at the identity portal, which every other demo signs in through; they run on one machine of mine, so one may occasionally be offline.',
    },
    experience: {
        kicker: 'Experience',
        title: 'Background.',
        lede: 'From freelance client work to leading architecture and delivery for a conglomerate.',
    },
};

export const capabilities = [
    {
        title: 'Architecture and system design',
        body: 'I settle service boundaries, data models, tenancy and failure modes before code, and record each choice as an architecture decision with the options I rejected. Anything touching identity, money or personal data gets a threat model and a design review.',
    },
    {
        title: 'Backend engineering',
        body: 'NestJS and Node.js services on PostgreSQL, with OpenAPI contracts, reviewed migrations, rotating refresh tokens and idempotent writes. Rules that must never break live in the database as constraints and triggers. Queues and WebSockets where the workload needs them.',
    },
    {
        title: 'Frontend and UI/UX',
        body: 'Next.js and React interfaces built on the same typed contracts as the API, with clear loading, empty and error states, tested end to end in real browsers. I design flows and screens in Figma first, and use Illustrator, Photoshop and Premiere Pro for brand and media assets.',
    },
    {
        title: 'ERP and business systems',
        body: 'Custom ERP builds and ERP customisation on Odoo and ERPNext: modules, workflows, approvals, integrations, single sign-on and reports. I built Retail OS (point of sale, inventory, double-entry accounting), wrote Odoo 20 addons for OpenID Connect sign-in, and authored the MOS manufacturing ERP plan.',
    },
    {
        title: 'Identity and security engineering',
        body: 'A custom OpenID Connect provider with PKCE, signed tokens and Active Directory integration. Role-based access, tenant isolation in the database, hash-chained audit logs, AES-256-GCM at rest, back-channel logout and signed releases, designed in and not added later.',
    },
    {
        title: 'Applied AI',
        body: 'Retrieval-augmented search on pgvector embeddings with full-text search, LLM summaries, and policy controls on what a model may see and do. I design agentic features so only a person approves outcomes, and I direct AI coding agents under evidence-based review.',
    },
    {
        title: 'DevOps and release engineering',
        body: 'Git branching and review workflows, CI/CD on GitHub Actions and GitLab, Docker, Kubernetes, Terraform, AWS and Azure, with Nginx or Apache in front and monitoring behind. Releases are signed, preflight-checked and backed up first, with automatic rollback.',
    },
    {
        title: 'Quality engineering',
        body: 'Every stated guarantee has a test named for it: unit, integration against real PostgreSQL, and end-to-end in real browsers, enforced in CI before anything ships. Independent code reviews follow, and I fix what they find. Three employer systems carry over 3,000 tests between them.',
    },
    {
        title: 'Technical leadership',
        body: 'I write the BRD, FRS and TDD, report to executives, and train the people who operate the result. I direct engineers and AI coding agents, set the review standard, and keep decisions in writing so a team can carry on without me.',
    },
];

export const lifecycle = [
    {
        stage: 'Requirements',
        practice: 'I turn stakeholder needs into a business requirements document (BRD) and a functional requirements specification (FRS). Every requirement gets an acceptance criterion that can be tested. Abuse and failure cases are written beside the user stories, and open questions are listed with an owner before any build starts.',
        produces: 'BRD, FRS, acceptance criteria',
    },
    {
        stage: 'Architecture and design',
        practice: 'The data model, tenancy and trust boundaries are settled before code, in a technical design document (TDD). Each choice is recorded as an architecture decision with the alternatives rejected: I evaluated Keycloak, Authentik and Zitadel before building identity in-house. Identity, money and personal data get a threat model and a design review.',
        produces: 'TDD, decision records, threat model',
    },
    {
        stage: 'Build',
        practice: 'Typed contracts at every boundary, schema changes as reviewed migrations, least-privilege database roles and no secrets in the repository. Work moves through short-lived branches and code review. Rules that must never be broken, such as a balanced journal entry, live in the database as constraints and triggers, not only in application code.',
        produces: 'Reviewed code, migrations, OpenAPI contracts',
    },
    {
        stage: 'Verify',
        practice: 'A test pyramid: unit tests, integration tests against real PostgreSQL and end-to-end tests in a real browser, with a test named for each guarantee. CI gates stop a merge on failing tests or audit findings. Independent reviewers look for what I missed, and I fix what they find.',
        produces: '3,000+ automated tests, generated test reports',
    },
    {
        stage: 'Release',
        practice: 'Preflight checks, a backup first, then settings applied at release time with automatic rollback. Releases are signed, so tampering shows. Every change is rehearsed in a production-like environment before it reaches the live server, and the rollback plan is written down and tried, not assumed.',
        produces: 'Signed release, rehearsal record, rollback plan',
    },
    {
        stage: 'Operate',
        practice: 'Health and readiness checks, monitoring, structured audit trails, scheduled backups with restore procedures, and runbooks written for the person on call. Operators are trained before go-live, not after the first incident. I hand the system over to the people who will run it, with the documents they need.',
        produces: 'Runbooks, monitoring, operator training',
    },
    {
        stage: 'Improve',
        practice: 'Defects and incidents are recorded with a root cause, fixed once and propagated to every environment. After an incident I hold a review and update the runbook. Open items have an owner and a date, and the documentation changes in the same commit as the code.',
        produces: 'Incident reviews, updated documentation, backlog with owners',
    },
];

export const securityByDesign = [
    ['Identity', 'OpenID Connect with PKCE, signed tokens, central sign-out and least-privilege roles'],
    ['Isolation', 'Tenant separation enforced by the database, not by convention'],
    ['Integrity', 'Hash-chained audit logs, signed releases and a tamper watcher that reports changes'],
    ['Confidentiality', 'AES-256-GCM at rest, TLS in transit, secrets kept out of source'],
    ['Resilience', 'Rate limiting, backups with tested restores, and automatic release rollback'],
    ['Assurance', 'OWASP practice, dependency audit gates, threat models and independent review'],
];

export const production = [
    {
        title: 'Identity platform',
        tag: 'Employer system, private',
        summary: 'Custom OpenID Connect single sign-on for the group\'s internal systems, with Active Directory integration, PKCE, an admin console and an app launcher. Back-channel logout ends a person\'s sessions in every connected app when they sign out or are disabled. Licences are signed offline.',
        facts: ['831 automated tests', 'Back-channel logout', 'Offline-signed licences', 'Signed releases, tamper watcher'],
    },
    {
        title: 'Document and records platform',
        tag: 'Employer system, private',
        summary: 'Archive management where staff search in plain language, using pgvector embeddings alongside full-text search, with LLM summaries. Twenty-nine permissions across six roles, hash-chained audit logs, e-signatures, legal hold, retention schedules and AES-256-GCM encryption at rest.',
        facts: ['1,639 automated tests', '29 permissions, 6 roles', 'Hash-chained audit', 'Legal hold and retention'],
    },
    {
        title: 'Guest management platform',
        tag: 'Employer system, private',
        summary: 'Multi-tenant visitor management with approvals and escalation, door-access hardware, one-time-code sign-in, QR and PIN entry, and ID scanning with watchlist screening. Taken through QA and UAT, and live on the company\'s own server behind an Apache reverse proxy.',
        facts: ['605 automated tests', '7 roles', 'Real-time WebSockets', 'IT staff trained'],
    },
];

export const openSource = {
    title: 'Open-source reference applications',
    summary: 'Four applications on one stack that show the same discipline in public. Retail OS enforces double-entry accounting with a deferred database trigger. JobPilot isolates tenants with row-level security and lets only a person approve. All four use OpenID Connect sign-in.',
    facts: ['NestJS 12, Drizzle', 'PostgreSQL 18', 'Next.js 16', 'OpenAPI contracts'],
    links: [
        { label: 'Retail OS', note: 'point of sale and double-entry books', url: 'https://github.com/DawitBK/retail-os' },
        { label: 'JobPilot', note: 'multi-tenant job search', url: 'https://github.com/DawitBK/jobpilot' },
        { label: 'Martronics', note: 'e-commerce', url: 'https://github.com/DawitBK/martronics' },
        { label: 'Library Management', note: 'circulation and catalogue', url: 'https://github.com/DawitBK/library-management-system' },
    ],
};

export const demos = [
    { name: 'Identity portal', kind: 'Single sign-on', url: 'https://saas-portal-iota.vercel.app/sso/portal', note: 'The launcher every other demo signs in through.' },
    { name: 'Document management', kind: 'DMS', url: 'https://saas-dms.vercel.app/dms', note: 'Approvals, e-signing, retention and search.' },
    { name: 'Guest management', kind: 'GMS', url: 'https://saas-gms.vercel.app/gms', note: 'Visitors, approvals and door credentials.' },
    { name: 'Retail OS', kind: 'Point of sale and accounting', url: 'https://saas-retail.vercel.app', note: 'Sales, stock and double-entry books.' },
    { name: 'JobPilot', kind: 'Job search', url: 'https://saas-jobpilot.vercel.app', note: 'Matching and an application pipeline.' },
    { name: 'Martronics', kind: 'E-commerce', url: 'https://saas-martronics.vercel.app', note: 'An electronics storefront with checkout.' },
    { name: 'Library', kind: 'Library catalogue', url: 'https://saas-library.vercel.app', note: 'Public catalogue and staff desk.' },
    { name: 'Martronics, original', kind: 'First version', url: 'https://martronics.vercel.app', note: 'The storefront the rebuild replaces.' },
    { name: 'Library, original', kind: 'First version', url: 'https://library-management-system-lyart-pi.vercel.app', note: 'The front end the rebuild replaces.' },
];

export const experience = [
    {
        role: 'Solutions Architect & Full Stack Engineer',
        org: 'A multi-sector conglomerate',
        period: '2026 to present',
        place: 'Addis Ababa, on-site',
        points: [
            'Lead architecture and delivery for four internal platforms (identity, records, visitors and retail ERP), directing engineers and AI coding agents.',
            'Own the full lifecycle: requirements, design, build, verification, release and operator training, with preflight checks, signed releases and automatic rollback.',
            'Built three of the platforms to a tested standard (831, 1,639 and 605 automated tests) and introduced independent code reviews, with every finding fixed.',
            'Took the guest platform through QA and UAT to a live deployment on the company\'s own server, and trained the IT staff who run it.',
            'Write the requirements (BRD, FRS), technical design documents, executive reports and training material.',
        ],
    },
    {
        role: 'Web Developer',
        org: 'Edge Communication Technologies P.L.C',
        period: 'Sep to Oct 2025',
        place: 'Addis Ababa, on-site',
        points: [
            'Built corporate web platforms and internal applications.',
            'Standardised shared components and the deployment process, and reduced page load times.',
        ],
    },
    {
        role: 'Full Stack, Cloud & DevOps Engineer',
        org: 'Freelance',
        period: 'Jan 2023 to 2025',
        place: 'Remote',
        points: [
            'Designed, built and deployed MERN and PERN applications for clients in several industries.',
            'Set up CI/CD pipelines and hosted the applications on AWS and Azure.',
        ],
    },
];

export const skills = [
    ['Backend', 'TypeScript, Node.js, NestJS, Express, OpenAPI, WebSockets, Kafka, RabbitMQ; working knowledge of Python and Java'],
    ['Frontend and UI/UX', 'React, Next.js, TypeScript, UI/UX design, Figma, Adobe Illustrator, Photoshop, Premiere Pro'],
    ['ERP and business systems', 'Odoo (custom addons, OpenID Connect integration), ERPNext customisation, custom ERP design, inventory, double-entry accounting, manufacturing operations, approval workflows, reports'],
    ['Data', 'PostgreSQL (row-level security, triggers, migrations), pgvector, Redis, MongoDB, Meilisearch, Drizzle, Prisma'],
    ['DevOps and delivery', 'Git workflows, CI/CD with GitHub Actions and GitLab, Docker, Kubernetes, Terraform, AWS, Azure, Nginx, Apache, Linux, Windows Server, monitoring'],
    ['Identity and security', 'OpenID Connect, OAuth 2.0, PKCE, Active Directory, RBAC, JWT, AES-256-GCM, OWASP practice'],
    ['Architecture', 'Multi-tenant SaaS, event-driven design, transactional outbox, Domain-Driven and Clean Architecture, decision records, threat modelling'],
    ['Applied AI', 'LLM integration, retrieval-augmented search, agentic systems, policy controls, AI-assisted development with evidence-based review'],
];

export const education = [
    { title: 'BSc, Electrical & Computer Engineering', place: 'Addis Ababa Institute of Technology', year: '2022' },
    { title: 'Full Stack & DevOps Engineer Certification', place: 'Addis Ababa University', year: '2025' },
];

export const languages = 'English (fluent) and Amharic (native)';
