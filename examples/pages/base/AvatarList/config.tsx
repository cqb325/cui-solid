/* eslint-disable camelcase */
export const propsData = [
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'size', desc: '头像大小,small|large|数字', type: 'number|string', default: ''},
    {name: 'max', desc: '最大显示数', type: 'number', default: 'Number.MAX_VALUE'},
    {name: 'gutter', desc: '元素间的间隔', type: 'number', default: '-12'},
    {name: 'excessStyle', desc: '超过数目显示样式', type: 'Object', default: ''},
]

export const dataData = [
    {name: 'name', desc: '数据项名称', type: 'string', default: ''},
    {name: 'src/icon', desc: '头像图片地址/头像图标', type: 'string', default: ''},
]


export const anchorData = [
    {id: 'avatar_base', text: '头像尺寸'},
    {id: 'avatar_gutter', text: '间隔'},
    {id: 'avatar_max', text: '最大显示数'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '头像属性'},
]

import avatar_base from "./codes/avatar_base"
import avatar_max from "./codes/avatar_max"
import avatar_gutter from "./codes/avatar_gutter"
export const codes = {
    avatar_max,
    avatar_base,
    avatar_gutter
}
