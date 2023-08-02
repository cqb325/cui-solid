export interface UseTransitionProps {
    el(): Element;
    target?(): Element;
    startClass: string;
    activeClass: string;
    onEnter?(): void;
    onLeave?(): void;
}
export declare function nextFrame(fn: () => void): void;
/**
 * 简单动画指令
 * @param props
 * @returns
 */
export declare function useTransition(props: UseTransitionProps): {
    enter(): void;
    leave(): void;
};
