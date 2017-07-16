const path = require('path');

module.exports = () => {
    return {
        entry: {
            main: path.resolve(__dirname, './src/main.ts')
        },
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: '[name].bundle.js'
        },
        resolve: {
            extensions: ['.js', '.ts', '.html']
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loaders: [
                        'awesome-typescript-loader',
                        'angular2-template-loader'
                    ]
                },
                {
                    test: /\.html$/,
                    loader: 'raw-loader'
                }
            ]
        },
        devtool: 'inline-source-map'
    };
};