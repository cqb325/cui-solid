export default `
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

const [addModal, setAddModal] = createSignal(false);

<Modal title="新增" visible={[addModal, setAddModal]}>
    <Form form={form4} errorTransfer errorAlign="right">
        <FormItem name='value' label="校验值：" rules={{required: true, mobile: true}}>
            <Input type='text'/>
        </FormItem>
    </Form>
</Modal>
<Button type="primary" onClick={() => {
    setAddModal(true);
}}>打开</Button>`
