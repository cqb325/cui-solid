function useValidation () {
    return {
        required (value: any) {
            if (value === undefined || value === null) {
                return false;
            }
            if (value instanceof Array) {
                return value.length > 0;
            } else {
                return (`${value}`).length > 0;
            }
        },

        email (value: any) {
            return /^[a-zA-Z0-9.!#$%&\'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
        },

        url (value: any) {
            return new RegExp('^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})'
                + '(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])'
                + '(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}'
                + '(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)'
                + '(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)'
                + '(?::\d{2,5})?(?:[/?#]\S*)?$', 'i').test(value);
        },

        minLength (value: any, param: any) {
            const length = value ? value.length : 0;
            return length >= param;
        },

        maxLength (value: any, param: any) {
            const length = value ? value.length : 0;
            return length <= param;
        },

        min (value: any, param: any) {
            return value >= param;
        },

        max (value: any, param: any) {
            return value <= param;
        },

        range (value: any, param: any) {
            return value >= param[ 0 ] && value <= param[ 1 ];
        },

        price (value: any) {
            return /^\d+(.\d{1,2})?$/.test(value);
        },

        idCard (value: any) {
            return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value);
        },

        noSpecial (value: any) {
            return /^[\u4E00-\u9FA5A-Za-z0-9_&]+$/.test(value);
        },

        userName (value: any) {
            return /^[\u4E00-\u9FA5A-Za-z0-9*]+$/.test(value);
        },

        mobile (value: any) {
            return /^1[3-8][0-9]{9}$/.test(value);
        },

        ip (value: any) {
            return /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(value);
        },

        equalTo (value: any, targetName: any, data: any) {
            const targetValue = data[targetName];
            return value === targetValue;
        }
    }
}

export default useValidation;
