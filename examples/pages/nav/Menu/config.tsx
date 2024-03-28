/* eslint-disable camelcase */
export const propsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'accordion', desc: '展开方式使用手风琴方式', type: 'boolean', default: 'false'},
    {name: 'theme', desc: '主题色 dark|light', type: 'string', default: 'light'},
    {name: 'dir', desc: '横向菜单或侧边菜单 v|h', type: 'string', default: 'v'},
    {name: 'min', desc: '最小化菜单', type: 'boolean', default: 'false'},
    {name: 'activeName', desc: '默认选中菜单项，绑定属性', type: 'Function[]', default: ''},
    {name: 'onSelect', desc: '选择菜单项选中事件', type: 'Function', default: ''},
]

export const itemPropsData = [
    {name: 'name', desc: '菜单项名称', type: 'string', default: ''},
    {name: 'disabled', desc: '禁用状态', type: 'boolean', default: ''},
    {name: 'icon', desc: '图标', type: 'Icon', default: ''},
    {name: 'data', desc: '自定义的数据,在选中的时候携带', type: 'any', default: ''},
]

export const submenuPropsData = [
    {name: 'name', desc: '菜单项名称', type: 'string', default: ''},
    {name: 'align', desc: '子菜单显示位置 bottom | right | bottomLeft | bottomRight | rightTop | left | leftTop', type: 'string', default: '横向菜单bottom，侧边菜单rightTop'},
    {name: 'icon', desc: '图标', type: 'Icon', default: ''},
    {name: 'title', desc: '菜单文案', type: 'any', default: ''},
]

export const menugroupPropsData = [
    {name: 'name', desc: '菜单项名称', type: 'string', default: ''},
    {name: 'icon', desc: '图标', type: 'Icon', default: ''},
    {name: 'title', desc: '菜单文案', type: 'any', default: ''},
]


export const eventsData = [
    {name: 'OnSelect', desc: '选择菜单项选中事件', params: 'name, data'}
]

export const anchorData = [
    {id: 'menu_base', text: '横向菜单'},
    {id: 'menu_vertical', text: '侧边菜单'},
    {id: 'menu_accordion', text: '手风琴方式'},
    {id: 'menu_theme', text: '主题'},
    {id: 'menu_min', text: '最小化菜单'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
    {id: 'comp_menu_item_props', text: '菜单项属性'},
    {id: 'comp_submenu_props', text: '子菜单属性'},
    {id: 'comp_menugroup_props', text: '菜单组属性'},
    {id: 'comp_events', text: '事件'},
]


import menu_base from "./codes/menu_base"
import menu_vertical from "./codes/menu_vertical"
import menu_accordion from "./codes/menu_accordion"
import menu_theme from "./codes/menu_theme"
import menu_min from "./codes/menu_min"
export const codes = {
    menu_base,
    menu_vertical,
    menu_accordion,
    menu_theme,
    menu_min,
}
