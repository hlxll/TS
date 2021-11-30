const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
let webpack = require("webpack");
module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
        //新版webpack打包的js。默认是被一个箭头函数包裹的。这样ie11就会不支持
        //告诉webpack不适用箭头函数
        environment: {
            arrowFunction: false
        }
    },
    //设置引用模板
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
            test: /\.ts$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            //指定环境的插件
                            "@babel/preset-env",
                            {
                                targets: {
                                    //兼容的目标浏览器
                                    "chrome": "88",
                                },
                                //指定corejs版本
                                "corejs": "3",
                                "useBuiltIns": "usage"
                            }
                        ]
                    ]
                }
            }, 'ts-loader']
        }, {
            test: /\.less$/,
            use: [
                "style-loader",
                "css-loader",
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [
                                // [require('postcss-preset-env')()],
                                [
                                    "postcss-preset-env",
                                    {
                                        browsers: "last 2 versions"
                                    }
                                ]
                            ]
                        }
                    }
                },
                "less-loader"
            ]
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ]
}