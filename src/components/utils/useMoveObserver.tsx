import { isServer } from "solid-js/web";

/**
 * 监控元素的移动
 * @param element
 * @param onMove
 * @returns
 */
export function useMoveObserver(element: Element, onMove: () => void) {
    if (isServer) return;
    let io: IntersectionObserver | null = null;
    let timeoutId: any;

    const root = window.document.documentElement;

    function cleanup() {
        clearTimeout(timeoutId);
        io?.disconnect();
        io = null;
    }

    function refresh(skip = false, threshold = 1) {
        cleanup();

        const { left, top, width, height } = element.getBoundingClientRect();

        if (!skip) {
            onMove();
        }

        if (!width || !height) {
            return;
        }

        const insetTop = Math.floor(top);
        const insetRight = Math.floor(root.clientWidth - (left + width));
        const insetBottom = Math.floor(root.clientHeight - (top + height));
        const insetLeft = Math.floor(left);
        const rootMargin = `${-insetTop}px ${-insetRight}px ${-insetBottom}px ${-insetLeft}px`;

        const options = {
            rootMargin,
            threshold: Math.max(0, Math.min(1, threshold)) || 1,
        };

        let isFirstUpdate = true;

        function handleObserve(entries: IntersectionObserverEntry[]) {
            const ratio = entries[0].intersectionRatio;

            if (ratio !== threshold) {
                if (!isFirstUpdate) {
                    return refresh();
                }

                if (!ratio) {
                    // If the reference is clipped, the ratio is 0. Throttle the refresh
                    // to prevent an infinite loop of updates.
                    timeoutId = setTimeout(() => {
                        refresh(false, 1e-7);
                    }, 1000);
                } else {
                    refresh(false, ratio);
                }
            }

            isFirstUpdate = false;
        }

        // Older browsers don't support a `document` as the root and will throw an
        // error.
        try {
            io = new IntersectionObserver(handleObserve, {
                ...options,
                // Handle <iframe>s
                root: root.ownerDocument,
            });
        } catch (e) {
            io = new IntersectionObserver(handleObserve, options);
        }

        io.observe(element);
    }

    refresh(true);

    return cleanup;
}
