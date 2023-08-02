export default `const largeArray = new Array(1000).fill(0).map((_, index) => ({value: index, num: 1 + Math.round(Math.random() * 20) }))

<Input type='select' filter>
    <For each={largeArray}>
        {(item, index) => {
            return <Option value={item.value} label={\`$\{new Array(item.num).fill(true).map(() => 'Row').join(" ")} Row \` + index()}></Option>
        }}
    </For>
</Input>`