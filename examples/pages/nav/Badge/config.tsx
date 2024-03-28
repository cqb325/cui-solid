/* eslint-disable camelcase */
export const propsData = [
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'count', desc: '徽标内显示的数量', type: 'number', default: ''},
    {name: 'dot', desc: '小圆点徽标', type: 'boolean', default: ''},
    {name: 'overflowCount', desc: '上限数量,超出显示overflowCount+', type: 'number', default: ''},
    {name: 'text', desc: '自定义内容', type: 'string', default: ''},
    {name: 'status', desc: '状态徽标success|error|processing|warning|default', type: 'string', default: ''},
    {name: 'color', desc: '圆点徽标的颜色 blue|green|red|yellow|pink|magenta|volcano|orange|gold|lime|cyan|geekblue|purple，自定义颜色', type: 'string', default: ''},
    {name: 'type', desc: '不通类型显示不同颜色 primary|success|normal|info|error|warning', type: 'string', default: ''},
]


export const eventsData = [
]

export const anchorData = [
    {id: 'badge_base', text: '基础用法'},
    {id: 'badge_dot', text: '小红点'},
    {id: 'badge_overcount', text: '封顶数字'},
    {id: 'badge_alone', text: '独立使用'},
    {id: 'badge_text', text: '自定义内容'},
    {id: 'badge_status', text: '状态点'},
    {id: 'badge_color', text: '多彩徽标'},
    {id: 'badge_type', text: '预设颜色'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
]


import badge_base from "./codes/badge_base"
import badge_dot from "./codes/badge_dot"
import badge_overcount from "./codes/badge_overcount"
import badge_alone from "./codes/badge_alone"
import badge_text from "./codes/badge_text"
import badge_status from "./codes/badge_status"
import badge_color from "./codes/badge_color"
import badge_type from "./codes/badge_type"
export const codes = {
    badge_base,
    badge_dot,
    badge_overcount,
    badge_alone,
    badge_text,
    badge_status,
    badge_color,
    badge_type,
}
