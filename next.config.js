const path = require('path');
const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');

module.exports = withTypescript(withSass({

    webpack(config) {
        config.module.rules.push({
            test: /\.tsx?$/,
            use: [{
                loader: 'tslint-loader',
                options: {
                    configFile: path.resolve(__dirname, 'tslint.json'),
                },
            }]
        });

        return config;
    },
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]"
    }
}));