import Vue from "vue"
import VueTribute from "../"

Vue.use(VueTribute);

Vue.config.debug = true

new Vue({
  el: "body",
  replace: false,
  data(){
    return {
      items: [
        {key: "Phil Heartman", value: "pheartman"},
        {key: "Gordon Ramsey", value: "gramsey"}
      ]
    }
  },
  methods: {
    replaceItems(){
      this.items = [
        {key: "Collin Henderson", value: "syropian"},
        {key: "Amanda Glover", value: "glovelyyy"},
        {key: "Daniel Hritzkiv", value: "dhritzkiv"},
      ];
    }
  },
  template: `
  <div class="app">
    <h2>vue-tribute</h2>
    <input type="text" :values="items" placeholder="Enter text" class="textbox" v-tribute />
    <div class="buttons">
      <button @click="replaceItems">Replace Items</button>
    </div>
  </div>
  `
});
