<template>
  <input type="text" v-input-autosize v-model="foo" placeholder="Butts" />
</template>
<script>
  import Vue from "vue";
  import VueInputAutosize from "../";

  Vue.use(VueInputAutosize);

  export default {
    name: "app",
    ready(){
      console.log("Ready!")
    },
    data(){
      return {
        foo: "Hello"
      }
    }
  }
</script>
