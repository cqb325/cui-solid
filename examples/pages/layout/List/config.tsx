export const propsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'border', desc: '边框', type: 'boolean', default: ''},
    {name: 'size', desc: '大小small|large', type: 'string', default: ''},
    {name: 'head', desc: '头部', type: 'string|JSXElement', default: ''},
    {name: 'foot', desc: '底部', type: 'string|JSXElement', default: ''},
    {name: 'render', desc: '内容自定义函数', type: 'Function', default: ''},
    {name: 'onSelect', desc: '列表项选中事件', type: 'Function', default: ''},
]

export const itemPropsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'id', desc: 'id标识', type: ' string | number', default: ''},
    {name: 'data', desc: '数据项', type: 'Object', default: ''},
    {name: 'render', desc: '内容自定义函数', type: 'Function', default: ''},
    {name: 'actions', desc: '操作内容', type: 'JSXElement', default: ''},
    {name: 'avatar', desc: '头像', type: 'Avatar', default: ''},
    {name: 'content', desc: '内容', type: 'string|JSXElement', default: ''},
    {name: 'title', desc: '标题', type: 'string|JSXElement', default: ''},
    {name: 'desc', desc: '描述', type: 'string|JSXElement', default: ''},
]


export const eventsData = [
    
]

export const anchorData = [
    {id: 'list_base', text: '基础用法'},
    {id: 'list_size', text: '列表尺寸'},
    {id: 'list_complex', text: '基础列表'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: 'List属性'},
    {id: 'comp_item_props', text: 'List.Item属性'},
]


import list_base from "./codes/list_base"
import list_size from "./codes/list_size"
import list_complex from "./codes/list_complex"
export const codes = {
    list_base,
    list_size,
    list_complex,
}