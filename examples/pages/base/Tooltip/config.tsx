export const propsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'align', desc: '位置top|bottom|left|right|topLeft|topRight|bottomLeft|bottomRight|leftTop|leftBottom|rightTop|rightBottom', type: 'string', default: 'bottom'},
    {name: 'theme', desc: '样式 light|dark', type: 'string', default: 'dark'},
    {name: 'content', desc: '提示内容', type: 'any', default: ''},
    {name: 'disabled', desc: '禁用状态', type: 'boolean', default: ''},
]


export const eventsData = [
    
]

export const anchorData = [
    {id: 'tooltip_base', text: '基础用法'},
    {id: 'popover_align', text: '位置'},
    {id: 'tooltip_multi', text: '多行内容'},
    {id: 'tooltip_disabled', text: '禁用'},
    {id: 'tooltip_theme', text: '样式'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
]

import tooltip_base from "./codes/tooltip_base"
import popover_align from "./codes/popover_align"
import tooltip_multi from "./codes/tooltip_multi"
import tooltip_disabled from "./codes/tooltip_disabled"
import tooltip_theme from "./codes/tooltip_theme"

export const codes = {
    tooltip_base,
    popover_align,
    tooltip_multi,
    tooltip_disabled,
    tooltip_theme,
}