import type { Accessor, Setter } from "solid-js";

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

function useForm<T>({
    data,
    validation = {},
    message = {},
}: useFormParams<T>): useFormProps & T {
    const elementsChecks: any = {};
    const elementsClears: any = {};
    const initalData: T = Object.assign({}, data);
    const controllers: Map<string, any> = new Map<string, any>();
    const isValid = async () => {
        const names = Object.keys(elementsChecks);
        let valid = true;
        for (const name of names) {
            const check = elementsChecks[name];
            if (!(await check(newData[name]))) {
                valid = false;
                break;
            }
        }
        return valid;
    };
    /**
     * 单字段验证
     * @param name
     * @returns
     */
    const checkField = async (name: string) => {
        const check = elementsChecks[name];
        if (check && !(await check(newData[name]))) {
            return false;
        }
        return true;
    };
    const getValidation = function (name: string) {
        return validation ? validation[name] : {};
    };
    const getMessage = function (name: string) {
        return message ? message[name] : {};
    };
    const getFormData = function () {
        const keys = Object.keys(data as any);
        const ret: any = {};
        keys.forEach((key) => {
            ret[key] = newData[key];
        });
        return ret as T;
    };
    const setFormData = function (mData: T, check?: boolean) {
        for (const key in data) {
            if (check) {
                // @ts-expect-error: 2322
                ret[key] = mData[key];
            } else {
                newData[key] = mData[key];
                set(key, mData[key]);
            }
        }
    };
    const setCheckValid = (name: string, checkFn: CheckFunction) => {
        elementsChecks[name] = checkFn;
    };

    const setClearValid = (name: string, clearFn: clearFunction) => {
        elementsClears[name] = clearFn;
    };

    /**
     * 清空校验
     * @param name
     */
    const clearValidates = (name?: string) => {
        if (name) {
            const fn = elementsClears[name];
            if (fn) {
                fn();
            }
        } else {
            const names = Object.keys(elementsClears);
            for (const name of names) {
                const fn = elementsClears[name];
                if (fn) {
                    fn();
                }
            }
        }
    };

    /**
     * 重置表单
     */
    const resetFields = () => {
        setFormData(initalData);
        clearValidates();
    };

    const set = (name: string, value: any) => {
        if (controllers.has(name)) {
            const [_v, setV] = controllers.get(name);
            setV(value);
        }
    };
    const bindController = (
        name: string,
        v: Accessor<any>,
        setV: Setter<any>
    ) => {
        controllers.set(name, [v, setV]);
    };
    const newData: any = {
        ...data,
        isValid,
        // 别名
        validate: isValid,
        getFormData,
        setFormData,
        setCheckValid,
        getValidation,
        getMessage,
        bindController,
        setClearValid,
        clearValidates,
        resetFieldsValidate: clearValidates,
        checkField,
        resetFields,
    };
    const ret: useFormProps & T = new Proxy(newData, {
        get(target, prop: string, receiver) {
            if (controllers.has(prop)) {
                const [v, setV] = controllers.get(prop);
                return v();
            }
            return target[prop];
        },
        set(target, prop: string, value, receiver) {
            target[prop] = value;
            set(prop, value);
            const check = elementsChecks[prop];
            check && check(value);
            return true;
        },
    });
    return ret;
}
export default useForm;
