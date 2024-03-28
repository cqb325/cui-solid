/* eslint-disable camelcase */
export const propsData = [
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'size', desc: '图标大小设置的是font-size', type: 'number', default: '14'},
    {name: 'spin', desc: '是否为旋转图标', type: 'boolean', default: ''},
    {name: 'name', desc: '图标名称', type: 'string', default: ''},
]


export const anchorData = [
    {id: 'icon_size', text: '图标大小'},
    {id: 'icon_color', text: '图标颜色'},
    {id: 'icon_spin', text: '旋转图标'},
    {id: 'icon_search', text: '搜索Icon'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '图标属性'},
]

import icon_size from "./codes/icon_size"
import icon_color from "./codes/icon_color"
import icon_spin from "./codes/icon_color"
export const codes = {
    icon_size,
    icon_color,
    icon_spin,
}
