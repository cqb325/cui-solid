export const propsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义Class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义Class', type: 'string', default: ''},
    {name: 'hidePercent', desc: '隐藏百分比', type: 'boolean', default: ''},
    {name: 'status', desc: '状态 normal|error|active|success', type: 'string', default: 'normal'},
    {name: 'value', desc: '可控值', type: 'number', default: ''},
    {name: 'strokeWidth', desc: '宽度', type: 'number', default: ''},
    {name: 'textInside', desc: '内显文案', type: 'boolean', default: ''},
    {name: 'infoRender', desc: '自定义文案', type: 'Function', default: ''},
    {name: 'strokeColor', desc: '颜色', type: 'string | string[] | StrokeProps[]', default: ''},
    {name: 'type', desc: '类型 line|circle', type: 'string', default: 'line'},
    {name: 'radius', desc: '半径', type: 'number', default: '60'},
    {name: 'max', desc: '最大值', type: 'number', default: '100'},
]

export const eventsData = [
]


export const anchorData = [
    {id: 'progress_base', text: '基础用法'},
    {id: 'progress_inside', text: '内部文案'},
    {id: 'progress_strokewidth', text: '宽度'},
    {id: 'progress_hide', text: '隐藏文案'},
    {id: 'progress_control', text: '控制'},
    {id: 'progress_color', text: '渐变色'},
    {id: 'progress_circle', text: '圆形'},
    {id: 'progress_colors', text: '色阶'},
    {id: 'progress_render', text: '自定义文案'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
    {id: 'comp_events', text: '事件'},
]

import progress_base from "./codes/progress_base"
import progress_inside from "./codes/progress_inside"
import progress_strokewidth from "./codes/progress_strokewidth"
import progress_hide from "./codes/progress_hide"
import progress_control from "./codes/progress_control"
import progress_color from "./codes/progress_color"
import progress_circle from "./codes/progress_circle"
import progress_colors from "./codes/progress_colors"
import progress_render from "./codes/progress_render"

export const codes = {
    progress_base,
    progress_inside,
    progress_strokewidth,
    progress_hide,
    progress_control,
    progress_color,
    progress_circle,
    progress_colors,
    progress_render,
}