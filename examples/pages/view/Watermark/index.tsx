import { Card, Divider, Form, FormItem, Input, Paragraph, Slider, Space, Spinner, Text, Title, useForm } from "@/components";
import { hljs, useDirective } from "../../common/hljs";
import { Watermark } from "@/components/Watermark";
useDirective(hljs);
import logo from '/examples/assets/images/logo.svg';
import { createStore } from "solid-js/store";

export default function WatermarkPage () {
    interface FormData {
        content: string
        fontSize: number
        zIndex: number
        rotate: number
        gap1: number
        gap2: number
        offset1: number
        offset2: number
    }

    const form = useForm<FormData>({
        data: {
            content: 'CUI-Solid',
            fontSize: 16,
            zIndex: 9,
            rotate: -22,
            gap1: 100,
            gap2: 100,
            offset1: 0,
            offset2: 0,
        }
    })

    const [store, setStore] = createStore({
        content: form.content,
        zIndex: form.zIndex,
        fontSize: form.fontSize,
        rotate: form.rotate,
        gap: [form.gap1, form.gap2],
        offset: [form.offset1, form.offset2]
    });

    const onFormChange = (name: any, val: any) => {
        if (name === 'gap1') {
            setStore('gap', 0, val);
        }
        if (name === 'gap2') {
            setStore('gap', 1, val);
        }
        if (name === 'offset1') {
            setStore('offset', 0, val);
        }
        if (name === 'offset2') {
            setStore('offset', 1, val);
        }
        setStore(name, val);
    }
    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Watermark 水印
                </Title>
                <Space id="tree_base" dir="v">
                    <Card bordered>
                        <Watermark content={store.content} font={{fontSize: store.fontSize}} zIndex={store.zIndex} rotate={store.rotate} gap={store.gap} offset={store.offset}>
                            <div style={{width: '100%', height: '400px'}} />
                        </Watermark>
                        <div>
                            <Form form={form} onChange={onFormChange}>
                                <FormItem name="content" label="内容">
                                    <Input />
                                </FormItem>
                                <FormItem name="fontSize" label="FontSize">
                                    <Slider min={0} max={100}/>
                                </FormItem>
                                <FormItem name="zIndex" label="zIndex">
                                    <Slider min={0} max={100}/>
                                </FormItem>
                                <FormItem name="rotate" label="Rotate">
                                    <Slider min={-180} max={180}/>
                                </FormItem>
                                <Space>
                                    <FormItem name="gap1" label="Gap">
                                        <Spinner min={0} />
                                    </FormItem>
                                    <FormItem name="gap2">
                                        <Spinner min={0} />
                                    </FormItem>
                                </Space>
                                <Space>
                                    <FormItem name="offset1" label="Offset">
                                        <Spinner min={-10000} />
                                    </FormItem>
                                    <FormItem name="offset2">
                                        <Spinner min={-10000} />
                                    </FormItem>
                                </Space>
                            </Form>
                        </div>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            基础用法
                        </Paragraph>
                    </Card>
                </Space>
            </Space>
        </div>
    </>
}
