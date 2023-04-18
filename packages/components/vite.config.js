import path from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import DefineOptions from 'unplugin-vue-define-options/vite';
import dts from 'vite-plugin-dts'; // 自动生成类型文件
// import babel from 'vite-plugin-babel';  // 转义ES5
// import babel from 'rollup-plugin-babel';
// import legacy from '@vitejs/plugin-legacy'

/// <reference types="vitest" />
export default defineConfig({
  resolve: {
    '@': path.join(__dirname),
  },
  build: {
    outDir: 'es',
    minify: false,
    rollupOptions: {
      input: ['./index.ts'],
      external: ['vue'],
      output: {
        // file: './dist/index.js',
        entryFileNames: '[name].js',
        preserveModules: true,
        format: 'esm',
        dir: './dist',
        globals: {
          vue: 'Vue',
        },
      },
      plugins: [
        babel({
          babelConfig: {
            presets: ['@babel/preset-env'],
          },
        }),
      ],
    },
    lib: {
      entry: path.join(__dirname, './components/index.ts'),
      name: 'torrer-ui',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
  },
  plugins: [
    vue(),
    dts({
      entryRoot: './components',
      // outputDir: ["./dist/es/src"],
      tsConfigFilePath: '../../tsconfig.json',
    }),
    DefineOptions(),
  ],
  test: {},
});
