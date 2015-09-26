var webpack = require('webpack');

module.exports = {
    entry: {
        app: ['webpack/hot/dev-server', './src/js/app.js'], // use dev server and watch app.js as start file
    },

    output: {
        path: './public/build',
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/build/'
    },

    devServer: {
        contentBase: './public',
        publicPath: 'http://localhost:8080/build/'
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]

}