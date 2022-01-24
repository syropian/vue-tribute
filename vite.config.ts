import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const resolvePath = (str: string) => resolve(__dirname, str)

const isProd = process.env.NODE_ENV === 'production'

const devConfig = defineConfig({
  root: './demo',
  plugins: [vue()],
  build: {
    outDir: '../dist-demo',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'demo/index.html'),
      },
    },
  },
})

const prodConfig = defineConfig({
  build: {
    lib: {
      entry: resolvePath('lib/index.ts'),
      name: 'vue-tribute',
      fileName: format => `vue-tribute.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', 'tributejs'],

      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          tributejs: 'Tribute',
        },
      },
    },
  },
})

export default isProd ? prodConfig : devConfig
