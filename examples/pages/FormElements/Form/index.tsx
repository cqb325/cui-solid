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
import { CheckboxGroup, Icon, Modal, Table, message, modal } from "@/components";
import { propsColumns } from "../../../pages/common/columns";
import { createSignal } from "solid-js";
useDirective(hljs);

interface FormData1 {
    u: string
    p: string
}

interface FormModel {
    count: number,
    check: boolean,
    fruit: string[],
    sex: number,
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
            sex: 1,
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

    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Form 表单
                </Title>
                <Space id="form_base" dir="v">
                    <Card bordered>
                        <Form form={form1} inline>
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
                            Form 组件支持  <Text type="primary"><Icon name="github" /> <a href="https://github.com/yiminghe/async-validator" target="_blank">async-validator</a></Text> 方式实现的数据验证，给在 useForm 中设置的 validation 各属性校验规则为数组格式。
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
                                    <FormItem label="是否选择:" name="check">
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
                                    <FormItem label="水果:" name="fruit">
                                        <Space dir="h" align="baseline">
                                            <Input type="checkbox" data={[{ label: '苹果', value: '1' }, { label: '桃子', value: '2' }]} />
                                            <Button onClick={() => {
                                                form.fruit = ['2'];
                                                console.log(form.getFormData());
                                            }}>改变</Button>
                                        </Space>
                                    </FormItem>
                                </Col>
                                <Col grid={0.33}>
                                    <FormItem label="性别:" name="sex">
                                        <Space dir="h" align="baseline">
                                            <Input type="radio" data={[{ label: '男', value: 1 }, { label: '女', value: 2 }]} />
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
                                    <FormItem label="开关：" name="switch">
                                        <Space dir="h" align="center">
                                            <Input type="switch" />
                                            <Button onClick={() => {
                                                form.switch = !form.switch;
                                                console.log(form.getFormData());
                                            }}>改变</Button>
                                        </Space>
                                    </FormItem>
                                </Col>
                                <Col grid={0.33}>
                                    <FormItem label="阿萨德：" name="count">
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
                                    <FormItem label="年龄：" name="age">
                                        <Space dir="h" align="center">
                                            <Input type="spinner" />
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
                                            <Input type="select" clearable>
                                                <Option label="北京" value="1" />
                                                <Option label="上海" value="2" />
                                                <Option label="深圳" value="3" />
                                            </Input>
                                            <Button onClick={() => {
                                                form.city = '2';
                                                console.log(form.getFormData());
                                            }}>改变</Button>
                                        </Space>
                                    </FormItem>
                                </Col>
                                <Col grid={0.33}>
                                    <FormItem label="景点：" name="cascader">
                                        <Space dir="h" align="center">
                                            <Input type="cascader" data={cascaderData} />
                                            <Button onClick={() => {
                                                form.cascader = ['beijing', 'gugong'];
                                                console.log(form.getFormData());
                                            }}>改变</Button>
                                        </Space>
                                    </FormItem>
                                </Col>
                                <Col grid={0.33}>
                                    <FormItem label="时间：" name="time">
                                        <Space dir="h" align="center">
                                            <Input type="time" />
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
                                    <FormItem label="时间区间：" name="timeRange">
                                        <Space dir="h" align="center">
                                            <Input type="timeRange" />
                                            <Button onClick={() => {
                                                form.timeRange = ['10:10:10', '12:12:00'];
                                                console.log(form.getFormData());
                                            }}>改变</Button>
                                        </Space>
                                    </FormItem>
                                </Col>
                                <Col grid={0.33}>
                                    <FormItem label="日期：" name="date">
                                        <Space dir="h" align="center">
                                            <Input type="date" />
                                            <Button onClick={() => {
                                                form.date = '2023-04-05';
                                                console.log(form.getFormData());
                                            }}>改变</Button>
                                        </Space>
                                    </FormItem>
                                </Col>
                                <Col grid={0.33}>
                                    <FormItem label="日期范围：" name="dateRange">
                                        <Space dir="h" align="center">
                                            <Input type="dateRange" />
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
                                    <FormItem label="月份：" name="month">
                                        <Space dir="h" align="center">
                                            <Input type="month" />
                                            <Button onClick={() => {
                                                form.month = '2023-04';
                                                console.log(form.getFormData());
                                            }}>改变</Button>
                                        </Space>
                                    </FormItem>
                                </Col>
                                <Col grid={0.33}>
                                    <FormItem label="月份范围：" name="monthRange">
                                        <Space dir="h" align="center">
                                            <Input type="monthRange" />
                                            <Button onClick={() => {
                                                form.monthRange = [dayjs('2023-04').toDate(), dayjs('2023-08').toDate()];
                                                console.log(form.getFormData());
                                            }}>改变</Button>
                                        </Space>
                                    </FormItem>
                                </Col>
                                <Col grid={0.33}>
                                    <FormItem label="日期时间：" name="dateTime">
                                        <Space dir="h" align="center">
                                            <Input type="dateTime" />
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
                                    <FormItem label="日期时间范围：" name="dateTimeRange">
                                        <Space dir="h" align="center">
                                            <Input type="dateTimeRange" />
                                            <Button onClick={() => {
                                                form.dateTimeRange = [dayjs('2023-04-05 10:10:10').toDate(), dayjs('2023-04-08 12:10:10').toDate()];
                                                console.log(form.getFormData());
                                            }}>改变</Button>
                                        </Space>
                                    </FormItem>
                                </Col>
                                <Col grid={0.33}>
                                    <FormItem label="进度：" name="slider">
                                        <Space dir="h" align="center">
                                            <Input type="slider" />
                                            <Button onClick={() => {
                                                form.slider = 30;
                                                console.log(form.getFormData());
                                            }}>改变</Button>
                                        </Space>
                                    </FormItem>
                                </Col>
                                <Col grid={0.33}>
                                    <FormItem label="地点：" name="tree" labelAlign="start" labelStyle={{'margin-top': '8px'}}>
                                        <Space dir="h" align="center">
                                            <Input type="treeSelect" data={data3} multi />
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
                                    <FormItem label="颜色：" name="color">
                                        <Space dir="h" align="center">
                                            <Input type="color" />
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
                                    // form.setFormData({
                                    //     count: '',
                                    //     check: true,
                                    //     fruit: [],
                                    //     sex: 1,
                                    //     switch: true,
                                    //     age: 20,
                                    //     city: '1',
                                    //     cascader: [],
                                    //     time: '',
                                    //     timeRange: '',
                                    //     date: '',
                                    //     dateRange: '',
                                    //     month: '',
                                    //     monthRange: '',
                                    //     dateTime: '',
                                    //     dateTimeRange: '',
                                    //     slider: 0,
                                    //     tree: [],
                                    //     color: ''
                                    // });
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
