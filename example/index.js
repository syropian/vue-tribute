import Vue from "vue"
import VueInputAutosize from "../"

Vue.use(VueInputAutosize, { maxWidth: 500, minWidth: 20, comfortZone: 0 });

Vue.config.debug = true

new Vue({
  el: "body",
  replace: false,
  data(){
    return {
      msg: "Hello World!"
    }
  },
  methods: {
    setNewText(){
      this.msg = "This is some new text for you!";
    },
    clearText(){
      this.msg = "";
    }
  },
  template: `
  <div class="app">
    <h2>vue-input-autosize</h2>
    <input type='text' :value="msg" v-input-autosize placeholder="Enter text" class="textbox" />
    <div class="buttons">
      <button @click="setNewText">Set New Text</button>
      <button @click="clearText">Clear Text</button>
    </div>
  </div>
  `
});
