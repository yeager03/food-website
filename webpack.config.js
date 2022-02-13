let path = require("path");

let conf = {
	entry: './js/main.js',
	output: {
		path: path.resolve(__dirname, './js/'),
		filename: 'bundle.js',
		publicPath: 'js/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			}
		]
	}
};
module.exports = (env, options) => {
	let isProd = options.mode === 'production';
	conf.devtool = isProd ? 'none' : 'eval-cheap-module-source-map';
	return conf;
};



