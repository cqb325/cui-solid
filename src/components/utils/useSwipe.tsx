import { createMemo, createSignal } from "solid-js";
import { createMutable } from "solid-js/store";

export interface Position {
    x: number,
    y: number
}

export interface UseSwipeOptions {
  /**
   * @default 50
   */
  threshold?: number

  /**
   * Callback on swipe start.
   */
  onSwipeStart?: (e: PointerEvent) => void

  /**
   * Callback on swipe move.
   */
  onSwipe?: (e: PointerEvent) => void

  /**
   * Callback on swipe end.
   */
  onSwipeEnd?: (e: PointerEvent, direction: 'left'|'right'|'up'|'down'|'none', duration?: number) => void

  /**
   * Pointer types to listen to.
   *
   * @default ['mouse', 'touch', 'pen']
   */
  pointerTypes?: any[]
}

export function useSwipe (target: any, options: UseSwipeOptions ) {
    const {
        threshold = 50,
        onSwipe,
        onSwipeEnd,
        onSwipeStart,
    } = options;

    const posStart = createMutable<Position>({ x: 0, y: 0 })
    const updatePosStart = (x: number, y: number) => {
        posStart.x = x
        posStart.y = y
    }

    const posEnd = createMutable<Position>({ x: 0, y: 0 })
    const updatePosEnd = (x: number, y: number) => {
        posEnd.x = x
        posEnd.y = y
    }

    const distanceX = createMemo(() => posStart.x - posEnd.x)
    const distanceY = createMemo(() => posStart.y - posEnd.y)

    const { max, abs } = Math
    const isThresholdExceeded = createMemo(() => max(abs(distanceX()), abs(distanceY())) >= threshold)
    const [isSwiping, setIsSwiping] = createSignal(false)
    const [isPointerDown, setIsPointerDown] = createSignal(false)
    const [duration, setDuration] = createSignal(0)
    let startT: DOMHighResTimeStamp;

    const direction = createMemo(() => {
        if (!isThresholdExceeded()) return 'none'

        if (abs(distanceX()) > abs(distanceY())) {
            return distanceX() > 0 ? 'left' : 'right'
        }
        return distanceY() > 0 ? 'up' : 'down'
    })

    const eventIsAllowed = (e: PointerEvent): boolean => {
        const isReleasingButton = e.buttons === 0
        const isPrimaryButton = e.buttons === 1
        return (
            options.pointerTypes?.includes(e.pointerType) ?? (isReleasingButton || isPrimaryButton) ?? true
        )
    }

    const handlePointerDown = (e: PointerEvent) => {
        if (!eventIsAllowed(e)) return
        e.preventDefault();
        setIsPointerDown(true);
        startT = performance.now();

        // Disable scroll on for TouchEvents
        target?.style?.setProperty('touch-action', 'none');
        // Future pointer events will be retargeted to target until pointerup/cancel
        const eventTarget = e.target as HTMLElement | undefined
        eventTarget?.setPointerCapture(e.pointerId)
        const { clientX: x, clientY: y } = e
        updatePosStart(x, y)
        updatePosEnd(x, y)
        onSwipeStart?.(e)
    }

    const handlePointerMove = (e: PointerEvent) => {
        if (!eventIsAllowed(e)) return
        if (!isPointerDown()) return

        const { clientX: x, clientY: y } = e
        updatePosEnd(x, y)
        if (!isSwiping() && isThresholdExceeded()) setIsSwiping(true)
        if (isSwiping()) onSwipe?.(e)
    }

    const handlePointerUp = (e: PointerEvent) => {
        if (!eventIsAllowed(e)) return
        const duration = performance.now() - startT;
        setDuration(duration);

        if (isSwiping()) onSwipeEnd?.(e, direction(), duration)

        setIsPointerDown(false)
        setIsSwiping(false)
        target?.style?.setProperty('touch-action', 'initial')
    }

    target.addEventListener('pointerdown', handlePointerDown);
    target.addEventListener('pointermove', handlePointerMove);
    target.addEventListener('pointerup', handlePointerUp)

    const stop = () => {
        target.removeEventListener('pointerdown', handlePointerDown);
        target.removeEventListener('pointermove', handlePointerMove);
        target.removeEventListener('pointerup', handlePointerUp)
    }

    return {
        isSwiping,
        direction,
        posStart,
        posEnd,
        distanceX,
        distanceY,
        duration,
        stop
    }
}
