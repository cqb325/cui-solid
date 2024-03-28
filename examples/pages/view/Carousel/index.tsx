import { Carousel } from "@/components/Carousel";
import { Space } from "@/components/Layout";
import { Image } from "@/components/Image";
import './style.less'

import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import { createSignal } from "solid-js";
import { Button } from "@/components/Button";
import { Title } from "@/components/Typography/Title";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Text } from "@/components/Typography/Text";
import { Row } from "@/components/Row";
import { Col } from "@/components/Col";
import { Table } from "@/components/Table";
import { eventsColumns, propsColumns } from "../../common/columns";
import { anchorData, codes, eventsData, propsData } from "./config";
import { CompAnchor } from "../../common/CompAnchor";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
useDirective(hljs);


export default function CarouselPage (props: any) {
    const [index, setIndex] = createSignal(0);
    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Carousel 跑马灯
                </Title>
                <Space id="carousel_base" dir="v">
                    <Card bordered>
                        <Carousel>
                            <Carousel.Item>
                                <div class="demo-carousel">
                                    <Image src={img1} fit="cover"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="demo-carousel">
                                    <Image src={img2} fit="cover"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="demo-carousel">
                                    <Image src={img3} fit="cover"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="demo-carousel">
                                    <Image src={img4} fit="cover"/>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                        <Divider align="left"><Text type="primary">基本用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            基本用法
                        </Paragraph>
                        <DemoCode data={codes['carousel_base']}/>
                    </Card>
                </Space>


                <Space id="carousel_autoplay" dir="v">
                    <Card bordered>
                        <Carousel autoPlay>
                            <Carousel.Item>
                                <div class="demo-carousel">
                                    <Image src={img1} fit="cover"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="demo-carousel">
                                    <Image src={img2} fit="cover"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="demo-carousel">
                                    <Image src={img3} fit="cover"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="demo-carousel">
                                    <Image src={img4} fit="cover"/>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                        <Divider align="left"><Text type="primary">自动播放</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            添加<Text code>autoPlay</Text> 可以自动播放
                        </Paragraph>
                        <DemoCode data={codes['carousel_autoplay']}/>
                    </Card>
                </Space>



                <Space id="carousel_dotAlign" dir="v">
                    <Card bordered>
                        <Row gutter={20}>
                            <Col grid={0.5}>
                                <Carousel dotAlign="left">
                                    <Carousel.Item>
                                        <div class="demo-carousel">
                                            <Image src={img1} fit="cover"/>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div class="demo-carousel">
                                            <Image src={img2} fit="cover"/>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div class="demo-carousel">
                                            <Image src={img3} fit="cover"/>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div class="demo-carousel">
                                            <Image src={img4} fit="cover"/>
                                        </div>
                                    </Carousel.Item>
                                </Carousel>
                            </Col>
                            <Col grid={0.5}>
                                <Carousel dotAlign="right">
                                    <Carousel.Item>
                                        <div class="demo-carousel">
                                            <Image src={img1} fit="cover"/>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div class="demo-carousel">
                                            <Image src={img2} fit="cover"/>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div class="demo-carousel">
                                            <Image src={img3} fit="cover"/>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div class="demo-carousel">
                                            <Image src={img4} fit="cover"/>
                                        </div>
                                    </Carousel.Item>
                                </Carousel>
                            </Col>
                        </Row>
                        <Divider align="left"><Text type="primary">dot位置</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            <Text code>dotAlign</Text> 支持left和right  默认center
                        </Paragraph>
                        <DemoCode data={codes['carousel_dotAlign']}/>
                    </Card>
                </Space>


                <Space id="carousel_dotstyle" dir="v">
                    <Card bordered>
                        <Carousel dotType="line">
                            <Carousel.Item>
                                <div class="demo-carousel">
                                    <Image src={img1} fit="cover"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="demo-carousel">
                                    <Image src={img2} fit="cover"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="demo-carousel">
                                    <Image src={img3} fit="cover"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="demo-carousel">
                                    <Image src={img4} fit="cover"/>
                                </div>
                            </Carousel.Item>
                        </Carousel>

                        <Carousel dotType="columnar">
                            <Carousel.Item>
                                <div class="demo-carousel">
                                    <Image src={img1} fit="cover"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="demo-carousel">
                                    <Image src={img2} fit="cover"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="demo-carousel">
                                    <Image src={img3} fit="cover"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="demo-carousel">
                                    <Image src={img4} fit="cover"/>
                                </div>
                            </Carousel.Item>
                        </Carousel>

                        <Divider align="left"><Text type="primary">dot样式</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            <Text code>dotType</Text> 支持 line 和 columnar  默认圆形
                        </Paragraph>
                        <DemoCode data={codes['carousel_dotstyle']}/>
                    </Card>
                </Space>

                <Space id="carousel_control" dir="v">
                    <Card bordered>
                        <Space id="image_base" dir="v">
                            <Carousel dotType="line" activeIndex={[index, setIndex]}>
                                <Carousel.Item>
                                    <div class="demo-carousel">
                                        <Image src={img1} fit="cover"/>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div class="demo-carousel">
                                        <Image src={img2} fit="cover"/>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div class="demo-carousel">
                                        <Image src={img3} fit="cover"/>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div class="demo-carousel">
                                        <Image src={img4} fit="cover"/>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                            <div>
                                <Button type="primary" onClick={() => {
                                    setIndex((index() + 1) % 4)
                                }}>Next</Button>
                            </div>
                        </Space>
                        <Divider align="left"><Text type="primary">可控</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            <Text code>activeIndex</Text> 属性进行控制显示的索引
                        </Paragraph>
                        <DemoCode data={codes['carousel_control']}/>
                    </Card>
                </Space>


                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>Carousel Props</Title>
                        <Table columns={propsColumns} data={propsData} border size="small" />
                    </Space>


                    <Space id="comp_events" dir="v">
                        <Title type="primary" heading={4}>Events</Title>
                        <Table columns={eventsColumns} data={eventsData} border size="small" />
                    </Space>
                </Space>
            </Space>
        </div>

        <CompAnchor data={anchorData}/>
    </>
}
