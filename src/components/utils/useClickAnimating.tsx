import { createSignal } from "solid-js";

/**
 * 点击触发animating
 * @returns
 */
function useClickAnimating () {
    const [animating, setAnimating] = createSignal(false);
    const setAnimate = () => {
        setAnimating(true);
        setTimeout(() => {
            setAnimating(false);
        }, 1000);
    }
    return [animating, setAnimate];
}

export default useClickAnimating;
