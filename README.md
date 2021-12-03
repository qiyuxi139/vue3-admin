# vite+vue3后台

## 安装运行

  - npm install

## 编译条件

```json
{
"scripts": {
    "dev": "vite", // 运行
    "serve": "vite preview", // 预览打包状态
    "dev:mock": "cross-env USE_MOCK=true vite --mode mock", // 开发数据模拟
    "dev:staging": "vite --mode staging", // 临时工作台环境
    "dev:prod": "vite --mode production", // 生产环境
    "build:dev": "vite build --mode devlopment", // 开发环境打包
    "build:prod": "vite build --mode production",
    "build:staging": "vite build --mode staging",
    "lint": "eslint --ext .js,.vue src/", // eslint检查
    "prepare": "husky install",
    "cy:open": "cypress open", // 打开cypress
    "cy:run": "cypress run", // e2e测试
    "prepare": "husky install",
    "test:e2e": "cross-env AUTO_OPEN_BROWESR=false start-server-and-test dev http-get://localhost:3000 cy:run", // 启动开发服务器并测试
    "test:mock:e2e": "cross-env AUTO_OPEN_BROWESR=false start-server-and-test dev:mock http-get://localhost:3000 cy:run" // 启动mock并测试
  }
}
```

## 结构目录

```
.
├── .husky                     # git hooks
├── .vscode                    # vs编辑器配置，用于自动格式化
├── cypress                    # e2e测试文件
├── mock                       # 项目mock 模拟数据
├── plugins                    # 插件
│   └── svgBuilder.js          # 处理svg icon图标
├── public                     # 静态资源
│   └── favicon.ico            # favicon图标
├── src                        # 源代码
│   ├── apis                   # 所有请求
│   ├── assets                 # 主题 字体等静态资源
│   │   ├── images             # 静态图片
│   │   ├── styles             # scss 全局样式、变量、重置等
│   │   └── svg                # 项目所有 svg icons
│   ├── components             # 全局公用组件
│   ├── directive              # 全局指令
│   ├── hooks                  # 全局 hooks
│   ├── lang                   # 国际化 language
│   ├── layout                 # 全局 layout
│   ├── router                 # 路由
│   ├── store                  # 全局 store管理
│   ├── utils                  # 全局公用方法
│   ├── views                  # views 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
├── .editorconfig              # 代码风格配置
├── .env.xxx                   # 环境变量配置
├── .eslintignore.js           # eslint 忽略规则
├── .eslintrc.js               # eslint 配置项
├── .gitignore.js              # git 忽略配置
├── .prettierignore.js         # prettier忽略配置
├── .prettierrc.js             # prettier配置
├── .cypress.json              # cypress测试配置
├── index.html                 # 项目html模板
├── jsconfig.json              # 项目html模板
├── package-lock.json          # 语言服务
├── package.json               # 项目html模板
└── vite.config.js             # vite配置
```

## 路由配置

所在项目路径：/src/router

**路由对象**

- id
- name 路由对象名称 唯一
- path 页面路径
- component 加载的组件
- alwaysShow 总是展示 表示这个配置总是显示在菜单栏
- redirect 重定向地址 值为 noRedirect 的话 在面包屑导航中该项无导航功能
- meta 元信息
  - title 在菜单栏标题
  - icon 在菜单栏展示的前缀icon 值是/src/assets/svg下的svg文件名
  - parentId 父页面id 该项是为了在面包屑导航显示层级中展示某一项 需要配合 id和name属性
  - parent 父页面信息 和parenId功能相同 可二选一
    - path 路劲
    - title 名称
- children 子页面