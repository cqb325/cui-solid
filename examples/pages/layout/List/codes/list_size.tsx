export default `const data = [
    {id: '1', desc: '这是一段文本。'},
    {id: '2', desc: '这是一段文本。'},
    {id: '3', desc: '这是一段文本。'}
];

<List border size='small' onSelect={(item: any) => {
    console.log(item);
}} head='Header' foot='Footer'>
    <For each={data}>
        {(item) => {
            return <List.Item id={item.id} desc={item.desc} data={item}></List.Item>
        }}
    </For>
</List>`;