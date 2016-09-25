var path = require('path');
var webpack =  require('webpack');


module.exports = {

    devtool: "eval-source-map",

    entry: "./main.jsx",

    output: {
        path: __dirname,
        filename: "./build/bundle.js"
    },
    watch:true,

    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },

    module: {

        loaders:[
            {
                test: /.jsx?$/,
                loader: "babel",
                exclude:/node_modules/,
                query:{
                    presets:["es2015","react"]
                }
            },
            {
                test: /\.scss$/,
                include:path.join(__dirname, './'),
                loader: 'style!css!sass'
            }
        ]
    }

};