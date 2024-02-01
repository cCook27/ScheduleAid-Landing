const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'public'), // Output directory is 'public'
    filename: 'bundle.js', // Output bundle file name
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Use Babel for all JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // Add this rule to handle CSS files
        use: [
          'style-loader', // Adds CSS to the DOM by injecting a <style> tag
          'css-loader', // Interprets @import and url() like import/require() and resolves them
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Serve from the 'public' directory
    },
    port: 9000, // Port for development server
  },
};


