import tinycolor from 'tinycolor2';

export function clamp (value: number, min: number, max: number) {
    if (value < min) {
        return min;
    }

    if (value > max) {
        return max;
    }

    return value;
}

function setAlpha (data: any, alpha: number) {
    const color: any = tinycolor(data);
    const {_a} = color;

    if (_a === undefined || _a === null) {
        color.setAlpha(alpha || 1);
    }

    return color;
}

function getColor (data: any, colorData: any) {
    const alpha = colorData && colorData.a;

    if (colorData) {
        // hsl is better than hex between conversions
        if (colorData.hsl) {
            return setAlpha(colorData.hsl, alpha);
        }

        if (colorData.hex && colorData.hex.length > 0) {
            return setAlpha(colorData.hex, alpha);
        }
    }

    return setAlpha(colorData, alpha);
}

export function changeColor (data: any, oldHue?: any) {
    const colorData = data === '' ? '#2d8cf0' : data;
    const color = getColor(data, colorData);
    const hsl = color.toHsl();
    const hsv = color.toHsv();

    if (hsl.s === 0) {
        hsl.h = colorData.h || (colorData.hsl && colorData.hsl.h) || oldHue || 0;
        hsv.h = hsl.h;
    }

    // when the hsv.v is less than 0.0164 (base on test)
    // because of possible loss of precision
    // the result of hue and saturation would be miscalculated
    if (hsv.v < 0.0164) {
        hsv.h = colorData.h || (colorData.hsv && colorData.hsv.h) || 0;
        hsv.s = colorData.s || (colorData.hsv && colorData.hsv.s) || 0;
    }

    if (hsl.l < 0.01) {
        hsl.h = colorData.h || (colorData.hsl && colorData.hsl.h) || 0;
        hsl.s = colorData.s || (colorData.hsl && colorData.hsl.s) || 0;
    }

    return {
        hsl,
        hex: color.toHexString().toUpperCase(),
        rgba: color.toRgb(),
        hsv,
        oldHue: colorData.h || oldHue || hsl.h,
        source: colorData.source,
        a: colorData.a || color.getAlpha(),
    };
}


export function toRGBAString (rgba: any) {
    const {r, g, b, a} = rgba;
    return `rgba(${[r, g, b, a].join(',')})`;
}
