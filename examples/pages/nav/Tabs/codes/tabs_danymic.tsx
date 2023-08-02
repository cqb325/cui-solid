export default `const [data, setData]: [any, any] = createSignal([
    {
        title: '标签一',
        name: 'tab1',
        context: '标签一内容'
    }
]);

<Tabs activeName="tab1" card>
    <For each={data()}>
        {(item: any)=> {
            return <Tab title={item.title} name={item.name} closeable>{item.context}</Tab>
        }}
    </For>
</Tabs>`