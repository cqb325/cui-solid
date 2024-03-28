import { Card } from "@/components/Card";
import { Space } from "@/components/Layout";
import { Title } from "@/components/Typography/Title";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
import { ColorPicker } from "@/components/FormElements/ColorPicker";
import { Divider } from "@/components/Divider";
import { Text } from "@/components/Typography/Text";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Table } from "@/components/Table";
import { eventsColumns, propsColumns } from "../../common/columns";
import { anchorData, codes, eventsData, propsData } from "./config";
import { CompAnchor } from "../../common/CompAnchor";
useDirective(hljs);

export default function ColorPickerPage () {
    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    ColorPicker 颜色选择器
                </Title>

                <Space id="cp_base" dir="v">
                    <Card bordered>
                        <Space dir="h" size={50}>
                            <Space dir="h" align="center">
                                <span>有默认值</span>
                                <ColorPicker value={'#19be6b'}/>
                            </Space>
                            <Space dir="h" align="center">
                                <span>无默认值</span>
                                <ColorPicker />
                            </Space>
                        </Space>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            基础用法
                        </Paragraph>
                        <DemoCode data={codes['cp_base']}/>
                    </Card>
                </Space>

                <Space id="cp_alpha" dir="v">
                    <Card bordered>
                        <Space dir="h">
                            <ColorPicker value={'rgba(25, 190,107, .5)'} alpha/>
                        </Space>
                        <Divider align="left"><Text type="primary">透明度</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        开启属性 alpha，可以选择带 Alpha 通道的颜色
                        </Paragraph>
                        <DemoCode data={codes['cp_alpha']}/>
                    </Card>
                </Space>


                <Space id="cp_recommand" dir="v">
                    <Card bordered>
                        <Space dir="h">
                            <ColorPicker value={'#19be6b'} recommend />
                            <ColorPicker value={'#19be6b'} recommend colors={['#311B92', '#512DA8', '#673AB7', '#9575CD', '#D1C4E9']}/>
                        </Space>
                        <Divider align="left"><Text type="primary">颜色预设</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        开启属性 recommend 可以显示推荐的颜色预设，或设置属性 colors 来自定义预设颜色。
                        </Paragraph>
                        <DemoCode data={codes['cp_recommand']}/>
                    </Card>
                </Space>

                <Space id="cp_size" dir="v">
                    <Card bordered>
                        <Space dir="h" align="center">
                            <ColorPicker value={'#19be6b'} size="large" />
                            <ColorPicker value={'#19be6b'} />
                            <ColorPicker value={'#19be6b'} size="small"/>
                        </Space>
                        <Divider align="left"><Text type="primary">尺寸</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        选择器有三种尺寸：大、默认（中）、小。
                        </Paragraph>
                        <DemoCode data={codes['cp_size']}/>
                    </Card>
                </Space>


                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>Select Props</Title>
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
