import { Accessor } from "solid-js";
export interface useFormProps {
    isValid(): boolean;
    getFormData(): any;
    setFormData(mData: any, check?: boolean): void;
    setCheckValid(name: string, checkFn: Function): void;
    getValidation(name: string): any;
    getMessage(name: string): any;
    bindController(name: string, v: any, setV: Accessor<any>): void;
    setClearValid(name: string, clearFn: Function): void;
    clearValidates(name?: string): void;
    [key: string]: any;
}
export interface useFormParams {
    data: Object;
    validation?: any;
    message?: any;
}
declare function useForm({ data, validation, message }: useFormParams): useFormProps;
export default useForm;
