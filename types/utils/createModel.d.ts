import type { Signal } from 'solid-js';
export default function createModel<T>(props: any, field: string, defaultValue: T): Signal<T>;
