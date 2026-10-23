// Splits "a, b (c, d); e" into ["a", "b (c, d)", "e"]. Commas inside brackets, and commas inside numbers such as 3,000+,
// do not split.
export function splitList(text) {
    const out = [];
    let depth = 0;
    let current = '';
    for (let i = 0; i < text.length; i += 1) {
        const ch = text[i];
        if (ch === '(') depth += 1;
        if (ch === ')') depth = Math.max(0, depth - 1);
        const isSeparator = depth === 0 && (ch === ';' || (ch === ',' && /\s/.test(text[i + 1] ?? '')));
        if (isSeparator) {
            if (current.trim()) out.push(current.trim());
            current = '';
        } else {
            current += ch;
        }
    }
    if (current.trim()) out.push(current.trim());
    return out;
}

// "Odoo (custom addons)" -> ["Odoo", "custom addons"]
export function splitBracket(label) {
    const m = /^(.*?)\s*\((.*)\)$/.exec(label);
    return m ? [m[1], m[2]] : [label, ''];
}

export const hostOf = (url) => {
    try {
        return new URL(url).host;
    } catch {
        return url;
    }
};

// "3,000+" -> { n: 3000, suffix: "+" }
export function parseStat(value) {
    const m = /^([\d,]+)(.*)$/.exec(value);
    return m ? { n: Number(m[1].replace(/,/g, '')), suffix: m[2] } : { n: null, suffix: '' };
}

export const formatNumber = (n) => new Intl.NumberFormat('en-US').format(Math.round(n));

// "831 automated tests" -> { n: 831, rest: "automated tests" }
export function leadingNumber(text) {
    const m = /^([\d,]+)\s+(.*)$/.exec(text);
    return m ? { n: Number(m[1].replace(/,/g, '')), rest: m[2] } : { n: null, rest: text };
}
