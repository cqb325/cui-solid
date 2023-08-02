export const propsData = [
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'disabled', desc: '禁用', type: 'boolean', default: ''},
    {name: 'name', desc: 'name属性', type: 'string', default: ''},
    {name: 'checked', desc: '默认是否开启', type: 'any', default: ''},
    {name: 'value', desc: '值，可控属性', type: 'Function[]', default: ''},
    {name: 'size', desc: '尺寸大小  small、large', type: 'string', default: ''},
    {name: 'loading', desc: '加载中状态，不可切换', type: 'boolean', default: ''},
    {name: 'labels', desc: '开关的文案', type: 'string[]', default: ''},
    {name: 'onBeforeChange', desc: '阻止操作钩子， 参数 v：boolean', type: 'Function', default: ''},
    {name: 'onChange', desc: '值改变事件', type: 'Function', default: ''},
]


export const eventsData = [
    {name: 'onChange', desc: '值改变事件', params: 'value'},
]

export const anchorData = [
    {id: 'switch_base', text: '基础用法'},
    {id: 'switch_disabled', text: '禁用'},
    {id: 'switch_size', text: '尺寸'},
    {id: 'switch_loading', text: '加载中'},
    {id: 'switch_label', text: '文字和值'},
    {id: 'switch_before', text: '阻止切换'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
    {id: 'comp_events', text: '事件'},
]


import switch_base from "./codes/switch_base"
import switch_disabled from "./codes/switch_disabled"
import switch_size from "./codes/switch_size"
import switch_loading from "./codes/switch_loading"
import switch_label from "./codes/switch_label"
import switch_before from "./codes/switch_before"
export const codes = {
    switch_base,
    switch_disabled,
    switch_size,
    switch_loading,
    switch_label,
    switch_before,
}