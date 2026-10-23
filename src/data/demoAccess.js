// A public sandbox login, shown on purpose. It belongs to demo data only: a system administrator of the demo
// editions, never a platform administrator, and unrelated to any real account or password.
export const demoAccess = {
    title: 'Sign in as a system administrator',
    lede: 'One shared sandbox account opens every demo with full administrator rights, so you can see each system the way its operator does.',
    email: 'demo.admin@examplecorp.com',
    password: 'Portfolio-Demo-2026!',
    steps: [
        'Open the identity portal and sign in with the details here.',
        'Choose any application from the list. You are signed in to it automatically.',
        'Look around, change things, break things. The data is demo data.',
    ],
    roles: [
        'Identity admin console',
        'Document system: system administrator',
        'Guest system: super administrator',
        'Retail OS: owner',
        'Martronics and Library: administrator',
    ],
    note: 'This is a shared public sandbox. Please leave the password as it is. If sign-in fails, the demo is offline or being reset; try again later.',
    portal: 'https://saas-portal-iota.vercel.app/sso/portal',
};
