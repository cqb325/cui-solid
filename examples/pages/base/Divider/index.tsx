import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider"
import { Space } from "@/components/Layout";
import { Table } from "@/components/Table";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Text } from "@/components/Typography/Text";
import { Title } from "@/components/Typography/Title";
import { CompAnchor } from "../../common/CompAnchor";
import { propsColumns } from "../../common/columns";
import { anchorData, codes, propsData } from "./config";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
import { For } from "solid-js";
useDirective(hljs);

function DividerPage () {
    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Divider 分割线
                </Title>
                <Space id="divider_base" dir="v">
                    <Card bordered>
                        <section style={{width: '400px'}}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
                            <Divider />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
                            <Divider dashed/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
                            <Divider>分割线</Divider>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
                        </section>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            默认为水平分割线，可在中间加入文字, 设置 dashed可以设置虚线分割线
                        </Paragraph>
                        <DemoCode data={codes['divider_base']}/>
                    </Card>
                </Space>

                <Space id="divider_vertical" dir="v">
                    <Card bordered>
                        <section>
                            <span>苹果</span>
                            <Divider dir="v" />
                            <span>香蕉</span>
                            <Divider dir="v" />
                            <span>芒果</span>
                        </section>
                        <Divider align="left"><Text type="primary">垂直分割线</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            使用 <Text code>dir="v"</Text> 设置为行内的垂直分割线
                        </Paragraph>
                        <DemoCode data={codes['divider_vertical']}/>
                    </Card>
                </Space>

                <Space id="divider_align" dir="v">
                    <Card bordered>
                        <section>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
                            <Divider align="left">分割线</Divider>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
                            <Divider align="right">分割线</Divider>
                        </section>
                        <Divider align="left"><Text type="primary">文字位置</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            使用 <Text code>align</Text> 设置为文字的位置，支持left和right 默认居中
                        </Paragraph>
                        <DemoCode data={codes['divider_align']}/>
                    </Card>
                </Space>

                <Space id="divider_margin" dir="v">
                    <Card bordered>
                        <section>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
                            <Divider align="left" margin={10}>分割线</Divider>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
                            <Divider align="right" margin="20px 0 10px 0">分割线</Divider>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
                        </section>
                        <Divider align="left"><Text type="primary">上下外边距</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            使用 <Text code>margin</Text> 设置divider的上下外边距
                        </Paragraph>
                        <DemoCode data={codes['divider_margin']}/>
                    </Card>
                </Space>

                <Space id="divider_color" dir="v">
                    <Card bordered>
                        <section>
                            <For each={['primary','success','info', 'warning','error', 'blue', 'green', 'red', 'yellow', 'magenta', 'pink', 'volcano', 'orange', 'gold', 'lime', 'cyan', 'geekblue', 'purple']}>
                                    {(color) => {
                                        return <>
                                            <Divider align="left" theme={color}>{color}</Divider>
                                        </>
                                    }}
                            </For>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
                            <For each={['#f50', '#2db7f5', '#87d068', '#108ee9']}>
                                {(color) => {
                                    return <>
                                        <Divider align="left" theme={color}>{color}</Divider>
                                    </>
                                }}
                            </For>
                        </section>
                        <Divider align="left"><Text type="primary">color</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            color
                        </Paragraph>
                        <DemoCode data={codes['divider_margin']}/>
                    </Card>
                </Space>

                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>Divider Props</Title>
                        <Table columns={propsColumns} data={propsData} border size="small" />
                    </Space>
                </Space>
            </Space>
        </div>

        <CompAnchor data={anchorData}/>
    </>
}

export default DividerPage;
