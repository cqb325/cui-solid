import type { JSX, JSXElement } from "solid-js";
import { For, children, createEffect, onCleanup, onMount, splitProps, untrack } from "solid-js";
import { createStore } from "solid-js/store";
import { useClassList } from "../utils/useProps"
import { scrollTop } from "../utils/utils";

import type { AnchorLinkProps } from './AnchorLink';
import { AnchorLink } from './AnchorLink';
import { isServer } from "solid-js/web";

export interface AnchorProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'onChange'>{
    children?: any,
    classList?: any,
    class?: string,
    container?: string | HTMLElement,
    scrollContainer?: string | HTMLElement,
    scrollOffset?: number,
    offsetTop?: number,
    bounds?: number,
    showInk?: boolean,
    mode?: 'hash' | 'history'
    onChange?: (id: string) => void,
}

export interface AnchorStore {
    inkTop: number,
    inkHeight: number,
    currentId: string,
    currentLink: string,
    animating: boolean,
    links: AnchorLinkProps[],
    upperFirstTitle?: boolean
}

export function Anchor (props: AnchorProps) {
    const [local, rest] = splitProps(props, ['children', 'classList', 'class', 'container', 'scrollContainer', 'scrollOffset', 'offsetTop', 'bounds', 'showInk', 'mode', 'onChange']);
    const classList = () => useClassList(local, 'cm-anchor');

    const links = children(() => local.children)
    const evaluatedLinks = () => links.toArray() as unknown as AnchorLinkProps[]

    const [store, setStore] = createStore({
        inkTop: 0,
        inkHeight: 0,
        currentId: '',
        currentLink: '',
        animating: false,
        links: [],
        upperFirstTitle: true
    } as AnchorStore);

    createEffect(() => {
        setStore('links', evaluatedLinks());
    })

    createEffect(() => {
        local.onChange?.(store.currentId);
    })

    let scrollContainer: any = null;
    let scrollElement: any = null;
    let wrapperTop = 0;
    const bounds: number = local.bounds || 5;
    let titlesOffsetArr: any = [];
    const mode = local.mode ?? 'hash';
    const showInk = local.showInk ?? false;

    const handleHashChange = () => {
        let sharpLinkMatch: any;
        if (mode === 'hash') {
            const url = window.location.href;
            sharpLinkMatch = /#([^#]+)$/.exec(url);
        } else {
            const path = window.location.href;
            const search = path.includes('?') ? path.split('?')[1] : '';
            const params = new URLSearchParams(search);
            const has = params.has('_to');
            if (has) {
                if (params.get('_to')) {
                    sharpLinkMatch = [];
                    sharpLinkMatch[0] = params.get('_to');
                    sharpLinkMatch[1] = params.get('_to')?.replace('#', '');
                }
            }
        }

        if (!sharpLinkMatch) {
            setTimeout(() => {
                const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                getCurrentScrollAtTitleId(scrollTop);
            }, 10)
            return;
        }

        setStore('currentLink', sharpLinkMatch[0]);
        setStore('currentId', sharpLinkMatch[1]);
    }

    const removeListener = () => {
        scrollContainer && scrollContainer.removeEventListener('scroll', handleScroll);
        window.removeEventListener('hashchange', handleHashChange);
    }

    const handleScroll = (e: any) => {
        // this.upperFirstTitle = !!this.titlesOffsetArr[0] && e.target.scrollTop < this.titlesOffsetArr[0].offset;
        if (store.animating) return;
        // this.updateTitleOffset();
        const scrollTop = (document.documentElement.scrollTop || document.body.scrollTop || e.target.scrollTop);
        getCurrentScrollAtTitleId(scrollTop);
    }

    const handleScrollTo = () => {
        const anchor = document.getElementById(store.currentId);
        const currentLinkElementA: any = document.querySelector(`a[data-href="${store.currentLink}"]`);
        let offset = local.scrollOffset || 0;
        if (currentLinkElementA) {
            offset = parseFloat(currentLinkElementA.getAttribute('data-scroll-offset'));
        }
        if (!anchor) return;
        const offsetTop = anchor.offsetTop - wrapperTop - offset;

        setStore('animating', true);
        scrollTop(scrollContainer, scrollElement.scrollTop, offsetTop, 600, () => {
            setStore('animating', false);
        });
    }

    createEffect(() => {
        store.currentLink;
        const currentLinkElementA: any = document.querySelector(`a[data-href="${store.currentLink}"]`)?.parentElement;

        if (!currentLinkElementA) return;
        const elementATop = currentLinkElementA.offsetTop;
        const elementAHeight = currentLinkElementA.getBoundingClientRect().height;
        const offset = elementAHeight / 4;

        const top = (elementATop < 0 ? (local.offsetTop || 0) : elementATop);
        untrack(() => {
            setStore('inkTop', top + offset / 2);
            setStore('inkHeight', elementAHeight * 3 / 4);
        });
    })

    const getContainer = () => {
        scrollContainer = local.container ? (typeof local.container === 'string' ? document.querySelector(local.container) : local.container) : window;
        scrollElement = local.container ? scrollContainer : (document.documentElement || document.body);
    }

    const getCurrentScrollAtTitleId = (scrollTop: number) => {
        let i = -1;
        const len = titlesOffsetArr.length;
        let titleItem = {
            link: '#',
            offset: 0
        };

        scrollTop += bounds;
        while (++i < len) {
            const currentEle = titlesOffsetArr[i];
            const nextEle = titlesOffsetArr[i + 1];
            if (scrollTop >= currentEle?.offset && scrollTop < ((nextEle && nextEle.offset) || Infinity)) {
                titleItem = titlesOffsetArr[i];
                break;
            }
        }
        setStore('currentLink', titleItem.link)
    }

    const containerIsWindow = () => scrollContainer === window;

    const init = () => {
        handleHashChange();
        setTimeout(() => {
            removeListener();
            getContainer();
            wrapperTop = containerIsWindow() ? 0 : scrollElement.offsetTop;
            handleScrollTo();
            // if (titlesOffsetArr[0]) {
            //     setStore('upperFirstTitle', scrollElement.scrollTop < titlesOffsetArr[0].offset);
            // }
            scrollContainer.addEventListener('scroll', handleScroll);
            window.addEventListener('hashchange', handleHashChange);
        }, 0);
    }

    createEffect(() => {
        const links = store.links.map(item => {
            return item.href;
        });
        untrack(() => {
            const idArr = links.map(link => {
                return link.split('#')[1];
            });

            if (!scrollElement) {
                getContainer();
            }

            const arr: any = [];
            idArr.forEach(id => {
                const titleEle = document.getElementById(id);
                if (titleEle) arr.push({
                    link: `#${id}`,
                    offset: titleEle.offsetTop - scrollElement.offsetTop
                });
            });

            titlesOffsetArr = arr;
        });
    });

    const gotoAnchor = (href: any, e: any) => {
        e.stopPropagation && e.stopPropagation();
        e.preventDefault && e.preventDefault();

        setStore('currentLink', href);
        setStore('currentId', href.replace('#', ''));
        handleScrollTo();
        if (mode === 'hash') {
            window.location.hash = href;
        } else {
            const path = window.location.href;
            const search = path.includes('?') ? path.split('?')[1] : '';
            const index = location.hash.indexOf('?');
            const hash = index > -1 ? location.hash.substring(0, index) : location.hash;
            const params = new URLSearchParams(search);
            params.set('_to', href);
            window.history.replaceState({}, '', `${location.pathname}${hash}?${params.toString()}`)
        }
    }

    onMount(() => {
        if (isServer) return;
        init();
        const timer = setInterval(() => {
            const links = store.links.map(item => {
                return item.href;
            });
            const idArr = links.map(link => {
                return link.split('#')[1];
            });
            idArr.forEach((id, index) => {
                const titleEle = document.getElementById(id);
                if (titleEle) {
                    const offset = titleEle.offsetTop - scrollElement.offsetTop;
                    if (!titlesOffsetArr[index]) {
                        titlesOffsetArr[index] = {
                            link: `#${id}`,
                            offset: 0
                        }
                    }
                    if (titlesOffsetArr[index] && titlesOffsetArr[index]?.offset !== offset) {
                        titlesOffsetArr[index].offset = offset;
                        titlesOffsetArr[index].link = `#${id}`;
                    }
                }
            });
        }, 500);

        onCleanup(() => {
            clearInterval(timer);
        })
    });

    onCleanup(() => {
        if (isServer) return;
        removeListener();
    });

    const renderLinks = (arr: AnchorLinkProps[]): JSXElement => {
        if (arr && arr.length) {
            return <For each={arr}>
                {(link: AnchorLinkProps) => {
                    return <div class="cm-anchor-link">
                        <a class="cm-anchor-link-title" href={link.href} data-scroll-offset={local.scrollOffset || 0} data-href={link.href}
                            onClick={(e: any) => {
                                gotoAnchor(link.href, e);
                            }} title={link.title as string}>{link.title}</a>
                        {
                            renderLinks(link.subItems())
                        }
                    </div>
                }}
            </For>
        } else {
            return null;
        }
    }

    return <div classList={classList()} {...rest}>
        <div class="cm-anchor-wrapper">
            <div class="cm-anchor-inner">
                <div class={"cm-anchor-ink " + (showInk ? 'cm-anchor-show' : '')}>
                    <span class="cm-anchor-ink-ball" style={{ top: `${store.inkTop}px`, height: `${store.inkHeight}px` }} />
                </div>
                {renderLinks(store.links)}
            </div>
        </div>
    </div>
}

Anchor.Link = AnchorLink;
