const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/assets/js/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'assets/js/[name].js'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
		{
			test: /\.css$/,
			use: [
				'vue-style-loader',
				{
					loader: 'css-loader',  options: {sourceMap: true}
				},
				{
					loader: 'postcss-loader',  options: {sourceMap: true}
				}


			]
		},
		{

			test: /\.pug$/,
			use: ['pug-loader']
		},
		{
			test: /\.vue$/,
			loader: 'vue-loader'
		}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			title: 'Webpack Config',
			template: './src/index.pug'
		}),
		new MiniCssExtractPlugin({
			filename: 'style.css'
		}),
		new VueLoaderPlugin()
	]


}
