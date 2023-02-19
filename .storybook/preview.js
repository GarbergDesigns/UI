import { themes } from '@storybook/theming';

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    darkMode: {
        current: 'dark',
        dark: {
            appBg: '#1e2124',
            appContentBg: '#282b30',
            barBg: '#36393e',
            barSelectedColor: 'white',
            barTextColor: 'white',
            brandTitle: 'Garberg Designs'
        },
        light: { ...themes.normal, brandTitle: 'Garberg Designs' }
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}