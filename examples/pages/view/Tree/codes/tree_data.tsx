export default `const [data11, setData11]: any = createSignal([{id: '1', title: '动态数据'}]);

<Tree data={data11()} multi directory/>
<Button type='primary' onClick={() => {
    const da = [];
    for (let i = 0; i < 1 + Math.random() * 5; i++) {
        let c = [];
        for (let j = 0; j < 1 + Math.random() * 5; j++) {
            c.push({title: \`node_\${i}_\${j}\`, id: \`\${i}_\${j}\`});
        }
        da.push({title: \`node_\${i}\`, id: \`\${i}\`, children: c});
    }
    setData11(da)
}}>改变数据</Button>`