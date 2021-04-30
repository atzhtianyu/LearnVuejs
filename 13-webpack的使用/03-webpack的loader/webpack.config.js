const path = module.require('path');

module.exports = {
  // 入口：可以是字符串，数组，对象，这里入口只有一个，所以写一个字符串即可
  entry: './src/main.js',
  // 出口：通常是一个对象，至少包含两个重要属性，path和filename
  output: {
    path: path.resolve(__dirname, 'dist'),  // 注意：path通常是一个绝对路径
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader只负责将css文件加载
        // style-loader负责将样式添加到DOM中
        // 使用多个loader时，是 从右向左 的顺序
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片，小于limit时，会将图片编译成base64字符串形式
              // 当加载的图片，大于limit时，需要使用file-loader模块进行加载
              limit: 13000,
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  }
}