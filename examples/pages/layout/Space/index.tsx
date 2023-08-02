import { createSignal } from 'solid-js';
import { Button } from '@/components/Button';
import { Space } from '@/components/Layout';
import { Title } from '@/components/Typography/Title';
import { Card } from '@/components/Card';
import { Divider } from '@/components/Divider';
import { Paragraph } from '@/components/Typography/Paragraph';
import { Text } from '@/components/Typography/Text';
import { Slider } from '@/components/FormElements/Slider';
import { Table } from '@/components/Table';
import { anchorData, codes, propsData } from './config';
import { CompAnchor } from '../../common/CompAnchor';
import { propsColumns } from '../../common/columns';
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
useDirective(hljs);

function SpaceDemo () {
    const [size, setSize] = createSignal(10);
    return <>
        <div class='sys-ctx-main-left' use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Space 间隔
                </Title>
                <Space id="space_base" dir="v">
                    <Card bordered>
                        <Space align='center'>
                            <Text>文本</Text>
                            <Button>Button</Button>
                        </Space>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            默认横向布局，并添加间隔， 默认垂直居中
                        </Paragraph>
                        <DemoCode data={codes['space_base']}/>
                    </Card>
                </Space>

                <Space id="space_vertical" dir="v">
                    <Card bordered>
                        <Space dir='v' inline>
                            <Button>Button</Button>
                            <Button>Button</Button>
                            <Button>Button</Button>
                        </Space>
                        <Divider align="left"><Text type="primary">垂直间距</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            设置属性 <Text code>dir</Text> 为 <Text code>v</Text> 可以使相邻组件垂直排列。
                        </Paragraph>
                        <DemoCode data={codes['space_vertical']}/>
                    </Card>
                </Space>


                <Space id="space_size" dir="v">
                    <Card bordered>
                        <Space size={size()}>
                            <Button>Button</Button>
                            <Button>Button</Button>
                            <Button>Button</Button>
                        </Space>
                        <Slider value={[size, setSize]}/>
                        <Divider align="left"><Text type="primary">间距大小</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            间距可以通过属性 <Text code>size</Text> 设置，默认值为8。
                        </Paragraph>
                        <DemoCode data={codes['space_size']}/>
                    </Card>
                </Space>


                <Space id="space_align" dir="v">
                    <Card bordered>
                        <Space dir='v'>
                            <Space>
                                <Space align='start' style={{border: '1px solid #dfdfdf', padding: '8px', width: '200px'}}>
                                    <span>start</span>
                                    <Button>Button</Button>
                                    <div style={{height: '100px', background: 'rgba(200,200,200,0.3)', "line-height": '100px'}}>Block</div>
                                </Space>
                                <Space align='center' style={{border: '1px solid #dfdfdf', padding: '8px', width: '200px'}}>
                                    <span>center</span>
                                    <Button>Button</Button>
                                    <div style={{height: '100px', background: 'rgba(200,200,200,0.3)', "line-height": '100px'}}>Block</div>
                                </Space>
                                <Space align='end' style={{border: '1px solid #dfdfdf', padding: '8px', width: '200px'}}>
                                    <span>end</span>
                                    <Button>Button</Button>
                                    <div style={{height: '100px', background: 'rgba(200,200,200,0.3)', "line-height": '100px'}}>Block</div>
                                </Space>
                                <Space align='baseline' style={{border: '1px solid #dfdfdf', padding: '8px', width: '200px'}}>
                                    <span>Baseline</span>
                                    <Button>Button</Button>
                                    <div style={{height: '100px', background: 'rgba(200,200,200,0.3)', "line-height": '100px'}}>Block</div>
                                </Space>
                            </Space>
                            <Space>
                                <Space align='center' justify='start' style={{border: '1px solid #dfdfdf', padding: '8px', width: '200px'}}>
                                    <span>start</span>
                                    <Button>Button</Button>
                                    <div style={{height: '100px', background: 'rgba(200,200,200,0.3)', "line-height": '100px'}}>Block</div>
                                </Space>
                                <Space align='center' justify='center' style={{border: '1px solid #dfdfdf', padding: '8px', width: '200px'}}>
                                    <span>center</span>
                                    <Button>Button</Button>
                                    <div style={{height: '100px', background: 'rgba(200,200,200,0.3)', "line-height": '100px'}}>Block</div>
                                </Space>
                                <Space align='center' justify='end' style={{border: '1px solid #dfdfdf', padding: '8px', width: '200px'}}>
                                    <span>end</span>
                                    <Button>Button</Button>
                                    <div style={{height: '100px', background: 'rgba(200,200,200,0.3)', "line-height": '100px'}}>Block</div>
                                </Space>
                            </Space>
                            <Space>
                                <Space dir='v' align='start' style={{border: '1px solid #dfdfdf', padding: '8px', height: '150px'}}>
                                    <span>start</span>
                                    <Button>Button</Button>
                                    <div style={{width: '100px', background: 'rgba(200,200,200,0.3)', "line-height": '32px'}}>Block</div>
                                </Space>
                                <Space dir='v' align='center' style={{border: '1px solid #dfdfdf', padding: '8px', height: '150px'}}>
                                    <span>center</span>
                                    <Button>Button</Button>
                                    <div style={{width: '100px', background: 'rgba(200,200,200,0.3)', "line-height": '32px'}}>Block</div>
                                </Space>
                                <Space dir='v' align='end' style={{border: '1px solid #dfdfdf', padding: '8px', height: '150px'}}>
                                    <span>end</span>
                                    <Button>Button</Button>
                                    <div style={{width: '100px', background: 'rgba(200,200,200,0.3)', "line-height": '32px'}}>Block</div>
                                </Space>
                            </Space>
                            <Space>
                                <Space dir='v' align='center' justify='start' style={{border: '1px solid #dfdfdf', padding: '8px', height: '150px'}}>
                                    <span>start</span>
                                    <Button>Button</Button>
                                    <div style={{width: '100px', background: 'rgba(200,200,200,0.3)', "line-height": '32px'}}>Block</div>
                                </Space>
                                <Space dir='v' align='center' justify='center' style={{border: '1px solid #dfdfdf', padding: '8px', height: '150px'}}>
                                    <span>center</span>
                                    <Button>Button</Button>
                                    <div style={{width: '100px', background: 'rgba(200,200,200,0.3)', "line-height": '32px'}}>Block</div>
                                </Space>
                                <Space dir='v' align='center' justify='end' style={{border: '1px solid #dfdfdf', padding: '8px', height: '150px'}}>
                                    <span>end</span>
                                    <Button>Button</Button>
                                    <div style={{width: '100px', background: 'rgba(200,200,200,0.3)', "line-height": '32px'}}>Block</div>
                                </Space>
                            </Space>
                        </Space>
                        <Divider align="left"><Text type="primary">对齐方式</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            设置对齐模式。
                        </Paragraph>
                        <DemoCode data={codes['space_align']}/>
                    </Card>
                </Space>

                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id='comp_props' dir="v">
                        <Title type="primary" heading={4}>Row Props</Title>
                        <Table columns={propsColumns} data={propsData} border size='small' />
                    </Space>
                </Space>
            </Space>
        </div>

        <CompAnchor data={anchorData}/>
    </>
}

export default SpaceDemo;