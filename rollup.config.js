import { rollup } from "rollup"
import babel from "rollup-plugin-babel"

const env = process.env.BUILD_ENV
const dest = env === "cjs" ? "index.js" : "index.umd.js"

export default {
  entry: "./src/index.js",
  external: [ "tributejs" ],
  plugins: [ babel() ],
  dest,
  format: env,
  moduleName: "VueTribute",
  globals: {
    tributejs: "Tribute"
  }
}
