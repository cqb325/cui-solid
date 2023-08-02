
export const propsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义Class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义Class', type: 'string', default: ''},
    {name: 'arrow', desc: '切换按钮的显示方式 hover|always|never', type: 'string', default: 'hover'},
    {name: 'autoPlay', desc: '自动播放', type: 'boolean', default: ''},
    {name: 'duration', desc: '自动播放时间ms', type: 'number', default: '4000'},
    {name: 'effect', desc: '动效 fade|slide', type: 'number', default: '4000'},
    {name: 'dotType', desc: '缩略点位的样式 dot|line|columnar', type: 'string', default: 'dot'},
    {name: 'dotAlign', desc: '点位的位置 left|center|right', type: 'string', default: 'center'},
    {name: 'activeIndex', desc: '控制活跃的索引', type: 'Function[]', default: ''},
    {name: 'onChange', desc: '切换事件', type: 'Function', default: ''},
]

export const eventsData = [
    {name: 'onChange', desc: '切换事件', params: ''},
]

export const anchorData = [
    {id: 'carousel_base', text: '基础用法'},
    {id: 'carousel_autoplay', text: '自动播放'},
    {id: 'carousel_dotAlign', text: 'dot位置'},
    {id: 'carousel_dotstyle', text: 'dot样式'},
    {id: 'carousel_control', text: '可控'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '数据项属性'},
]


import carousel_base from "./codes/carousel_base"
import carousel_autoplay from "./codes/carousel_autoplay"
import carousel_dotAlign from "./codes/carousel_dotAlign"
import carousel_dotstyle from "./codes/carousel_dotstyle"
import carousel_control from "./codes/carousel_control"

export const codes = {
    carousel_base,
    carousel_autoplay,
    carousel_dotAlign,
    carousel_dotstyle,
    carousel_control,
}