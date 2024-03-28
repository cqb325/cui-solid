import Pagination from "@/components/Pagination"
import { Space } from "@/components/Layout"
import { createStore } from "solid-js/store";
import { Title } from "@/components/Typography/Title";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Text } from "@/components/Typography/Text";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Table } from "@/components/Table";
import { anchorData, codes, eventsData, propsData } from "./config";
import { CompAnchor } from "../../common/CompAnchor";
import { eventsColumns, propsColumns } from "../../common/columns";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
useDirective(hljs);

export default function PaginationPage () {
    const [page1, setPage1] = createStore({
        current: 1,
        pageSize: 10
    })
    const [page2, setPage2] = createStore({
        current: 1,
        pageSize: 10
    })
    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Pagination 分页
                </Title>
                <Space id="pagination_base" dir="v">
                    <Card bordered>
                        <Pagination current={page1.current} pageSize={page1.pageSize} total={1000} onChange={(page: number) => {
                            setPage1('current', page);
                        }} onChangePageSize={(size: number) => {
                            setPage1('pageSize', size);
                        }}/>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            基础用法，当前页 <Text code>current</Text> 为控制属性
                        </Paragraph>
                        <DemoCode data={codes['pagination_base']}/>
                    </Card>
                </Space>


                <Space id="pagination_small" dir="v">
                    <Card bordered>
                        <Pagination size="small" current={page1.current} pageSize={page1.pageSize} total={1000} onChange={(page: number) => {
                            setPage1('current', page);
                        }} onChangePageSize={(size: number) => {
                            setPage1('pageSize', size);
                        }}/>
                        <Divider align="left"><Text type="primary">尺寸</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            小尺寸分页组件， 设置 <Text code>size</Text> 为 <Text code>small</Text>
                        </Paragraph>
                        <DemoCode data={codes['pagination_small']}/>
                    </Card>
                </Space>

                <Space id="pagination_mini" dir="v">
                    <Card bordered>
                        <Pagination mini size="small" current={page1.current} pageSize={page1.pageSize} total={1000} onChange={(page: number) => {
                            setPage1('current', page);
                        }} onChangePageSize={(size: number) => {
                            setPage1('pageSize', size);
                        }}/>
                        <Divider align="left"><Text type="primary">迷你型</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            设置 <Text code>mini</Text> 属性可以设置迷你型分页
                        </Paragraph>
                        <DemoCode data={codes['pagination_mini']}/>
                    </Card>
                </Space>


                <Space id="pagination_hide" dir="v">
                    <Card bordered>
                        <Pagination current={page1.current} showTotal={false} showPage={false} showJumper={false} pageSize={page1.pageSize} total={1000} onChange={(page: number) => {
                            setPage1('current', page);
                        }} onChangePageSize={(size: number) => {
                            setPage1('pageSize', size);
                        }}/>
                        <Divider align="left"><Text type="primary">数字分页</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            总数据量可通过设置 <Text code>showTotal</Text> 为false <br/>
                            页数可通过设置 <Text code>showPage</Text> 为false <br/>
                            跳转可通过设置 <Text code>showJumper</Text> 为false
                        </Paragraph>
                        <DemoCode data={codes['pagination_hide']}/>
                    </Card>
                </Space>


                <Space id="pagination_min" dir="v">
                    <Card bordered>
                        <Pagination current={page2.current} showTotal={false} showPage={false} showJumper={false}
                        pageSize={page2.pageSize} total={1000} showNums={false} onChange={(page: number) => {
                            setPage2('current', page);
                        }}/>
                        <Divider align="left"><Text type="primary">最小化分页</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            总数据量可通过设置 <Text code>showTotal</Text> 为false <br/>
                            页数可通过设置 <Text code>showPage</Text> 为false <br/>
                            跳转可通过设置 <Text code>showJumper</Text> 为false <br/>
                            数字可通过设置 <Text code>showNums</Text> 为false
                        </Paragraph>
                        <DemoCode data={codes['pagination_min']}/>
                    </Card>
                </Space>


                <Space id="pagination_circle" dir="v">
                    <Card bordered>
                        <Pagination current={page2.current} shape="circle" pageSize={page2.pageSize} total={1000} onChange={(page) => {
                            setPage2('current', page);
                        }} onChangePageSize={(size: number) => {
                            setPage2('pageSize', size);
                        }}/>
                        <Divider align="left"><Text type="primary">圆形</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            设置 <Text code>shape='circle'</Text> 可渲染圆形按钮的分页
                        </Paragraph>
                        <DemoCode data={codes['pagination_circle']}/>
                    </Card>
                </Space>


                <Space id="pagination_pages" dir="v">
                    <Card bordered>
                        <Pagination current={page2.current} pages={[
                            {value: 10, label: '10条/页'},
                            {value: 50, label: '50条/页'},
                            {value: 100, label: '100条/页'}
                        ]} pageSize={page2.pageSize} total={1000} onChange={(page) => {
                            setPage2('current', page);
                        }} onChangePageSize={(size: number) => {
                            setPage2('pageSize', size);
                        }}/>
                        <Divider align="left"><Text type="primary">每页数</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            可通过 <Text code>pages</Text> 属性自定义 每页的数据量
                        </Paragraph>
                        <DemoCode data={codes['pagination_pages']}/>
                    </Card>
                </Space>


                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>Pagination Props</Title>
                        <Table columns={propsColumns} data={propsData} border size="small" />
                    </Space>

                    <Space id="comp_events" dir="v">
                        <Title type="primary" heading={4}>Pagination Events</Title>
                        <Table columns={eventsColumns} data={eventsData} border size="small" />
                    </Space>
                </Space>
            </Space>
        </div>

        <CompAnchor data={anchorData}/>
    </>
}
