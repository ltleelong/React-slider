/**
 * Created by ltleelong on 2017/4/7.
 */
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry:'./src/index.js',
    output:{
        path: path.resolve('./build'),
        filename:('bundle.js')
    },
    devServer:{
        port:8080,
        inline:true,
        contentBase:'./build'
    },
    module:{
        loaders:[
            {
                test:/\.jsx?$/,
                loader:'babel-loader',
                query:{
                    presets:['react','es2015']
                },
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            },
            {
                test:/\.(png|jpg)$/,
                loader:'url-loader'
            }
        ]
    },
/*    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]*/
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}