export function useAnimate (el: HTMLElement, keyframes: Keyframe[] | PropertyIndexedKeyframes, options?: KeyframeAnimationOptions, finishCallback?: () => void) {
    const animation = el.animate(keyframes, options);
    animation.onfinish = () => {
        finishCallback?.();
    }
    return animation;
}
