import type { Signal} from "solid-js";
import { createContext, createEffect, untrack, useContext } from "solid-js";
import { createStore, produce } from "solid-js/store";
import { useClassList } from "../utils/useProps"
import createModel from "../utils/createModel";
export * from "./MenuItem";
export * from "./SubMenu";
export * from "./MenuGroup";

const MenuContext = createContext();

export interface MenuProps {
    classList?: any,
    class?: string,
    style?: any,
    children?: any,
    accordion?: boolean,
    theme?: 'light'|'dark',
    dir?: 'v'|'h',
    min?: boolean,
    activeName?: string|Signal<any>,
    onSelect?: (name: any, data: any) => void
}

export function Menu (props: MenuProps) {
    const [activeName, setActiveName] = createModel(props, 'activeName', '');
    const accordion = () => props.accordion || false;
    const theme = () => props.theme || 'light';
    const dir = () => props.dir || 'v';
    const classList = () => useClassList(props, 'cm-menu', {
        [`cm-menu-${dir()}`]: dir(),
        [`cm-menu-min`]: props.min,
        [`cm-menu-${theme()}`]: theme(),
    });
    const tree: any = [];
    const treeMap: any = {};

    createEffect(() => {
        const name = activeName();
        if (name) {
            setStore('activeName', name);
            // 父节点没打开的话进行打开
            untrack(() => {
                // 页面刷新的时候初始化需要延迟等待treeMap加载数据
                setTimeout(() => {
                    updateParentOpenStatus(name);
                })
            })
        }
    });

    // 更新min参数的副作用
    createEffect(() => {
        setStore('min', props.min);
    });

    // 更新父菜单的打开状态
    const updateParentOpenStatus = (name: string) => {
        let parent = treeMap && treeMap[name] && treeMap[name].parent;
        if (parent) {
            while (parent) {
                if (!store.openKeys[parent.name]) {
                    setOpen(parent.name);
                }
                parent = parent.parent;
            }
        } else {
            // 顶级菜单项 横向的时候， 设置打开项 可以关闭已打开的subMenu
            if (dir() === 'h' || store.min) {
                setOpen(name);
            }
        }
    }

    // 创建存储
    const [store, setStore] = createStore({
        openKeys: {},
        activeName: props.activeName,
        min: props.min
    } as any);

    // 菜单点击处理
    const onSelect = (name: string, data: any) => {
        setActiveName(name);
        props.onSelect && props.onSelect(name, data);
    }

    // 子菜单是否存在已打开的
    const childrenOpen = (item: any, names: any) => {
        item.children && item.children.forEach((aitem: any) => {
            if (store.openKeys[aitem.name]) {
                names[aitem.name] = true;
            }
            childrenOpen(aitem, names);
        })
    }

    // 设置打开
    const setOpen = (name: string) => {
        if (accordion() || dir() === 'h') {
            setStore('openKeys', produce((openKeys: any) => {
                if (openKeys[name]) {
                    delete openKeys[name];
                    return;
                }

                let item = treeMap[name];

                const names: any = {[name]: true};
                while (item.parent) {
                    names[item.parent.name] = true;
                    item = item.parent;
                }

                childrenOpen(item, names);

                const keys = Object.keys(openKeys);
                keys.forEach((key: string) => {
                    if (!names[key]){
                        delete openKeys[key];
                    }
                });

                Object.assign(openKeys, names);
            }));
        } else {
            setStore('openKeys', produce((openKeys: any) => {
                if (openKeys[name]) {
                    delete openKeys[name];
                } else {
                    openKeys[name] = true;
                }
            }));
        }
    }

    return <MenuContext.Provider value={{onSelect, store, setOpen, tree, treeMap, theme: theme(), dir: dir()}}>
        <ul classList={classList()} x-padding={0} x-name="__root" x-level={0}>
            {props.children}
        </ul>
    </MenuContext.Provider>
}

export const useMenuContext = () => useContext(MenuContext);
