const path = require('path');
const HtmlWebpackPlugin =  require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  mode:'development',
  plugins:[
    new HtmlWebpackPlugin({
        filename:'index.html',
        template:'./src/index.html'
    }),
    new MiniCssExtractPlugin({
        filename: 'styles.css'

    })
  ],
  module:{
   rules:[
    {
     test: /\.(sa|sc|c)ss$/,
     use:[
        MiniCssExtractPlugin.loader,
        'css-loader'
     ]
     },
     {
        test:/\.css$/i,
        use:[
        'style-loader',
         'css-loader'
     ]
    },
    {
        test:/\.js$/,
        exclude: /node_modules/,
        use:{
            loader: 'babel-loader',
            options:{
                presets:['@babel/preset-env']
            }
        }
    }
        ]
  }
};