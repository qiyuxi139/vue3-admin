module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2020: true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
    ecmaVersion: 2020
  },
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
    cy: true,
    Cypress: true,
    assert: true
  },
  plugins: [
    "@cypress/dev"
  ],
  extends: [
    "plugin:prettier/recommended",
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:@cypress/dev/tests"
  ],
  rules: {
    "vue/no-dupe-keys": [
      "error",
      {
        groups: []
      }
    ], // 防止重复的属性名称
    "vue/no-lone-template": [
      "error",
      {
        ignoreAccessible: false
      }
    ],
    "vue/no-deprecated-v-is": 2,
    "vue/no-dupe-v-else-if": 2, // 不允许在同一 v-if / v-else-if chai 中出现重复条件
    "no-console": process.env.NODE_ENV === "production" ? 1 : 0,
    "no-debugger": process.env.NODE_ENV === "production" ? 1 : 0,
    "no-var": 1,
    "semi": 1,
    "quotes": [1, "double"],
    "key-spacing": 2, // 强制在对象字面量的属性中键和值之间使用一致的间距
    "camelcase": 2,
    "eol-last": 1,
    "eqeqeq": 1,
    "indent": [2, 2],
    "new-cap": 0,
    "newline-after-var": 0, // 变量声明后是否需要空一行
    "no-const-assign": 2, // 禁止修改const声明的变量
    "no-duplicate-case": 2, // switch中的case不能重复
    "no-else-return": 2, // 如果if语句里面有return,后面不能跟else语句
    "no-empty": 2, // 块语句内容不能为空
    "no-empty-character-class": 2, // 正则表达式中的[]内容不能为空
    "no-ex-assign": 2, // 禁止给catch语句中的异常参数赋值
    "no-extra-parens": 0, // 禁止非必要的括号
    "no-extra-semi": 2, // 禁止多余的冒号
    "no-multi-spaces": 1, // 不能用多余的空格
    "no-redeclare": 2, // 禁止重复声明变量
    "no-trailing-spaces": 1, // 一行结束后面不要有空格
    "object-curly-spacing": [1, "always", { arraysInObjects: true, objectsInObjects: true }], // 大括号内是否允许不必要的空格
    "sort-vars": 0, // 变量声明时排序
    "space-after-keywords": [0, "always"], // 关键字后面是否要空一格
    "use-isnan": 1,
    "default-case": 2,
    "curly": 1,
    "no-multi-str": 2, // 禁止使用多行字符串
    "no-self-assign": 2, // 禁止自我赋值
    "no-self-compare": 2, // 禁止自身比较
    "no-unmodified-loop-condition": 2, // 禁用一成不变的循环条件
    "no-unused-expressions": 0, // 禁止出现未使用的表达式
    "no-useless-call": 1, // 禁止不必要的 .call() 和 .apply()
    "array-bracket-spacing": [
      1,
      "never",
      { singleValue: false, objectsInArrays: false, arraysInArrays: false }
    ],
    "semi-spacing": ["error", { before: false, after: true }], // 分号前后是否有空格
    "comma-spacing": [2, { before: false, after: true }], // 控制逗号前后的空格
    "no-mixed-spaces-and-tabs": 1, // 不允许空格和 tab 混合缩进
    "space-infix-ops": 1, // 强制操作符旁边有空格
    "no-dupe-keys": 2, // 禁止对象字面量中出现重复的key
    "no-dupe-args": 2, // 禁止 function 定义中出现重名参数
    "no-undef": 2, // 使用未定义变量报错
    "no-duplicate-imports": 2 // 禁止重复导入
  }
};
