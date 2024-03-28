import his from 'highlight.js'
import type { Accessor } from 'solid-js';

export function hljs (el: Element, accessor: () => any) {
    Promise.resolve().then(() => {
        const blocks = el.querySelectorAll('pre code');
        blocks.forEach((block: Element) => {
            his.highlightElement(block as HTMLElement)
        });
    })
}

declare module "solid-js" {
    namespace JSX {
      interface Directives {
        hljs: any;
      }
    }
}

export const useDirective = (fn: (el: HTMLElement, accessor: () => Accessor<any>) => void) => {};
