export default `const form3 = useForm({
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
})


<Form form={form3} labelWidth={80}>
    <FormItem name='name' label="Name">
        <Input type='text' placeholder="Enter your name"/>
    </FormItem>
    <FormItem name='mail' label="E-mail">
        <Input type='text' placeholder="Enter your e-mail"/>
    </FormItem>
    <FormItem name='city' label="City">
        <Select placeholder="Select your city">
            <Option label="Beijing" value="beijing"></Option>
            <Option label="Shanghai" value="shanghai"></Option>
            <Option label="Shenzhen" value="shenzhen"></Option>
        </Select>
    </FormItem>
    <FormItem label="Gender" name="gender">
        <RadioGroup data={[{label: 'Male', value: 'male'}, {label: 'Female', value: 'female'}]}>
        </RadioGroup>
    </FormItem>
    <FormItem label="Hobby" name="interest">
        <CheckboxGroup data={[
            {label: 'Eat', value: 'Eat'},
            {label: 'Sleep', value: 'Sleep'},
            {label: 'Run', value: 'Run'},
            {label: 'Movie', value: 'Movie'},
        ]}>
        </CheckboxGroup>
    </FormItem>
    <FormItem label="Desc" name="desc">
        <Input type="textarea" autoHeight rows={2} placeholder="Enter something..."></Input>
    </FormItem>
    <FormItem>
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
            form3.clearFieldsValidate();
        }} style="margin-left: 8px">Reset</Button>
    </FormItem>
</Form>
`
