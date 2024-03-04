export default `
const [filteredData, setFilteredData] = createSignal<any[]>([]);
const [filteredData2, setFilteredData2] = createSignal<any[]>([]);
const [loading, setLoading] = createSignal<boolean>(false);
const [val1, setVal1] = createSignal<string>('val1');
const [val2, setVal2] = createSignal<string[]>(['val1']);
const remoteQuery = (query: string) => {
    console.log(query);
    setLoading(true)
    const arr = new Array(10).fill(0).map((_, index) => ({value: query + index, label: query + index}))
    setFilteredData(arr);
    setLoading(false)
}
const remoteQuery2 = (query: string) => {
    console.log(query);
    setLoading(true)
    const arr = new Array(10).fill(0).map((_, index) => ({value: query + index, label: query + index}))
    setFilteredData2(arr);
    setLoading(false)
}

<Space>
    <Select clearable filter remoteMethod={remoteQuery} loading={loading()} value={[val1, setVal1]} defaultLabel="默认值">
        {filteredData().map(item => {
            return <Option value={item.value} label={item.label}></Option>
        })}
    </Select>
    <Select clearable filter multi remoteMethod={remoteQuery2} loading={loading()} value={[val2, setVal2]} defaultLabel={['值1']}>
        {filteredData2().map(item => {
            return <Option value={item.value} label={item.label}></Option>
        })}
    </Select>
</Space>
`