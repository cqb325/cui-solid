import { Space } from "@/components/Layout";
import { Badge } from "@/components/Badge";
import { Icon } from "@/components/Icon";
import './style.less'
import { Title } from "@/components/Typography/Title";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Text } from "@/components/Typography/Text";
import { Table } from "@/components/Table";
import { anchorData, codes, propsData } from "./config";
import { CompAnchor } from "../../common/CompAnchor";
import { propsColumns } from "../../common/columns";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
useDirective(hljs);

export default function BadgePage () {
    return <>
        <div class='sys-ctx-main-left' use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Badge 徽标
                </Title>
                <Space id="badge_base" dir="v">
                    <Card bordered>
                        <Space dir="h">
                            <Badge count={3}>
                                <a href="#" class="demo-badge"></a>
                            </Badge>
                        </Space>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                        最简单的使用方法。
                        </Paragraph>
                        <DemoCode data={codes['badge_base']}/>
                    </Card>
                </Space>


                <Space id="badge_dot" dir="v">
                    <Card bordered>
                        <Space dir="h" size={24}>
                            <Badge dot>
                                <a href="#" class="demo-badge"></a>
                            </Badge>
                            <Badge dot>
                                <Icon name="bell1" size={26}></Icon>
                            </Badge>
                            <Badge dot>
                                <a href="#">可以是一个链接</a>
                            </Badge>
                        </Space>
                        <Divider align="left"><Text type="primary">小红点</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                        小红点徽标
                        </Paragraph>
                        <DemoCode data={codes['badge_dot']}/>
                    </Card>
                </Space>


                <Space id="badge_overcount" dir="v">
                    <Card bordered>
                        <Space dir="h" size={24}>
                            <Badge count={100}>
                                <a href="#" class="demo-badge"></a>
                            </Badge>
                            <Badge count={1000} overflowCount={999}>
                                <a href="#" class="demo-badge"></a>
                            </Badge>
                        </Space>
                        <Divider align="left"><Text type="primary">封顶数字</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                        通过设置 <Text code>overflowCount</Text> 属性设置一个封顶值，当超过时，会显示{'${overflowCount}'}+
                        </Paragraph>
                        <DemoCode data={codes['badge_overcount']}/>
                    </Card>
                </Space>


                <Space id="badge_alone" dir="v">
                    <Card bordered>
                        <Space dir="h" size={50}>
                            <Badge count={10} />
                            <Badge count={10} class="demo-badge-alone"/>
                        </Space>
                        <Divider align="left"><Text type="primary">独立使用及自定义样式</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            独立使用及自定义样式
                        </Paragraph>
                        <DemoCode data={codes['badge_alone']}/>
                    </Card>
                </Space>


                <Space id="badge_text" dir="v">
                    <Card bordered>
                        <Space dir="h" size={50}>
                            <Badge text="new">
                                <a href="#" class="demo-badge"></a>
                            </Badge>
                            <Badge text="hot">
                                <a href="#" class="demo-badge"></a>
                            </Badge>
                        </Space>
                        <Divider align="left"><Text type="primary">自定义内容</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            设置 <Text code>text</Text> 属性，可以自定义显示内容。
                        </Paragraph>
                        <DemoCode data={codes['badge_text']}/>
                    </Card>
                </Space>


                <Space id="badge_status" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Space dir="h">
                                <Badge status="success" />
                                <Badge status="error" />
                                <Badge status="default" />
                                <Badge status="processing" />
                                <Badge status="warning" />
                            </Space>

                            <Space dir="v">
                                <Badge status="success" text='Success'/>
                                <Badge status="error" text='Error'/>
                                <Badge status="default" text='Default'/>
                                <Badge status="processing" text='Processing'/>
                                <Badge status="warning" text='Warning'/>
                            </Space>
                        </Space>
                        <Divider align="left"><Text type="primary">状态点</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            用于表示状态的小圆点。
                        </Paragraph>
                        <DemoCode data={codes['badge_status']}/>
                    </Card>
                </Space>


                <Space id="badge_color" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Badge color="blue" text="blue" />
                            <Badge color="green" text="green" />
                            <Badge color="red" text="red" />
                            <Badge color="yellow" text="yellow" />
                            <Badge color="pink" text="pink" />
                            <Badge color="magenta" text="magenta" />
                            <Badge color="volcano" text="volcano" />
                            <Badge color="orange" text="orange" />
                            <Badge color="gold" text="gold" />
                            <Badge color="lime" text="lime" />
                            <Badge color="cyan" text="cyan" />
                            <Badge color="geekblue" text="geekblue" />
                            <Badge color="purple" text="purple" />
                            <Badge color="#2db7f5" text="#2db7f5" />
                            <Badge color="#f50" text="#f50" />
                        </Space>
                        <Divider align="left"><Text type="primary">多彩徽标</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            属性 <Text code>color</Text> 可以设置更多预设的状态点颜色，或者自定义颜色。
                        </Paragraph>
                        <DemoCode data={codes['badge_color']}/>
                    </Card>
                </Space>


                <Space id="badge_type" dir="v">
                    <Card bordered>
                        <Space dir="h" size={24}>
                            <Badge count={5} type="primary">
                                <a href="#" class="demo-badge"></a>
                            </Badge>
                            <Badge count={5} type="success">
                                <a href="#" class="demo-badge"></a>
                            </Badge>
                            <Badge count={5} type="normal">
                                <a href="#" class="demo-badge"></a>
                            </Badge>
                            <Badge count={5} type="info">
                                <a href="#" class="demo-badge"></a>
                            </Badge>
                            <Badge count={5} type="error">
                                <a href="#" class="demo-badge"></a>
                            </Badge>
                            <Badge count={5} type="warning">
                                <a href="#" class="demo-badge"></a>
                            </Badge>
                        </Space>
                        <Divider align="left"><Text type="primary">预设颜色</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            使用 <Text code>type</Text> 属性，可以设置不同的颜色。
                        </Paragraph>
                        <DemoCode data={codes['badge_type']}/>
                    </Card>
                </Space>


                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id='comp_props' dir="v">
                        <Title type="primary" heading={4}>Badge Props</Title>
                        <Table columns={propsColumns} data={propsData} border size='small' />
                    </Space>
                </Space>
            </Space>
        </div>
        
        <CompAnchor data={anchorData}/>
    </>;
}