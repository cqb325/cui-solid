import { batch, createSignal } from "solid-js";
import { getTouchIdentifier, getControlPosition, createCoreData, addUserSelectStyles,
    addEvent, removeEvent, removeUserSelectStyles, snapToGrid } from './utils';

export function DraggableCore (props: any) {
    const [touchIdentifier, setTouchIdentifier] = createSignal(null);
    const [lastX, setLastX] = createSignal(NaN);
    const [lastY, setLastY] = createSignal(NaN);
    const [dragging, setDragging] = createSignal(false);

    let thisNode: any;
    const handleDragStart = (e: any) => {
        props.onMouseDown && props.onMouseDown(e);

        // Only accept left-clicks.
        if (!props.allowAnyClick && typeof e.button === 'number' && e.button !== 0) return false;
        if (!thisNode || !thisNode.ownerDocument || !thisNode.ownerDocument.body) {
            throw new Error('<DraggableCore> not mounted on DragStart!');
        }

        const {ownerDocument} = thisNode;

        // Short circuit if handle or cancel prop was provided and selector doesn't match.
        if (props.disabled ||
            (!(e.target instanceof ownerDocument.defaultView.Node)) ||
            (props.handle && !document.querySelector(props.handle).contains(e.target)) ||
            (props.cancel && document.querySelector(props.cancel).contains(e.target))) {
            return;
        }

        // Prevent scrolling on mobile devices, like ipad/iphone.
        // Important that this is after handle/cancel.
        if (e.type === 'touchstart') e.preventDefault();

        // Set touch identifier in component state if this is a touch event. This allows us to
        // distinguish between individual touches on multitouch screens by identifying which
        // touchpoint was set to this element.
        const touchIdentifier = getTouchIdentifier(e);
        setTouchIdentifier(touchIdentifier);

        // Get the current drag point from the event. This is used as the offset.
        const position = getControlPosition(e, touchIdentifier, props, thisNode);
        if (position == null) return; // not possible but satisfies flow
        const {x, y} = position;

        // Create an event object with all the data parents need to make a decision here.
        const coreEvent = createCoreData(thisNode, lastX(), lastY(), x, y);

        const shouldUpdate = props.onStart && props.onStart(e, coreEvent);
        if (shouldUpdate === false) return;

        // Add a style to the body to disable user-select. This prevents text from
        // being selected all over the page.
        addUserSelectStyles(ownerDocument);

        batch(() => {
            setDragging(true);
            setLastX(x);
            setLastY(y);
        });

        addEvent(ownerDocument, 'mousemove', handleDrag);
        addEvent(ownerDocument, 'mouseup', handleDragStop);
    }

    const handleDrag = (e: any) => {
        const position = getControlPosition(e, touchIdentifier(), props, thisNode);
        if (position == null) return;
        let {x, y} = position;

        // Snap to grid if prop has been provided
        if (Array.isArray(props.grid)) {
            let deltaX = x - lastX(), deltaY = y - lastY();
            [deltaX, deltaY] = snapToGrid(props.grid, deltaX, deltaY);
            if (!deltaX && !deltaY) return; // skip useless drag
            x = lastX() + deltaX;
            y = lastY() + deltaY;
        }

        const coreEvent = createCoreData(thisNode, lastX(), lastY(), x, y);

        const shouldUpdate = props.onDrag(e, coreEvent);
        if (shouldUpdate === false) {
            try {
                // $FlowIgnore
                handleDragStop(new MouseEvent('mouseup'));
            } catch (err) {
                // Old browsers
                const event = document.createEvent('MouseEvents');
                // I see why this insanity was deprecated
                // $FlowIgnore
                event.initMouseEvent('mouseup', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                handleDragStop(event);
            }
            return;
        }

        batch(() => {
            setLastX(x);
            setLastY(y);
        });
    }

    const handleDragStop = (e: any) => {
        if (!dragging()) return;

        const position = getControlPosition(e, touchIdentifier(), props, thisNode);
        if (position == null) return;
        const {x, y} = position;
        const coreEvent = createCoreData(thisNode, lastX(), lastY(), x, y);

        // Call event handler
        const shouldContinue = props.onStop(e, coreEvent);
        if (shouldContinue === false) return false;

        if (thisNode) {
          // Remove user-select hack
          removeUserSelectStyles(thisNode.ownerDocument);
        }

        // Reset the el.
        batch(() => {
            setDragging(false);
            setLastX(NaN);
            setLastY(NaN);
        });

        if (thisNode) {
          // Remove event handlers
          removeEvent(thisNode.ownerDocument, 'mousemove', handleDrag);
          removeEvent(thisNode.ownerDocument, 'mouseup', handleDragStop);
        }
    };

    const onMouseDown = (e: any) => {
        return handleDragStart(e);
    }

    const onMouseUp = (e: any) => {
        return handleDragStop(e);
    };

    return <div classList={props.classList} onMouseDown={onMouseDown} onMouseUp={onMouseUp} ref={thisNode} style={props.style}>
        {props.children}
    </div>
}
