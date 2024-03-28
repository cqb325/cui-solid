module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es2021": true
    },
    "extends": ["plugin:@typescript-eslint/recommended", "eslint:recommended", "plugin:solid/typescript"],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        project: ['./tsconfig.json']
    },
    plugins: ['solid'],
    "rules": {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'space-before-function-paren': 1, // 函数定义时括号前面要有空格
        'no-unused-vars': 'off', // 不能有声明后未被使用的变量或参数
        'comma-dangle': ['error', 'only-multiline'],
        'solid/reactivity': 'off',
        'no-useless-escape': 0,
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-namespace': 'off',
        // 关闭使用前必须定义
        '@typescript-eslint/no-use-before-define': 'off',
        // 空接口
        '@typescript-eslint/no-empty-interface': 'off',
        // 不能使用for in
        '@typescript-eslint/no-for-in-array': 'off',
        // 强制加await
        '@typescript-eslint/no-floating-promises': 'off',
        // 强制驼峰法命名
        camelcase: [
            2,
            {
                properties: 'always'
            }
        ],
        // 关闭箭头函数不能有返回值
        'no-return-assign': 'off',
        // JSX 属性中一致使用双引号或单引号
        'jsx-quotes': [2, 'prefer-double'],
        // 对象字面量中冒号的前后空格
        'key-spacing': [
            2,
            {
                beforeColon: false,
                afterColon: true
            }
        ],
        // 在关键字前后强制使用一致的空格
        'keyword-spacing': [
            2,
            {
                before: true,
                after: true
            }
        ],
        // 在调用没有参数的构造函数时强制或禁止使用圆括号
        'new-parens': 2,
        // 不允许“数组”构造函数
        'no-array-constructor': 2,
        // 不允许使用“arguments.caller”或“arguments.callee”
        'no-caller': 2,
        // 在条件表达式中禁止赋值操作符
        'no-cond-assign': 2,
        // 禁止对const变量重新赋值
        'no-const-assign': 2,
        // 在“函数”定义中禁止重复参数
        'no-dupe-args': 2,
        // 禁止使用' eval()
        'no-eval': 2,
        // 不允许多行空格
        'no-multi-spaces': 2,
        // 禁止使用' __proto__ '属性
        'no-proto': 2,
        // 不允许逗号操作符
        'no-sequences': 2,
        // 要求或不允许函数标识符与其调用之间有空格+
        'func-call-spacing': 2,
        // 在构造函数中调用super()之前禁止使用' this ' / ' super '
        'no-this-before-super': 2,
        // 禁止行尾有空格
        'no-trailing-spaces': 2,
        // 在' return '， ' throw '， ' continue '和' break '语句之后出现不可到达的代码，进行警告
        'no-unreachable': 1
    }
}
