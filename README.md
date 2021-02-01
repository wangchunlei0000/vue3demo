# vue3demo

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Note

`安装 less-loader`

npm install less less-loader --save-dev

`安装 vue-router`

1、npm install vue-router

2、main.js 平级新建 router.js

3、main.js ->

- import 新建的 router.js

- createApp(App).use(router).mount('#app')

`安装ant design vue`

// npm install ant-design-vue --save
// 上面的安装之后编译错误，版本问题 使用下面的命令安装
npm i --save ant-design-vue@next -S

main.js ->
use(ant)
// 引入样式
import 'ant-design-vue/dist/antd.less' //'ant-design-vue/dist.antd.css'
