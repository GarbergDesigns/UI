const css_regex = '/\\.css$/'

module.exports = {
    webpackFinal(config = {}, options = {}) {
        console.log(JSON.stringify(config.module.rules))
        //const cssRule = config.module.rules.find(_ => )
        const rule = {
            test: /\.module\.css$/,
            use: [
            ]
        }
        /*
        const cssRule = config.module.rules.find(
            (_) => _.test.toString() === css_regex
        )
        return {
            ...config,
            module: {
                ...config.module,
                rules: [
                    ...config.module.rules.filter((_) => testfun !== css_regex),
                    {
                        ...cssRule,
                        exclude: /\.module\.css$/,
                    },
                    {
                        ...cssRule,
                        test: /\.module\.css$/,
                        use: cssRule.use.map((_) => {
                            if (_ && _.loader && _.loader.match(/[\/\\]css-loader/g)) {
                                return {
                                    ..._,
                                    options: {
                                        ..._.options,
                                        modules: {
                                            localIdentName: '[local]',
                                        },
                                    },
                                }
                            }
                            return _
                        }),
                    },
                ],
            },
        }*/
        return config;
    },
}