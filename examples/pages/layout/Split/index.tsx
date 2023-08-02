import { Split } from "@/components/Split"
import { Space } from "@/components/Layout"
import { Title } from "@/components/Typography/Title"
import { Card } from "@/components/Card"
import { Divider } from "@/components/Divider"
import { Text } from "@/components/Typography/Text"
import { Paragraph } from "@/components/Typography/Paragraph"
import { Table } from "@/components/Table"
import { anchorData, codes, propsData, slotsData } from "./config"
import { CompAnchor } from "../../common/CompAnchor"
import { Slot } from "@/components/inner/Slot"
import { propsColumns, slotsColumns } from "../../common/columns"
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
useDirective(hljs);

export default function SplitPage() {
    
    return <>
        <div class='sys-ctx-main-left' use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Split 面板分割
                </Title>
                <Space id="split_base" dir="v">
                    <Card bordered>
                        <div style={{height: '300px', border: '1px solid #ccc'}}>
                            <Split split="300px" max={500}>
                                <Slot name="prev"><div>LEFT</div></Slot>
                                <Slot name="next"><div>RIGHT</div></Slot>
                            </Split>
                        </div>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            左右分割用法。
                        </Paragraph>
                        <DemoCode data={codes['split_base']}/>
                    </Card>
                </Space>


                <Space id="split_h" dir="v">
                    <Card bordered>
                        <div style={{height: '300px', border: '1px solid #ccc'}}>
                            <Split dir='h' split={0.3}>
                                <Slot name="prev"><div>TOP</div></Slot>
                                <Slot name="next"><div>BOTTOM</div></Slot>
                            </Split>
                        </div>
                        <Divider align="left"><Text type="primary">上下分割</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            上下分割用法。
                        </Paragraph>
                        <DemoCode data={codes['split_h']}/>
                    </Card>
                </Space>


                <Space id="split_insert" dir="v">
                    <Card bordered>
                        <div style={{height: '300px', border: '1px solid #ccc'}}>
                            <Split split={0.5}>
                                <Slot name="prev">
                                    <Split dir='h' split={0.3}>
                                        <Slot name="prev"><div>TOP</div></Slot>
                                        <Slot name="next"><div>BOTTOM</div></Slot>
                                    </Split>
                                </Slot>
                                <Slot name="next"><div>Right</div></Slot>
                            </Split>
                        </div>
                        <Divider align="left"><Text type="primary">嵌套</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            嵌套使用。
                        </Paragraph>
                        <DemoCode data={codes['split_insert']}/>
                    </Card>
                </Space>


                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id='comp_props' dir="v">
                        <Title type="primary" heading={4}>Split Props</Title>
                        <Table columns={propsColumns} data={propsData} border size='small' />
                    </Space>

                    <Space id='comp_slots' dir="v">
                        <Title type="primary" heading={4}>Split slots</Title>
                        <Table columns={slotsColumns} data={slotsData} border size='small' />
                    </Space>
                </Space>
            </Space>
        </div>
        
        <CompAnchor data={anchorData}/>
    </>
}