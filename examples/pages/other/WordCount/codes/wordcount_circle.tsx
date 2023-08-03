export default `const [value3, setValue3] = createSignal('');

<Input type='textarea' trigger='input' value={[value3, setValue3]}/>
<WordCount total={10} value={value3()} circle/>
`