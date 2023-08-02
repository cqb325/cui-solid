export const propsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'defaultPosition', desc: '初始化位置', type: 'Object', default: '{x: 0, y: 0}'},
    {name: 'position', desc: '控制位置', type: 'Object', default: '{x: 0, y: 0}'},
    {name: 'bounds', desc: '拖拽范围的容器元素', type: 'string|HTMLElement', default: 'parent'},
    {name: 'axis', desc: '拖拽方向 both|x|y', type: 'string', default: 'both'},
    {name: 'positionOffset', desc: '初始化偏移量', type: 'object', default: '{x: 0, y: 0}'},
    {name: 'grid', desc: '每次拖拽的最小距离', type: 'Number[]', default: ''},
    {name: 'disabled', desc: '禁用拖拽', type: 'boolean', default: ''},
    {name: 'handle', desc: '禁用触发的元素', type: 'string|HTMLElement', default: ''},
    {name: 'onStart', desc: '拖拽开始触发事件, return false 可以阻断后续事件', type: 'Function', default: ''},
    {name: 'onDrag', desc: '拖拽触发事件, return false 可以阻断后续事件', type: 'Function', default: ''},
    {name: 'onStop', desc: '拖拽结束事件, return false 可以阻断后续执行', type: 'Function', default: ''},
]


export const eventsData = [
    {name: 'onStart', desc: '拖拽开始触发事件', params: 'Event, uiData'},
    {name: 'onDrag', desc: '拖拽触发事件', params: 'Event, uiData'},
    {name: 'onStop', desc: '拖拽结束事件', params: 'Event, uiData'},
]

export const eventsParamsData = [
    {name: 'x', desc: 'x方向位置', type: 'number', default: ''},
    {name: 'y', desc: 'y方向位置', type: 'number', default: ''},
    {name: 'deltaX', desc: 'x方向距离上次位置距离', type: 'number', default: ''},
    {name: 'deltaY', desc: 'y方向距离上次位置距离', type: 'number', default: ''},
    {name: 'lastX', desc: 'x上次位置', type: 'number', default: ''},
    {name: 'lastY', desc: 'y上次位置', type: 'number', default: ''},
]

export const anchorData = [
    {id: 'draggable_base', text: '基础用法'},
    {id: 'draggable_disabled', text: '禁用'},
    {id: 'draggable_axis', text: '方向'},
    {id: 'draggable_bounds', text: '限制范围'},
    {id: 'draggable_handle', text: '触发元素'},
    {id: 'draggable_grid', text: '最小距离'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
    {id: 'comp_events', text: '事件'},
    {id: 'comp_uidata_props', text: '事件属性'},
]


import draggable_base from "./codes/draggable_base"
import draggable_disabled from "./codes/draggable_disabled"
import draggable_axis from "./codes/draggable_axis"
import draggable_bounds from "./codes/draggable_bounds"
import draggable_handle from "./codes/draggable_handle"
import draggable_grid from "./codes/draggable_grid"
export const codes = {
    draggable_base,
    draggable_disabled,
    draggable_axis,
    draggable_bounds,
    draggable_handle,
    draggable_grid,
}