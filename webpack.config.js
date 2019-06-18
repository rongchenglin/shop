const path=require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const  htmlWebpackPlugin=require("html-webpack-plugin")
module.exports={
    entry:path.join(__dirname,"./src/main.js"),//入口，表示要打包那个文件
    output:{
         path:path.join(__dirname,"./dist"),
         filename:"bundle.js"
},
mode:"development",
plugins:[
    new htmlWebpackPlugin({
        template:path.join(__dirname,"./src/index.html"),
        filename:"index.html"
    }),
    new VueLoaderPlugin()
],
module:{
    rules:[
        {test:/\.css$/,use:["style-loader","css-loader"]},
        {test:/\.less$/,use:["style-loader","css-loader","less-loader"]},
        { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]' },
        {test:/\.(ttf|eot|svg|woff|woff2)$/,use:["url-loader"]},
        {test:/\.js$/,use:"babel-loader",exclude:/node_modules/},
        {test:/\.vue$/,use:"vue-loader"}
    ]
},
resolve:{
    alias:{
        "vue$":"vue/dist/vue.js"
    }
}
}