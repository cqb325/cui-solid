import { createSignal } from "solid-js";
import { TreeSelect } from "@/components/FormElements/TreeSelect"
import { Space } from "@/components/Layout"
import { Title } from "@/components/Typography/Title";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Text } from "@/components/Typography/Text";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Row } from "@/components/Row";
import { Col } from "@/components/Col";
import { Table } from "@/components/Table";
import { eventsColumns, propsColumns } from "../../common/columns";
import { anchorData, codes, eventsData, propsData } from "./config";
import { CompAnchor } from "../../common/CompAnchor";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
import { Button, TreeCheckMod } from "@/components";
import { F7TagFill } from "cui-solid-icons/f7";
useDirective(hljs);

export default function TreeSelectPage () {
    const [value, setValue] = createSignal(['1_2_1']);
    const [value2, setValue2] = createSignal('1_2_1');
    const data1 = [
        {id: 'beijing', title: '北京', children: [
            {id: 'gugong', title: '故宫'},
            {id: 'tiantan', title: '天坛'},
        ]},
        {id: 'zhejiang', title: '浙江', children: [
            {id: 'xihu', title: '西湖'},
            {id: 'linyin', title: '灵隐'},
        ]},
    ]
    const data3 = [];
    for (let i = 0; i < 3; i++) {
        const c = [];
        for (let j = 0; j < 3; j++) {
            const d = [];
            let disabled = false;
            if (i === 0 && j === 0) {
                disabled = true;
            }
            for (let k = 0; k < 3; k++) {
                d.push({id: `${i + 1}_${j + 1}_${k + 1}`, title: `node_${i + 1}_${j + 1}_${k + 1}`});
            }
            c.push({id: `${i + 1}_${j + 1}`, title: `node_${i + 1}_${j + 1}`, children: d, disabled});
        }
        // patch: <div style={{
        //     display: 'flex',
        //     "justify-content": 'end'
        // }}>
        //     <Text type="success">查看</Text>
        // </div>

        data3.push({id: `${i + 1}`, title: `node_${i + 1}`, children: c});
    }

    const data2 = [];
    for (let i = 0; i < 3; i++) {
        const c = [];
        for (let j = 0; j < 3; j++) {
            const d = [];
            let disabled = false;
            if (i === 0 && j === 0) {
                disabled = true;
            }
            for (let k = 0; k < 3; k++) {
                d.push({id: `${i + 1}_${j + 1}_${k + 1}`, title: `node_${i + 1}_${j + 1}_${k + 1}`});
            }
            c.push({id: `${i + 1}_${j + 1}`, title: `node_${i + 1}_${j + 1}`, children: d, disabled});
        }
        // patch: <div style={{
        //     display: 'flex',
        //     "justify-content": 'end'
        // }}>
        //     <Text type="success">查看</Text>
        // </div>

        data2.push({id: `${i + 1}`, title: `node_${i + 1}`, children: c});
    }

    const data4 = JSON.parse(JSON.stringify(data1));
    const data5 = JSON.parse(JSON.stringify(data1));
    const data6 = JSON.parse(JSON.stringify(data1));
    const data7 = JSON.parse(JSON.stringify(data1));
    const data8 = JSON.parse(JSON.stringify(data1));
    const data9 = JSON.parse(JSON.stringify(data1));
    const data10 = JSON.parse(JSON.stringify(data1));
    const data11 = JSON.parse(JSON.stringify(data1));
    const data12 = JSON.parse(JSON.stringify(data1));
    const data13 = JSON.parse(JSON.stringify(data1));
    const data14 = JSON.parse(JSON.stringify(data1));
    const [data15, setData15] = createSignal(JSON.parse(JSON.stringify(data1)));
    const [data16, setData16] = createSignal(JSON.parse(JSON.stringify(data1)));

    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    TreeSelect 树选择
                </Title>
                <Space id="tree_base" dir="v">
                    <Card bordered>
                        <TreeSelect data={data1}/>
                        <TreeSelect data={data15()}/>
                        <Button onClick={() => {
                            setData15([
        {id: 'beijing', title: '北京1', children: [
            {id: 'gugong', title: '故宫1'},
            {id: 'tiantan', title: '天坛1'},
        ]},
        {id: 'zhejiang', title: '浙江1', children: [
            {id: 'xihu', title: '西湖1'},
            {id: 'linyin', title: '灵隐1'},
        ]},
    ]);
                        }}>设置数据</Button>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        基础用法
                        </Paragraph>
                        <DemoCode data={codes['tree_base']}/>
                    </Card>
                </Space>

                <Space id="tree_disabled" dir="v">
                    <Card bordered>
                        <TreeSelect data={data1} disabled/>
                        <Divider align="left"><Text type="primary">禁用</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        使用 disabled 进行禁用
                        </Paragraph>
                        <DemoCode data={codes['tree_disabled']}/>
                    </Card>
                </Space>

                <Space id="tree_size" dir="v">
                    <Card bordered>
                        <Row>
                            <Col grid={0.33}>
                                <TreeSelect data={data4} size="small"/>
                            </Col>
                            <Col grid={0.33}>
                                <TreeSelect data={data4}/>
                            </Col>
                            <Col grid={0.33}>
                                <TreeSelect data={data4} size="large"/>
                            </Col>
                        </Row>
                        <Divider align="left"><Text type="primary">尺寸</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        size 支持 small large
                        </Paragraph>
                        <DemoCode data={codes['tree_size']}/>
                    </Card>
                </Space>


                <Space id="tree_clearable" dir="v">
                    <Card bordered>
                        <TreeSelect data={data5} clearable/>
                        <Divider align="left"><Text type="primary">可清空</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        clearable 可清空选择数据
                        </Paragraph>
                        <DemoCode data={codes['tree_clearable']}/>
                    </Card>
                </Space>


                <Space id="tree_prepend" dir="v">
                    <Card bordered>
                        <TreeSelect prepend={<F7TagFill />} data={data6} clearable/>
                        <Divider align="left"><Text type="primary">前缀</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        使用 prepend 可添加前缀
                        </Paragraph>
                        <DemoCode data={codes['tree_prepend']}/>
                    </Card>
                </Space>


                <Space id="tree_multi" dir="v">
                    <Card bordered>
                        <TreeSelect multi data={data7} clearable/>
                        <TreeSelect multi data={data16()} clearable/>
                        <Button onClick={() => {
                            setData16([
                                {id: 'beijing', title: '北京1', children: [
                                    {id: 'gugong', title: '故宫1'},
                                    {id: 'tiantan', title: '天坛1'},
                                ]},
                                {id: 'zhejiang', title: '浙江1', children: [
                                    {id: 'xihu', title: '西湖1'},
                                    {id: 'linyin', title: '灵隐1'},
                                ]}
                            ])
                        }}>设置数据</Button>
                        <Divider align="left"><Text type="primary">多选</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        使用 multi 为多选模式, 多选默认级联选择
                        </Paragraph>
                        <DemoCode data={codes['tree_multi']}/>
                    </Card>
                </Space>


                <Space id="tree_relation" dir="v">
                    <Card bordered>
                        <TreeSelect multi data={data8} clearable checkRelation="unRelated" />
                        <Divider align="left"><Text type="primary">多选非级联</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        checkRelation 支持 unRelated (非级联) 和 related (级联) 默认 related
                        </Paragraph>
                        <DemoCode data={codes['tree_relation']}/>
                    </Card>
                </Space>



                <Space id="tree_showMax" dir="v">
                    <Card bordered>
                        <TreeSelect multi data={data9} clearable checkRelation="unRelated" showMax={2}/>
                        <Divider align="left"><Text type="primary">显示个数</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        showMax 可以设置最多显示的个数
                        </Paragraph>
                        <DemoCode data={codes['tree_showMax']}/>
                    </Card>
                </Space>


                <Space id="tree_valueClosable" dir="v">
                    <Card bordered>
                        <TreeSelect multi data={data10} valueClosable clearable checkRelation="unRelated" />
                        <Divider align="left"><Text type="primary">值可关闭</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        valueClosable 支持 选择的值可以进行关闭
                        </Paragraph>
                        <DemoCode data={codes['tree_valueClosable']}/>
                    </Card>
                </Space>

                <Space id="tree_mode" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <div>CHILD:</div>
                            <TreeSelect multi data={data11} clearable mode={TreeCheckMod.CHILD} />
                            <div>HALF:</div>
                            <TreeSelect multi data={data12} clearable mode={TreeCheckMod.HALF} />
                            <div>SHALLOW:</div>
                            <TreeSelect multi data={data13} clearable mode={TreeCheckMod.SHALLOW} />
                            <div>FULL:</div>
                            <TreeSelect multi data={data14} clearable mode={TreeCheckMod.FULL} />
                        </Space>
                        <Divider align="left"><Text type="primary">选择模式</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        mode 支持 FULL 、 HALF、 CHILD、 SHALLOW 默认为 HALF
                        </Paragraph>
                        <DemoCode data={codes['tree_mode']}/>
                    </Card>
                </Space>


                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>TreeSelect Props</Title>
                        <Table columns={propsColumns} data={propsData} border size="small" />
                    </Space>

                    <Space id="comp_events" dir="v">
                        <Title type="primary" heading={4}>Events</Title>
                        <Table columns={eventsColumns} data={eventsData} border size="small" />
                    </Space>
                </Space>
            </Space>
        </div>

        <CompAnchor data={anchorData}/>
    </>
}
