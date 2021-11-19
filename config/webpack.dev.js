const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    entry: './src/index.tsx',
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        // 启动gzip 压缩
        compress: true,
        // 端口号
        port: 8088,
        open: true,
        hot: true,
    },
});