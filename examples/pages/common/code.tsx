import { createSignal } from "solid-js";
import { Button } from "@/components/Button";
import { Space } from "@/components/Layout";
import { Tooltip } from "@/components/Tooltip";
import useCopy from "@/components/utils/useCopy";
import { message } from "@/components/Message";
import { FeatherCode, FeatherCopy } from "cui-solid-icons/feather";

export function DemoCode (props: any) {
    const [open, setOpen] = createSignal(false);
    const classList = () => ({
        'cm-demo-code-wrap': true,
        'cm-demo-code-wrap-open': open(),
    })

    const onCopy = async () => {
        const ret = await useCopy(props.data);
        if (ret) {
            message.success({
                content: '复制成功!',
                duration: 2
            });
        }
    }
    return <Space dir="v" class="cm-demo-code">
        <Space dir="h" justify="end" size={20}>
            <Tooltip content="拷贝" align="top">
                <FeatherCopy size={16} onClick={onCopy}/>
            </Tooltip>
            <Tooltip content={open() ? '收起代码' : '显示代码'} align="top">
                <FeatherCode size={16} onClick={() => setOpen(!open())}/>
            </Tooltip>
        </Space>
        <Space classList={classList()} dir="v" justify="center">
            <pre>
                <code class="language-js">{props.data}</code>
            </pre>
            <Button theme="dashed" onClick={() => setOpen(false)}>收 起 代 码</Button>
        </Space>
    </Space>
}
