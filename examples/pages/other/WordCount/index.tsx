import { Card, Divider, Input, Paragraph, Space, Table, Text, Title } from "@/components";
import { hljs, useDirective } from "../../common/hljs";
import { WordCount } from "@/components/WordCount";
import { createSignal } from "solid-js";
import { DemoCode } from "../../common/code";
import { propsColumns } from "../../common/columns";
import { CompAnchor } from "../../common/CompAnchor";
import { anchorData, codes, propsData } from "./config";
useDirective(hljs);

export default function WordCountPage () {
    const [value, setValue] = createSignal('');
    const [value2, setValue2] = createSignal('');
    const [value3, setValue3] = createSignal('');
    return <>
        <div class='sys-ctx-main-left' use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    WordCount 字数统计
                </Title>
                <Space id="wordcount_base" dir="v">
                    <Card bordered>
                        <Input type='textarea' trigger='input' value={[value, setValue]}/>
                        <WordCount total={10} value={value()}/>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                        基础用法。
                        </Paragraph>
                        <DemoCode data={codes['wordcount_base']}/>
                    </Card>
                </Space>

                <Space id="wordcount_custom" dir="v">
                    <Card bordered>
                        <Input type='textarea' trigger='input' value={[value2, setValue2]}/>
                        <WordCount total={10} value={value2()} overflow prefix={'已输入'} prefixOverflow={'已超出'} suffixOverflow={'个字'} suffix={'个字'}/>
                        <Divider align="left"><Text type="primary">自定义文案</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                        通过 prefix 、 prefixOverflow、 suffix、 suffixOverflow 自定义文案
                        </Paragraph>
                        <DemoCode data={codes['wordcount_custom']}/>
                    </Card>
                </Space>

                <Space id="wordcount_circle" dir="v">
                    <Card bordered>
                        <Input type='textarea' trigger='input' value={[value3, setValue3]}/>
                        <WordCount total={10} value={value3()} circle/>
                        <Divider align="left"><Text type="primary">圆形</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                        设置属性 circle 会渲染为一个圆环
                        </Paragraph>
                        <DemoCode data={codes['wordcount_circle']}/>
                    </Card>
                </Space>

                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id='comp_props' dir="v">
                        <Title type="primary" heading={4}>CountUp Props</Title>
                        <Table columns={propsColumns} data={propsData} border size='small' />
                    </Space>
                </Space>
            </Space>
        </div>
        <CompAnchor data={anchorData}/>
    </>
}