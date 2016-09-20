import webpack from 'webpack';
import dir from './path';

export default {
    watch: true,
    context: dir.SRC,
    entry: {
        bundle: `${dir.SRC}/index.js`,
        vendor: ['lodash']
    },
    devtool : 'source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            INCLUDE_ALL_MODULES(modulesArray, application) {
                modulesArray.forEach((moduleFn) => {
                    moduleFn(application);
                });
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor', minChunks: Infinity})
    ],
    output: {
        path: dir.DIST.BASE,
        filename: '[name].js'
    },
    resolve: {
        root: dir.SRC
    },
    jscs: {
        emitErrors: true,
        failOnHint: true
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: dir.NODE_MODULES,
                loader: 'jscs-loader'
            }
        ],
        loaders: [
            {test: /\.js$/, exclude: dir.NODE_MODULES, loader: 'babel-loader'},
            {test: /\.html$/, exclude: dir.NODE_MODULES, loader: 'html'},
            {test: /\.css$/, exclude: dir.NODE_MODULES, loader: 'style!css'},
            {test: /\.(png|jpg)$/, exclude: dir.NODE_MODULES, loader: 'url-loader?mimetype=image/png'}
        ]
    }
};
