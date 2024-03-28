/* eslint-disable camelcase */
export const propsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'justify', desc: '水平居中方式start|center|end|space-between|space-around', type: 'string', default: ''},
    {name: 'align', desc: '垂直居中方式 top|middle|bottom', type: 'string', default: ''},
    {name: 'gutter', desc: '间隔', type: 'number', default: '0'},
]

export const colPropsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'grid', desc: 'Col暂用范围0~1', type: 'number', default: '1'},
    {name: 'push', desc: '栅格向右移动范围', type: 'number', default: ''},
    {name: 'pull', desc: '栅格向左移动范围', type: 'number', default: ''},
    {name: 'offset', desc: '栅格左侧的间隔范围，间隔内不可以有栅格', type: 'number', default: ''},
    {name: 'flex', desc: 'flex 布局属性', type: 'string', default: ''},
]


export const eventsData = [

]

export const anchorData = [
    {id: 'grid_base', text: '基础用法'},
    {id: 'grid_gutter', text: '区块间隔'},
    {id: 'grid_offset', text: '左右偏移'},
    {id: 'grid_push', text: '栅格排序'},
    {id: 'grid_justify', text: 'flex水平布局'},
    {id: 'grid_align', text: 'flex垂直对齐'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: 'Row属性'},
    {id: 'comp_col_props', text: 'Col属性'},
]

import grid_base from "./codes/grid_base"
import grid_gutter from "./codes/grid_gutter"
import grid_offset from "./codes/grid_offset"
import grid_push from "./codes/grid_push"
import grid_justify from "./codes/grid_justify"
import grid_align from "./codes/grid_align"
export const codes = {
    grid_base,
    grid_gutter,
    grid_offset,
    grid_push,
    grid_justify,
    grid_align,
}
