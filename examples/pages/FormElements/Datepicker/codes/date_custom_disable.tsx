export default `<Datepicker clearable disabledDate={(date: Date) => {
    return date.getTime() > Date.now();
}}/>`