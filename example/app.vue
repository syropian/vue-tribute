<template>
  <textarea @keyup="syncToEditor">{{ editorDisplayVal }}</textarea>
  <prosemirror :content="editorVal" :on-change="editorChanged" menu-type="tooltip"></prosemirror>
</template>
<script>
  import VueProseMirror from "../";
  export default {
    name: "app",
    data(){
      return {
        editorVal: "",
        editorDisplayVal: ""
      }
    },
    ready(){
      console.log("Ready!")
    },
    methods: {
      editorChanged(raw, rendered){
        this.editorDisplayVal = raw;
        console.log(rendered)
      },
      syncToEditor($event){
        this.editorVal = $event.target.value;
      }
    },
    components: {
      prosemirror: VueProseMirror
    }
  }
</script>
<style>
.vueProseMirror .ProseMirror .ProseMirror-content{
  width: 500px;
  margin: 50px auto;
  border: 1px solid #eee;
  outline: none;
  padding: 10px;
}
</style>
