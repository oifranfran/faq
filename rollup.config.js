import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import autoPreprocess from 'svelte-preprocess';
import yaml from 'rollup-plugin-yaml';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'build/bundle.js'
  },
  plugins: [
    yaml({
      include: 'src/**',
      exclude: ['node_modules/**'],
      transform(data) {
        if (Array.isArray(data)) {
          return data.filter((element) => !element.private);
        }
      },
    }),
    svelte({
      dev: !production,
      preprocess: autoPreprocess({}),
      css: css => {
        css.write('build/bundle.css');
      }
    }),
    resolve({
      browser: true,
      dedupe: ['svelte']
    }),
    commonjs(),
    production && terser()
  ],
  watch: {
    clearScreen: false
  }
};
