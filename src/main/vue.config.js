/**
 * created by Jason on 2018-11-8
 * 
 * see https://cli.vuejs.org/zh/config/ for documentation.
 * 
 * vue.config.js 是一个可选的配置文件，
 * 如果项目的 (和 package.json 同级的) 根目录中存在这个文件，那么它会被 @vue/cli-service 自动加载。
 */

const PORT = 7000;

module.exports = {
    // 部署应用包时的基本 URL
    publicPath: '/',

    // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录
    outputDir: './dist/',

    // 生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir: './statics/',

    // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
    indexPath: '/',

    // To make lint errors show up in the browser overlay
    lintOnSave: 'error',

    // 生产环境的 source map
    productionSourceMap: false,

    // 开发模式
    devServer: {
        // 指定本地代理端口号
        port: PORT,
        // 自动代理到指定服务器
        proxy: {
            '/new': {
                target: 'http://localhost',
                ws: true,
                changeOrigin: true,
            }
        },
        // display both warnings and errors on the browser overlay
        overlay: {
            warnings: true,
            errors: true
        },
        // 自动打开默认浏览器
        open: true,
    },
};

