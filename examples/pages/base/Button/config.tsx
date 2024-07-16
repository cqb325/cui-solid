/* eslint-disable camelcase */
export const propsData = [
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'link', desc: '按钮链接', type: 'string', default: ''},
    {name: 'type', desc: `按钮类型支持`, type: `primary|success|error|warning|default|dashed|link|text`, default: 'default'},
    {name: 'block', desc: '块状按钮', type: 'boolean', default: 'false'},
    {name: 'size', desc: '按钮大小', type: 'small|default|large', default: ''},
    {name: 'active', desc: '选中按钮状态在ButtonGroup中使用', type: 'boolean', default: 'false'},
    {name: 'circle', desc: '圆形按钮', type: 'boolean', default: 'false'},
    {name: 'disabled', desc: '禁用状态', type: 'boolean', default: 'false'},
    {name: 'loading', desc: '加载状态，true情况下不会响应点击事件', type: 'boolean', default: 'false'},
    {name: 'ghost', desc: '幽灵按钮', type: 'boolean', default: 'false'},
    {name: 'danger', desc: '危险按钮', type: 'boolean', default: 'false'},
    {name: 'icon', desc: '按钮图标', type: 'Icon', default: ''},
    {name: 'iconAlign', desc: '按钮图标位置', type: 'left|right', default: 'left'},
    {name: 'onClick', desc: '点击回调函数', type: 'Function', default: ''},
];
export const groupData = [
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'type', desc: `按钮类型支持`, type: `primary|success|error|warning|default|dashed|link|text`, default: 'default'},
    {name: 'size', desc: '按钮大小', type: 'small|default|large', default: ''},
    {name: 'disabled', desc: '禁用状态', type: 'boolean', default: 'false'},
    {name: 'onClick', desc: '点击回调函数', type: 'Function', default: ''},
];

export const eventsData = [
    {name: 'onClick', desc: '点击事件', params: 'Event'}
]

export const anchorData = [
    {id: 'button_type', text: '按钮类型'},
    {id: 'button_danger', text: '危险按钮'},
    {id: 'button_ghost', text: '幽灵按钮'},
    {id: 'button_disabled', text: '禁用按钮'},
    {id: 'button_size', text: '按钮尺寸'},
    {id: 'button_icon', text: '图标按钮'},
    {id: 'button_loading', text: '加载中状态'},
    {id: 'button_group', text: '按钮组'},
    {id: 'button_api', text: 'API'},
    {id: 'button_props', text: '按钮属性'},
    {id: 'button_events', text: '按钮事件'},
    {id: 'button_group_props', text: '按钮组属性'},
]

import button_type from "./codes/button_type";
import button_ghost from "./codes/button_ghost";
import button_disabled from "./codes/button_disabled";
import button_size from "./codes/button_size";
import button_icon from "./codes/button_icon";
import button_loading from "./codes/button_loading";
import button_group from "./codes/button_group";
import button_danger from "./codes/button_danger";
export const codes = {
    button_type,
    button_ghost,
    button_disabled,
    button_size,
    button_icon,
    button_loading,
    button_group,
    button_danger
}
