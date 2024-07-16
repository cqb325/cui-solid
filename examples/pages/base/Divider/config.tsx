/* eslint-disable camelcase */
export const propsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'dir', desc: '分割线方向 h|v', type: 'string', default: 'h'},
    {name: 'align', desc: '文字位置 left|right, 默认居中', type: 'string', default: ''},
    {name: 'dashed', desc: '分割线的样式', type: 'boolean', default: ''},
    {name: 'height', desc: '高度(弃用)', type: 'string', default: ''},
    {name: 'margin', desc: '外边距', type: 'number|string', default: ''},
    {name: 'textMargin', desc: '文字外边距', type: 'number|string', default: ''},
    {name: 'color', desc: '文字颜色 例: #333333', type: 'string', default: ''},
]


export const eventsData = [

]

export const anchorData = [
    {id: 'divider_base', text: '基础用法'},
    {id: 'divider_vertical', text: '垂直分割线'},
    {id: 'divider_align', text: '文字位置'},
    {id: 'divider_margin', text: '上下外边距'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
]

import divider_base from "./codes/divider_base"
import divider_vertical from "./codes/divider_vertical"
import divider_align from "./codes/divider_align"
import divider_margin from "./codes/divider_margin"

export const codes = {
    divider_base,
    divider_vertical,
    divider_align,
    divider_margin
}
