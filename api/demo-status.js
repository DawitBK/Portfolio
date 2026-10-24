// Reports whether the live demos are answering. They run on a server of my own, so they can be offline during a restart,
// a power cut or maintenance. The portfolio asks this endpoint instead of the demos themselves, because a browser cannot
// tell a working demo from an error page across origins, while this function can read the answers server to server.
//
// "Online" means a visitor can sign in, not only that a process answers. Two checks, both must pass:
//   DEMO_HEALTH_URL   the identity service's public health address (it must answer 200).
//   DEMO_SIGNIN_URL   a product app's public sign-in settings address (for example .../app-api/retail-os/api/v1/auth/oidc/config).
//                     The app answers 200 with {"enabled": true} only when it can reach the identity provider; when it cannot, it
//                     answers 503, and a sign-in click would fail. Optional: without it only the health check decides.
// Without DEMO_HEALTH_URL the answer is "unknown" and the page behaves as if nothing is wrong.
const TIMEOUT_MS = 4500;

async function healthy(url) {
    try {
        const reply = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT_MS), redirect: 'manual', headers: { accept: 'application/json' } });
        return reply.status === 200;
    } catch {
        return false;
    }
}

async function signInWorks(url) {
    try {
        const reply = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT_MS), redirect: 'manual', headers: { accept: 'application/json' } });
        if (reply.status !== 200) return false;
        const body = await reply.json();
        return body?.enabled === true;
    } catch {
        return false;
    }
}

export default async function handler(req, res) {
    res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=20');
    const healthUrl = (process.env.DEMO_HEALTH_URL || '').trim();
    const signInUrl = (process.env.DEMO_SIGNIN_URL || '').trim();
    if (!healthUrl) {
        res.status(200).json({ online: null, reason: 'not-configured', checkedAt: new Date().toISOString() });
        return;
    }
    const started = Date.now();
    const [serverUp, signIn] = await Promise.all([healthy(healthUrl), signInUrl ? signInWorks(signInUrl) : Promise.resolve(true)]);
    res.status(200).json({ online: serverUp && signIn, checkedAt: new Date().toISOString(), ms: Date.now() - started });
}
