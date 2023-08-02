export default `const [count, setCount] = createSignal(1);

<Space dir="h">
    <Input value={[count, setCount]}/>
    <Button onClick={() => {
        setCount(count() + 1);
    }}>Add</Button>
</Space>`