import { Space } from "@/components/Layout";
import { Image } from "@/components/Image";
import { Row } from "@/components/Row";
import { Col } from "@/components/Col";
import { Button } from "@/components/Button";
import type { Accessor} from "solid-js";
import { For, createSignal } from "solid-js";
import { Spin } from "@/components/Spin";
import { Icon } from "@/components/Icon";

import './style.less'
import { Title } from "@/components/Typography/Title";

import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import img6 from './6.jpg';
import img7 from './7.jpg';
import img8 from './8.jpg';
import img9 from './9.jpg';
import img10 from './10.jpg';
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Text } from "@/components/Typography/Text";
import { ImagePreview } from "@/components/ImagePreview";
import { Table } from "@/components/Table";
import { eventsColumns, propsColumns } from "../../common/columns";
import { anchorData, codes, eventsData, previewData, previewEventsData, propsData } from "./config";
import { CompAnchor } from "../../common/CompAnchor";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
useDirective(hljs);

export default function ImagePage () {
    const [src1, setSrc1] = createSignal('');
    const [src2, setSrc2] = createSignal('');
    const [visible, setVisible] = createSignal(false);
    const verticalUrlList = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
    ]
    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Image 图片
                </Title>
                <Space id="image_base" dir="v">
                    <Card bordered>
                        <Row gutter={20} style={{'text-align': 'center'}}>
                            <Col grid={1/5}>
                                <Image width={100} height={100} fit="contain" src={img1}/>
                                <div>contain</div>
                            </Col>
                            <Col grid={1/5}>
                                <Image width={100} height={100} fit="cover" src={img1}/>
                                <div>cover</div>
                            </Col>
                            <Col grid={1/5}>
                                <Image width={100} height={100} fit="fill" src={img1}/>
                                <div>fill</div>
                            </Col>
                            <Col grid={1/5}>
                                <Image width={100} height={100} fit="none" src={img1}/>
                                <div>none</div>
                            </Col>
                            <Col grid={1/5}>
                                <Image width={100} height={100} fit="scale-down" src={img1}/>
                                <div>scale-down</div>
                            </Col>
                        </Row>
                        <Divider align="left"><Text type="primary">基本用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            可通过 fit 来设置图片在容器的样式，同原生 <Text link="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit">object-fit</Text>。
                        </Paragraph>
                        <DemoCode data={codes['image_base']}/>
                    </Card>
                </Space>


                <Space id="image_placeholder" dir="v">
                    <Card bordered>
                        <Space dir="h">
                            <Row style={{'text-align': 'center'}} gutter={20}>
                                <Col grid={0.5}>
                                    <Image width={200} height={100} fit="cover" src={src1()}/>
                                    <div>默认</div>
                                </Col>
                                <Col grid={0.5}>
                                    <Image width={200} height={100} fit="cover" src={src1()} placeholder={<Spin />}/>
                                    <div>自定义</div>
                                </Col>
                            </Row>
                            <Button type="primary" onClick={() => {
                                setSrc1(img10)
                            }}>加载</Button>
                        </Space>
                        <Divider align="left"><Text type="primary">占位</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            通过<Text code>placeholder</Text>属性可以自定义占位样式，可通过console的Network修改网络速率进行测试
                        </Paragraph>
                        <DemoCode data={codes['image_placeholder']}/>
                    </Card>
                </Space>


                <Space id="image_error" dir="v">
                    <Card bordered>
                        <Space dir="h">
                            <Row style={{'text-align': 'center'}} gutter={20}>
                                <Col grid={0.5}>
                                    <Image width={200} height={100} fit="cover" src={src2()}/>
                                    <div>默认</div>
                                </Col>
                                <Col grid={0.5}>
                                    <Image width={200} height={100} fit="cover" src={src2()} failInfo={<Icon name="image"/>}/>
                                    <div>自定义</div>
                                </Col>
                            </Row>
                            <Button type="primary" onClick={() => {
                                setSrc2(img1)
                            }}>加载</Button>
                        </Space>
                        <Divider align="left"><Text type="primary">失败</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            通过<Text code>failInfo</Text>属性可以自定义图片加载失败样式
                        </Paragraph>
                        <DemoCode data={codes['image_error']}/>
                    </Card>
                </Space>


                <Space id="image_lazy" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <div class="demo-image-lazy-vertical">
                                <For each={verticalUrlList}>
                                    {(url: string) => {
                                        return <Image src={url} lazy scrollContainer=".demo-image-lazy-vertical"/>
                                    }}
                                </For>
                            </div>
                        </Space>
                        <Divider align="left"><Text type="primary">懒加载</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            设置属性 <Text code>lazy</Text> 可以开启图片懒加载功能，当图片滚动到可视范围内才会加载。
                        </Paragraph>
                        <DemoCode data={codes['image_lazy']}/>
                    </Card>
                </Space>

                <Space id="image_preview" dir="v">
                    <Card bordered>
                        <Space dir="h" wrap>
                            <For each={verticalUrlList}>
                                {(url: string, index: Accessor<number>) => {
                                    return <Image src={url} width={120} maskClosable={false} height={80} fit="contain" preview previewIndex={index()} previewList={verticalUrlList}/>
                                }}
                            </For>
                        </Space>
                        <Divider align="left"><Text type="primary">预览</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            设置属性 <Text code>preview</Text> 可以开启图片预览模式，通过属性 <Text code>previewList</Text> 来设置图片列表，<Text code>previewIndex</Text> 属性设置打开预览时显示图片的索引。<br/>
                            预览时，可以使用 <kbd>←</kbd>、<kbd>→</kbd> 切换图片，<kbd>↑</kbd>、<kbd>↓</kbd> 缩放图片，<kbd>Space</kbd> 显示 1:1 图片，<kbd>ESC</kbd> 退出预览。
                        </Paragraph>
                        <DemoCode data={codes['image_preview']}/>
                    </Card>
                </Space>


                <Space id="image_image_preview" dir="v">
                    <Card bordered>
                        <Space dir="h" wrap>
                            <Button type="primary" onClick={() => {
                                setVisible(true);
                            }}>打开</Button>
                            <ImagePreview visible={[visible, setVisible]} previewList={
                                [
                                    img1,
                                    img2,
                                    img3,
                                    img4,
                                    img5,
                                    img6,
                                    img7,
                                    img8,
                                    img9,
                                    img10,
                                ]
                            } />
                        </Space>
                        <Divider align="left"><Text type="primary">单独使用图片预览</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            图片预览组件 ImagePreview 也可以单独使用。
                        </Paragraph>
                        <DemoCode data={codes['image_image_preview']}/>
                    </Card>
                </Space>


                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>Image Props</Title>
                        <Table columns={propsColumns} data={propsData} border size="small" />
                    </Space>

                    <Space id="comp_previewprops" dir="v">
                        <Title type="primary" heading={4}>ImagePreview Props</Title>
                        <Table columns={propsColumns} data={previewData} border size="small" />
                    </Space>

                    <Space id="comp_events" dir="v">
                        <Title type="primary" heading={4}>Events</Title>
                        <Table columns={eventsColumns} data={eventsData} border size="small" />
                    </Space>

                    <Space id="comp_previewevents" dir="v">
                        <Title type="primary" heading={4}>ImagePreview Events</Title>
                        <Table columns={eventsColumns} data={previewEventsData} border size="small" />
                    </Space>
                </Space>
            </Space>
        </div>

        <CompAnchor data={anchorData}/>
    </>
}
