import type { GutterProps } from "../Row";

const gridPre = "cm-col";
const offsetPre = "cm-col-offset";
const rowPre = "cm-row";
const gapPre = "cm-row-gap";
const RESPONSIVE = {
    'xs': '576px',
    'sm': '576px',
    'md': '768px',
    'lg': '992px',
    'xl': '1200px',
    'xxl': '1600px'
};
export type responsiveType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

const GRIDS = new Set<string>();
const OFFSETS = new Set<string>();
const GUTTERS = new Set<string>();
const GAPS = new Set<string>();

const defaultResponsive = 'lg';

let isCreated = false;

function initStyleElements () {
    for (const type in RESPONSIVE) {
        const id = 'cm-grid-' + type;
        if (document.getElementById(id)) continue;
        const style = document.createElement('style');
        style.id = id;
        document.head.appendChild(style);
    }
    isCreated = true;
}

function createStyle (text: string, responsive: responsiveType) {
    if (!isCreated) {
        initStyleElements();
    }
    document.getElementById('cm-grid-' + responsive)!.innerHTML += text;
    // const style = document.createElement('style');
    // style.innerHTML = text;
    // document.head.appendChild(style);
}

function generateGrid (width: string, key: string, responsive: responsiveType) {
    GRIDS.add(key);
    const minWidth = RESPONSIVE[responsive];
    const text = responsive === 'xs' ? `.${gridPre}-${key}{width: ${width}%}`
        : `@media (min-width: ${minWidth}) { .${gridPre}-${key}{width: ${width}%} }`;

    createStyle(text, responsive);
}

function generateOffset (offset: string, key: string, responsive: responsiveType) {
    OFFSETS.add(key);
    const minWidth = RESPONSIVE[responsive];
    const text = responsive === 'xs' ? `.${offsetPre}-${key}{margin-left: ${offset}%}`
        : `@media (min-width: ${minWidth}) { .${offsetPre}-${key}{margin-left: ${offset}%} }`;

    createStyle(text, responsive);
}

function createRowGutterStyle (gutter: string, key: string, responsive: responsiveType) {
    GUTTERS.add(key);
    const minWidth = RESPONSIVE[responsive];
    const text = responsive === 'xs'
        ? `.${rowPre}-${key}{margin-left: -${parseFloat(gutter) / 2}px; margin-right: -${parseFloat(gutter) / 2}px}
        .${rowPre}-${key} .${gridPre}{padding-left: ${parseFloat(gutter) / 2}px; padding-right: ${parseFloat(gutter) / 2}px}`
        : `@media (min-width: ${minWidth}) {
            .${rowPre}-${key}{margin-left: -${parseFloat(gutter) / 2}px; margin-right: -${parseFloat(gutter) / 2}px}
            .${rowPre}-${key} .${gridPre}{padding-left: ${parseFloat(gutter) / 2}px; padding-right: ${parseFloat(gutter) / 2}px}
        }`;

    createStyle(text, responsive);
}

function createGapStyle (gap: string, key: string, responsive: responsiveType) {
    GAPS.add(key);
    const minWidth = RESPONSIVE[responsive];
    const text = responsive === 'xs'
        ? `.${gapPre}-${key}{row-gap: ${gap}px;}`
        : `@media (min-width: ${minWidth}) {
            .${gapPre}-${key}{row-gap: ${gap}px;}
        }`;

    createStyle(text, responsive);
}

function generate (width: number, type: string, responsive?: responsiveType) {
    let w = (width * 100).toFixed(4);
    w = w.substring(0, w.length - 1);

    responsive = responsive ?? defaultResponsive;
    const key = responsive + '-' + w.replace('.', '-');
    if (type === 'grid') {
        if (!GRIDS.has(key)) {
            generateGrid(w, key, responsive);
        }
        return `${gridPre}-${key}`;
    } else {
        if (!OFFSETS.has(key)) {
            generateOffset(w, key, responsive);
        }
        return `${offsetPre}-${key}`;
    }
}

function generateGutter (gutter: number | number[], type: string, responsive: responsiveType) {
    responsive = responsive ?? defaultResponsive;
    const gu = typeof gutter === 'number' ? gutter.toFixed(2) : gutter[0].toFixed(2);
    const guValue = typeof gutter === 'number' ? gutter : gutter[0];
    const gap = typeof gutter === 'number' ? gutter.toFixed(2) : gutter[1].toFixed(2);
    const gapValue = typeof gutter === 'number' ? gutter : gutter[1];
    if (guValue || gapValue) {
        const classList = [];
        if (guValue) {
            const key = responsive + '-' + gu.replace('.', '-');
            if (!GUTTERS.has(key)) {
                createRowGutterStyle(gu, key, responsive);
            }
            classList.push(`${rowPre}-${key}`);
        }
        if (gapValue) {
            const gapKey = responsive + '-' + gap.replace('.', '-');
            if (!GAPS.has(gapKey)) {
                createGapStyle(gap, gapKey, responsive);
            }
            classList.push(`${gapPre}-${gapKey}`);
        }
        return classList;
    }
}

/**
 * 创建响应式样式,返回class
 * @param width
 * @param responsive
 * @returns
 */
export function createGrid (width?: number, responsive?: responsiveType) {
    if (!width) {
        return '';
    }

    const gridClass = generate(width, 'grid', responsive);
    return gridClass;
}

export function createOffset (offset: number, responsive: responsiveType) {
    if (!offset) {
        return '';
    }

    const gridClass = generate(offset, 'offset', responsive);
    return gridClass;
}

export function createGutter (gutter: number | number[] | GutterProps) {
    if (!gutter) {
        return '';
    }
    const gutterClass: any = {};
    if (!Array.isArray(gutter) && typeof gutter === 'object') {
        for (const key in RESPONSIVE) {
            const gu = gutter[key as keyof GutterProps]; // 16|[16,16]
            if (gu) {
                const gutterRowClass = generateGutter(gu, 'gutter', key as responsiveType);
                if (gutterRowClass) {
                    gutterRowClass.forEach((className: string) => {
                        gutterClass[className] = true;
                    })
                }
            }
        }
    }

    return gutterClass;
}
