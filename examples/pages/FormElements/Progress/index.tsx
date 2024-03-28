import { createSignal } from "solid-js";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Space } from "@/components/Layout";
import { Progress } from "@/components/Progress";
import { Title } from "@/components/Typography/Title";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Text } from "@/components/Typography/Text";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Table } from "@/components/Table";
import { eventsColumns, propsColumns } from "../../common/columns";
import { anchorData, codes, propsData } from "./config";
import { CompAnchor } from "../../common/CompAnchor";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
useDirective(hljs);

export default function ProgressPage () {
    const [value, setValue] = createSignal(0);
    const [value2, setValue2] = createSignal(20);
    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Progress 进度条
                </Title>
                <Space id="progress_base" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Progress value={30} />
                            <Progress value={50} status="active"/>
                            <Progress value={70} status="error"/>
                            <Progress value={100} />
                        </Space>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            基础用法
                        </Paragraph>
                        <DemoCode data={codes['progress_base']}/>
                    </Card>
                </Space>


                <Space id="progress_inside" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Progress value={70} textInside strokeWidth={16}/>
                            <Progress value={70} textInside strokeWidth={16} status="active"/>
                            <Progress value={100} textInside strokeWidth={16}/>
                        </Space>
                        <Divider align="left"><Text type="primary">内部文案</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            设置 textInside 可以让文案显示在内部
                        </Paragraph>
                        <DemoCode data={codes['progress_inside']}/>
                    </Card>
                </Space>


                <Space id="progress_strokewidth" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Progress value={70} strokeWidth={5}/>
                            <Progress value={70} textInside strokeWidth={16} status="active"/>
                        </Space>
                        <Divider align="left"><Text type="primary">宽度</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        通过 strokeWidth 可以自定义进度条的粗细
                        </Paragraph>
                        <DemoCode data={codes['progress_strokewidth']}/>
                    </Card>
                </Space>

                <Space id="progress_hide" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Progress value={70} hidePercent/>
                        </Space>
                        <Divider align="left"><Text type="primary">隐藏文案</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        通过 hidePercent 可以隐藏文案
                        </Paragraph>
                        <DemoCode data={codes['progress_hide']}/>
                    </Card>
                </Space>


                <Space id="progress_control" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Progress value={value()} />
                            <Space dir="h">
                                <Button type="primary" icon={<Icon name="plus"/>} onClick={() => {
                                    setValue(value() + 1);
                                }} />
                                <Button type="primary" icon={<Icon name="minus"/>} onClick={() => {
                                    setValue(value() - 1);
                                }} />
                            </Space>
                        </Space>
                        <Divider align="left"><Text type="primary">控制</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        value 可控参数
                        </Paragraph>
                        <DemoCode data={codes['progress_control']}/>
                    </Card>
                </Space>


                <Space id="progress_color" dir="v">
                    <Card bordered>
                        <Progress value={50} strokeColor={['#108ee9', '#87d068', '#d9363e']}/>
                        <Divider align="left"><Text type="primary">渐变色</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        strokeColor 传入数组的时候可显示渐变色
                        </Paragraph>
                        <DemoCode data={codes['progress_color']}/>
                    </Card>
                </Space>


                <Space id="progress_circle" dir="v">
                    <Card bordered>
                        <Space dir="h" inline>
                            <Progress type="circle" value={value2()}/>
                        </Space>
                        <Space dir="h">
                            <Button type="primary" icon={<Icon name="plus"/>} onClick={() => {
                                setValue2(value2() + 5);
                            }} />
                            <Button type="primary" icon={<Icon name="minus"/>} onClick={() => {
                                setValue2(value2() - 5);
                            }} />
                        </Space>
                        <Divider align="left"><Text type="primary">圆形</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        设置type='circle' 可以渲染圆形进度条
                        </Paragraph>
                        <DemoCode data={codes['progress_circle']}/>
                    </Card>
                </Space>

                <Space id="progress_colors" dir="v">
                    <Card bordered>
                        <Space dir="h" inline>
                            <Progress type="circle" value={value2()} strokeColor={[
                                {percent: 20, color: '#108ee9'},
                                {percent: 50, color: '#87d068'},
                                {percent: 70, color: '#d9363e'}
                            ]}/>
                        </Space>
                        <Space dir="h">
                            <Button type="primary" icon={<Icon name="plus"/>} onClick={() => {
                                setValue2(value2() + 5);
                            }} />
                            <Button type="primary" icon={<Icon name="minus"/>} onClick={() => {
                                setValue2(value2() - 5);
                            }} />
                        </Space>
                        <Divider align="left"><Text type="primary">色阶</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        设置 strokeColor 数组可以在不同进度阶段 显示不同颜色
                        </Paragraph>
                        <DemoCode data={codes['progress_colors']}/>
                    </Card>
                </Space>

                <Space id="progress_render" dir="v">
                    <Card bordered>
                        <Space dir="h" inline>
                            <Progress type="circle" value={100} infoRender={(sta: string, value: number) => {
                                if (value === 100) {
                                    return '完成'
                                } else {
                                    return '进行中'
                                }
                            }}/>
                        </Space>
                        <Divider align="left"><Text type="primary">自定义文案</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        设置 infoRender 函数可以自定义渲染提示文案
                        </Paragraph>
                        <DemoCode data={codes['progress_render']}/>
                    </Card>
                </Space>

                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>Progress Props</Title>
                        <Table columns={propsColumns} data={propsData} border size="small" />
                    </Space>
                </Space>
            </Space>
        </div>

        <CompAnchor data={anchorData}/>
    </>
}
