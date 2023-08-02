export default `<Input type='time' disabledTime={(num: number, type: string) => {
    if ((type === 'minute' || type === 'second') && num % 3 === 0) {
        return true;
    }
    return false;
}}/>`