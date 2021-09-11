const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
    //...
    optimization: {
        minimize: false,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    keep_classnames: true,
                    keep_fnames: true
                }
            })
        ]
    }
};
