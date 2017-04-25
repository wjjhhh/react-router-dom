/**
 * Created by Employee on 2017/3/14.
 */
var webpack = require('webpack');

module.exports = {
    entry: [
        "./src/index.js"
    ],
    output: {
        filename: "build/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.(jsx|js)$/,
                exclude:/node_modules/,//屏蔽不需要处理的文件(夹)（可选）,
                loader: 'babel-loader',

            },
        ]
    },

};