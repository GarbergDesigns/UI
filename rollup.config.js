import { babel } from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import commonjs from '@rollup/plugin-commonjs'

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
            babel({
                exclude: "node_modules/**",
                presets: ["@babel/preset-react"],
                babelHelpers: "runtime",
            }),
            commonjs({
              ignoreGlobal: false,
              include: 'node_modules/**',
            }),
            external(),
            resolve(),
            typescript(),
            terser(),
        ],
    },
];
