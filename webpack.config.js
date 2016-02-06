module.exports = {
    entry: './src/main.js',
    output: {
        path:  `${__dirname}/public/static/build/`,
        filename: 'main.js',
        publicPath: '/build/'
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'react-hot!babel!eslint-loader', exclude: [/node_modules/] },
            { test: /\.js$/, loader: 'babel!eslint-loader', exclude: [/node_modules/] },
            { test: /\.gif$/, loader: 'url-loader?limit=10000&mimetype=image/gif' },
            { test: /\.jpg$/, loader: 'url-loader?limit=10000&mimetype=image/jpg' },
            { test: /\.png$/, loader: 'url-loader?limit=10000&mimetype=image/png' },
            { test: /\.svg/, loader: 'url-loader?limit=26000&mimetype=image/svg+xml' },
            { test: /\.(woff|woff2|ttf|eot)/, loader: 'url-loader?limit=1' },
            { test: /\.json$/, loader: 'json-loader'},
            { test: /\.css$/, loader: 'style-loader!css-loader!autoprefixer-loader' },
            { test: /\.less$/, loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'}
        ]
    },
    eslint: {
        configFile: '.eslintrc'
    }
};