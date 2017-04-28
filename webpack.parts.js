const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const GitRevisionPlugin = require('git-revision-webpack-plugin');
const BabiliPlugin = require('babili-webpack-plugin');

const cssnano = require('cssnano');
const HtmlWebpackPlugin = require('html-webpack-plugin');

exports.devServer = ({ host, port } = {}) => ({
	devServer: {
		historyApiFallback: true,
		stats: 'errors-only',
		host, // Defaults to `localhost`
		port, // Defaults to 8080
		overlay: {
			errors: true,
			warnings: true,
		},
	},
});

exports.lintJavaScript = ({ include, exclude, options }) => ({
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				include,
				exclude,
				enforce: 'pre',

				loader: 'eslint-loader',
				options,
			},
		],
	},
});

exports.loadCSS = ({ include, exclude } = {}) => ({
	module: {
		rules: [
			{
				test: /\.css$/,
				include,
				exclude,

				use: ['style-loader',
					'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]'],
			},
		],
	},
});

exports.extractCSS = ({ include, exclude, use }) => {
	// Output extracted CSS to a file
	const plugin = new ExtractTextPlugin({
		filename: '[name].[contenthash:8].css',
	});

	return {
		module: {
			rules: [
				{
					test: /\.css$/,
					include,
					exclude,

					use: plugin.extract({
						use,
						fallback: 'style-loader',
					}),
				},
			],
		},
		plugins: [plugin],
	};
};

exports.loadImages = ({ include, exclude, options } = {}) => ({
	module: {
		rules: [
			{
				test: /\.(png|jpg|svg)$/,
				include,
				exclude,

				use: {
					loader: 'url-loader',
					options,
				},
			},
		],
	},
});

exports.loadFonts = ({ include, exclude, options } = {}) => ({
	module: {
		rules: [
			{
				// Capture eot, ttf, woff, and woff2
				test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
				include,
				exclude,

				use: {
					loader: 'file-loader',
					options,
				},
			},
		],
	},
});

exports.generateSourceMaps = ({ type }) => ({
	devtool: type,
});

exports.extractBundles = (bundles) => ({
	plugins: bundles.map((bundle) => (
		new webpack.optimize.CommonsChunkPlugin(bundle)
	)),
});

exports.loadJavaScript = ({ include, exclude }) => ({
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				include,
				exclude,

				loader: 'babel-loader',
				

				query: {
					plugins: [
						'transform-react-jsx',
						'react-css-modules'
					]
				},
			},
		],
	},
});

exports.clean = (path) => ({
	plugins: [
		new CleanWebpackPlugin([path]),
	],
});

exports.attachRevision = () => ({
	plugins: [
		new webpack.BannerPlugin({
			banner: new GitRevisionPlugin().version(),
		}),
	],
});

exports.minifyJavaScript = () => ({
	plugins: [
		new BabiliPlugin(),
	],
});

exports.setFreeVariable = (key, value) => {
	const env = {};
	env[key] = JSON.stringify(value);

	return {
		plugins: [
			new webpack.DefinePlugin(env),
		],
	};
};

exports.page = ({
  path = '',
	template = 'index.ejs',
	title,
	appMountId,
	entry,
	chunks,
} = {}) => ({
		entry,
		plugins: [
			new HtmlWebpackPlugin({
				chunks,
				filename: `${path && path + '/'}index.html`,
				template,
				appMountId,
				title,
			}),
		],
	});
