import { Form } from "@/components/Form";
import { FormItem } from "@/components/FormItem";
import useForm from "@/components/utils/useForm";
import { Space } from "@/components/Layout";
import { Input } from "@/components/FormElements/Input";
import { Button } from "@/components/Button";
import { Checkbox } from "@/components/FormElements/Checkbox";
import dayjs from "dayjs";
import { Title } from "@/components/Typography/Title";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Text } from "@/components/Typography/Text";
import { Option, Select } from "@/components/FormElements/Select";
import { RadioGroup } from "@/components/FormElements/RadioGroup";
import { Row } from "@/components/Row";
import { Col } from "@/components/Col";
import { CompAnchor } from "../../common/CompAnchor";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
import { anchorData, codes, itemPropsData, propsData } from "./config";
import { Cascader, CheckboxGroup, ColorPicker, Datepicker, Link, Modal, Slider, Spinner, Switch, Table, Timepicker, TreeSelect, message, modal } from "@/components";
import { propsColumns } from "../../../pages/common/columns";
import type { Accessor} from "solid-js";
import { createEffect, createSignal, For } from "solid-js";
import { F7LogoGithub } from "cui-solid-icons/f7";
import { CustomField } from "./CustomField";
import { FeatherMinus, FeatherPlus } from "cui-solid-icons/feather";
import { createMutable } from "@/components/utils/createMutable";
useDirective(hljs);

interface FormData1 {
    u: string
    p: string
}

interface FormModel {
    count: number,
    check: boolean,
    fruit: string[],
    sex: number | null,
    switch: boolean,
    age: number,
    city: string,
    cascader: string[],
    time: string,
    timeRange: string | string[],
    date: string,
    dateRange: string | string[],
    month: string,
    monthRange: string | Date[],
    dateTime: string | Date,
    dateTimeRange: string | string[] | Date[],
    slider: number,
    tree: string[],
    color: string
}

function FormPage () {
    const form1 = useForm<FormData1>({
        data: {
            u: '',
            p: ''
        },
        validation: {
        },
        message: {
        }
    });
    const form = useForm<FormModel>({
        data: {
            count: 10,
            check: true,
            fruit: [],
            sex: null,
            switch: true,
            age: 20,
            city: '1',
            cascader: [],
            time: '',
            timeRange: '',
            date: '',
            dateRange: '',
            month: '',
            monthRange: '',
            dateTime: '',
            dateTimeRange: '',
            slider: 0,
            tree: [],
            color: ''
        },
        validation: {
            count: {
                min: 5,
                max: 15,
                required: true,
            },
            city: {
                required: true
            }
        },
        message: {
            count: {
                max: '最大值不能超过15',
                required: '请输入值'
            },
            city: {
                required: '请选择地市'
            }
        }
    });
    const form2 = useForm({
        data: {
            select: 1,
            value: ''
        },
        validation: {
        },
        message: {
            value: {
                required: '请填写信息',
                email: '请填写正确的邮箱地址',
                mobile: '请填写正确的手机号码'
            }
        }
    });

    const form4 = useForm({
        data: {
            value: ''
        },
        validation: {
        },
        message: {
            value: {
                required: '请填写信息',
                email: '请填写正确的邮箱地址',
                mobile: '请填写正确的手机号码'
            }
        }
    });

    const cityData = [
        { value: '1', label: '北京' },
        { value: '2', label: '上海' },
        { value: '3', label: '杭州' },
        { value: '4', label: '武汉' },
        { value: '5', label: '天津' },
    ];

    const data3 = [];
    for (let i = 0; i < 3; i++) {
        const c = [];
        for (let j = 0; j < 3; j++) {
            c.push({ id: `${i + 1}_${j + 1}`, title: `node_${i + 1}_${j + 1}` });
        }
        // patch: <div style={{
        //     display: 'flex',
        //     "justify-content": 'end'
        // }}>
        //     <Text type="success">查看</Text>
        // </div>

        data3.push({ id: `${i + 1}`, title: `node_${i + 1}`, children: c });
    }

    const cascaderData = [
        {
            value: 'beijing', title: '北京',
            children: [
                { value: 'gugong', title: '故宫' },
                { value: 'tiantan', title: '天坛' },
                { value: 'wangfujing', title: '王府井' },
            ]
        },
        {
            value: 'jiangsu',
            title: '江苏',
            children: [
                {
                    value: 'nanjing',
                    title: '南京',
                    children: [
                        {
                            value: 'fuzimiao',
                            title: '夫子庙',
                        }
                    ]
                },
                {
                    value: 'suzhou',
                    title: '苏州',
                    children: [
                        {
                            value: 'zhuozhengyuan',
                            title: '拙政园',
                            disabled: true
                        },
                        {
                            value: 'shizilin',
                            title: '狮子林',
                        }
                    ]
                }
            ],
        }]

    const form3 = useForm({
        data: {
            name: '',
            mail: '',
            city: '',
            gender: '',
            interest: [],
            desc: ''
        },
        validation: {
            name: [
                { required: true, message: 'The name cannot be empty', trigger: 'blur' }
            ],
            mail: [
                { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
            ],
            city: [
                { required: true, message: 'Please select the city', trigger: 'change' }
            ],
            gender: [
                { required: true, message: 'Please select gender', trigger: 'change' }
            ],
            interest: [
                { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
                { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
            ],
            desc: [
                { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
                { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
            ]
        }
    });

    const [addModal, setAddModal] = createSignal(false);

    const form5 = useForm({
        data: {
            alertTime: '',
        },
        validation: {
            alertTime: [{required: true, message: '请填写信息'}],
        }
    });

    const form6 = useForm({
        data: {
            alertTime: '',
            periodTime: '',
            period: '',
        },
        validation: {
            alertTime: [{
                required: true, message: '请填写信息',
            }],
            period: [{
                required: true, message: '请选择告警周期',
            }],
            periodTime: [{
                required: true, message: '请填写时间',
            }]
        },
        message: {

        }
    });

    const form7 = useForm({
        data: {
            alerts: ['a']
        }
    })
    const [showAlerts, setShowAlerts] = createSignal(false);


    const form8 = useForm({
        data: {
            alerts: ['']
        }
    })

    const form9 = useForm({
        data: {
            alerts: [{
                name: '',
                rule: ''
            }]
        }
    })

    const form10 = useForm({
        data: {
            rows: [
                { name: '', age: ''}
            ]
        }
    })

    const user = createMutable({
        name: '张三',
        obj1: {
            obj2: '123',
            obj3: 'aaa'
        },
        arr: [0, 1, 2]
    }, {
        onUpdateField: (prop, value, path) => {
            // console.log(prop, value, path);
        }
    })

    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Form 表单
                </Title>
                <Space id="form_base" dir="v">
                    <Card bordered>
                        <Form form={form1} inline onBeforeSubmit={() => {
                            console.log(11111111);
                        }}>
                            <FormItem name="u" label="用户名：">
                                <Input type="text" />
                            </FormItem>
                            <FormItem name="p" label="密码：">
                                <Input type="password" />
                            </FormItem>
                        </Form>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            设置属性 inline，表单元素可以水平排列。
                        </Paragraph>
                        <DemoCode data={codes['form_base']} />
                    </Card>
                </Space>


                <Space id="form_dynamic_rule" dir="v">
                    <Card bordered>
                        <Form form={form2}>
                            <FormItem name="select" label="选项：">
                                <RadioGroup data={[{ label: '手机号验证', value: 1 }, { label: '邮箱验证', value: 2 }]} />
                            </FormItem>
                            <FormItem name="value" label="校验值：" rules={form2.select === 1 ? { required: true, mobile: true } : { required: true, email: true }}>
                                <Input type="text" />
                            </FormItem>
                        </Form>
                        <Divider align="left"><Text type="primary">动态校验</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            FormItem 组件支持动态设置 rules ,可根据不同条件对数据进行校验, 默认使用内置校验方式，支持自定义校验规则。
                        </Paragraph>
                        <DemoCode data={codes['form_dynamic_rule']} />
                    </Card>
                </Space>


                <Space id="form_dynamic_rule2" dir="v">
                    <Card bordered>
                        <Form form={form5} onChange={() => {
                            console.log(form5);
                        }}>
                            <FormItem name="alertTime" label="告警时间：">
                                <CustomField />
                            </FormItem>
                        </Form>

                        <Form form={form6} onChange={() => {
                            if (form6.period && form6.periodTime) {
                                form6.alertTime = `${form6.period}-${form6.periodTime}`
                            } else {
                                form6.alertTime = ''
                            }
                        }}>
                            <FormItem name="alertTime" label="告警时间：">
                                <Space>
                                    <Select name="period" data={[{ label: '每日', value: '1' }, { label: '每周', value: '2' }]} style={{width: '80px'}} clearable/>
                                    <Input asFormField type="text" name="periodTime"/>
                                </Space>
                            </FormItem>
                        </Form>

                        <Divider align="left"><Text type="primary">动态校验</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            FormItem 组件支持动态设置 rules ,可根据不同条件对数据进行校验, 默认使用内置校验方式，支持自定义校验规则。
                        </Paragraph>
                        <DemoCode data={codes['form_dynamic_rule']} />
                    </Card>
                </Space>


                <Space id="form_dynamic_rule3" dir="v">
                    <Card bordered>
                        <Form form={form7} onChange={(name, v) => {
                            console.log(name, v);
                        }}>
                            {
                                showAlerts() ? <FormItem name="alerts" label="告警：">
                                        <Input />
                                    </FormItem>
                                : null
                            }
                        </Form>
                        <Button icon={showAlerts() ? <FeatherMinus/> : <FeatherPlus/>} onClick={() => {
                            setShowAlerts(!showAlerts()); // 动态显示告警
                        }}/>
                    </Card>
                </Space>


                <Space id="form_dynamic_rule3" dir="v">
                    <Card bordered>
                        <Form form={form8} onChange={(name, v) => {
                            console.log(name, v, form8);
                        }}>
                            <For each={form8.alerts}>
                                {(item, index: Accessor<number>) => {
                                    return <FormItem name={`alerts.${index()}`} label="告警：" rules={[{ required: true, message: '告警不能为空'}]}>
                                        <Input />
                                    </FormItem>
                                }}
                            </For>
                        </Form>
                        <Space dir="v" inline>
                            <Button icon={<FeatherPlus/>} onClick={() => {
                                form8.alerts.push(''); // 动态显示告警
                            }}/>
                            <Button type="primary" onClick={async () => {
                                await form8.validate()
                            }}>提交</Button>
                        </Space>
                    </Card>
                </Space>


                <Space id="form_dynamic_rule4" dir="v">
                    <Card bordered>
                        <Form form={form9} onChange={(name, v) => {
                            console.log(name, v, form9);
                        }}>
                            <For each={form9.alerts}>
                                {(item, index: Accessor<number>) => {
                                    return <Space>
                                        <FormItem name={`alerts.${index()}.name`} label="告警名称：" rules={[{ required: true, message: '告警名称不能为空'}]}>
                                            <Input />
                                        </FormItem>
                                        <FormItem name={`alerts.${index()}.rule`} label="告警规则：" rules={[{ required: true, message: '告警规则不能为空'}]}>
                                            <Input />
                                        </FormItem>
                                    </Space>
                                }}
                            </For>
                        </Form>
                        <Space dir="v" inline>
                            <Button icon={<FeatherPlus/>} onClick={() => {
                                form9.alerts.push({name: '', rule: ''}); // 动态显示告警
                            }}/>
                            <Button type="primary" onClick={async () => {
                                await form9.validate()
                            }}>提交</Button>
                        </Space>
                    </Card>
                </Space>


                <Space id="form_dynamic_table" dir="v">
                    <Card bordered>
                        <Form form={form10} errorTransfer onChange={(name, v) => {
                            console.log(name, v, form10);
                        }}>
                            <Table border columns={[
                                {name: 'name', title: 'Name', render: (v, col, row, index: number) => {
                                    return <FormItem name={`rows.${index}.name`} style={{'margin-bottom': 0}}
                                        rules={[{ required: true, message: 'Name不能为空'}]}>
                                        <Input/>
                                    </FormItem>
                                }},
                                {name: 'age', title: 'Age', render: (v, col, row, index: number) => {
                                    return <FormItem name={`rows.${index}.age`} style={{'margin-bottom': 0}}
                                    rules={[{ required: true, message: 'Age不能为空'}]}>
                                        <Input/>
                                    </FormItem>
                                }},
                                {name: '_op', title: '操作', render: (v, col, row, index: number) => {
                                    return <Space>
                                        <Link onClick={() => {
                                            if (form10.rows.length >= 5) return;
                                            form10.rows.push({
                                                name: '',
                                                age: ''
                                            });
                                        }}>新增</Link>
                                        {
                                            index === 0 ? null : <Link onClick={() => {
                                                if (form10.rows.length <= 1) return;
                                                form10.rows.splice(index, 1);
                                            }}>删除</Link>
                                        }
                                    </Space>
                                }}
                            ]} data={form10.rows}/>
                        </Form>
                        <Button type="primary" onClick={async () => {
                            await form10.validate()
                            console.log(form10);

                        }}>提交</Button>
                    </Card>
                </Space>


                <Space id="form_error_transfer" dir="v">
                    <Card bordered>
                        <Modal title="新增" visible={[addModal, setAddModal]}>
                            <Form form={form4} errorTransfer errorAlign="right">
                                <FormItem name="value" label="校验值：" rules={{ required: true, mobile: true }}>
                                    <Input type="text" />
                                </FormItem>
                            </Form>
                        </Modal>
                        <Button type="primary" onClick={() => {
                            setAddModal(true);
                        }}>打开</Button>
                        <Divider align="left"><Text type="primary">错误提示位置</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            Form 和 FormItem 组件支持指定位置显示错误信息, 设置errorTransfer，将使用popover显示错误信息
                            errorAlign可以设置错误提示的位置，默认是right
                        </Paragraph>
                        <DemoCode data={codes['form_dynamic_rule']} />
                    </Card>
                </Space>

                <Space id="form_async_validate" dir="v">
                    <Card bordered>
                        <Form form={form3} labelWidth={80}>
                            <FormItem name="name" label="Name">
                                <Input type="text" placeholder="Enter your name" />
                            </FormItem>
                            <FormItem name="mail" label="E-mail">
                                <Input type="text" placeholder="Enter your e-mail" />
                            </FormItem>
                            <FormItem name="city" label="City">
                                <Select placeholder="Select your city">
                                    <Option label="Beijing" value="beijing" />
                                    <Option label="Shanghai" value="shanghai" />
                                    <Option label="Shenzhen" value="shenzhen" />
                                </Select>
                            </FormItem>
                            <FormItem label="Gender" name="gender">
                                <RadioGroup data={[{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }]} />
                            </FormItem>
                            <FormItem label="Hobby" name="interest">
                                <CheckboxGroup data={[
                                    { label: 'Eat', value: 'Eat' },
                                    { label: 'Sleep', value: 'Sleep' },
                                    { label: 'Run', value: 'Run' },
                                    { label: 'Movie', value: 'Movie' },
                                ]} />
                            </FormItem>
                            <FormItem label="Desc" name="desc">
                                <Input type="textarea" autoHeight rows={2} maxLength={100} wordCount placeholder="Enter something..." />
                            </FormItem>
                            <FormItem name="btns">
                                <Button type="primary" onClick={async () => {
                                    const valid = await form3.validate();
                                    if (valid) {
                                        message.success('Success!');
                                    } else {
                                        message.error('Fail!');
                                    }
                                }}>Submit</Button>
                                <Button onClick={() => {
                                    form3.setFormData({
                                        name: '',
                                        mail: '',
                                        city: '',
                                        gender: '',
                                        interest: [],
                                        desc: ''
                                    });
                                    form3.resetFieldsValidate();
                                }} style={{ "margin-left": "8px" }}>Reset</Button>
                            </FormItem>
                        </Form>
                        <Divider align="left"><Text type="primary">async-validator</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            Form 组件支持  <Text type="primary"><F7LogoGithub /> <a href="https://github.com/yiminghe/async-validator" target="_blank">async-validator</a></Text> 方式实现的数据验证，给在 useForm 中设置的 validation 各属性校验规则为数组格式。
                        </Paragraph>
                        <DemoCode data={codes['form_async_validate']} />
                    </Card>
                </Space>


                <Space id="form_fields" dir="v">
                    <Card bordered>
                        <Form form={form} labelWidth={100} onChange={(name: string, v: any) => {
                            console.log(name, v);
                            console.log(form.getFormData());
                        }}>
                            <Row>
                                <Col grid={0.33}>
                                    <FormItem label="是否选择:" name="check" rules={[{required: true, type: 'boolean', message: '请选择'}]}>
                                        <Space dir="h" align="baseline">
                                            <Checkbox label="是否选择" />
                                            <Button onClick={() => {
                                                form.check = !form.check;
                                                console.log(form.getFormData());
                                            }}>改变</Button>
                                        </Space>
                                    </FormItem>
                                </Col>
                                <Col grid={0.33}>
                                    <FormItem label="水果:" name="fruit" rules={[{required: true, type: 'array', message: '请选择'}]}>
                                        <Space dir="h" align="baseline">
                                            <CheckboxGroup data={[{ label: '苹果', value: '1' }, { label: '桃子', value: '2' }]} />
                                            <Button onClick={() => {
                                                form.fruit = ['2'];
                                                console.log(form.getFormData());
                                            }}>改变</Button>
                                        </Space>
                                    </FormItem>
                                </Col>
                                <Col grid={0.33}>
                                    <FormItem label="性别:" name="sex" rules={[{required: true, message: '请选择'}]}>
                                        <Space dir="h" align="baseline">
                                            <RadioGroup data={[{ label: '男', value: 1 }, { label: '女', value: 2 }]} />
                                            <Button onClick={() => {
                                                form.sex = 2;
                                                console.log(form.getFormData());
                                            }}>改变</Button>
                                        </Space>
                                    </FormItem>
                                </Col>
                            </Row>

                            <Row>
                                <Col grid={0.33}>
                                    <FormItem label="开关：" name="switch" rules={[{required: true, type: 'boolean', message: '请选择'}]}>
                                        <Space dir="h" align="center">
                                            <Switch />
                                            <Button onClick={() => {
                                                form.switch = !form.switch;
                                                console.log(form.getFormData());
                                            }}>改变</Button>
                                        </Space>
                                    </FormItem>
                                </Col>
                                <Col grid={0.33}>
                                    <FormItem label="阿萨德：" name="count" rules={[{required: true, message: '请选择'}]}>
                                        <Space dir="h">
                                            <Input prefix="￥" suffix="元" />
                                            <Button onClick={() => {
                                                form.count = form.count + 1;
                                                console.log(form.getFormData());
                                            }}>Add</Button>
                                        </Space>
                                    </FormItem>
                                </Col>
                                <Col grid={0.33}>
                                    <FormItem label="年龄：" name="age" rules={[{max: 10, type: 'integer', message: '不能大于10'}]}>
                                        <Space dir="h" align="center">
                                            <Spinner />
                                            <Button onClick={() => {
                                                form.age = form.age + 1;
                                                console.log(form.getFormData());
                                            }}>改变</Button>
                                        </Space>
                                    </FormItem>
                                </Col>
                            </Row>

                            <Row>
                                <Col grid={0.33}>
                                    <FormItem label="地市：" name="city">
                                        <Space dir="h" align="center">
                                            <Select clearable>
                                                <Option label="北京" value="1" />
                                                <Option label="上海" value="2" />
                                                <Option label="深圳" value="3" />
                                            </Select>
                                            <Button onClick={() => {
                                                form.city = '2';
                                                console.log(form.getFormData());
                                            }}>改变</Button>
                                        </Space>
                                    </FormItem>
                                </Col>
                                <Col grid={0.33}>
                                    <FormItem label="景点：" name="cascader" rules={[{required: true, type: 'array', message: '请选择'}]}>
                                        <Space dir="h" align="center">
                                            <Cascader data={cascaderData} clearable/>
                                            <Button onClick={() => {
                                                form.cascader = ['beijing', 'gugong'];
                                                console.log(form.getFormData());
                                            }}>改变</Button>
                                        </Space>
                                    </FormItem>
                                </Col>
                                <Col grid={0.33}>
                                    <FormItem label="时间：" name="time" rules={[{required: true, message: '请选择'}]}>
                                        <Space dir="h" align="center">
                                            <Timepicker />
                                            <Button onClick={() => {
                                                form.time = '10:10:10';
                                                console.log(form.getFormData());
                                            }}>改变</Button>
                                        </Space>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row>
                                <Col grid={0.33}>
                                    <FormItem label="时间区间：" name="timeRange" rules={[{required: true, type: 'array', message: '请选择'}]}>
                                        <Space dir="h" align="center">
                                            <Timepicker type="timeRange" />
                                            <Button onClick={() => {
                                                form.timeRange = ['10:10:10', '12:12:00'];
                                                console.log(form.getFormData());
                                            }}>改变</Button>
                                        </Space>
                                    </FormItem>
                                </Col>
                                <Col grid={0.33}>
                                    <FormItem label="日期：" name="date" rules={[{required: true, message: '请选择'}]}>
                                        <Space dir="h" align="center">
                                            <Datepicker/>
                                            <Button onClick={() => {
                                                form.date = '2023-04-05';
                                                console.log(form.getFormData());
                                            }}>改变</Button>
                                        </Space>
                                    </FormItem>
                                </Col>
                                <Col grid={0.33}>
                                    <FormItem label="日期范围：" name="dateRange" rules={[{required: true, type: 'array', message: '请选择'}]}>
                                        <Space dir="h" align="center">
                                            <Datepicker type="dateRange" />
                                            <Button onClick={() => {
                                                form.dateRange = ['2023-04-05', '2023-04-08'];
                                                console.log(form.getFormData());
                                            }}>改变</Button>
                                        </Space>
                                    </FormItem>
                                </Col>
                            </Row>

                            <Row>
                                <Col grid={0.33}>
                                    <FormItem label="月份：" name="month" rules={[{required: true, message: '请选择'}]}>
                                        <Space dir="h" align="center">
                                            <Datepicker type="month"/>
                                            <Button onClick={() => {
                                                form.month = '2023-04';
                                                console.log(form.getFormData());
                                            }}>改变</Button>
                                        </Space>
                                    </FormItem>
                                </Col>
                                <Col grid={0.33}>
                                    <FormItem label="月份范围：" name="monthRange" rules={[{required: true, type: 'array', message: '请选择'}]}>
                                        <Space dir="h" align="center">
                                            <Datepicker type="monthRange"/>
                                            <Button onClick={() => {
                                                form.monthRange = [dayjs('2023-04').toDate(), dayjs('2023-08').toDate()];
                                                console.log(form.getFormData());
                                            }}>改变</Button>
                                        </Space>
                                    </FormItem>
                                </Col>
                                <Col grid={0.33}>
                                    <FormItem label="日期时间：" name="dateTime" rules={[{required: true, message: '请选择'}]}>
                                        <Space dir="h" align="center">
                                            <Datepicker type="dateTime"/>
                                            <Button onClick={() => {
                                                form.dateTime = dayjs('2023-04-05 10:10:10').toDate();
                                                console.log(form.getFormData());
                                            }}>改变</Button>
                                        </Space>
                                    </FormItem>
                                </Col>
                            </Row>

                            <Row>
                                <Col grid={0.33}>
                                    <FormItem label="日期时间范围：" name="dateTimeRange" rules={[{required: true, type: 'array', message: '请选择'}]}>
                                        <Space dir="h" align="center">
                                            <Datepicker type="dateTimeRange"/>
                                            <Button onClick={() => {
                                                form.dateTimeRange = [dayjs('2023-04-05 10:10:10').toDate(), dayjs('2023-04-08 12:10:10').toDate()];
                                                console.log(form.getFormData());
                                            }}>改变</Button>
                                        </Space>
                                    </FormItem>
                                </Col>
                                <Col grid={0.33}>
                                    <FormItem label="进度：" name="slider" >
                                        <Space dir="h" align="center">
                                            <Slider/>
                                            <Button onClick={() => {
                                                form.slider = 30;
                                                console.log(form.getFormData());
                                            }}>改变</Button>
                                        </Space>
                                    </FormItem>
                                </Col>
                                <Col grid={0.33}>
                                    <FormItem label="地点：" name="tree" labelAlign="start" labelStyle={{'margin-top': '8px'}}
                                    rules={[{required: true, type: 'array', message: '请选择'}]}>
                                        <Space dir="h" align="center">
                                            <TreeSelect data={data3} multi />
                                            <Button onClick={() => {
                                                form.tree = ['2_1'];
                                                console.log(form.getFormData());
                                            }}>改变</Button>
                                        </Space>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row>
                                <Col grid={0.33}>
                                    <FormItem label="颜色：" name="color" rules={[{required: true, message: '请选择'}]}>
                                        <Space dir="h" align="center">
                                            <ColorPicker/>
                                            <Button onClick={() => {
                                                form.color = '';
                                                console.log(form.getFormData());
                                            }}>改变</Button>
                                        </Space>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Space dir="h">
                                <Button onClick={() => {
                                    form.resetFields();
                                    // form.clearValidates();
                                }}>重置</Button>

                                <Button onClick={() => {
                                    form.isValid();
                                }}>校验</Button>
                            </Space>
                        </Form>
                        <Divider align="left"><Text type="primary">支持的表单项</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            form 支持 <Text code>Input</Text>、<Text code>Checkbox</Text>、<Text code>Radio</Text>、<Text code>Select</Text>
                            、<Text code>Search</Text>、<Text code>Textarea</Text>、<Text code>AutoComplete</Text>、<Text code>Cascader</Text>
                            、<Text code>Datepicker</Text>、<Text code>Timepicker</Text>、<Text code>Progress</Text>、<Text code>Rate</Text>
                            、<Text code>Slider</Text>、<Text code>Spinner</Text>、<Text code>Switch</Text>、<Text code>Transfer</Text>、<Text code>TreeSelect</Text>
                            、<Text code>Upload</Text><br />
                            form绑定数据使用useForm创建对象并传递给From， useForm 包含 data validation 和 messages 参数，data 中的数据字段和FormItem的name对应
                        </Paragraph>
                        <DemoCode data={codes['form_fields']} />
                    </Card>
                </Space>

                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>Form Props</Title>
                        <Table columns={propsColumns} data={propsData} border size="small" />
                    </Space>
                    <Space id="comp_item_props" dir="v">
                        <Title type="primary" heading={4}>FormItem Props</Title>
                        <Table columns={propsColumns} data={itemPropsData} border size="small" />
                    </Space>
                </Space>
            </Space>
        </div>

        <CompAnchor data={anchorData} />
    </>
}
export default FormPage;
