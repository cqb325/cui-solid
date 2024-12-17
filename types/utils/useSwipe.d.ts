export interface Position {
    x: number;
    y: number;
}
export interface UseSwipeOptions {
    /**
     * @default 50
     */
    threshold?: number;
    /**
     * Callback on swipe start.
     */
    onSwipeStart?: (e: PointerEvent) => void;
    /**
     * Callback on swipe move.
     */
    onSwipe?: (e: PointerEvent) => void;
    /**
     * Callback on swipe end.
     */
    onSwipeEnd?: (e: PointerEvent, direction: 'left' | 'right' | 'up' | 'down' | 'none', duration?: number) => void;
    /**
     * Pointer types to listen to.
     *
     * @default ['mouse', 'touch', 'pen']
     */
    pointerTypes?: any[];
}
export declare function useSwipe(target: any, options: UseSwipeOptions): {
    isSwiping: import("solid-js").Accessor<boolean>;
    direction: import("solid-js").Accessor<"none" | "left" | "right" | "up" | "down">;
    posStart: Position;
    posEnd: Position;
    distanceX: import("solid-js").Accessor<number>;
    distanceY: import("solid-js").Accessor<number>;
    duration: import("solid-js").Accessor<number>;
    stop: () => void;
};
