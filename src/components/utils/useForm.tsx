import type { Accessor, Setter } from "solid-js";
import { createMutable } from "./createMutable";

type CheckFunction = (v: any) => any;

type clearFunction = () => any;

export type useFormProps = {
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

function useForm<T> ({ data, validation = {}, message = {} }: useFormParams<T>): useFormProps & T & typeof data {
    const elementsChecks: Map<string, CheckFunction> = new Map<string, CheckFunction>();
    const elementsClears: any = {};
    const initalData = Object.assign({}, data);
    const controllers: Map<string, any> = new Map<string, any>();
    const isValid = async () => {
        const names = elementsChecks.keys();
        let valid = true;
        for (const name of names) {
            const check = elementsChecks.get(name);
            const v = getValueByPath(name);
            if (!(await check?.(v))) {
                valid = false;
            }
        }
        return valid;
    };

    /**
     * 获取值
     * @param obj
     * @param fields name值或数组
     * @returns
     */
    const _getValueByPath = (obj: any, fields: string) => {
        if (fields.includes(".")) {
            const fieldsArr = fields.split(".");
            return fieldsArr.reduce((pre, cur) => {
                return pre[cur];
            }, obj);
        }
        return obj[fields];
    }


    /**
     * 根据路径获取值
     * @param fields name值或数组
     * @returns
     */
    const getValueByPath = (fields: string) => {
        return _getValueByPath(store, fields);
    }

    /**
     * 单字段验证
     * @param name
     * @returns
     */
    const checkField = async (name: string) => {
        const check = elementsChecks.get(name);
        const v = getValueByPath(name);
        if (check && !(await check(v))) {
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
            ret[key] = (store as any)[key];
        });
        return ret;
    };
    const setFormData = function (mData: any, check?: boolean) {
        for (const key in data) {
            if (check) {
                (store as any)[key] = mData[key];
            } else {
                set(key, mData[key]);
            }
        }
    };
    const setCheckValid = (name: string, checkFn: CheckFunction) => {
        elementsChecks.set(name, checkFn);
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

    const setProxyValue = (name: string, value: any) => {
        if (controllers.has(name)) {
            if (name.includes(".")) {
                const fieldsArr = name.split(".");
                let obj: any = store;
                for (let index = 0; index < fieldsArr.length - 1; index++) {
                    const cur = fieldsArr[index];
                    if (!obj[cur]) {
                        obj = null;
                        return;
                    } else {
                        obj = obj[cur];
                    }
                }
                if (obj) {
                    obj[fieldsArr[fieldsArr.length - 1]] = value;
                }
            } else {
                (store as any)[name] = value;
            }
        }
    };
    const bindController = (
        name: string,
        v: Accessor<any>,
        setV: Setter<any>
    ) => {
        controllers.set(name, [v, setV]);
    };

    const unBindController = (name: string) => {
        controllers.delete(name);
        elementsChecks.delete(name);
        delete elementsClears[name];
    };

    const store = createMutable<useFormProps>({
        isValid,
        // 别名
        validate: isValid,
        getFormData,
        setFormData,
        setCheckValid,
        getValidation,
        getMessage,
        bindController,
        unBindController,
        setClearValid,
        clearValidates,
        resetFieldsValidate: clearValidates,
        checkField,
        resetFields,
        setProxyValue,
        getValueByPath,
        ...data
    }, {
        onUpdateField (key, value, name) {
            set(name, value);
            const check = elementsChecks.get(name);
            check && check(value);
        },
    });

    return store as useFormProps & typeof data;
}
export default useForm;
