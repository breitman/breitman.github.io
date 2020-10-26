const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  mode: isDev,
  entry: [
// enables async-await
    './src/index.js'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: '',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ]
  },
}
