export const propsData = [
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'name', desc: 'name属性', type: 'string', default: ''},
    {name: 'value', desc: '值，可控属性', type: 'Function[]', default: ''},
    {name: 'width', desc: '单个list的宽度', type: 'number', default: ''},
    {name: 'height', desc: '单个list的高度', type: 'number', default: ''},
    {name: 'data', desc: '列表的数据项', type: 'Array', default: ''},
    {name: 'filter', desc: '可过滤', type: 'boolean', default: ''},
    {name: 'render', desc: '自定义渲染', type: 'Function', default: ''},
    {name: 'onChange', desc: '值改变事件', type: 'Function', default: ''},
]


export const eventsData = [
    {name: 'onChange', desc: '值改变事件', params: 'value'},
]

export const anchorData = [
    {id: 'transfer_base', text: '基础用法'},
    {id: 'transfer_filter', text: '过滤'},
    {id: 'transfer_render', text: '自定义渲染'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
    {id: 'comp_events', text: '事件'},
]


import transfer_base from "./codes/transfer_base"
import transfer_filter from "./codes/transfer_filter"
import transfer_render from "./codes/transfer_render"
export const codes = {
    transfer_base,
    transfer_filter,
    transfer_render,
}