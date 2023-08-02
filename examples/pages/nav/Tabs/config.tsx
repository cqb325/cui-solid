export const propsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'card', desc: '卡片标签', type: 'boolean', default: ''},
    {name: 'activeName', desc: '当前活跃的标签,和Tab的name对应', type: 'string', default: ''},
    {name: 'extra', desc: '额外内容', type: 'JSXElement', default: ''},
    {name: 'onTabClick', desc: '标签页点击事件', type: 'Function', default: ''},
    {name: 'onRemove', desc: '标签删除事件', type: 'Function', default: ''},
]


export const tabpropsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'title', desc: '标签标题', type: 'any', default: ''},
    {name: 'name', desc: '标签页名称，标签页的标识', type: 'string', default: ''},
    {name: 'disabled', desc: '禁用', type: 'boolean', default: ''},
    {name: 'closeable', desc: '可关闭标签页', type: 'boolean', default: ''},
    {name: 'icon', desc: '标签图标', type: 'Icon', default: ''},
]

export const eventsData = [
    {name: 'onTabClick', desc: '标签页点击事件', params: 'ItemConfig'},
    {name: 'onRemove', desc: '标签删除事件', params: 'name'}
]

export const anchorData = [
    {id: 'tabs_base', text: '基础用法'},
    {id: 'tabs_disabled', text: '禁用'},
    {id: 'tabs_duration', text: '动画时间'},
    {id: 'tabs_icon', text: '图标'},
    {id: 'tabs_card', text: '卡片'},
    {id: 'tabs_extra', text: '附加内容'},
    {id: 'tabs_danymic', text: '动态'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
    {id: 'comp_tab_props', text: 'Tab属性'},
    {id: 'comp_events', text: '事件'},
]


import tabs_base from "./codes/tabs_base"
import tabs_disabled from "./codes/tabs_disabled"
import tabs_duration from "./codes/tabs_duration"
import tabs_icon from "./codes/tabs_icon"
import tabs_card from "./codes/tabs_card"
import tabs_extra from "./codes/tabs_extra"
import tabs_danymic from "./codes/tabs_danymic"
export const codes = {
    tabs_base,
    tabs_disabled,
    tabs_duration,
    tabs_icon,
    tabs_card,
    tabs_extra,
    tabs_danymic,
}