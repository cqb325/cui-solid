import { createStore } from "solid-js/store";
import { DraggableCore } from "./DraggableCore";
import type { DraggableData, ControlPosition } from './utils';
import { createDraggableData, canDragX, canDragY, createCSSTransform, getBoundPosition } from './utils';
import { onCleanup } from "solid-js";
import { useClassList } from "../utils/useProps";

type DraggableProps = {
    classList?: any,
    class?: string,
    defaultPosition?: any,
    position?: any,
    scale?: number,
    bounds?: string,
    onStart?: (e: any, data: DraggableData) => boolean | undefined,
    onDrag?: (e: any, data: DraggableData) => boolean | undefined,
    onStop?: (e: any, data: DraggableData) => boolean | undefined,
    axis?: 'x'|'y'|'both',
    style?: any,
    positionOffset?: any,
    grid?: number[],
    ref?: any,
    disabled?: boolean,
    handle?: string|HTMLElement,
    children?: any
}

export function Draggable (props: DraggableProps) {
    const defaultPosition = props.defaultPosition || {x: 0, y: 0};
    const [store, setStore] = createStore({
        // Whether or not we are currently dragging.
        dragging: false,

        // Whether or not we have been dragged before.
        dragged: false,

        // Current transform x and y.
        x: props.position ? props.position.x : defaultPosition.x,
        y: props.position ? props.position.y : defaultPosition.y,

        prevPropsPosition: {...props.position},

        // Used for compensating for out-of-bounds drags
        slackX: 0, slackY: 0
    });

    const scale = props.scale || 1;
    const bounds = props.bounds || false;
    let core: any;
    const onDragStart = (e: any, coreData: DraggableData) => {
        // Short-circuit if user's callback killed it.
        const shouldStart = props.onStart && props.onStart(e, createDraggableData(store, scale, coreData));
        // Kills start event on core as well, so move handlers are never bound.
        if (shouldStart === false) return false;

        setStore('dragging', true);
        setStore('dragged', true);
    };

    const onDrag = (e: any, coreData: DraggableData) => {
        if (!store.dragging) return false;
        const uiData = createDraggableData(store, scale, coreData);

        const newState = {
          x: uiData.x,
          y: uiData.y,
          slackX: 0,
          slackY: 0
        };

        // Keep within bounds.
        if (bounds) {
          // Save original x and y.
          const {x, y} = newState;

          // Add slack to the values used to calculate bound position. This will ensure that if
          // we start removing slack, the element won't react to it right away until it's been
          // completely removed.
          newState.x += store.slackX;
          newState.y += store.slackY;

          // Get bound position. This will ceil/floor the x and y within the boundaries.
          const [newStateX, newStateY] = getBoundPosition({bounds, node: coreData.node}, newState.x, newState.y);
          newState.x = newStateX;
          newState.y = newStateY;

          // Recalculate slack by noting how much was shaved by the boundPosition handler.
          newState.slackX = store.slackX + (x - newState.x);
          newState.slackY = store.slackY + (y - newState.y);

          // Update the event we fire to reflect what really happened after bounds took effect.
          uiData.x = newState.x;
          uiData.y = newState.y;
          uiData.deltaX = newState.x - store.x;
          uiData.deltaY = newState.y - store.y;
        }

        // Short-circuit if user's callback killed it.
        const shouldUpdate = props.onDrag && props.onDrag(e, uiData);
        if (shouldUpdate === false) return false;

        setStore('x', newState.x);
        setStore('y', newState.y);
        setStore('slackX', newState.slackX);
        setStore('slackY', newState.slackY);
    };

    const onDragStop = (e: any, coreData: DraggableData) => {
        if (!store.dragging) return false;

        // Short-circuit if user's callback killed it.
        const shouldContinue = props.onStop && props.onStop(e, createDraggableData(store, scale, coreData));
        if (shouldContinue === false) return false;

        setStore('dragging', false);
        setStore('slackX', 0);
        setStore('slackY', 0);
    };
    onCleanup(() => {
        setStore('dragging', false);
    });

    const axis = props.axis || 'both';
    const transformOpts = () => ({
        // Set left if horizontal drag is enabled
        x: canDragX(axis) ? store.x : defaultPosition.x,

        // Set top if vertical drag is enabled
        y: canDragY(axis) ? store.y : defaultPosition.y
    });
    const style = () => {
        return {...props.style, ...createCSSTransform(transformOpts(), props.positionOffset)};
    }
    const classList = () => useClassList(props, 'cm-draggable', {
        'cm-draggable-dragging': store.dragging,
        'cm-draggable-dragged': store.dragged,
    });

    // ref 暴露接口
    props.ref && props.ref({
        reset: () => {
            setStore('x', 0);
            setStore('y', 0);
        },
        setPosition (pos: ControlPosition) {
            setStore('x', pos.x);
            setStore('y', pos.y);
        }
    });

    return <DraggableCore grid={props.grid} classList={classList()} disabled={props.disabled} handle={props.handle} scale={scale} style={style()}
        onStart={onDragStart} onDrag={onDrag} onStop={onDragStop} ref={core}>
        {props.children}
    </DraggableCore>
}
