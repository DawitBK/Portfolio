import Reveal from './Reveal';

const LAYOUTS = {
    // Standfirst beside the headline from lg upwards: uses the width and breaks the stacked-blocks rhythm.
    true: { wrap: 'lg:grid lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-end lg:gap-16 xl:gap-24', lede: 'lg:mt-0 lg:pb-2' },
    false: { wrap: '', lede: '' },
};

// Kicker, headline and standfirst: the same opening for every section.
const SectionHead = ({ kicker, title, lede, id, side = true, className = '' }) => {
    const layout = LAYOUTS[side];
    return (
        <Reveal className={`${layout.wrap} ${className}`}>
            <div>
                <p className="kicker mb-5">{kicker}</p>
                <h2 id={id} className="h-section max-w-3xl">
                    {title}
                </h2>
            </div>
            {lede && <p className={`lede mt-6 max-w-xl ${layout.lede}`}>{lede}</p>}
        </Reveal>
    );
};

export default SectionHead;
