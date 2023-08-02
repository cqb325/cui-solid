declare function useValidation(): {
    required(value: any): boolean;
    email(value: any): boolean;
    url(value: any): boolean;
    minLength(value: any, param: any): boolean;
    maxLength(value: any, param: any): boolean;
    min(value: any, param: any): boolean;
    max(value: any, param: any): boolean;
    range(value: any, param: any): boolean;
    price(value: any): boolean;
    idCard(value: any): boolean;
    noSpecial(value: any): boolean;
    userName(value: any): boolean;
    mobile(value: any): boolean;
    ip(value: any): boolean;
    equalTo(value: any, targetName: any, data: any): boolean;
};
export default useValidation;
