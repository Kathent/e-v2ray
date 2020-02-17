const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [{
        mode: 'development',
        entry: './src/app.ts',
        target: 'electron-main',
        module: {
            rules: [{
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'ts-loader',
                }]
            }]
        },
        output: {
            path: __dirname + '/dist',
            filename: '[name].js'
        }
    },
    {
        mode: 'development',
        entry: './src/index.tsx',
        target: 'electron-renderer',
        resolve: {
            extensions: ['.ts', '.tsx', '.js']
        },
        module: {
            rules: [{
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'ts-loader'
                }]
            }, {
                test: /\.(jpg|png|gif|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images'
                    }
                }]
            }]
        },
        output: {
            path: __dirname + '/dist',
            filename: 'app.js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ],
    },
]