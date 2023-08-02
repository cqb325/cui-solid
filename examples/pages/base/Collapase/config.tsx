export const propsData = [
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'open', desc: '控制打开状态', type: 'Function[]', default: ''},
    {name: 'onOpen', desc: '打开回调', type: 'Function', default: ''},
    {name: 'onEnd', desc: '动画结束回调', type: 'Function', default: ''},
];

export const eventsData = [
    {name: 'onOpen', desc: '打开收缩事件', params: 'height'},
    {name: 'onEnd', desc: '动画结束事件', params: 'status'}
]

export const anchorData = [
    {id: 'collapse_base', text: '基础用法'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '折叠属性'},
    {id: 'comp_events', text: '折叠事件'},
]

import collapse_base from "./codes/collapse_base";
export const codes = {
    collapse_base
};