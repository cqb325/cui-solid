import { VirtualListCore } from "./core";
import { isServer } from "solid-js/web";

export * from './core';

const CONTAINER_CLASSNAME = `cm-virtual-list`
let globalContainerStylesheet: HTMLStyleElement;

const insertGlobalStylesheet = () => {
    if (isServer) return;
    if (!globalContainerStylesheet) {
        globalContainerStylesheet = document.createElement('style')
        globalContainerStylesheet.type = 'text/css'

        globalContainerStylesheet.textContent = `
        .${CONTAINER_CLASSNAME} {
            position: relative !important;
            flex-shrink: 0 !important;
            width: 100%;
            height: 100%;
            overflow: auto;
        }
        .${CONTAINER_CLASSNAME} > * {
            width: 100%;
            will-change: transform !important;
            box-sizing: border-box !important;
            contain: layout !important;
        }
      `
        document.head.appendChild(globalContainerStylesheet)
    }
}

export interface CustomComponentProps {
    component: any,
    props: any,
}

export interface VirtualListProps {
    height?: number,
    maxHeight?: number,
    itemEstimatedSize: number
    overscan?: number,
    items: any[],
    onScroll?: (scrollTop: number) => void,
    itemComponent: CustomComponentProps, // 列表项组件
    ref?: any,
    displayDelay?: number,
}

export interface MeasuredData {
    size: number,
    offset: number,
}
export interface IMeasuredDataMap {
    [key: number]: MeasuredData
}

export function VirtualList (props: VirtualListProps) {
    insertGlobalStylesheet();
    let scrollElement: any;
    let contentElement: any;
    let bodyElement: any;
    let core: any;

    return <div class={CONTAINER_CLASSNAME} ref={scrollElement}>
        <div ref={contentElement}>
            <div ref={bodyElement}>
                <VirtualListCore ref={core} scrollElement={scrollElement} contentElement={contentElement} bodyElement={bodyElement}
                    {...props} />
            </div>
        </div>
    </div>
}
