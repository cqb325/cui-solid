/* eslint-disable no-prototype-builtins */
import { $PROXY, $TRACK, getListener, batch, createSignal } from "solid-js";

const $RAW = Symbol("store-raw"),
    $NODE = Symbol("store-node"),
    $HAS = Symbol("store-has"),
    $SELF = Symbol("store-self"),
    $CALL_BACK = Symbol("store-setCallback"),
    $PARENT = Symbol("store-parent");

function isWrappable (obj: any) {
    let proto;
    return (
        obj != null &&
        typeof obj === "object" &&
        (obj[$PROXY] ||
        !(proto = Object.getPrototypeOf(obj)) ||
        proto === Object.prototype ||
        Array.isArray(obj))
    );
}

function unwrap<T> (item: any, set = new Set()): T {
    let result, unwrapped, v, prop;
    if ((result = item != null && item[$RAW])) return result;
    if (!isWrappable(item) || set.has(item)) return item;

    if (Array.isArray(item)) {
        if (Object.isFrozen(item)) item = item.slice(0);
        else set.add(item);
        for (let i = 0, l = item.length; i < l; i++) {
            v = item[i];
            if ((unwrapped = unwrap(v, set)) !== v) item[i] = unwrapped;
        }
    } else {
        if (Object.isFrozen(item)) item = Object.assign({}, item);
        else set.add(item);
        const keys = Object.keys(item),
            desc = Object.getOwnPropertyDescriptors(item);
        for (let i = 0, l = keys.length; i < l; i++) {
            prop = keys[i];
            if (desc[prop].get) continue;
            v = item[prop];
            if ((unwrapped = unwrap(v, set)) !== v) item[prop] = unwrapped;
        }
    }
    return item;
}

function getNodes (target: StoreNode, symbol: typeof $NODE | typeof $HAS): DataNodes {
    let nodes = target[symbol];
    if (!nodes)
        Object.defineProperty(target, symbol, { value: (nodes = Object.create(null) as DataNodes) });
    return nodes;
}

function getNode (nodes: DataNodes, property: PropertyKey, value?: any) {
    if (nodes[property]) return nodes[property]!;
    const [s, set] = createSignal<any>(value, {
        equals: false,
        internal: true
    });
    (s as DataNode).$ = set;
    return (nodes[property] = s as DataNode);
}


function trackSelf (target: StoreNode) {
    getListener() && getNode(getNodes(target, $NODE), $SELF)();
}

function ownKeys (target: StoreNode) {
    trackSelf(target);
    return Reflect.ownKeys(target);
}

function setProperty (
    state: StoreNode,
    property: PropertyKey,
    value: any,
    deleting: boolean = false
): void {
    if (!deleting && state[property] === value) return;
    const prev = state[property],
        len = state.length;

    if (value === undefined) {
        delete state[property];
        if (state[$HAS] && state[$HAS][property] && prev !== undefined) state[$HAS][property].$();
    } else {
        state[property] = value;
        if (state[$HAS] && state[$HAS][property] && prev === undefined) state[$HAS][property].$();
    }
    const nodes = getNodes(state, $NODE);
    let node: DataNode | undefined;
    if ((node = getNode(nodes, property, prev))) node.$(() => value);

    if (Array.isArray(state) && state.length !== len) {
        for (let i = state.length; i < len; i++) (node = nodes[i]) && node.$();
        (node = getNode(nodes, "length", len)) && node.$(state.length);
    }
    (node = nodes[$SELF]) && node.$();
}

function proxyDescriptor (target: StoreNode, property: PropertyKey) {
    const desc = Reflect.getOwnPropertyDescriptor(target, property);
    if (
        !desc ||
    desc.get ||
    desc.set ||
    !desc.configurable ||
    property === $PROXY ||
    property === $NODE
    )
        return desc;

    delete desc.value;
    delete desc.writable;
    desc.get = () => target[$PROXY][property];
    desc.set = v => (target[$PROXY][property] = v);

    return desc;
}

const proxyTraps: ProxyHandler<StoreNode> = {
    get (target, property, receiver) {
        if (property === $RAW) return target;
        if (property === $PROXY) return receiver;
        if (property === $TRACK) {
            trackSelf(target);
            return receiver;
        }
        const nodes = getNodes(target, $NODE);
        const tracked = nodes[property];
        let value = tracked ? tracked() : target[property];
        if (property === $NODE || property === $HAS || property === "__proto__") return value;

        if (!tracked) {
            const desc = Object.getOwnPropertyDescriptor(target, property);
            const isFunction = typeof value === "function";
            if (getListener() && (!isFunction || target.hasOwnProperty(property)) && !(desc && desc.get))
                value = getNode(nodes, property, value)();
            else if (value != null && isFunction && value === Array.prototype[property as any]) {
                return (...args: unknown[]) =>
                    batch(() => Array.prototype[property as any].apply(receiver, args));
            }
        }
        let keyPath = Reflect.get(target, $PARENT);
        keyPath = keyPath === undefined ? property : `${keyPath}.${String(property)}`;
        const options = {
            onUpdateField: Reflect.get(target, $CALL_BACK)
        };

        return isWrappable(value) ? wrap(value, keyPath, options) : value;
    },

    has (target, property) {
        if (
            property === $RAW ||
            property === $PROXY ||
            property === $TRACK ||
            property === $NODE ||
            property === $HAS ||
            property === "__proto__"
        )
            return true;
        getListener() && getNode(getNodes(target, $HAS), property)();
        return property in target;
    },

    set (target, property, value) {
        let keyPath = Reflect.get(target, $PARENT);
        keyPath = keyPath === undefined ? property : `${keyPath}.${String(property)}`;
        const callback = Reflect.get(target, $CALL_BACK);
        callback?.(property, unwrap(value), keyPath);
        batch(() => setProperty(target, property, unwrap(value)));
        return true;
    },

    deleteProperty (target, property) {
        batch(() => setProperty(target, property, undefined, true));
        return true;
    },

    ownKeys: ownKeys,

    getOwnPropertyDescriptor: proxyDescriptor
};

function wrap<T extends StoreNode> (value: T, parentName?: string, options?: any): T {
    let p = value[$PROXY];
    if (!p) {
        Object.defineProperty(value, $PROXY, { value: (p = new Proxy(value, proxyTraps)) });
        Object.defineProperty(value, $PARENT, {
            value: parentName
        });
        Object.defineProperty(value, $CALL_BACK, {
            value: options?.onUpdateField
        });
        const keys = Object.keys(value),
            desc = Object.getOwnPropertyDescriptors(value);

        const proto = Object.getPrototypeOf(value);
        const isClass =
            proto !== null &&
            value !== null &&
            typeof value === "object" &&
            !Array.isArray(value) &&
            proto !== Object.prototype;
        if (isClass) {
            const descriptors = Object.getOwnPropertyDescriptors(proto);
            keys.push(...Object.keys(descriptors));
            Object.assign(desc, descriptors);
        }

        for (let i = 0, l = keys.length; i < l; i++) {
            const prop = keys[i];
            if (isClass && prop === "constructor") continue;
            if (desc[prop].get) {
                const get = desc[prop].get!.bind(p);
                Object.defineProperty(value, prop, {
                    get,
                    configurable: true
                });
            }
            if (desc[prop].set) {
                const og = desc[prop].set!,
                    set = (v: T[keyof T]) => batch(() => og.call(p, v));
                Object.defineProperty(value, prop, {
                    set,
                    configurable: true
                });
            }
        }
    }
    return p;
}

type DataNode = {
    (): any;
    $(value?: any): void;
};
type DataNodes = Record<PropertyKey, DataNode | undefined>;

interface StoreNode {
    [$NODE]?: DataNodes;
    [key: PropertyKey]: any;
}

export function createMutable<T extends StoreNode> (state: T, options?: {
    onUpdateField?: (key: string, value: any, path: string) => void
}): T {
    const unwrappedStore = unwrap<T>(state || {});
    const wrappedStore = wrap(unwrappedStore, undefined, options);
    return wrappedStore;
}
