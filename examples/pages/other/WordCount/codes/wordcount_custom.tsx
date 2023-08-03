export default `const [value2, setValue2] = createSignal('');

<Input type='textarea' trigger='input' value={[value2, setValue2]}/>
<WordCount total={10} value={value2()} overflow prefix={'已输入'} prefixOverflow={'已超出'} suffixOverflow={'个字'} suffix={'个字'}/>
`