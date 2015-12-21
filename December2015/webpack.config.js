var webpack = require('webpack');
var nodeEnvironment = process.env.NODE_ENV

var config = {
  context: __dirname + '/src',
  entry: './index.js',
  plugins: [  
    new webpack.DefinePlugin({
      ENVIRONMENT: JSON.stringify(nodeEnvironment)
    })
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index.js',
  },
  resolve: {
    root: __dirname + '/src'
  },
  module: {
    loaders: [
      {
        test: /\.js$/, 
        exclude: /(node_modules)/, 
        loader: 'babel',  
        query: {
          presets: ['es2015', 'stage-0']
        }       
      }
    ]
  }
}

switch (nodeEnvironment) {
  case 'production':
    config.output.path = __dirname + '/dist';
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
    config.plugins.push(new webpack.optimize.DedupePlugin());
    config.plugins.push(new webpack.optimize.OccurenceOrderPlugin());
    
    config.output.filename = 'index.js';
    config.entry ='./index.js';
    // config.devtool = 'source-map';
    break;
    
  default: 
    console.warn('Unknown or Undefigned Node Environment. Please refer to package.json for available build commands.');
}

module.exports = config; 
