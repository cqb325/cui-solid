import type { ColumnProps} from "@/components/Table";
import { Table } from "@/components/Table"
import { Button } from "@/components/Button";
import { Space } from "@/components/Layout";
import data3 from "./data3";
import data4 from "./data4";
import { createEffect, createSignal } from "solid-js";
import { Title } from "@/components/Typography/Title";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Text } from "@/components/Typography/Text";
import { eventsColumns, propsColumns } from "../../common/columns";
import { anchorData, codes, columnData, eventsData, propsData } from "./config";
import { CompAnchor } from "../../common/CompAnchor";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
import { Exception } from "@/components";
useDirective(hljs);

export default function TablePage () {
    const columns = [
        {type: 'index', title: '序号', width: '80px'},
        {name: 'name', title: '名称'},
        {name: 'x', title: 'X'},
        {name: 'y', title: 'Y'},
        {name: 'date', title: '日期', width: '200px'},
    ];
    const fixedHeadercolumns = [
        {type: 'index', title: '序号', width: '80px'},
        {name: 'name', title: '名称', minWidth: 100, maxWidth: 150, tooltip: true, tooltipStyle: {width: '200px'}, tooltipAlign: 'bottom', tooltipTheme: 'light'},
        {name: 'x', title: 'X'},
        {name: 'y', title: 'Y'},
        {name: 'date', title: '日期', width: '200px'},
    ];
    const columnsx = [
        {type: 'index', title: '序号', width: '80px'},
        {name: 'name', title: '名称', minWidth: 100, maxWidth: 150, tooltip: true, tooltipStyle: {width: '200px'}, tooltipAlign: 'bottom', tooltipTheme: 'light'},
        {name: 'x', title: 'X'},
        {name: 'y', title: 'Y'},
        {name: 'date', title: '日期', width: '200px'},
    ];


    const fixedColumns = [
        {type: 'index', title: '序号', width: '80px', fixed: 'left', resize: true},
        {name: 'name', title: '名称', width: '150px', fixed: 'left', resize: true},
        {name: 'x', title: 'X', width: '300px'},
        {name: 'y', title: 'Y', width: '300px'},
        {name: 'date', title: '日期', width: '200px', fixed: 'right'},
    ];

    const columns2 = [
        {type: 'checkbox', width: '55px' },
        {name: 'name', title: '名称', width: '150px'},
        {name: 'x', title: 'X', width: '300px'},
        {name: 'y', title: 'Y', width: '300px'},
        {name: 'date', title: '日期', width: '200px'},
        {name: '_op', title: '操作', width: '150px', render: (v: any, column: any, row: any) => {
            return <Space>
                <Button theme="borderless" size="small">添加</Button>
                <Button theme="borderless" size="small">修改</Button>
            </Space>
        }}
    ];

    const columns3 = [
        {name: 'name', title: '名称', width: '150px', sort: true},
        {name: 'x', title: 'X', width: '300px', sort: true},
        {name: 'y', title: 'Y', width: '300px'},
        {name: 'date', title: '日期', width: '200px'},
        {name: '_op', title: '操作', width: '150px', render: (v: any, column: any, row: any) => {
            return <Space>
                <Button theme="borderless" size="small">添加</Button>
                <Button theme="borderless" size="small">修改</Button>
            </Space>
        }}
    ];


    const columns6 = [
        {name: 'name', title: '名称', width: '150px', resize: true, maxWidth: 200, minWidth: 100},
        {name: 'x', title: 'X', width: '300px', resize: true},
        {name: 'y', title: 'Y', width: '300px', resize: true},
        {name: 'date', title: '日期', width: '200px'},
        {name: '_op', title: '操作', width: '150px', render: (v: any, column: any, row: any) => {
            return <Space>
                <Button theme="borderless" size="small">添加</Button>
                <Button theme="borderless" size="small">修改</Button>
            </Space>
        }}
    ];

    const columns4 = [
        {
            title: 'Name',
            tree: true,
            name: 'name',
            width: '150px',
        },
        {
            title: 'Age',
            name: 'age',
            width: '100px',
        },
        {
            title: 'Address',
            name: 'address',
            width: '300px',
        },
        {
            title: 'Job',
            name: 'job',
            width: '200px',
        },
        {
            title: 'Book',
            name: 'book',
            width: '250px',
        }
    ]


    const columns7 = [
        {
            type: 'expand',
            width: '50px',
            render: (row: any) => {
                return <div>{row.name}</div>
            }
        },
        {
            title: 'Name',
            name: 'name',
            width: '100px',
            resize: true,
        },
        {
            title: 'Age',
            name: 'age',
            width: '100px',
            resize: true,
        },
        {
            title: 'Address',
            name: 'address',
            width: '300px',
        },
        {
            title: 'Job',
            name: 'job',
            width: '200px',
        },
        {
            title: 'Book',
            name: 'book',
            width: '250px',
        }
    ]

    const columns5 = [
        {
            title: 'Name',
            name: 'name',
            width: '100px',
        },
        {
            title: 'Age',
            name: 'age',
            width: '100px',
        },
        {
            title: 'Address',
            name: 'address',
            width: '300px',
        }
    ]

    const treeColumns = [
        {
            title: 'Name',
            name: 'name',
            tree: true,
            width: '100px',
        },
        {
            title: 'Age',
            name: 'age',
            width: '100px',
        },
        {
            title: 'Address',
            name: 'address',
            width: '300px',
        }
    ]

    const columns8 = [
        {type: 'checkbox', width: '55px' },
        {name: 'name', title: '名称', width: '150px'},
        {name: 'x', title: 'X', width: '300px'},
        {name: 'y', title: 'Y', width: '300px'},
        {name: 'date', title: '日期', width: '200px'},
        {name: '_op', title: '操作', fixed: 'right', width: '150px', render: (v: any, column: any, row: any) => {
            return <Space>
                <Button theme="borderless" size="small">添加</Button>
                <Button theme="borderless" size="small">修改</Button>
            </Space>
        }}
    ];

    const data: any[] = [];
    for (let i = 0; i < 5; i++) {
        data.push({
            id: i,
            name: 'name_name_name_name_name_' + i,
            x: Math.random() + 100,
            y: Math.random() + 30,
            _disabled: i % 3 === 0,
            date: new Date().toLocaleDateString()
        });
    }
    const data21: any[] = [];
    for (let i = 0; i < 5; i++) {
        data21.push({
            id: 5 + i,
            name: 'name_' + i,
            x: Math.random() + 100,
            y: Math.random() + 30,
            _disabled: i % 3 === 0,
            date: new Date().toLocaleDateString()
        });
    }

    const [d, setD] = createSignal(data);

    const largedata = [];
    for (let i = 0; i < 1000; i++) {
        largedata.push({
            id: i,
            name: 'name_' + i,
            x: Math.random() + 100,
            y: Math.random() + 30,
            _disabled: i % 3 === 0,
            date: new Date().toLocaleDateString()
        });
    }

    const data2 = JSON.parse(JSON.stringify(data));

    let table: any;
    const [loading, setLoading] = createSignal(false);
    const [data5, setData5] = createSignal(data4);
    type KeyType = string | number;
    const [selectedRowKeys, setSelectedRowKeys] = createSignal<KeyType[]>([]);

    createEffect(() => {
        console.log(selectedRowKeys());
    })


    const mergeColumns = [
        {name: 'name', title: '姓名', width: 90},
        {name: 'subject', title: '科目', children: [
            {name: 'mainSubject', title: '主课', children: [
                {name: 'chinese', title: '语文', width: 200, resize: true, sort: true},
                {name: 'math', title: '数学', width: 200, minWidth: 100, resize: true, sort: true},
                {name: 'english', title: '英语', minWidth: 200}
            ]},
            {name: 'minorSubject', title: '副课', children: [
                {name: 'physics', title: '物理', minWidth: 200},
                {name: 'chemistry', title: '化学', minWidth: 200}
            ]},
            {name: 'tiyu', title: '体育', minWidth: 200}
        ]},
        {name: 'date', title: '日期', width: '200px'},
    ];

    const mergeData = [
        {name: '张三', chinese: 90, math: 80, english: 70, physics: 60, chemistry: 50, tiyu: 20, date: '2020-01-01'},
        {name: '李四', chinese: 80, math: 90, english: 70, physics: 60, chemistry: 50, tiyu: 20, date: '2020-01-02'},
        {name: '王五', chinese: 70, math: 80, english: 90, physics: 60, chemistry: 50, tiyu: 20, date: '2020-01-03'},
        {name: '赵六', chinese: 90, math: 80, english: 70, physics: 60, chemistry: 50, tiyu: 20, date: '2020-01-01'},
        {name: '赵六', chinese: 90, math: 80, english: 70, physics: 60, chemistry: 50, tiyu: 20, date: '2020-01-01'},
        {name: '赵六', chinese: 90, math: 80, english: 70, physics: 60, chemistry: 50, tiyu: 20, date: '2020-01-01'},
    ]


    const typeColumns = [
        {type: 'index', title: '序号', width: 90},
        {name: 'name', title: '姓名', width: 90},
        {type: 'enum', enum: {0: '禁用', 1: '启用'}, name: 'status', title: '状态', width: 90},
        {type: 'date', name: 'date', title: '日期', width: '200px'},
        {type: 'datetime',name: 'datetime', title: '时间', width: '200px'},
    ];

    const typeData = [
        {name: '张三', status: 0, date: new Date('2020-01-01'), datetime: '2020-01-01 12:00:00'},
        {name: '李四', status: 1, date: '2020-01-02', datetime: '2020-01-02 12:30:00'},
        {name: '王五', status: 0, date: '2020-01-03 00:00:00', datetime: '2020-01-03 13:00:00'},
    ]

    return <>
        <div class="sys-ctx-main-left" style={{width: 0}} use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Table 表格
                </Title>
                <Space id="table_base" dir="v">
                    <Card bordered>
                        <Table columns={columnsx} data={data}/>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        基础用法， columns中type支持 index 和 checkbox
                        </Paragraph>
                        <DemoCode data={codes['table_base']}/>
                    </Card>
                </Space>


                <Space id="table_border" dir="v">
                    <Card bordered>
                        <Table columns={columns} data={data} border/>
                        <Divider align="left"><Text type="primary">边框</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        添加 border 支持边框
                        </Paragraph>
                        <DemoCode data={codes['table_border']}/>
                    </Card>
                </Space>

                <Space id="table_stripe" dir="v">
                    <Card bordered>
                        <Table columns={columns} data={data} border stripe/>
                        <Divider align="left"><Text type="primary">斑马纹</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        添加 stripe 支持斑马纹
                        </Paragraph>
                        <DemoCode data={codes['table_stripe']}/>
                    </Card>
                </Space>


                <Space id="table_fixedHeader" dir="v">
                    <Card bordered>
                        <Table columns={fixedHeadercolumns} data={data} border stripe height={200}/>
                        <Divider align="left"><Text type="primary">固定表头</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        通过设置属性 height 给表格指定高度后，会自动固定表头。
                        </Paragraph>
                        <DemoCode data={codes['table_fixedHeader']}/>
                    </Card>
                </Space>


                <Space id="table_fixedCol" dir="v">
                    <Card bordered>
                        <div style={{width: '800px'}}>
                            <Table columns={fixedColumns} data={data} border stripe height={200}/>
                        </div>
                        <Divider align="left"><Text type="primary">固定列</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        通过给数据 columns 的项设置 fixed 为 left 或 right，可以左右固定需要的列。
                        </Paragraph>
                        <DemoCode data={codes['table_fixedCol']}/>
                    </Card>
                </Space>


                <Space id="table_highlight" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Table columns={columns} data={data2} border highlight ref={table}/>
                            <div>
                                <Button type="primary" onClick={() => {
                                    table.clearSelect();
                                }}>清除高亮</Button>
                            </div>
                        </Space>
                        <Divider align="left"><Text type="primary">行高亮</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        添加 highlight 选择一行的时候可以高亮显示, 可通过引用的clearSelect方法进行清除
                        </Paragraph>
                        <DemoCode data={codes['table_highlight']}/>
                    </Card>
                </Space>


                <Space id="table_size" dir="v">
                    <Card bordered>
                        <Table columns={columns} data={data} size="small" border />
                        <Divider align="left"><Text type="primary">小尺寸</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        size 支持small
                        </Paragraph>
                        <DemoCode data={codes['table_size']}/>
                    </Card>
                </Space>


                <Space id="table_loading" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Table columns={columns} data={data} size="small" border loading={loading()}/>
                            <div>
                                <Button type="primary" onClick={() => {
                                    setLoading(!loading());
                                }}>加载/完成</Button>
                            </div>
                        </Space>
                        <Divider align="left"><Text type="primary">加载中</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        loading 属性可以在table上面覆盖一层加载的遮罩
                        </Paragraph>
                        <DemoCode data={codes['table_loading']}/>
                    </Card>
                </Space>


                <Space id="table_span" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Table columns={columns} data={data} border spanMethod={(row: any, col: ColumnProps, rowIndex: number, columnIndex: number) => {
                                if (rowIndex === 0 && columnIndex === 0) {
                                    return [1, 2];
                                } else if (rowIndex === 0 && columnIndex === 1) {
                                    return [0, 0];
                                }
                                if (rowIndex === 2 && columnIndex === 0) {
                                    return [2, 1];
                                } else if (rowIndex === 3 && columnIndex === 0) {
                                    return [0, 0];
                                }
                            }}/>
                        </Space>
                        <Divider align="left"><Text type="primary">行列合并</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        设置属性 spanMethod 可以指定合并行或列的算法。
                        </Paragraph>
                        <DemoCode data={codes['table_span']}/>
                    </Card>
                </Space>


                <Space id="table_checkbox" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Table columns={columns2} data={d()} selectedRowKeys={[selectedRowKeys, setSelectedRowKeys]}/>
                            <Space>
                                <Button type="primary" onClick={() => {
                                    setSelectedRowKeys([1,2]);
                                }}>
                                    勾选
                                </Button>
                                <Button type="primary" onClick={() => {
                                    setSelectedRowKeys([]);
                                }}>
                                    置空
                                </Button>
                                <Button type="primary" onClick={() => {
                                    setD(data21);
                                }}>
                                    设置数据
                                </Button>
                                <Button type="primary" onClick={() => {
                                    setD(data);
                                }}>
                                    重置数据
                                </Button>
                            </Space>
                        </Space>
                        <Divider align="left"><Text type="primary">选择框</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        column 中设置type 为checkbox可以添加选择列, 通过render函数可自定义渲染内容<br/>
                        selectedRowKeys 可以绑定勾选行的key
                        </Paragraph>
                        <DemoCode data={codes['table_checkbox']}/>
                    </Card>
                </Space>


                <Space id="table_sort" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Table columns={columns3} data={data} />
                        </Space>
                        <Divider align="left"><Text type="primary">排序</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        通过给 columns 数据的项，设置 sort: true，即可对该列数据进行排序。<br/>
                        通过给某一列设置 sortType 可以在初始化时使用排序。<br/>
                        如果使用远程排序，可以设置 sortable: 'custom'，然后在触发排序事件 onSort 后，进行远程排序，并手动设置新的 data
                        </Paragraph>
                        <DemoCode data={codes['table_sort']}/>
                    </Card>
                </Space>

                <Space id="table_resize" dir="v">
                    <Card bordered>
                        <Space dir="v" style={{width: '100%', overflow: 'auto'}}>
                            <Table columns={columns6} data={data} border/>
                        </Space>
                        <Divider align="left"><Text type="primary">拖拽列宽</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        给某一列设置属性 resize 为 true，可以拖拽调整该列的宽度，需开启 border 属性，且该列设置了 width 属性。
                        </Paragraph>
                        <DemoCode data={codes['table_resize']}/>
                    </Card>
                </Space>


                <Space id="table_data" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Table columns={columns5} data={data5()} border loading={loading()}/>
                            <div>
                                <Button type="primary" onClick={() => {
                                    setLoading(true);
                                    setTimeout(() => {
                                        const data: any[] = [];
                                        for (let i = 0; i < Math.random() * 10; i++) {
                                            data.push({
                                                name: 'name_' + i,
                                                age: Math.round(10 + Math.random() * 50),
                                                address: 'address ' + i
                                            });
                                        }
                                        setData5(data);
                                        setLoading(false);
                                    }, 500)
                                }}>请求数据</Button>
                            </div>
                        </Space>
                        <Divider align="left"><Text type="primary">动态数据</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        动态设置data属性
                        </Paragraph>
                        <DemoCode data={codes['table_data']}/>
                    </Card>
                </Space>


                <Space id="table_tree" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Table columns={treeColumns} data={data3} border />
                        </Space>
                        <Divider align="left"><Text type="primary">树状</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        当数据中含有 children 字段，会以树形数据显示。<br/>
                        在 column 开启属性 tree，则该列会显示展开/收起图标。<br/>
                        设置 data 属性 _showChildren，默认会展开子数据。
                        </Paragraph>
                        <DemoCode data={codes['table_tree']}/>
                    </Card>
                </Space>


                <Space id="table_expand" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Table columns={columns7} data={data4} border />
                        </Space>
                        <Divider align="left"><Text type="primary">展开</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        当表格内容较多不能一次性完全展示时使用。<br/>
                        通过给 columns 数据设置一项，指定 type: 'expand'，即可开启扩展功能。<br/>
                        渲染展开区域与自定义列模板方法类似，使用 render 函数。
                        </Paragraph>
                        <DemoCode data={codes['table_expand']}/>
                    </Card>
                </Space>

                <Space id="table_largedata" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Table columns={columns8} data={largedata} border virtual height={300}/>
                        </Space>
                        <Divider align="left"><Text type="primary">大列表</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        当表格数据量较大时为了提升渲染性能，可以使用虚拟列表  通过指定 virtual 属性并设置 height，即可高性能渲染表格<br/>
                        </Paragraph>
                        <DemoCode data={codes['table_largedata']}/>
                    </Card>
                </Space>

                <Space id="table_mergeColumns" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Table columns={mergeColumns} data={mergeData} border height={300}/>
                        </Space>
                        <Divider align="left"><Text type="primary">合并表头</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        合并表头
                        </Paragraph>
                        <DemoCode data={codes['table_largedata']}/>
                    </Card>
                </Space>

                <Space id="table_showHeader" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Table columns={mergeColumns} data={mergeData} border height={300} showHeader={false}/>
                        </Space>
                        <Divider align="left"><Text type="primary">合并表头</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        合并表头
                        </Paragraph>
                        <DemoCode data={codes['table_largedata']}/>
                    </Card>
                </Space>

                <Space id="table_header_footer" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Table columns={mergeColumns} data={mergeData} border height={300} title={<div>header</div>}
                            footer={<div>footer</div>}/>

                            <Table columns={mergeColumns} data={mergeData} height={300} title={<div>header</div>}
                            footer={<div>footer</div>}/>
                        </Space>
                        <Divider align="left"><Text type="primary">头部底部</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        头部底部
                        </Paragraph>
                        <DemoCode data={codes['table_largedata']}/>
                    </Card>
                </Space>


                <Space id="table_empty" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Table columns={columns} data={[]} border height={300} empty={<Exception type="empty" showAction={false} showDesc={false}/>}/>

                        </Space>
                        <Divider align="left"><Text type="primary">自定义空内容</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        自定义空内容
                        </Paragraph>
                        <DemoCode data={codes['table_largedata']}/>
                    </Card>
                </Space>


                <Space id="table_summary" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Table columns={columns} data={data2} border height={300} showSummary/>
                            <Table columns={columns2} data={data2} border height={300} showSummary summaryMethod={(columns, data) => {
                                const row: any = {};
                                columns.forEach((col: ColumnProps, index: number) => {
                                    const key = col.name!;
                                    if (index === 0) {
                                        row[key] = '共计';
                                        return;
                                    }
                                    const values = data.map(item => Number(item[key]));
                                    if (!values.every(value => isNaN(value))) {
                                        const v = values.reduce((prev, curr) => {
                                            const value = Number(curr);
                                            if (!isNaN(value)) {
                                                return prev + curr;
                                            } else {
                                                return prev;
                                            }
                                        }, 0);
                                        row[key] = v + '元';
                                    } else {
                                        row[key] = 'N/A';
                                    }
                                });
                                return row;
                            }}/>
                        </Space>
                        <Divider align="left"><Text type="primary">合计</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        合计
                        </Paragraph>
                        <DemoCode data={codes['table_largedata']}/>
                    </Card>
                </Space>


                <Space id="table_type" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Table columns={typeColumns} data={typeData} height={300} border/>
                        </Space>
                        <Divider align="left"><Text type="primary">合计</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        合计
                        </Paragraph>
                        <DemoCode data={codes['table_largedata']}/>
                    </Card>
                </Space>


                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>Table Props</Title>
                        <Table columns={propsColumns} data={propsData} border size="small" />
                    </Space>
                    <Space id="comp_column_props" dir="v">
                        <Title type="primary" heading={4}>Column Props</Title>
                        <Table columns={propsColumns} data={columnData} border size="small" />
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
