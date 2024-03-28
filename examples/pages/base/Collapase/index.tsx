import { Collapase } from '@/components/inner/Collapase';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Space, View, VView } from '@/components/Layout';
import { createSignal } from 'solid-js';
import { Title } from '@/components/Typography/Title';
import { Divider } from '@/components/Divider';
import { Text } from '@/components/Typography/Text';
import { Paragraph } from '@/components/Typography/Paragraph';
import { Table } from '@/components/Table';

import { propsData, eventsData, anchorData, codes } from './config';
import { CompAnchor } from '../../common/CompAnchor';
import { eventsColumns, propsColumns } from '../../common/columns';

import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
useDirective(hljs);

function CollapaseDemo () {
    const [open, setOpen] = createSignal(true);
    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Collapase 折叠
                </Title>
                <Space id="collapse_base" dir="v">
                    <Card bordered>
                        <div style={{height: '150px'}}>
                            <Button onClick={() => {
                                setOpen(!open());
                            }} type="primary">Toggle</Button>
                            <div>
                                <Collapase open={open()}>
                                    <ul>
                                        <li>充分认识学习宣传贯彻党的二十大精神的重大意义。</li>
                                        <li>全面准确学习领会党的二十大精神。</li>
                                        <li>认真做好党的二十大精神的学习宣传。</li>
                                        <li>坚持知行合一，贯彻落实好党的二十大作出的重大决策部署。</li>
                                        <li>切实加强组织领导。</li>
                                    </ul>
                                </Collapase>
                            </div>
                        </div>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            控制折叠
                        </Paragraph>
                        <DemoCode data={codes['collapse_base']}/>
                    </Card>
                </Space>

                <div id="comp_api">
                    <Space dir="v" size={24}>
                        <Title type="primary" heading={3}>API</Title>
                        <Space id="comp_props" dir="v">
                            <Title type="primary" heading={4}>Collapase Props</Title>
                            <Table columns={propsColumns} data={propsData} border size="small" />
                        </Space>
                        <Space id="comp_events" dir="v">
                            <Title type="primary" heading={4}>Collapase Events</Title>
                            <Table columns={eventsColumns} data={eventsData} border size="small" />
                        </Space>
                    </Space>
                </div>
            </Space>
        </div>

        <CompAnchor data={anchorData}/>
    </>
}

export default CollapaseDemo;
