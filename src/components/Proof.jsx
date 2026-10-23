import { proof, production } from '../data/content';
import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';
import { formatNumber, leadingNumber, parseStat } from '../lib/text';

// The three employer systems' test counts, read from their own facts, so the first figure can show what it is made of.
const testParts = production.map((p) => ({ title: p.title, ...leadingNumber(p.facts[0]) })).filter((p) => p.n);
const SEGMENT_STYLES = ['bg-accent', 'bg-accent-2', 'bg-accent/40'];

const Glyph = ({ n, plus, seen, isTests }) => {
    if (isTests && testParts.length) {
        const total = testParts.reduce((sum, p) => sum + p.n, 0);
        return (
            <div className="mt-6">
                <div className="flex h-1.5 gap-0.5 clip rounded-full" aria-hidden="true">
                    {testParts.map((p, i) => (
                        <span
                            key={p.title}
                            className={`h-full origin-left transition-transform duration-[1400ms] ease-out ${SEGMENT_STYLES[i % SEGMENT_STYLES.length]}`}
                            style={{ width: `${(p.n / total) * 100}%`, transform: seen ? 'scaleX(1)' : 'scaleX(0)', transitionDelay: `${i * 140}ms` }}
                        />
                    ))}
                </div>
                <p className="mt-2 font-mono text-[0.68rem] leading-snug text-muted">{testParts.map((p) => formatNumber(p.n)).join(' + ')}</p>
            </div>
        );
    }
    if (n !== null && n <= 8) {
        return (
            <div className="mt-6 flex items-center gap-1.5" aria-hidden="true">
                {Array.from({ length: n }, (_, i) => (
                    <span
                        key={i}
                        className="h-1.5 w-6 origin-left rounded-full bg-accent transition-transform duration-700 ease-out"
                        style={{ transform: seen ? 'scaleX(1)' : 'scaleX(0)', transitionDelay: `${i * 120}ms` }}
                    />
                ))}
                {plus && <span className="h-1.5 w-6 rounded-full border border-dashed border-accent/70" />}
            </div>
        );
    }
    return null;
};

const Stat = ({ value, label }) => {
    const [ref, seen] = useInView({ threshold: 0.5 });
    const { n, suffix } = parseStat(value);
    const shown = useCountUp(n ?? 0, seen, 1500);
    return (
        <div ref={ref} className="spot card flex flex-col p-6 md:p-7">
            <dt className="font-serif text-[3.4rem] leading-none tracking-[-0.02em] tabular-nums md:text-[4.2rem]">
                <span className="sr-only">{value}</span>
                <span aria-hidden="true" className="text-gradient">
                    {n === null ? value : `${formatNumber(shown)}${suffix}`}
                </span>
            </dt>
            <dd className="mt-4">
                <p className="max-w-[16rem] text-sm leading-snug text-muted">{label}</p>
                <Glyph n={n} plus={suffix.includes('+')} seen={seen} isTests={/test/i.test(label)} />
            </dd>
        </div>
    );
};

const Proof = () => (
    <section className="relative border-y border-line bg-sunken/60 py-12 md:py-16" aria-label="In numbers">
        <div className="container-page">
            <dl className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">
                {proof.map(({ value, label }) => (
                    <Stat key={label} value={value} label={label} />
                ))}
            </dl>
        </div>
    </section>
);

export default Proof;
