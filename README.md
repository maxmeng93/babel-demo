# 最小化 babel 示例(ts)

## 配置方案

### babel-loader + @babel/preset-typescript 方案
- 这种方案，当 webpack 编译的时候，babel-loader 会读取 .babelrc 里的配置，不会调用 typescript（所以本地项目无需安装 typescript），不会去检查类型
- 但是 tsconfig.json 是需要配置的，因为需要在开发代码时，让 idea 提示错误信息
- 使用这种方案，有4种 ts 语法不能使用

```js
const webpackConfig = {
  module: {
    rules: [{
      test: /.tsx?$/,
      use: [
        "babel-loader"
      ]
    }]
  }
}
```

```json
// babel.config.json
{
  "presets": [
    "@bable/preset-env",
    "@bable/preset-typescript"
  ]
}
```

```json
{
  "scripts": {
     // 再开一个 npm 脚本自动检查类型
    "type-check": "tsc --watch",
  }
}
```

### ts-loader + babel-loader + fork-ts-checker-webpack-plugin(类型检查) 方案
- 这种方案，当 webpack 编译的时候，ts-loader 会调用 typescript（所以本地项目需要安装 typescript），然后 typescript 运行的时候会去读取本地的 tsconfig.json 文件。
- 默认情况下，ts-loader 会进行 转译 和 类型检查，每当文件改动时，都会重新去 转译 和 类型检查，当文件很多的时候，就会特别慢，影响开发速度。所以需要使用 fork-ts-checker-webpack-plugin ，开辟一个单独的线程去执行类型检查的任务，这样就不会影响 webpack 重新编译的速度。
- fork-ts-checker-webpack-plugin  这个插件要求最低 Node.js 6.11.5，webpack 4，TypeScript 2.1 和可选的 ESLint 6（其本身要求最低 Node.js 8.10.0）。

#### cache-loader
- 在一些性能开销较大的 loader 之前添加此 loader，以将结果缓存到磁盘里。
- 请注意，保存和读取这些缓存文件会有一些时间开销，所以请只对性能开销较大的 loader 使用此 loader。

#### thread-loader
使用并行化构建提升速度

```js
const ForkTsCheckerWebpackPlugin = require ('fork-ts-checker-webpack-plugin');

const webpackConfig = {
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: [
          {
            loader: "cache-loader" // 缓存
          },
          {
            loader: "thread-loader" // 类似 happypack
          },
          {
            loader: "babel-loader"
          },
          {
            loader: "ts-loader",
            options: {
              // 禁用类型检查。
              // 将使用ForkTsCheckerWebpackPlugin插件，在单独的进程上检查ts类型
              transpileOnly: true,
              happyPackMode: true,
              // 如果是 vue 应用，需要配置
              appendTsxSuffixTo: [
                '\\.vue$'
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(
      {
        typescript: {
          extensions: {
            vue: {
              enabled: true,
              compiler: '@vue/compiler-sfc'
            }
          },
          diagnosticOptions: {
            semantic: true,
            syntactic: true
          }
        }
      }
    )
  ]
}
```
## 参考
https://mp.weixin.qq.com/s/lVd-kXDUH7kSwkYQEvQO4Q  
https://juejin.cn/post/6844904052094926855