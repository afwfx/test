let webpack = require('webpack')
module.exports = {
    publicPath: '/',
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $:"jquery",
                jQuery:"jquery",
                "windows.jQuery":"jquery"
            })
        ]
    },
    // devServer: {
    //     proxy: {
    //         '/api': {
    //             target: 'https://www.easy-mock.com/mock/5c0ab0783aa0111c1655db2e/example',
    //             changeOrigin: true,
    //             ws: true,
    //             pathRewrite: {
    //                 '^/api': ''
    //             }
    //         },
    //     }
    // }
}