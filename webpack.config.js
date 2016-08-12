module.exports = {
  entry: './src/index.tsx',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ['babel-loader?presets[]=react,presets[]=es2015', 'ts'],
        exclude: /(node_modules|test-utils)/
      },
       {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: [ 'es2015', 'react' ] }
      }
    ]
  },
  resolve: {
    root: ['./src'],
    extensions: ['', '.jsx', '.js', '.tsx', '.ts']
  }
};
