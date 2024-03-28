export type ControlPosition = {x: number, y: number};
export type DraggableData = {
    node: HTMLElement,
    x: number, y: number,
    deltaX: number, deltaY: number,
    lastX: number, lastY: number,
};
export function getTouchIdentifier (e: any) {
    if (e.targetTouches && e.targetTouches[0]) {
        return e.targetTouches[0].identifier;
    }
    if (e.changedTouches && e.changedTouches[0]) {
        return e.changedTouches[0].identifier;
    }
}

export function offsetXYFromParent (evt: {clientX: number, clientY: number}, offsetParent: HTMLElement, scale: number): ControlPosition {
    const isBody = offsetParent === offsetParent.ownerDocument.body;
    const offsetParentRect = isBody ? {left: 0, top: 0} : offsetParent.getBoundingClientRect();

    const x = (evt.clientX + offsetParent.scrollLeft - offsetParentRect.left) / scale;
    const y = (evt.clientY + offsetParent.scrollTop - offsetParentRect.top) / scale;

    return {x, y};
}

export function findInArray (array: Array<any> | TouchList, callback: any): any {
    for (let i = 0, length = array.length; i < length; i++) {
      if (callback.apply(callback, [array[i], i, array])) return array[i];
    }
}

export function getTouch (e: any, identifier: number): null | {clientX: number, clientY: number} {
    return (e.targetTouches && findInArray(e.targetTouches, (t: any) => identifier === t.identifier)) ||
           (e.changedTouches && findInArray(e.changedTouches, (t: any) => identifier === t.identifier));
}

export function getControlPosition (e: any, touchIdentifier: any, props: any, node: any): null|ControlPosition {
    const touchObj = typeof touchIdentifier === 'number' ? getTouch(e, touchIdentifier) : null;
    if (typeof touchIdentifier === 'number' && !touchObj) return null; // not the right touch
    // User can provide an offsetParent if desired.
    const offsetParent = props.offsetParent || node.offsetParent || node.ownerDocument.body;
    return offsetXYFromParent(touchObj || e, offsetParent, props.scale);
}

export function createCoreData (node: any, lastX: number, lastY: number, x: number, y: number): DraggableData {
    const isStart = Number.isNaN(lastX);

    if (isStart) {

      // If this is our first move, use the x and y as last coords.
      return {
        node,
        deltaX: 0, deltaY: 0,
        lastX: x, lastY: y,
        x, y,
      };
    } else {
      // Otherwise calculate proper values.
      return {
        node,
        deltaX: x - lastX, deltaY: y - lastY,
        lastX: lastX, lastY: lastY,
        x, y,
      };
    }
}

export function addEvent (el: any, event: string, handler: any, inputOptions?: any): void {
    if (!el) return;
    const options = {capture: true, ...inputOptions};
    if (el.addEventListener) {
      el.addEventListener(event, handler, options);
    } else if (el.attachEvent) {
      el.attachEvent('on' + event, handler);
    } else {
      // $FlowIgnore: Doesn't think elements are indexable
      el['on' + event] = handler;
    }
}

export function removeEvent (el: any, event: string, handler: any, inputOptions?: any): void {
    if (!el) return;
    const options = {capture: true, ...inputOptions};
    if (el.removeEventListener) {
      el.removeEventListener(event, handler, options);
    } else if (el.detachEvent) {
      el.detachEvent('on' + event, handler);
    } else {
      // $FlowIgnore: Doesn't think elements are indexable
      el['on' + event] = null;
    }
}

export function snapToGrid (grid: [number, number], pendingX: number, pendingY: number): [number, number] {
    const x = Math.round(pendingX / grid[0]) * grid[0];
    const y = Math.round(pendingY / grid[1]) * grid[1];
    return [x, y];
}

export function addUserSelectStyles (doc: any) {
    if (!doc) return;
    let styleEl = doc.getElementById('react-draggable-style-el');
    if (!styleEl) {
      styleEl = doc.createElement('style');
      styleEl.type = 'text/css';
      styleEl.id = 'react-draggable-style-el';
      styleEl.innerHTML = '.react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n';
      styleEl.innerHTML += '.react-draggable-transparent-selection *::selection {all: inherit;}\n';
      doc.getElementsByTagName('head')[0].appendChild(styleEl);
    }
    if (doc.body) {
        doc.body.classList.add('react-draggable-transparent-selection');
    }
}

export function removeUserSelectStyles (doc: any) {
    if (!doc) return;
    try {
      if (doc.body) {
        doc.body.classList.remove('react-draggable-transparent-selection');
      }
      // $FlowIgnore: IE
      if (doc.selection) {
        // $FlowIgnore: IE
        doc.selection.empty();
      } else {
        // Remove selection caused by scroll, unless it's a focused input
        // (we use doc.defaultView in case we're in an iframe)
        const selection = (doc.defaultView || window).getSelection();
        if (selection && selection.type !== 'Caret') {
          selection.removeAllRanges();
        }
      }
    } catch (e) {
      // probably IE
    }
}

export function createDraggableData (store: any, scale: number, coreData: DraggableData): DraggableData {
    return {
      node: coreData.node,
      x: store.x + (coreData.deltaX / scale),
      y: store.y + (coreData.deltaY / scale),
      deltaX: (coreData.deltaX / scale),
      deltaY: (coreData.deltaY / scale),
      lastX: store.x,
      lastY: store.y
    };
}

function cloneBounds (bounds: any): any {
    return {
      left: bounds.left,
      top: bounds.top,
      right: bounds.right,
      bottom: bounds.bottom
    };
}

export function int (a: string): number {
    return parseInt(a, 10);
}

export function outerHeight (node: HTMLElement): number {
    // This is deliberately excluding margin for our calculations, since we are using
    // offsetTop which is including margin. See getBoundPosition
    let height = node.clientHeight;
    const computedStyle = window.getComputedStyle(node);
    height += int(computedStyle.borderTopWidth);
    height += int(computedStyle.borderBottomWidth);
    return height;
}

export function outerWidth (node: HTMLElement): number {
    // This is deliberately excluding margin for our calculations, since we are using
    // offsetLeft which is including margin. See getBoundPosition
    let width = node.clientWidth;
    const computedStyle = window.getComputedStyle(node);
    width += int(computedStyle.borderLeftWidth);
    width += int(computedStyle.borderRightWidth);
    return width;
}
export function innerHeight (node: HTMLElement): number {
    let height = node.clientHeight;
    const computedStyle = window.getComputedStyle(node);
    height -= int(computedStyle.paddingTop);
    height -= int(computedStyle.paddingBottom);
    return height;
}

export function innerWidth (node: HTMLElement): number {
    let width = node.clientWidth;
    const computedStyle = window.getComputedStyle(node);
    width -= int(computedStyle.paddingLeft);
    width -= int(computedStyle.paddingRight);
    return width;
}

export function isNum (num: any): boolean {
    return typeof num === 'number' && !isNaN(num);
}

export function getBoundPosition ({bounds, node}: any, x: number, y: number): [number, number] {
    // If no bounds, short-circuit and move on
    if (!bounds) return [x, y];

    // Clone new bounds
    bounds = typeof bounds === 'string' ? bounds : cloneBounds(bounds);

    if (typeof bounds === 'string') {
      const ownerWindow = document.defaultView;
      let boundNode;
      if (bounds === 'parent') {
        boundNode = node.parentNode;
      } else {
        boundNode = document.querySelector(bounds);
      }
      if (!(boundNode instanceof HTMLElement)) {
        throw new Error('Bounds selector "' + bounds + '" could not find an element.');
      }
      const nodeStyle = window.getComputedStyle(node);
      const boundNodeStyle = window.getComputedStyle(boundNode);

      // Compute bounds. This is a pain with padding and offsets but this gets it exactly right.
      bounds = {
        left: -node.offsetLeft + int(boundNodeStyle.paddingLeft) + int(nodeStyle.marginLeft),
        top: -node.offsetTop + int(boundNodeStyle.paddingTop) + int(nodeStyle.marginTop),
        right: innerWidth(boundNode) - outerWidth(node) - node.offsetLeft +
          int(boundNodeStyle.paddingRight) - int(nodeStyle.marginRight),
        bottom: innerHeight(boundNode) - outerHeight(node) - node.offsetTop +
          int(boundNodeStyle.paddingBottom) - int(nodeStyle.marginBottom)
      };
    }

    // Keep x and y below right and bottom limits...
    if (isNum(bounds.right)) x = Math.min(x, bounds.right);
    if (isNum(bounds.bottom)) y = Math.min(y, bounds.bottom);

    // But above left and top limits.
    if (isNum(bounds.left)) x = Math.max(x, bounds.left);
    if (isNum(bounds.top)) y = Math.max(y, bounds.top);

    return [x, y];
}

export function canDragX (axis: string): boolean {
    return axis === 'both' || axis === 'x';
}

export function canDragY (axis: string): boolean {
    return axis === 'both' || axis === 'y';
}

export function getTranslation ({x, y}: ControlPosition, positionOffset: any, unitSuffix: string): string {
    let translation = `translate(${x}${unitSuffix},${y}${unitSuffix})`;
    if (positionOffset) {
      const defaultX = `${(typeof positionOffset.x === 'string') ? positionOffset.x : positionOffset.x + unitSuffix}`;
      const defaultY = `${(typeof positionOffset.y === 'string') ? positionOffset.y : positionOffset.y + unitSuffix}`;
      translation = `translate(${defaultX}, ${defaultY})` + translation;
    }
    return translation;
}

export function createCSSTransform (controlPos: ControlPosition, positionOffset: any): any {
    const translation = getTranslation(controlPos, positionOffset, 'px');
    return {['transform']: translation };
}
