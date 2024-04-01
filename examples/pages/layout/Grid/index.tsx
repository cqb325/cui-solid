import { Space } from '@/components/Layout';
import { Row } from '@/components/Row';
import { Col } from '@/components/Col';
import '../demo.less';
import { Title } from '@/components/Typography/Title';
import { Divider } from '@/components/Divider';
import { Text } from '@/components/Typography/Text';
import { Paragraph } from '@/components/Typography/Paragraph';
import { Card } from '@/components/Card';
import { Table } from '@/components/Table';
import { anchorData, codes, colPropsData, propsData } from './config';
import { CompAnchor } from '../../common/CompAnchor';
import { propsColumns } from '../../common/columns';
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
useDirective(hljs);

function ColText (props: any) {
    return <div class="col-content" style={{...props.style, 'justify-content': 'center'}}>{props.children}</div>;
}

function GridLayout () {
    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Row/Col 栅格
                </Title>
                <Space id="grid_base" dir="v">
                    <Card bordered>
                        <Space dir="v" size={5}>
                            <Row class="demo-row">
                                <Col class="demo-col"><ColText>100%</ColText></Col>
                            </Row>
                            <Row class="demo-row light">
                                <Col class="demo-col" grid={0.5}><ColText>50%</ColText></Col>
                                <Col class="demo-col light" grid={0.5}><ColText>50%</ColText></Col>
                            </Row>
                            <Row class="demo-row">
                                <Col class="demo-col" grid={1/3}><ColText>1/3</ColText></Col>
                                <Col class="demo-col light" grid={1/3}><ColText>1/3</ColText></Col>
                                <Col class="demo-col" grid={1/3}><ColText>1/3</ColText></Col>
                            </Row>
                            <Row class="demo-row light">
                                <Col class="demo-col" grid={1/4}><ColText>1/4</ColText></Col>
                                <Col class="demo-col light" grid={1/4}><ColText>1/4</ColText></Col>
                                <Col class="demo-col" grid={1/4}><ColText>1/4</ColText></Col>
                                <Col class="demo-col light" grid={1/4}><ColText>1/4</ColText></Col>
                            </Row>
                            <Row class="demo-row">
                                <Col class="demo-col" grid={2/3}><ColText>2/3</ColText></Col>
                                <Col class="demo-col light" grid={1/3}><ColText>1/3</ColText></Col>
                            </Row>
                        </Space>

                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            <ul>
                                <li>使用 <Text code>row</Text> 在水平方向创建一行</li>
                                <li>将一组 <Text code>col</Text> 插入在 <Text code>row</Text> 中</li>
                                <li>在每个 <Text code>col</Text> 中，键入自己的内容</li>
                                <li>通过设置 <Text code>col</Text> 的 <Text code>grid</Text> 参数，指定跨越的范围, <Text code>grid</Text> 范围为0~1</li>
                            </ul>
                        </Paragraph>
                        <DemoCode data={codes['grid_base']}/>
                    </Card>
                </Space>


                <Space id="grid_gutter" dir="v">
                    <Card bordered>
                        <Row gutter={16} class="example-demo">
                            <Col grid={1/4}><ColText>1/4</ColText></Col>
                            <Col grid={1/4}><ColText>1/4</ColText></Col>
                            <Col grid={1/4}><ColText>1/4</ColText></Col>
                            <Col grid={1/4}><ColText>1/4</ColText></Col>
                        </Row>
                        <div>row2</div>
                        <Row gutter={[16, 16]} class="example-demo">
                            <Col grid={1/4}><ColText>1/4</ColText></Col>
                            <Col grid={1/4}><ColText>1/4</ColText></Col>
                            <Col grid={1/4}><ColText>1/4</ColText></Col>
                            <Col grid={1/4}><ColText>1/4</ColText></Col>
                            <Col grid={1/4}><ColText>1/4</ColText></Col>
                            <Col grid={1/4}><ColText>1/4</ColText></Col>
                            <Col grid={1/4}><ColText>1/4</ColText></Col>
                            <Col grid={1/4}><ColText>1/4</ColText></Col>
                        </Row>
                        <Divider align="left"><Text type="primary">区块间隔</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            通过给 <Text code>row</Text> 添加 gutter 属性，可以给下属的 <Text code>col</Text> 添加间距，推荐使用 (16+8n)px 作为栅格间隔。
                            gutter属性支持数字或数组，数组格式为 [水平间距, 垂直间距]。
                        </Paragraph>
                        <DemoCode data={codes['grid_gutter']}/>
                    </Card>
                </Space>


                <Space id="grid_offset" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Row gutter={16} class="example-demo">
                                <Col grid={1/4} offset={1/4}><ColText>1/4 offset 1/4</ColText></Col>
                                <Col grid={1/4} offset={1/4}><ColText>1/4 offset 1/4</ColText></Col>
                            </Row>

                            <Row gutter={16} class="example-demo">
                                <Col grid={0.5} offset={0.25}><ColText>0.5 offset 0.25</ColText></Col>
                            </Row>
                        </Space>
                        <Divider align="left"><Text type="primary">左右偏移</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            通过设置offset属性，将列进行左右偏移，偏移栅格数为offset的值。
                        </Paragraph>
                        <DemoCode data={codes['grid_offset']}/>
                    </Card>
                </Space>


                <Space id="grid_push" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Row class="example-demo">
                                <Col grid={3/4} push={1/4}><ColText>3/4 push-1/4</ColText></Col>
                                <Col grid={1/4} pull={3/4}><ColText>1/4 pull-3/4</ColText></Col>
                            </Row>
                        </Space>
                        <Divider align="left"><Text type="primary">栅格排序</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            通过设置push和pull来改变栅格的顺序。
                        </Paragraph>
                        <DemoCode data={codes['grid_push']}/>
                    </Card>
                </Space>

                <Space id="grid_justify" dir="v">
                    <Card bordered>
                        <Space dir="v" size={5} style={{'margin-top': '20px'}}>
                            <div>start</div>
                            <Row justify="start" class="example-demo">
                                <Col grid={1/6}><ColText>1/6</ColText></Col>
                                <Col grid={1/6}><ColText>1/6</ColText></Col>
                                <Col grid={1/6}><ColText>1/6</ColText></Col>
                                <Col grid={1/6}><ColText>1/6</ColText></Col>
                            </Row>
                            <div>end</div>
                            <Row justify="end" class="example-demo">
                                <Col grid={1/6}><ColText>1/6</ColText></Col>
                                <Col grid={1/6}><ColText>1/6</ColText></Col>
                                <Col grid={1/6}><ColText>1/6</ColText></Col>
                                <Col grid={1/6}><ColText>1/6</ColText></Col>
                            </Row>
                            <div>center</div>
                            <Row justify="center" class="example-demo">
                                <Col grid={1/6}><ColText>1/6</ColText></Col>
                                <Col grid={1/6}><ColText>1/6</ColText></Col>
                                <Col grid={1/6}><ColText>1/6</ColText></Col>
                                <Col grid={1/6}><ColText>1/6</ColText></Col>
                            </Row>
                            <div>space-between</div>
                            <Row justify="space-between" class="example-demo">
                                <Col grid={1/6}><ColText>1/6</ColText></Col>
                                <Col grid={1/6}><ColText>1/6</ColText></Col>
                                <Col grid={1/6}><ColText>1/6</ColText></Col>
                                <Col grid={1/6}><ColText>1/6</ColText></Col>
                            </Row>
                            <div>space-around</div>
                            <Row justify="space-around" class="example-demo">
                                <Col grid={1/6}><ColText>1/6</ColText></Col>
                                <Col grid={1/6}><ColText>1/6</ColText></Col>
                                <Col grid={1/6}><ColText>1/6</ColText></Col>
                                <Col grid={1/6}><ColText>1/6</ColText></Col>
                            </Row>
                        </Space>
                        <Divider align="left"><Text type="primary">flex水平布局</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            通过给row设置参数justify为不同的值，来定义子元素的排布方式。在flex模式下有效。
                        </Paragraph>
                        <DemoCode data={codes['grid_justify']}/>
                    </Card>
                </Space>


                <Space id="grid_align" dir="v">
                    <Card bordered>
                        <Space dir="v" size={5} style={{'margin-top': '20px'}}>
                            <Row justify="center" align="top" class="example-demo">
                                <Col grid={1/6}><ColText style={{height: '80px'}}>1/6</ColText></Col>
                                <Col grid={1/6}><ColText>1/6</ColText></Col>
                                <Col grid={1/6}><ColText style={{height: '100px'}}>1/6</ColText></Col>
                                <Col grid={1/6}><ColText>1/6</ColText></Col>
                            </Row>
                            <Row justify="center" align="bottom" class="example-demo">
                                <Col grid={1/6}><ColText style={{height: '80px'}}>1/6</ColText></Col>
                                <Col grid={1/6}><ColText>1/6</ColText></Col>
                                <Col grid={1/6}><ColText style={{height: '100px'}}>1/6</ColText></Col>
                                <Col grid={1/6}><ColText>1/6</ColText></Col>
                            </Row>
                            <Row justify="center" align="middle" class="example-demo">
                                <Col grid={1/6}><ColText style={{height: '80px'}}>1/6</ColText></Col>
                                <Col grid={1/6}><ColText>1/6</ColText></Col>
                                <Col grid={1/6}><ColText style={{height: '100px'}}>1/6</ColText></Col>
                                <Col grid={1/6}><ColText>1/6</ColText></Col>
                            </Row>
                        </Space>
                        <Divider align="left"><Text type="primary">flex垂直对齐</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            通过给row设置参数align为不同的值，来定义子元素在垂直方向上的排布方式。在flex模式下有效。
                        </Paragraph>
                        <DemoCode data={codes['grid_align']}/>
                    </Card>
                </Space>

                <Space id="grid_responsive" dir="v">
                    <Card bordered>
                        <Space dir="v" size={5} style={{'margin-top': '20px'}}>
                            <div>width, offset</div>
                            <Row class="example-demo" gutter={16}>
                                <Col xs={{grid: 1/6, offset: 1 / 24}} lg={{grid: 0.25, offset: 1 / 12}}><ColText style={{"height": "80px"}}/></Col>
                                <Col xs={{grid: 5/12, offset: 1 / 12}} lg={{grid: 0.25, offset: 1 / 12}}><ColText style={{"height": "80px"}}/></Col>
                                <Col xs={{grid: 1/6, offset: 1 / 12}} lg={{grid: 0.25, offset: 1 / 12}}><ColText style={{"height": "80px"}}/></Col>
                            </Row>
                            <div>gutter</div>
                            <Row class="example-demo" gutter={{xs: [8, 8], lg: [32, 32]}}>
                                <Col grid={1/3}><ColText style={{"height": "80px"}}/></Col>
                                <Col grid={1/3}><ColText style={{"height": "80px"}}/></Col>
                                <Col grid={1/3}><ColText style={{"height": "80px"}}/></Col>
                                <Col grid={1/3}><ColText style={{"height": "80px"}}/></Col>
                                <Col grid={1/3}><ColText style={{"height": "80px"}}/></Col>
                                <Col grid={1/3}><ColText style={{"height": "80px"}}/></Col>
                            </Row>
                        </Space>
                        <Divider align="left"><Text type="primary">响应式布局</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            预设六个响应尺寸：xs sm md lg xl xxl，调整浏览器尺寸来查看效果。
                            gutter也支持响应式，可以通过内嵌到 xs sm md lg xl xxl 属性中来使用
                        </Paragraph>
                        <DemoCode data={codes['grid_responsive']}/>
                    </Card>
                </Space>


                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>Row Props</Title>
                        <Table columns={propsColumns} data={propsData} border size="small" />
                    </Space>

                    <Space id="comp_col_props" dir="v">
                        <Title type="primary" heading={4}>Col Props</Title>
                        <Table columns={propsColumns} data={colPropsData} border size="small" />
                    </Space>
                </Space>
            </Space>
        </div>

        <CompAnchor data={anchorData} />
    </>
}
export default GridLayout;
