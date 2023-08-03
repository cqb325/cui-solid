export const propsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义Class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义Class', type: 'string', default: ''},
    {name: 'center', desc: '内容水平居中', type: 'boolean', default: ''},
    {name: 'padding', desc: 'padding样式', type: 'string', default: ''},
    {name: 'color', desc: '字体颜色', type: 'string', default: ''},
    {name: 'dividerTop', desc: '上边的分隔线', type: 'boolean', default: ''},
    {name: 'dividerBottom', desc: '下边的分隔线', type: 'boolean', default: ''},
]

export const navigationPropsData = [
    {name: 'head', desc: '标题', type: 'string', default: ''},
]

export const navigationLinkPropsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'link', desc: '链接地址', type: 'string', default: ''},
    {name: 'icon', desc: '图标', type: 'JSXElement', default: ''},
]

export const anchorData = [
    {id: 'pagefooter_base', text: '基础用法'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: 'Floor属性'},
    {id: 'comp_navigation_props', text: 'Navigation属性'},
    {id: 'comp_navigation_link_props', text: 'Link属性'},
]

import pagefooter_base from "./codes/pagefooter_base"

export const codes = {
    pagefooter_base,
}