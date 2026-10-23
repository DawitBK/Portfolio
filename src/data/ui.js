// Presentation-only data for the interface. The owner's words stay in content.js and demoAccess.js; this file only
// decides how those pieces are grouped, labelled and wired together on screen.

export const navLinks = [
    { id: 'capabilities', label: 'What I do' },
    { id: 'lifecycle', label: 'Lifecycle' },
    { id: 'work', label: 'Work' },
    { id: 'demos', label: 'Live demos' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
];

// Extra jump targets for the command palette (anchors inside sections).
export const subTargets = [
    { id: 'access', label: 'Demo login' },
    { id: 'showcases', label: 'Platform showcases' },
    { id: 'skills', label: 'Skills explorer' },
];

export const capabilityGroups = ['Design', 'Build', 'Secure', 'Deliver', 'Lead'];

// Keyed by capability title. Tags only repeat words already present in that capability's own text.
export const capabilityMeta = {
    'Architecture and system design': { icon: 'blueprint', groups: ['Design', 'Lead'], tags: ['Service boundaries', 'Data models', 'Decision records', 'Threat models'] },
    'Backend engineering': { icon: 'server', groups: ['Build'], tags: ['NestJS', 'PostgreSQL', 'OpenAPI', 'Idempotent writes'] },
    'Frontend and UI/UX': { icon: 'layout', groups: ['Design', 'Build'], tags: ['Next.js', 'React', 'Figma', 'End-to-end tests'] },
    'ERP and business systems': { icon: 'cube', groups: ['Build'], tags: ['Odoo', 'ERPNext', 'Double-entry accounting', 'OpenID Connect'] },
    'Identity and security engineering': { icon: 'shield', groups: ['Secure', 'Build'], tags: ['OpenID Connect', 'PKCE', 'Active Directory', 'AES-256-GCM'] },
    'Applied AI': { icon: 'sparkle', groups: ['Build', 'Design'], tags: ['pgvector', 'Full-text search', 'Tool calling', 'Policy controls'] },
    'DevOps and release engineering': { icon: 'terminal', groups: ['Deliver'], tags: ['GitHub Actions', 'Docker', 'Kubernetes', 'Terraform'] },
    'Quality engineering': { icon: 'verify', groups: ['Deliver', 'Secure'], tags: ['Unit', 'Integration', 'End-to-end', '3,000+ tests'] },
    'Technical leadership': { icon: 'people', groups: ['Lead', 'Deliver'], tags: ['BRD, FRS, TDD', 'Executive reports', 'Team building', 'Training', 'Code review'] },
};

export const securityIcons = {
    Identity: 'key',
    Isolation: 'layers',
    Integrity: 'link',
    Confidentiality: 'lock',
    Resilience: 'refresh',
    Assurance: 'badge',
};

// System map: one identity service signs people in to the applications, which all keep their data in PostgreSQL.
export const mapApps = [
    { id: 'dms', label: 'Documents' },
    { id: 'gms', label: 'Guests' },
    { id: 'retail-os', label: 'Retail OS' },
    { id: 'jobpilot', label: 'JobPilot' },
    { id: 'martronics', label: 'Martronics' },
    { id: 'library', label: 'Library' },
];

// What each hero guarantee lights up on the map, keyed by its `where` value. `via` names the mechanism, taken from the
// project facts (back-channel logout, a deferred trigger, row-level security, a person approving).
export const guaranteeRules = {
    sso: { identity: true, apps: 'all', db: false, via: ['Back-channel logout'] },
    'retail-os': { identity: false, apps: ['retail-os'], db: true, via: ['Deferred database trigger'] },
    jobpilot: { identity: false, apps: ['jobpilot'], db: true, via: ['Row-level security', 'Human approval gate'] },
};
