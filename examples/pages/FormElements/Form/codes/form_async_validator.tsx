export default ` const form3 = useForm({
    data: {
      u: '',
      p: '',
      r: '',
    },
    validation: {
      u: [
        {
          required: true,
          message: '请输入用户名',
        },
      ],
      p: [
        {
          required: true,
          message: '请输入密码',
        },
        {
          required: true,
          asyncValidator: (_rule: any, value: string) => {
            return new Promise<void>((resolve, reject) => {
              if (value !== '123456') {
                reject('请输入123456这个值'); // reject with error message
              } else {
                resolve();
              }
            });
          },
        },
      ],
    },
  });


<Form form={form3} inline>
  <FormItem name="u" label="用户名：">
    <Input type="text" />
  </FormItem>
  <FormItem name="p" label="密码：">
    <Input type="password" />
  </FormItem>
  <FormItem
    name="r"
    label="确认密码："
    rules={[
      {
        required: true,
        message: '请输入确认密码',
      },
      {
        required: true,
        asyncValidator: (_rule: any, value: string) => {
        return new Promise<void>((resolve, reject) => {
          if (value !== form.p) {
            reject('密码不一致'); // reject with error message
          } else {
          resolve();
          }
        });
      },
    },
    ]}
  >
    <Input type="password" />
  </FormItem>
</Form>`;
