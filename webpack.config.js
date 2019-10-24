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
	optimization: {
		splitChunks: {
			cacheGroups: {
				styles: {
					name: 'styles',
					test: /\.css$/,
					chunks: 'all',
					enforce: true,
				},
			},
		},
	},
	module: {
		rules: [
		{
			test: /\.css$/,
			use: [
				{
					loader: MiniCssExtractPlugin.loader,
					options: {
						publicPath: './assets/css/'
					}
				},
				'css-loader',
				'postcss-loader'
				// 'vue-style-loader',
				// {
				// 	loader: 'css-loader',  options: {sourceMap: true}
				// },
				// {
				// 	loader: 'postcss-loader',  options: {sourceMap: true}
				// }


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
		//new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			title: 'Webpack Config',
			template: './src/index.pug'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		new VueLoaderPlugin()
	]


}
