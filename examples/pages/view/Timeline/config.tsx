export const propsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义Class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义Class', type: 'string', default: ''},
    {name: 'mode', desc: '模式 left|right|alternate|center', type: 'string', default: ''},
]

export const itemPropsData = [
    {name: 'classList', desc: '自定义Class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义Class', type: 'string', default: ''},
    {name: 'color', desc: '轴点颜色 green blue, red', type: 'string', default: 'blue'},
    {name: 'icon', desc: '轴点自定义图标', type: 'JSXElement', default: ''},
    {name: 'fill', desc: '轴点填充color颜色', type: 'boolean', default: ''},
    {name: 'time', desc: '时间轴每项的时间', type: 'string', default: ''},
]

export const anchorData = [
    {id: 'timeline_base', text: '基础用法'},
    {id: 'timeline_color', text: '颜色'},
    {id: 'timeline_fill', text: '填充'},
    {id: 'timeline_alternate', text: '交替'},
    {id: 'timeline_right', text: '靠右'},
    {id: 'timeline_center', text: '节点靠左'},
    {id: 'timeline_icon', text: '自定义轴点'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
    {id: 'comp_itemprops', text: '数据项属性'},
]

import timeline_base from "./codes/timeline_base"
import timeline_color from "./codes/timeline_color"
import timeline_fill from "./codes/timeline_fill"
import timeline_icon from "./codes/timeline_icon"
import timeline_alternate from "./codes/timeline_alternate"
import timeline_right from "./codes/timeline_right"
import timeline_center from "./codes/timeline_center"

export const codes = {
    timeline_base,
    timeline_color,
    timeline_fill,
    timeline_alternate,
    timeline_right,
    timeline_center,
    timeline_icon,
}