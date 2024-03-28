
export function useClickOutside (ref?: any, callback?: () => any, onMouseDown?: (e: any) => any): () => void {
    const clickOutsideHandler = (e: any) => {
        onMouseDown && onMouseDown(e);
        if (ref instanceof Array) {
            let inSide = false;
            ref.forEach(item => {
                if (item.contains && item.contains(e.target)) {
                    inSide = true;
                }
                if (item.forEach) {
                    item.forEach((subItem: any) => {
                        if (subItem.contains && subItem.contains(e.target)) {
                            inSide = true;
                        }
                    })
                }
            });
            if (!inSide) {
                callback && callback();
            }
        } else {
            if (!(ref.contains(e.target))) {
                callback && callback();
            }
        }
    };

    const removeEventListener = () => {
        document.removeEventListener('mousedown', clickOutsideHandler);
    };

    document.addEventListener('mousedown', clickOutsideHandler);

    return removeEventListener;
}
