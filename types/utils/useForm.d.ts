import type { Accessor } from "solid-js";
declare type CheckFunction = (v: any) => any;
declare type clearFunction = () => any;
export declare type useFormProps = {
    isValid: () => Promise<boolean>;
    validate: () => Promise<boolean>;
    getFormData(): any;
    setFormData(mData: any, check?: boolean): void;
    setCheckValid(name: string, checkFn: CheckFunction): void;
    getValidation(name: string): any;
    getMessage(name: string): any;
    bindController(name: string, v: any, setV: Accessor<any>): void;
    unBindController(name: string): void;
    setClearValid(name: string, clearFn: clearFunction): void;
    clearValidates(name?: string): void;
    resetFieldsValidate(name?: string): void;
    clearValidates(): void;
    resetFields(): void;
    setProxyValue(name: string, value: any): void;
    checkField: (name: string) => Promise<boolean>;
    getValueByPath: (fields: string) => any;
};
export interface useFormParams<T> {
    data: T;
    validation?: any;
    message?: any;
}
declare function useForm<T>({ data, validation, message }: useFormParams<T>): useFormProps & T & typeof data;
export default useForm;
