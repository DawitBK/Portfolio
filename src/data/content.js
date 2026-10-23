export const person = {
    name: 'Dawit Bayou Kassie',
    role: 'Solutions Architect & Full-Stack Engineer',
    location: 'Addis Ababa, Ethiopia',
    email: 'dawitbk01@gmail.com',
    phone: '+251 921 640 101',
    github: 'https://github.com/DawitBK',
    linkedin: 'https://www.linkedin.com/in/dawit-b-kassie',
    resume: '/Dawit-Bayou-Kassie-Resume.pdf',
    lead: 'I build the systems a company quietly depends on: sign-in, documents, visitors, money. Then I write the tests, runbooks and decision records that let someone else run them on a bad day.',
};

export const headline = ['Systems whose', 'guarantees can be', 'checked.'];

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

export const capabilities = [
    {
        title: 'Identity and access',
        body: 'Who someone is, what they may do, and proof of what they did. I build single sign-on on OpenID Connect, role-based access, tenant isolation, and audit trails that show when someone has tampered with them.',
    },
    {
        title: 'Full-stack delivery',
        body: 'Typed APIs in NestJS, interfaces in Next.js and React, and PostgreSQL schemas shaped by how the data is actually read and written. Queues and real-time updates where the work calls for them, and not before.',
    },
    {
        title: 'Release and operations',
        body: 'A system is not finished until someone else can ship it. Preflight checks, rollback, backups, signed releases, and runbooks written for the person on call.',
    },
];

export const sections = {
    work: {
        kicker: 'Selected work',
        title: 'The work, and what keeps it honest.',
        lede: 'Four systems I built for an employer and three I publish. For each one: what it does, the claim that matters, and the test behind the claim.',
    },
    demos: {
        kicker: 'Live demos',
        title: 'Try the systems for yourself.',
        lede: 'Company-neutral editions running on demo data, plus the two original storefronts. Start at the identity portal: every other demo signs in through it. They run on a single machine of mine, so one may occasionally be offline.',
    },
    approach: {
        kicker: 'How I work',
        title: 'Four habits behind everything above.',
        lede: 'None of these are original. Applying them every time, including when a deadline says otherwise, is the job.',
    },
    experience: {
        kicker: 'Experience',
        title: 'Where I have done this work.',
        lede: 'Three years, from freelance client work to leading architecture for a conglomerate.',
    },
};

export const production = [
    {
        title: 'Single sign-on platform',
        tag: 'Employer system, private',
        summary: 'Every internal system used to have its own login. I replaced them with one, built on OpenID Connect and the company\'s existing Active Directory.',
        points: [
            'The hard part is signing out. When someone leaves or is disabled, a signed notice reaches every connected system and ends their sessions there, not only in the portal.',
            'Licences are signed offline and verified without calling home. A system tied to SSO ends when SSO does, and a forged note can only shorten that, never extend it.',
            'Authorization code with PKCE, signed tokens, an admin console and an application launcher round it out.',
        ],
        proof: '831 automated tests',
        stack: ['Node.js', 'TypeScript', 'PostgreSQL', 'OpenID Connect', 'Next.js'],
    },
    {
        title: 'Document and records system',
        tag: 'Employer system, private',
        summary: 'Staff can ask the archive a question in plain language instead of guessing at keywords.',
        points: [
            'Search combines embeddings in pgvector with full-text search, and an LLM summarizes and answers from the documents it retrieved.',
            'Access is 29 permissions across six roles. Audit logs are hash-chained so an edit shows, files are encrypted at rest with AES-256-GCM, and e-signatures, legal hold and retention schedules are built in.',
            'Ingestion classifies documents and extracts metadata across formats, so filing is not a manual chore.',
        ],
        proof: '1,639 automated tests',
        stack: ['NestJS', 'PostgreSQL', 'MinIO', 'Redis', 'BullMQ', 'Meilisearch', 'pgvector'],
    },
    {
        title: 'Guest management platform',
        tag: 'Employer system, private',
        summary: 'Visitors, approvals and door access for a multi-tenant company. Taken through QA and UAT, and live on the company\'s own server.',
        points: [
            'Seven roles, an approval and escalation workflow, and credentials delivered to the visitor in real time over WebSockets.',
            'Door-access hardware, one-time-code sign-in, QR and PIN credentials, and ID scanning with watchlist screening.',
            'I trained the IT staff who operate it.',
        ],
        proof: '605 automated tests',
        stack: ['Node.js', 'Next.js', 'PostgreSQL', 'Redis', 'BullMQ', 'WebSockets'],
    },
    {
        title: 'Release and licensing security',
        tag: 'Employer platform, private',
        summary: 'A repeatable way to ship to a server that only a few people may touch.',
        points: [
            'Every release runs preflight checks first. Settings change only at apply time, with a backup taken beforehand and automatic rollback if anything fails.',
            'Releases are signed and a watcher flags tampering. Owner-only operations sit outside any automated agent\'s permissions, enforced by policy files and not by good intentions.',
            'Independent reviews found real defects in my own work. I fixed every one before release.',
        ],
        proof: 'Rehearsed, with rollback',
        stack: ['Node.js', 'PowerShell', 'Cryptographic signing'],
    },
];

export const openSource = [
    {
        title: 'Retail OS',
        url: 'https://github.com/DawitBK/retail-os',
        summary: 'A point of sale where the shelf and the books cannot disagree.',
        points: [
            'Every entry balances. The application checks it, and a deferred database trigger checks it again at commit.',
            'Posted history is immutable, even to someone with SQL access. A void posts the mirror entry instead of deleting.',
            'Two tills cannot sell the last unit twice or push a customer past a credit limit. Money is integer minor units, never a float.',
        ],
        stack: ['NestJS 12', 'Drizzle', 'PostgreSQL 18', 'Next.js 16'],
    },
    {
        title: 'JobPilot',
        url: 'https://github.com/DawitBK/jobpilot',
        summary: 'Job search where the software proposes and only a person approves.',
        points: [
            'Tenant isolation is the database\'s job. With row-level security, a session that names no tenant sees nothing.',
            'Applications move through an 18-state machine. The browser worker and the AI cannot approve, and a constraint refuses to store an approval from either.',
            'The audit trail is hash-chained. Status: API and web app are built; the AI features are specified and not built yet.',
        ],
        stack: ['NestJS 12', 'Drizzle', 'PostgreSQL 18', 'Row-level security'],
    },
    {
        title: 'Martronics and Library Management',
        url: 'https://github.com/DawitBK/martronics',
        summary: 'An online store and a library back office, rebuilt as enterprise-grade services. The originals are tagged and kept.',
        points: [
            'Rotating refresh tokens with reuse detection, optimistic concurrency, idempotent checkout and lending, and an OpenAPI contract.',
            'The library queues holds fairly: a returned copy is set aside for the member who has waited longest, and unpaid fines block borrowing.',
            'Both sign in through OpenID Connect and honour back-channel logout.',
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
    { name: 'Martronics', kind: 'E-commerce', url: 'https://saas-martronics.vercel.app', note: 'An electronics storefront with checkout.' },
    { name: 'Library', kind: 'Library catalogue', url: 'https://saas-library.vercel.app', note: 'Public catalogue and staff desk.' },
    { name: 'Martronics, original', kind: 'First version', url: 'https://martronics.vercel.app', note: 'The storefront the rebuild replaces.' },
    { name: 'Library, original', kind: 'First version', url: 'https://library-management-system-lyart-pi.vercel.app', note: 'The front end the rebuild replaces.' },
];

export const principles = [
    {
        title: 'Put the rule where it cannot be skipped.',
        body: 'If two numbers must never disagree, the database refuses the write that would split them. Application code is the convenience. The constraint is the guarantee.',
    },
    {
        title: 'Pair every guarantee with a test.',
        body: 'My READMEs list each guarantee next to the test that proves it. A claim with no test is a hope.',
    },
    {
        title: 'Write for the person on call.',
        body: 'Preflight checks, rollback, backups, runbooks. If only the author can repeat a release, it is not finished.',
    },
    {
        title: 'Ask for evidence, from people and from agents.',
        body: 'I work with AI coding agents every day. After a few reported work that never happened, the rule became simple: show the request and response, or the SQL, before anything counts as done.',
    },
];

export const experience = [
    {
        role: 'Solutions Architect & Full Stack Engineer',
        org: 'A multi-sector conglomerate',
        period: '2026 to present',
        place: 'Addis Ababa, on-site',
        points: [
            'Lead architecture and delivery for the group\'s internal platform: single sign-on, a document and records system, a guest management system and a retail ERP. I direct engineers and AI coding agents across all four.',
            'Built the single sign-on service, with back-channel logout, and designed licensing and release security for the whole platform.',
            'Run the verification discipline: more than 3,000 automated tests, status reports checked in CI, and independent reviews before release.',
            'Write the requirements, design documents, executive reports and training material.',
        ],
    },
    {
        role: 'Web Developer',
        org: 'Edge Communication Technologies P.L.C',
        period: 'Sep to Oct 2025',
        place: 'Addis Ababa, on-site',
        points: [
            'Built and maintained corporate platforms and internal business applications.',
            'Standardized the component architecture and the deployment workflow, and cut page load times.',
        ],
    },
    {
        role: 'Full Stack, Cloud & DevOps Engineer',
        org: 'Freelance',
        period: 'Jan 2023 to 2025',
        place: 'Remote',
        points: [
            'Designed, built and deployed full-stack applications for clients in several industries, from first scoping call to launch.',
            'Set up container and CI/CD pipelines, and ran AWS and Azure deployments including networking, storage and IAM.',
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
