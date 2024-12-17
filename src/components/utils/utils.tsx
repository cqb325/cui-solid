import { isServer } from "solid-js/web";

export function scrollTop (el: any, from = 0, to: number, duration = 500, endCallback?: () => void) {
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = (
            function (callback) {
                return window.setTimeout(callback, 1000/60);
            }
        );
    }
    const difference = Math.abs(from - to);
    const step = Math.ceil(difference / duration * 50);

    function scroll (start: number, end: number, step: number) {
        if (start === end) {
            endCallback && endCallback();
            return;
        }

        let d = (start + step > end) ? end : start + step;
        if (start > end) {
            d = (start - step < end) ? end : start - step;
        }

        if (el === window) {
            window.scrollTo(d, d);
        } else {
            el.scrollTop = d;
        }
        window.requestAnimationFrame(() => scroll(d, end, step));
    }
    scroll(from, to, step);
}


/**
 * 获取安全的随机数
 */
export function getRandomIntInclusive (min: number, max: number) {
    const randomBuffer = new Uint32Array(1);
    if (isServer) {
        randomBuffer[0] = Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        window.crypto.getRandomValues(randomBuffer);
    }
    const randomNumber = randomBuffer[0] / (0xffffffff + 1);
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(randomNumber * (max - min + 1)) + min;
}

/**
 * 字符串是否为颜色值
 * @param strColor
 * @returns
 */
export function isColor (strColor: string | undefined): boolean {
    if (strColor && (strColor.startsWith('#') || strColor.startsWith('rgb') || strColor.startsWith('hsl'))) {
        const s = new Option().style;
        s.color = strColor as string;
        return s.color.startsWith('rgb');
    }
    return false;
}
