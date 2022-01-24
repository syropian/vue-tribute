/// <reference types="vitest" />
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [Vue()],
  test: {
    include: ['./lib/test/**/*.test.ts'],
    globals: true,
    environment: 'jsdom',
  },
})
