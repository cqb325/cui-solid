export default `const [value, setValue] = createSignal('');

<Input type='textarea' trigger='input' value={[value, setValue]}/>
<WordCount total={10} value={value()}/>
`