export function useDebounce (func: (...args: any[]) => void, delay: number) {
    let timer: any = null;

    return function (...rest: any[]) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            timer = null;
            func?.(...rest);
        }, delay);
    }
}
