const path = require('path')
var webpack = require("webpack")
module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/dist',
        publicPath: '/static/',
        filename: 'build.js'
    },
    resolve:{
        extensions: ['.js', '.vue', '.json'], 
        alias:{
              '@': path.join(__dirname, 'src')
        }
        
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ["vue-loader"]
            },
            {
                test: /\.js$/,
                use: "babel-loader",
                include: [path.resolve(__dirname, 'src')]
            }
        ]
    },
    plugins: [ 
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery"
        })
    ]
}