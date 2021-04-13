# Vue Project Example

一个简单的 Vue 前端项目脚手架例子

- 使用 Element UI 做 UI 组件
- 自动化引入 Icon svg 图标
- 模块化添加 Vuex 全局状态
- 根据路由动态切换页面 title
- 封装 Promise 来模拟请求 mock 数据
- 添加 normalize.css (使不同浏览器默认样式保持一致)
- 使用 ESLint + Standard 格式化代码

## 命令

初始化

```sh
yarn install
```

运行

```sh
yarn start
```

打包

```sh
yarn build
```

修复代码格式错误

```sh
yarn lint
```

## 添加 svg

假如我在 `src/icons/svg` 目录下添加了一个 `bag-check.svg` ，在项目中以以下方式引入即可

```vue
<icon-svg name="bag-check" />
```

`jsconfig.json` 配置参考：[https://code.visualstudio.com/docs/languages/jsconfig#_what-is-jsconfigjson](https://code.visualstudio.com/docs/languages/jsconfig#_what-is-jsconfigjson)