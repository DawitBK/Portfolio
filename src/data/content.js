export const person = {
    name: 'Dawit Bayou Kassie',
    role: 'Solutions Architect & Full-Stack Engineer',
    location: 'Addis Ababa, Ethiopia',
    email: 'dawitbk01@gmail.com',
    phone: '+251 921 640 101',
    github: 'https://github.com/DawitBK',
    linkedin: 'https://www.linkedin.com/in/dawit-b-kassie',
    resume: '/Dawit-Bayou-Kassie-Resume.pdf',
    lead: 'I take systems a company depends on, such as identity, records and access, from requirements to a running, supportable service. Then I leave behind the tests, runbooks and decision records that let someone else run them.',
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
    ['Focus', 'Identity, multi-tenant SaaS, internal platforms'],
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
        title: 'One engineer across the whole stack of a system.',
        lede: 'Most of my value is in the joins: between requirement and design, design and code, code and operations, and between the engineers and the people who use what they build.',
    },
    lifecycle: {
        kicker: 'How I deliver',
        title: 'A lifecycle I run the same way every time.',
        lede: 'Seven stages, each with something concrete I produce. Security is a property of the design at every stage, and not a review at the end.',
    },
    work: {
        kicker: 'Selected work',
        title: 'Systems built to this standard.',
        lede: 'Three enterprise platforms for an employer, and four applications I publish.',
    },
    demos: {
        kicker: 'Live demos',
        title: 'See them running.',
        lede: 'Company-neutral editions on demo data. Start at the identity portal: every other demo signs in through it. They run on a single machine of mine, so one may occasionally be offline.',
    },
    experience: {
        kicker: 'Experience',
        title: 'Background.',
        lede: 'From freelance client work to leading architecture for a conglomerate.',
    },
};

export const capabilities = [
    {
        title: 'Architecture and system design',
        body: 'Service boundaries, data models, tenancy and failure modes decided up front and recorded as decisions, with the alternatives that were rejected.',
    },
    {
        title: 'Identity and security engineering',
        body: 'Single sign-on on OpenID Connect, role-based access, tenant isolation, tamper-evident audit and signed releases, designed in and not added later.',
    },
    {
        title: 'Full-stack delivery',
        body: 'NestJS and Node APIs, Next.js and React interfaces, PostgreSQL, queues and real-time updates, on typed contracts. Applied AI where it earns its place, such as retrieval-augmented search.',
    },
    {
        title: 'Quality engineering',
        body: 'Every guarantee paired with a test: unit, integration against real databases, and end-to-end in real browsers, enforced in CI before anything ships.',
    },
    {
        title: 'Release and operations',
        body: 'Repeatable releases with preflight checks, rollback and backups, environments that rehearse production, and runbooks written for the person on call.',
    },
    {
        title: 'Technical leadership',
        body: 'Requirements, design documents and executive reporting. Directing engineers and AI coding agents through evidence-based review, and training the people who operate the result.',
    },
];

export const lifecycle = [
    {
        stage: 'Requirements',
        practice: 'Business and functional requirements agreed with stakeholders, each with an acceptance criterion that can be tested. Abuse and failure cases are written next to the user stories.',
        produces: 'BRD, FRS, acceptance criteria',
    },
    {
        stage: 'Architecture and design',
        practice: 'The data model, tenancy and trust boundaries are settled before code. Options are compared on evidence: I evaluated Keycloak, Authentik and Zitadel before choosing to build identity in-house. Anything touching identity, money or personal data gets a threat model.',
        produces: 'Technical design, decision records, threat model',
    },
    {
        stage: 'Build',
        practice: 'Typed contracts at every boundary, schema changes as reviewed migrations, least-privilege database roles and no secrets in the repository. Rules that must never be broken live in the database as constraints, not only in application code.',
        produces: 'Reviewed code, migrations, OpenAPI contracts',
    },
    {
        stage: 'Verify',
        practice: 'Unit tests, integration tests against real PostgreSQL and end-to-end tests in a real browser, with a test named for each guarantee. Status reports are generated and checked in CI. Independent reviews look for what I missed, and I fix what they find.',
        produces: '3,000+ automated tests, generated test reports',
    },
    {
        stage: 'Release',
        practice: 'Preflight checks, a backup first, configuration applied at release time with automatic rollback, signed releases, and a production-like environment that rehearses every change.',
        produces: 'Signed release, rehearsal record, rollback plan',
    },
    {
        stage: 'Operate',
        practice: 'Health and readiness checks, structured audit trails, scheduled backups and restore procedures, and runbooks for the people on call. Operators are trained before go-live and not after the first incident.',
        produces: 'Runbooks, monitoring, operator training',
    },
    {
        stage: 'Improve',
        practice: 'Defects and incidents are recorded, fixed at the root, and propagated to every environment. Open items have an owner and a date, and the documentation changes with the code.',
        produces: 'Incident records, updated documentation, backlog with owners',
    },
];

export const securityByDesign = [
    ['Identity', 'OpenID Connect with PKCE, central sign-out, least-privilege roles'],
    ['Isolation', 'Tenant separation enforced by the database, not by convention'],
    ['Integrity', 'Hash-chained audit logs and signed releases that show tampering'],
    ['Confidentiality', 'AES-256-GCM at rest, TLS in transit, secrets kept out of source'],
    ['Resilience', 'Rate limiting, lockout, backups and tested restore paths'],
    ['Assurance', 'OWASP practice, dependency audit gates, independent review'],
];

export const production = [
    {
        title: 'Identity platform',
        tag: 'Employer system, private',
        summary: 'Custom OpenID Connect single sign-on for the group\'s internal systems, integrated with Active Directory. Signing out or disabling a person ends their sessions in every connected system.',
        facts: ['831 automated tests', 'Back-channel logout', 'Offline-signed licences'],
    },
    {
        title: 'Document and records platform',
        tag: 'Employer system, private',
        summary: 'Archive management where staff search in plain language, with role-based access, tamper-evident audit, e-signatures and retention schedules.',
        facts: ['1,639 automated tests', '29 permissions, 6 roles', 'AES-256-GCM at rest'],
    },
    {
        title: 'Guest management platform',
        tag: 'Employer system, private',
        summary: 'Multi-tenant visitor management with approvals, door-access hardware and ID screening. Taken through QA and UAT, and live on the company\'s own server.',
        facts: ['605 automated tests', '7 roles', 'Operators trained'],
    },
];

export const openSource = {
    title: 'Open-source reference applications',
    summary: 'Four applications on one stack that show the same discipline in public: invariants enforced by the database, and a test for every stated guarantee.',
    facts: ['NestJS 12', 'PostgreSQL 18', 'Next.js 16', 'OpenAPI contracts'],
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
            'Lead architecture and delivery across four internal platforms (identity, records, visitors and retail ERP), directing engineers and AI coding agents.',
            'Own the full lifecycle: requirements, design, build, verification, release and operator training.',
            'Introduced evidence-based verification and independent reviews; more than 3,000 automated tests back every release.',
            'Author requirements, design documents, executive reports and training material.',
        ],
    },
    {
        role: 'Web Developer',
        org: 'Edge Communication Technologies P.L.C',
        period: 'Sep to Oct 2025',
        place: 'Addis Ababa, on-site',
        points: ['Built corporate platforms and internal applications; standardized components and deployment, and cut page load times.'],
    },
    {
        role: 'Full Stack, Cloud & DevOps Engineer',
        org: 'Freelance',
        period: 'Jan 2023 to 2025',
        place: 'Remote',
        points: ['Designed, built and deployed full-stack applications for clients in several industries, with CI/CD pipelines and AWS and Azure hosting.'],
    },
];

export const skills = [
    ['Languages and frameworks', 'TypeScript, Node.js, NestJS, Express, React, Next.js; working knowledge of Python and Java'],
    ['Data', 'PostgreSQL (row-level security, triggers, migrations), Redis, MongoDB, Meilisearch, pgvector, Drizzle, Prisma'],
    ['Identity and security', 'OpenID Connect, OAuth 2.0, PKCE, RBAC, JWT, AES-256-GCM, OWASP practice'],
    ['Architecture', 'Multi-tenant SaaS, event-driven design, transactional outbox, Domain-Driven and Clean Architecture'],
    ['Cloud and delivery', 'Docker, CI/CD with GitHub Actions and GitLab, Nginx and Apache, Linux and Windows Server, AWS, Azure, Terraform, Kubernetes'],
    ['Applied AI', 'LLM integration, retrieval-augmented search, agentic systems, AI-assisted development with proof-based review'],
];

export const education = [
    { title: 'BSc, Electrical & Computer Engineering', place: 'Addis Ababa Institute of Technology', year: '2022' },
    { title: 'Full Stack & DevOps Engineer Certification', place: 'Addis Ababa University', year: '2025' },
];

export const languages = 'English (fluent) and Amharic (native)';
