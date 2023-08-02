import his from 'highlight.js'

export function hljs (el: Element, accessor: () => any) {
    Promise.resolve().then(() => {
        let blocks = el.querySelectorAll('pre code');
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

export const useDirective = (fn: (el: HTMLElement, accessor: () => Function) => void) => {};