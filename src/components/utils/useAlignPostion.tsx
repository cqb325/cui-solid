function useAlignPostion (align: string, rel: any) {
    const targetRect = rel.getBoundingClientRect();
    let pos;
    if (align === 'bottom') {
        pos = {
            left: targetRect.x + targetRect.width / 2,
            top: targetRect.y + targetRect.height
        };
    }
    if (align === 'top') {
        pos = {
            left: targetRect.x + targetRect.width / 2,
            top: targetRect.y
        };
    }
    if (align === 'left') {
        pos = {
            left: targetRect.x,
            top: targetRect.y + targetRect.height / 2
        };
    }
    if (align === 'right') {
        pos = {
            left: targetRect.x + targetRect.width,
            top: targetRect.y + targetRect.height / 2
        };
    }
    if (align === 'bottomLeft') {
        pos = {
            left: targetRect.x,
            top: targetRect.y + targetRect.height
        };
    }
    if (align === 'bottomRight') {
        pos = {
            left: targetRect.x + targetRect.width,
            top: targetRect.y + targetRect.height
        };
    }
    if (align === 'topLeft') {
        pos = {
            left: targetRect.x,
            top: targetRect.y
        };
    }
    if (align === 'topRight') {
        pos = {
            left: targetRect.x + targetRect.width,
            top: targetRect.y
        };
    }
    if (align === 'rightTop') {
        pos = {
            left: targetRect.x + targetRect.width,
            top: targetRect.y
        };
    }
    if (align === 'rightBottom') {
        pos = {
            left: targetRect.x + targetRect.width,
            top: targetRect.y + targetRect.height
        };
    }
    if (align === 'leftTop') {
        pos = {
            left: targetRect.x,
            top: targetRect.y
        };
    }
    if (align === 'leftBottom') {
        pos = {
            left: targetRect.x,
            top: targetRect.y + targetRect.height
        };
    }
    return pos;
}

export default useAlignPostion;
