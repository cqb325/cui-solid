import { Space } from "@/components/Layout";
import { Cascader } from "@/components/FormElements/Cascader";
import { Button } from "@/components/Button";
import { createSignal } from "solid-js";
import { Title } from "@/components/Typography/Title";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Text } from "@/components/Typography/Text";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Table } from "@/components/Table";
import { eventsColumns, propsColumns } from "../../common/columns";
import { anchorData, codes, dataPropsData, eventsData, propsData } from "./config";
import { CompAnchor } from "../../common/CompAnchor";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
useDirective(hljs);

export default function CascaderPage () {
    const [value, setValue]: any[] = createSignal();
    const data = [
        {
            value: 'beijing', title: '北京', 
            children: [
                {value: 'gugong', title: '故宫'},
                {value: 'tiantan', title: '天坛'},
                {value: 'wangfujing', title: '王府井'},
            ]
        },
        {
            value: 'jiangsu',
            title: '江苏',
            children: [
                {
                    value: 'nanjing',
                    title: '南京',
                    children: [
                        {
                            value: 'fuzimiao',
                            title: '夫子庙',
                        }
                    ]
                },
                {
                    value: 'suzhou',
                    title: '苏州',
                    children: [
                        {
                            value: 'zhuozhengyuan',
                            title: '拙政园',
                            disabled: true
                        },
                        {
                            value: 'shizilin',
                            title: '狮子林',
                        }
                    ]
                }
            ],
        }
    ]

    const data2 = JSON.parse(JSON.stringify(data));
    const data3 = JSON.parse(JSON.stringify(data));
    const data4 = JSON.parse(JSON.stringify(data));
    const data5 = JSON.parse(JSON.stringify(data));
    const data6 = JSON.parse(JSON.stringify(data));
    const data7 = JSON.parse(JSON.stringify(data));

    const data10 = [
        {
            value: 'beijing', title: '北京', loading: true
        },
        {
            value: 'jiangsu',
            title: '江苏',
            loading: true,
        }
    ];
    return <>
        <div class='sys-ctx-main-left' use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Cascader 级联选择
                </Title>
                <Space id="cascader_base" dir="v">
                    <Card bordered>
                        <Cascader data={data}/>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            基础用法
                        </Paragraph>
                        <DemoCode data={codes['cascader_base']}/>
                    </Card>
                </Space>


                <Space id="cascader_disabled" dir="v">
                    <Card bordered>
                        <Cascader data={data2} disabled/>
                        <Divider align="left"><Text type="primary">禁用</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            使用 disabled 禁用
                        </Paragraph>
                        <DemoCode data={codes['cascader_disabled']}/>
                    </Card>
                </Space>


                <Space id="cascader_size" dir="v">
                    <Card bordered>
                        <Space>
                            <Cascader data={data3} size="small" value={['jiangsu','suzhou','shizilin']} />
                            <Cascader data={data3} value={['jiangsu','suzhou','shizilin']} />
                            <Cascader data={data3} size="large" value={['jiangsu','suzhou','shizilin']} />
                        </Space>
                        <Divider align="left"><Text type="primary">尺寸</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            size 支持 small 和 large
                        </Paragraph>
                        <DemoCode data={codes['cascader_size']}/>
                    </Card>
                </Space>


                <Space id="cascader_sep" dir="v">
                    <Card bordered>
                        <Cascader data={data4} seperator=">"/>
                        <Divider align="left"><Text type="primary">自定义分隔符</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            使用 seperator 可以自定义分隔符
                        </Paragraph>
                        <DemoCode data={codes['cascader_sep']}/>
                    </Card>
                </Space>


                <Space id="cascader_trigger" dir="v">
                    <Card bordered>
                        <Cascader data={data5} trigger='hover' value={['jiangsu','suzhou','shizilin']} />
                        <Divider align="left"><Text type="primary">触发事件</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            使用 trigger 修改展开的触发条件， 支持hover和click
                        </Paragraph>
                        <DemoCode data={codes['cascader_trigger']}/>
                    </Card>
                </Space>


                <Space id="cascader_change" dir="v">
                    <Card bordered>
                        <Cascader data={data6} changeOnSelect value={['jiangsu','suzhou','shizilin']} />
                        <Divider align="left"><Text type="primary">选择及改变</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            设置 changeOnSelect 选择选项及改变值
                        </Paragraph>
                        <DemoCode data={codes['cascader_change']}/>
                    </Card>
                </Space>


                <Space id="cascader_control" dir="v">
                    <Card bordered>
                        <Space>
                            <Cascader data={data7} value={[value, setValue]} />
                            <Button type='primary' onClick={() => {
                                setValue(['jiangsu','suzhou','shizilin'])
                            }}>
                                设置值
                            </Button>
                        </Space>
                        <Divider align="left"><Text type="primary">可控</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            value 可控属性
                        </Paragraph>
                        <DemoCode data={codes['cascader_control']}/>
                    </Card>
                </Space>


                <Space id="cascader_loading" dir="v">
                    <Card bordered>
                        <Space>
                            <Cascader data={data10} loadData={(item: any) => {
                                return new Promise((resolve) => {
                                    setTimeout(() => {
                                        if (item.value === 'beijing') {
                                            resolve([
                                                {value: 'gugong', title: '故宫'},
                                                {value: 'tiantan', title: '天坛'},
                                                {value: 'wangfujing', title: '王府井'},
                                            ]);
                                        }
                                        if (item.value === 'jiangsu') {
                                            resolve([
                                                {
                                                    value: 'nanjing',
                                                    title: '南京',
                                                },
                                                {
                                                    value: 'suzhou',
                                                    title: '苏州',
                                                }
                                            ]);
                                        }
                                    }, 1000);
                                })
                            }}/>
                        </Space>
                        <Divider align="left"><Text type="primary">动态加载</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            数据属性存在loading 可配合 loadData 方法进行动态加载子元素
                        </Paragraph>
                        <DemoCode data={codes['cascader_loading']}/>
                    </Card>
                </Space>


                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id='comp_props' dir="v">
                        <Title type="primary" heading={4}>Cascader Props</Title>
                        <Table columns={propsColumns} data={propsData} border size='small' />
                    </Space>
                    <Space id='comp_data_props' dir="v">
                        <Title type="primary" heading={4}>data Props</Title>
                        <Table columns={propsColumns} data={dataPropsData} border size='small' />
                    </Space>
                    <Space id='comp_events' dir="v">
                        <Title type="primary" heading={4}>Events</Title>
                        <Table columns={eventsColumns} data={eventsData} border size="small" />
                    </Space>
                </Space>
            </Space>
        </div>

        <CompAnchor data={anchorData}/>
    </>
}