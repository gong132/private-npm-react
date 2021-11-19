const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist'),
    libraryTarget:"umd"
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
 
  module: {
    rules: [
      {
        test: /\.html$/i,
        // 处理html文件的img图片(负责引入img,从而能被url-loader进行处理)
        loader: 'html-loader',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(le|c)ss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true // 模块化引入less
            },

          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
          }
        ]
      },
      {
        test: /\.(le|c|sa|ca)ss$/,
        include: /node_modules/, // 这里是为了解析ant中的样式
        use: [
          "style-loader",
          {
            loader: "css-loader",

          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/images/[hash][ext][query]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/font/[hash][ext][query]',
        },
      },
    ],
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  // },
  resolve: {
    // 配置省略文件路径的后缀名
    extensions: ['.tsx', '.ts', '.js'],
  },
};