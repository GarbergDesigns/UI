import { babel } from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss-modules'
import del from 'rollup-plugin-delete'
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);


export default [
    {
        input: "./src/index.ts",
        output: [
            {
                file: "dist/index.js",
                format: "cjs",
            },
            {
                file: "dist/index.es.js",
                format: "es",
                exports: "named",
            },
        ],
        plugins: [
            external(),
            typescript(),
            babel({
                exclude: "node_modules/**",
                presets: ["@babel/preset-react", '@babel/env'],
                babelHelpers: "runtime",
                extensions: [".js", ".ts", ".jsx", ".tsx"],
            }),
            commonjs({
                ignoreGlobal: false,
                include: 'node_modules/**',
            }),
            postcss({
                plugins: [
                    require('postcss-import'),
                    require('tailwindcss'),
                    require('autoprefixer'),
                ],
                minimize: true,
                sourceMap: false,
                minimize: true,
                modules: {
                    generateScopedName: '[local]',
                },
            }),
            resolve({
                ignoreGlobal: false,
                include: ['node_modules/**'],
                extensions: [".js", ".ts", ".jsx", ".tsx"],
            }),
            terser(),
            del({ targets: ['dist/*'] }),
        ],
    },
];
