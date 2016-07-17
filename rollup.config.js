import { rollup } from "rollup"
import babel from "rollup-plugin-babel"
import vue from "rollup-plugin-vue";

const env = process.env.BUILD_ENV
const dest = env === "cjs" ? "index.js" : "index.umd.js"

export default {
  entry: "./src/index.vue",
  dest,
  plugins: [
    vue()
  ],
  format: env,
  moduleName: "VueProseMirror"
}
