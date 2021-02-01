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

安装 less-loader

npm install less less-loader --save-dev

安装 vue-router

npm install vue-router

main.js 平级新建 router.js

main.js ->

import 新建的 router.js

let app = createApp(App)
app.use(router)
app.mount('#app')
