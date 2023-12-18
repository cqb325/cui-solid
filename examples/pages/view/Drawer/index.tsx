import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
import { createSignal } from "solid-js";
import { anchorData, codes, eventsData, propsData } from "./config";
import { eventsColumns, propsColumns } from "../../common/columns";
import { CompAnchor } from "../../common/CompAnchor";
useDirective(hljs);
import { Space } from "@/components/Layout";
import { Title } from "@/components/Typography/Title";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { Divider } from "@/components/Divider";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Text } from "@/components/Typography/Text";
import { Table } from "@/components/Table";
import { Drawer } from "@/components/Drawer";
import { RadioGroup } from "@/components/FormElements/RadioGroup";

export default function DrawerPage () {
    const [visible, setVisible] = createSignal(false);
    const [visible2, setVisible2] = createSignal(false);
    const [visible3, setVisible3] = createSignal(false);
    const [align, setAlign] = createSignal<'right'|'left'|'top'|'bottom'>('right');

    return <>
        <div class='sys-ctx-main-left' use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Drawer 抽屉
                </Title>
                <Space id="drawer_base" dir="v">
                    <Card bordered>
                        <Drawer visible={[visible, setVisible]} title="侧边栏">
                            content
                        </Drawer>
                        <Button type="primary" onClick={() => {
                            setVisible(true);
                        }}>打开</Button>
                        <Divider align="left"><Text type="primary">基本用法</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            基本用法
                        </Paragraph>
                        <DemoCode data={codes['drawer_base']}/>
                    </Card>
                </Space>

                <Space id="drawer_align" dir="v">
                    <Card bordered>
                        <Drawer visible={[visible2, setVisible2]} title="侧边栏" align={align()}>
                            content
                        </Drawer>
                        <Space dir="h">
                            <RadioGroup stick value={[align, setAlign]} data={[{label: 'Left', value: 'left'}, {label: 'Top', value: 'top'}, {label: 'Right', value: 'right'}, {label: 'Bottom', value: 'bottom'}]} onChange={(v: any) => {
                                setAlign(v);
                            }}></RadioGroup>
                            <Button type="primary" onClick={() => {
                                setVisible2(true);
                            }}>打开</Button>
                        </Space>
                        <Divider align="left"><Text type="primary">位置</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            <Text code>align</Text> 属性支持 <Text code>left</Text> <Text code>right</Text> <Text code>top</Text> <Text code>bottom</Text>
                            默认是 <Text code>right</Text>
                        </Paragraph>
                        <DemoCode data={codes['drawer_align']}/>
                    </Card>
                </Space>

                <Space id="drawer_size" dir="v">
                    <Card bordered>
                        <Drawer visible={[visible3, setVisible3]} title="侧边栏" size={500}>
                            content
                        </Drawer>
                        <Button type="primary" onClick={() => {
                            setVisible3(true);
                        }}>打开</Button>
                        <Divider align="left"><Text type="primary">尺寸</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            设置<Text code>size</Text> 可以修改Drawer的尺寸
                        </Paragraph>
                        <DemoCode data={codes['drawer_size']}/>
                    </Card>
                </Space>

                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id='comp_props' dir="v">
                        <Title type="primary" heading={4}>Drawer Props</Title>
                        <Table columns={propsColumns} data={propsData} border size='small' />
                    </Space>
                    

                    <Space id='comp_events' dir="v">
                        <Title type="primary" heading={4}>Events</Title>
                        <Table columns={eventsColumns} data={eventsData} border size='small' />
                    </Space>
                </Space>
            </Space>
        </div>

        <CompAnchor data={anchorData}/>
    </>
}