import type { Accessor } from "solid-js";
type CheckFunction = (v: any) => any;
type clearFunction = () => any;
export type useFormProps = {
    isValid(): boolean;
    validate(): boolean;
    getFormData(): any;
    setFormData(mData: any, check?: boolean): void;
    setCheckValid(name: string, checkFn: CheckFunction): void;
    getValidation(name: string): any;
    getMessage(name: string): any;
    bindController(name: string, v: any, setV: Accessor<any>): void;
    setClearValid(name: string, clearFn: clearFunction): void;
    clearValidates(name?: string): void;
    resetFieldsValidate(name?: string): void;
    clearValidates(): void;
    resetFields(): void;
};
export interface useFormParams<T> {
    data: T;
    validation?: any;
    message?: any;
}
declare function useForm<T>({ data, validation, message, }: useFormParams<T>): useFormProps & T;
export default useForm;
