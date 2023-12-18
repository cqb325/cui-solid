import { Space, View } from "@/components/Layout";
import { Text } from '@/components/Typography/Text';
import { Icon } from "@/components/Icon";
import { CompAnchor } from "../../common/CompAnchor";
import { Title } from "@/components/Typography/Title";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Paragraph } from "@/components/Typography/Paragraph";
import { propsData, anchorData, titlePropsData, paragraphPropsData, eventsData, codes } from "./config";
import { Table } from "@/components/Table";
import { eventsColumns, propsColumns } from "../../common/columns";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
import { createSignal } from "solid-js";
import { RadioGroup } from "@/components/FormElements/RadioGroup";
useDirective(hljs);

function TextDemo () {
    const [size, setSize] = createSignal('');
    return <>
        <div class='sys-ctx-main-left' use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Typography 排版
                </Title>
                <Space id="typography_title" dir="v">
                    <Card bordered>
                        <Title style={{ margin: '8px 0' }}>h1. Typography Title</Title>
                        <Title heading={2} style={{ margin: '8px 0' }}>h2. Typography Title</Title>
                        <Title heading={3} style={{ margin: '8px 0' }}>h3. Typography Title</Title>
                        <Title heading={4} style={{ margin: '8px 0' }}>h4. Typography Title</Title>
                        <Title heading={5} style={{ margin: '8px 0' }}>h5. Typography Title</Title>
                        <Title heading={6} style={{ margin: '8px 0' }}>h6. Typography Title</Title>
                        <Divider align="left"><Text type="primary">标题</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            各个级别的标题
                        </Paragraph>
                        <DemoCode data={codes['typography_title']}/>
                    </Card>
                </Space>
                <Space id="typography_text" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Text>Text</Text>
                            <Text type='primary'>Primary</Text>
                            <Text type='secondary'>Secondary</Text>
                            <Text type='warning'>Warning</Text>
                            <Text type='error'>Error</Text>
                            <Text type='success'>Success</Text>
                            <Text type='success' disabled>Disabled</Text>
                            <Text mark disabled>Default Mark</Text>
                            <Text type='error' mark>Error Mark</Text>
                            <Text code>let i = 0;</Text>
                            <Text underline>Underline</Text>
                            <Text deleted>Deleted</Text>
                            <Text strong>Strong</Text>
                            <Text link='http://www.baidu.com'>链接</Text>
                            <Text icon={<Icon name='link'/>} strong underline link='http://www.baidu.com'>链接</Text>
                            <Text size="small">Small</Text>
                            <Text size={size()}>Normal</Text>
                            <Text size="large">Large</Text>
                            <RadioGroup stick value={[size, setSize]} data={[{label: 'Small', value: 'small'}, {label: 'Default', value: ''}, {label: 'Large', value: 'large'}]}
                                onChange={(v: string) => {
                                    setSize(v);
                                }}></RadioGroup>
                        </Space>
                        <Divider align="left"><Text type="primary">文本</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            内置不同样式的文本以及超链接文本
                        </Paragraph>
                        <DemoCode data={codes['typography_text']}/>
                    </Card>
                </Space>

                <Space id="typography_copy" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Paragraph copyable>
                                CMUI Web 组件库。
                            </Paragraph>
                            <Paragraph copyable copyText="自定义内容">
                                自定义拷贝内容。
                            </Paragraph>
                        </Space>
                        <Divider align="left"><Text type="primary">可拷贝</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            提供复制文本的能力
                        </Paragraph>
                        <DemoCode data={codes['typography_copy']}/>
                    </Card>
                </Space>

                <Space id="typography_spacing" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Title heading={5}>默认行距</Title>
                            <Paragraph>
                                Javascript 是一种由Netscape的LiveScript发展而来的原型化继承的面向对象的动态类型的区分大小写的客户端脚本语言，主要目的是为了解决服务器端语言，比如Perl，遗留的速度问题，为客户提供更流畅的浏览效果。当时服务端需要对数据进行验证，由于网络速度相当缓慢，只有28.8kbps，验证步骤浪费的时间太多。于是Netscape的浏览器Navigator加入了Javascript，提供了数据验证的基本功能。
                            </Paragraph>
                            <Title heading={5}>宽松行距</Title>
                            <Paragraph spacing='extended'>
                                Javascript 是一种由Netscape的LiveScript发展而来的原型化继承的面向对象的动态类型的区分大小写的客户端脚本语言，主要目的是为了解决服务器端语言，比如Perl，遗留的速度问题，为客户提供更流畅的浏览效果。当时服务端需要对数据进行验证，由于网络速度相当缓慢，只有28.8kbps，验证步骤浪费的时间太多。于是Netscape的浏览器Navigator加入了Javascript，提供了数据验证的基本功能。
                            </Paragraph>
                        </Space>
                        <Divider align="left"><Text type="primary">行间距</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            可通过设置 <Text mark>spacing</Text> 设置段落行距,不设置为默认行距 extended为宽松行距
                        </Paragraph>
                        <DemoCode data={codes['typography_spacing']}/>
                    </Card>
                </Space>

                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id='comp_props' dir="v">
                        <Title type="primary" heading={4}>Text Props</Title>
                        <Table columns={propsColumns} data={propsData} border size='small' />
                    </Space>
                    <Space id='title_props' dir="v">
                        <Title type="primary" heading={4}>Title Props</Title>
                        <Table columns={propsColumns} data={titlePropsData} border size='small' />
                    </Space>
                    <Space id='paragraph_props' dir="v">
                        <Title type="primary" heading={4}>Paragraph Props</Title>
                        <Table columns={propsColumns} data={paragraphPropsData} border size='small' />
                    </Space>

                    <Space id='paragraph_events' dir="v">
                        <Title type="primary" heading={4}>Paragraph Events</Title>
                        <Table columns={eventsColumns} data={eventsData} border size='small' />
                    </Space>
                </Space>
            </Space>
        </div>
        <CompAnchor data={anchorData}/>
    </>
}

export default TextDemo;