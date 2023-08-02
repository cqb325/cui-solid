export const propsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'justify', desc: '垂直轴对齐方式start|center|end', type: 'string', default: ''},
    {name: 'align', desc: '当前轴居中方式 center|start|end|baseline', type: 'string', default: ''},
    {name: 'dir', desc: '内容方向, 支持 v|h', type: 'string', default: 'h'},
    {name: 'wrap', desc: '内容超出的换行方式', type: 'boolean', default: 'false'},
    {name: 'inline', desc: '行内元素', type: 'boolean', default: 'false'},
    {name: 'size', desc: '间距大小', type: 'number', default: '8'},
]


export const eventsData = [
    
]

export const anchorData = [
    {id: 'list_base', text: '基础用法'},
    {id: 'space_vertical', text: '垂直间距'},
    {id: 'space_size', text: '间距大小'},
    {id: 'space_align', text: '对齐方式'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: 'Space属性'},
]

import space_base from "./codes/space_base"
import space_vertical from "./codes/space_vertical"
import space_size from "./codes/space_size"
import space_align from "./codes/space_align"

export const codes = {
    space_base,
    space_vertical,
    space_size,
    space_align,
}