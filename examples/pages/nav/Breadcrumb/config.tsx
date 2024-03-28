/* eslint-disable camelcase */
export const propsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'separator', desc: '分隔符', type: 'string', default: '/'},
]

export const itemPropsData = [
    {name: 'link', desc: '链接', type: 'string', default: ''},
    {name: 'icon', desc: '图标', type: 'Icon', default: ''},
]


export const eventsData = [

]

export const anchorData = [
    {id: 'breadcrumb_base', text: '基础用法'},
    {id: 'breadcrumb_icon', text: '带图标'},
    {id: 'breadcrumb_sep', text: '分隔符'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
    {id: 'comp_item_props', text: 'Item属性'},
]


import breadcrumb_base from "./codes/breadcrumb_base"
import breadcrumb_icon from "./codes/breadcrumb_icon"
import breadcrumb_sep from "./codes/breadcrumb_sep"
export const codes = {
    breadcrumb_base,
    breadcrumb_icon,
    breadcrumb_sep,
}
