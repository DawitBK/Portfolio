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
//
// `checks` says what each check saw (an HTTP status, or the kind of error), so an "offline" can be told apart: a timeout means the machine
// cannot be reached, a 502 means the tunnel is up but the machine is not behind it, a 503 means the identity provider cannot be reached
// by the app. It carries nothing but those words.
const TIMEOUT_MS = 4500;

async function seen(url, accept) {
    try {
        const reply = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT_MS), redirect: 'manual', headers: { accept: 'application/json' } });
        return { status: reply.status, ok: reply.status === 200 && (await accept(reply)) };
    } catch (error) {
        return { status: error?.name === 'TimeoutError' ? 'timeout' : 'unreachable', ok: false };
    }
}

const healthy = (url) => seen(url, async () => true);
const signInWorks = (url) =>
    seen(url, async (reply) => {
        try {
            return (await reply.json())?.enabled === true;
        } catch {
            return false;
        }
    });

export default async function handler(req, res) {
    res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=20');
    const healthUrl = (process.env.DEMO_HEALTH_URL || '').trim();
    const signInUrl = (process.env.DEMO_SIGNIN_URL || '').trim();
    if (!healthUrl) {
        res.status(200).json({ online: null, reason: 'not-configured', checkedAt: new Date().toISOString() });
        return;
    }
    const started = Date.now();
    const [health, signIn] = await Promise.all([healthy(healthUrl), signInUrl ? signInWorks(signInUrl) : Promise.resolve(null)]);
    const online = health.ok && (signIn === null || signIn.ok);
    res.status(200).json({
        online,
        checkedAt: new Date().toISOString(),
        ms: Date.now() - started,
        checks: { health: health.status, ...(signIn ? { signIn: signIn.status } : {}) },
    });
}
