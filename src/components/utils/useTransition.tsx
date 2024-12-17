import { onCleanup } from "solid-js";

export interface UseTransitionProps {
    el(): Element
    target?(): Element
    // 动画初始化的class
    startClass: string
    enterEndClass?: string
    // 动画执行class
    activeClass: string
    onEnter?(): void
    onLeave?(): void
}

export interface TransitionReturn {
    enter(): void
    leave(): void
}

export function nextFrame (fn: () => void) {
    requestAnimationFrame(() => requestAnimationFrame(fn));
}

/**
 * 简单动画指令
 * @param props
 * @returns
 */
export function useTransition (props: UseTransitionProps): TransitionReturn {
    const { el } = props;

    const endTransition = (e: Event) => {
        if (e.target && el().contains(e.target as Node)) {
            el().classList.remove(props.startClass);
            props.onLeave && props.onLeave();
        }
        el().removeEventListener("transitionend", endTransition);
    }

    const enterEndTransition = (e: Event) => {
        if (e.target && el().contains(e.target as Node)) {
            props.enterEndClass && el().classList.add(props.enterEndClass);
        }
        el().removeEventListener("transitionend", enterEndTransition);
    }

    onCleanup(() => {
        el() && el().removeEventListener("transitionend", endTransition);
        el() && el().removeEventListener("transitionend", enterEndTransition);
    })
    return {
        enter () {
            if (el()) {
                el().classList.add(props.startClass);
                // 确保移除了事件
                el().removeEventListener("transitionend", endTransition);
                el().removeEventListener("transitionend", enterEndTransition);
                nextFrame(() => {
                    el().addEventListener("transitionend", enterEndTransition);
                    el().classList.add(props.activeClass);
                    props.onEnter && props.onEnter();
                })
            }
        },
        leave () {
            if (el()) {
                el().classList.remove(props.activeClass);
                props.enterEndClass && el().classList.remove(props.enterEndClass);
                el().addEventListener("transitionend", endTransition);
            }
        }
    }
}
