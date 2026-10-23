// Reports whether the live demos are answering. They run on a server of my own, so they can be offline during a restart,
// a power cut or maintenance. The portfolio asks this endpoint instead of the demos themselves, because a browser cannot
// tell a working demo from an error page across origins, while this function can read the health check server to server.
//
// DEMO_HEALTH_URL (a Vercel environment variable) is the identity service's public health address. Without it the answer
// is "unknown" and the page behaves as if nothing is wrong.
export default async function handler(req, res) {
    res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=20');
    const target = (process.env.DEMO_HEALTH_URL || '').trim();
    if (!target) {
        res.status(200).json({ online: null, reason: 'not-configured', checkedAt: new Date().toISOString() });
        return;
    }
    const started = Date.now();
    let online = false;
    try {
        const reply = await fetch(target, { signal: AbortSignal.timeout(4500), redirect: 'manual', headers: { accept: 'application/json' } });
        online = reply.status === 200;
    } catch {
        online = false;
    }
    res.status(200).json({ online, checkedAt: new Date().toISOString(), ms: Date.now() - started });
}
