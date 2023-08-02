export default `const [data, setData] = createSignal([]);

<AutoComplete data={data()} onSearch={(v: any) => {
    const arr: any = [];
    arr.push(v);
    arr.push(v+v);
    arr.push(v+v+v);
    setData(arr);
}}/>`