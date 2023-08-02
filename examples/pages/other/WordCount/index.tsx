import { Card, Input, Space, Title } from "@/components";
import { hljs, useDirective } from "../../common/hljs";
import { WordCount } from "@/components/WordCount";
import { createSignal } from "solid-js";
useDirective(hljs);

export default function WordCountPage () {
    const [value, setValue] = createSignal('');
    return <>
        <div class='sys-ctx-main-left' use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    WordCount 字数统计
                </Title>
                <Space id="countup_base" dir="v">
                    <Card bordered>
                        <Input type='textarea' trigger='input' value={[value, setValue]}/>
                        <Space dir="h">
                            <WordCount total={10} value={value()}/>
                            <WordCount total={10} value={value()} overflow prefix={'已输入'} prefixOverflow={'已超出'} suffixOverflow={'个字'} suffix={'个字'}/>
                            <WordCount total={10} value={value()} circle/>
                        </Space>
                    </Card>
                </Space>
            </Space>
        </div>
    </>
}