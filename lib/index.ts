import type { App, Plugin } from 'vue'
import { VueTribute } from './vue-tribute'

const install = (app: App) => {
  app.component(VueTribute.name, VueTribute)
}

VueTribute.install = install

export { VueTribute }
export default VueTribute as unknown as Plugin
