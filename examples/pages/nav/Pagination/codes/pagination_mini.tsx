export default `const [page1, setPage1] = createStore({
    current: 1,
    pageSize: 10
})

<Pagination mini size='small' current={page1.current} pageSize={page1.pageSize} total={1000} onChange={(page: number) => {
    setPage1('current', page);
}} onChangePageSize={(size: number) => {
    setPage1('pageSize', size);
}}/>`