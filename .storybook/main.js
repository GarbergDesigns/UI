const path = require('path')

module.exports = {
    "stories": ["../src/components/**/*.stories.@(js|jsx|ts|tsx)"],
    "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "storybook-addon-themes"],
    "framework": {
        name: "@storybook/react-webpack5",
        options: { fastRefresh: true }
    },
    "docs": {
        autodocs: 'tag',
        defaultName: 'Documentation'
    },
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.css$/,
            use: [
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [
                                require('tailwindcss'),
                                require('autoprefixer'),
                            ],
                        },
                    },
                },
            ],
            include: path.resolve(__dirname, '../'),
        })
        return config
    },
}