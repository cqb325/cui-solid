export interface UseTransitionProps {
    el(): Element;
    target?(): Element;
    startClass: string;
    enterEndClass?: string;
    activeClass: string;
    onEnter?(): void;
    onLeave?(): void;
}
export interface TransitionReturn {
    enter(): void;
    leave(): void;
}
export declare function nextFrame(fn: () => void): void;
/**
 * 简单动画指令
 * @param props
 * @returns
 */
export declare function useTransition(props: UseTransitionProps): TransitionReturn;
