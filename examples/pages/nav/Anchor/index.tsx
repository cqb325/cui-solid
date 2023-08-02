import { Space } from "@/components/Layout";
import { Anchor } from "@/components/Anchor";
import { Card } from "@/components/Card";
import { BackTop } from "@/components/BackTop";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { Title } from "@/components/Typography/Title";

export default function () {
    return <>
        <div class='sys-ctx-main-left'>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Anchor 锚点
                </Title>
                <Space id="pagination_base" dir="v">
                    <div id="basic_usage">
                        <Card title={<a>基础用法</a>}>
                            <div style={{height: '600px'}} >
                            </div>
                        </Card>
                    </div>

                    <div id="static_position">
                        <Card title={<a>静态位置</a>}>
                            <div style={{height: '600px'}} >
                            </div>
                        </Card>
                    </div>

                    <div id="API">
                        <Card title={<a>API</a>}>
                            <div style={{height: '600px'}}>
                            </div>
                        </Card>
                    </div>

                    <div id="Anchor_props">
                        <Card title={<a>属性</a>}>
                            <div style={{height: '600px'}}>
                            </div>
                        </Card>
                    </div>
                    <div style={{position: 'fixed', top: '100px', right: '20px'}}>
                        <Anchor mode="history">
                            <Anchor.Link href="#basic_usage" title="Basic Usage" />
                            <Anchor.Link href="#static_position" title="Static Position" />
                            <Anchor.Link href="#API" title="API">
                                <Anchor.Link href="#Anchor_props" title="Anchor props" />
                                <Anchor.Link href="#Anchor_events" title="Anchor events" />
                                <Anchor.Link href="#AnchorLink_props" title="AnchorLink props" />
                            </Anchor.Link>
                        </Anchor>
                    </div>

                    <BackTop>
                        <Button icon={<Icon name='chevrons-up' size={20}/>} circle></Button>
                    </BackTop>
                </Space>
            </Space>
        </div>
        
        
    </>
}