export const propsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义Class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义Class', type: 'string', default: ''},
    {name: 'left', desc: '上层元素，可拖拽的元素', type: 'Element', default: ''},
    {name: 'right', desc: '下层元素', type: 'Element', default: ''},
]


export const anchorData = [
    {id: 'qrcode_base', text: '基础用法'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
]

import sidebyside_base from "./codes/sidebyside_base"

export const codes = {
    sidebyside_base,
}