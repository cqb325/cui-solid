import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Space } from "@/components/Layout";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Text } from "@/components/Typography/Text";
import { Title } from "@/components/Typography/Title";
import { Draggable } from "@/components/Draggable";
import { Table } from "@/components/Table";
import { anchorData, codes, eventsData, eventsParamsData, propsData } from "./config";
import { CompAnchor } from "../../common/CompAnchor";
import { eventsColumns, propsColumns } from "../../common/columns";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
useDirective(hljs);

export default function DraggablePage () {
    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Draggable 拖拽
                </Title>
                <Space id="draggable_base" dir="v">
                    <Card bordered>
                        <div style={{height: '200px', position: 'relative'}}>
                            <Draggable >
                                <div style={{width: '100px', height: '100px', border: '1px solid red'}}>
                                    <div style={{height: '30px'}} class="drag-handler">Handler</div>
                                </div>
                            </Draggable>
                        </div>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            基础用法
                        </Paragraph>
                        <DemoCode data={codes['draggable_base']}/>
                    </Card>
                </Space>


                <Space id="draggable_disabled" dir="v">
                    <Card bordered>
                        <div style={{height: '200px', position: 'relative'}}>
                            <Draggable disabled bounds="parent">
                                <div style={{width: '100px', height: '100px', border: '1px solid red'}}>
                                    禁用
                                </div>
                            </Draggable>
                        </div>
                        <Divider align="left"><Text type="primary">禁用</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            禁用拖拽
                        </Paragraph>
                        <DemoCode data={codes['draggable_disabled']}/>
                    </Card>
                </Space>


                <Space id="draggable_axis" dir="v">
                    <Card bordered>
                        <div style={{height: '200px', position: 'relative'}}>

                            <Draggable axis="both" bounds="parent">
                                <div style={{width: '100px', height: '100px', border: '1px solid red'}}>
                                    Both
                                </div>
                            </Draggable>

                            <Draggable axis="x" bounds="parent" defaultPosition={{x: 200, y: 0}}>
                                <div style={{width: '100px', height: '100px', border: '1px solid red'}}>
                                    X
                                </div>
                            </Draggable>

                            <Draggable axis="y" bounds="parent" defaultPosition={{x: 400, y: 0}}>
                                <div style={{width: '100px', height: '100px', border: '1px solid red'}}>
                                    Y
                                </div>
                            </Draggable>
                        </div>
                        <Divider align="left"><Text type="primary">方向</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            axis默认为Both、可以限制在某X、Y轴上。<br/>
                            设置defaultPosition可初始化位置
                        </Paragraph>
                        <DemoCode data={codes['draggable_axis']}/>
                    </Card>
                </Space>

                <Space id="draggable_bounds" dir="v">
                    <Card bordered>
                        <div style={{height: '200px', position: 'relative', border: '1px solid #ccc'}}>
                            <Draggable axis="both" bounds="parent">
                                <div style={{width: '100px', height: '100px', border: '1px solid red'}}>
                                    bounds
                                </div>
                            </Draggable>
                        </div>
                        <Divider align="left"><Text type="primary">限制范围</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            bounds默认为parent, 可指定css选择器选择指定的容器
                        </Paragraph>
                        <DemoCode data={codes['draggable_bounds']}/>
                    </Card>
                </Space>


                <Space id="draggable_handle" dir="v">
                    <Card bordered>
                        <div style={{height: '200px', position: 'relative', border: '1px solid #ccc'}}>
                            <Draggable axis="both" bounds="parent" handle=".handler">
                                <div style={{width: '100px', height: '100px', border: '1px solid red'}}>
                                    <div class="handler" style={{cursor: 'move'}}>Handler</div>
                                </div>
                            </Draggable>
                        </div>
                        <Divider align="left"><Text type="primary">触发元素</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            通过设置 handle 的元素指定触发拖拽的元素
                        </Paragraph>
                        <DemoCode data={codes['draggable_handle']}/>
                    </Card>
                </Space>


                <Space id="draggable_grid" dir="v">
                    <Card bordered>
                        <div style={{height: '200px', position: 'relative', border: '1px solid #ccc'}}>
                            <Draggable grid={[10, 10]} bounds="parent" >
                                <div style={{width: '100px', height: '100px', border: '1px solid red'}}>
                                grid
                                </div>
                            </Draggable>
                        </div>
                        <Divider align="left"><Text type="primary">最小距离</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            通过设置 grid 拖拽移动的最小距离
                        </Paragraph>
                        <DemoCode data={codes['draggable_grid']}/>
                    </Card>
                </Space>


                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>Draggable Props</Title>
                        <Table columns={propsColumns} data={propsData} border size="small" />
                    </Space>

                    <Space id="comp_events" dir="v">
                        <Title type="primary" heading={4}>Events</Title>
                        <Table columns={eventsColumns} data={eventsData} border size="small" />
                    </Space>

                    <Space id="comp_uidata_props" dir="v">
                        <Title type="primary" heading={4}>Event uiDaua Props</Title>
                        <Table columns={propsColumns} data={eventsParamsData} border size="small" />
                    </Space>
                </Space>
            </Space>
        </div>

        <CompAnchor data={anchorData}/>
    </>
}
