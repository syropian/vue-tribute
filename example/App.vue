<template>
  <div class="container">
    <h1>vue-tribute Demo</h1>
    <h3>Simple text input</h3>
    <vue-tribute :options="options">
      <input
        type="text"
        placeholder="@..."
        @tribute-no-match="noMatchFound"
        ref="foo"
      >
    </vue-tribute>
    <br>
    <h3>Textarea</h3>
    <vue-tribute :options="options">
      <textarea placeholder="@..."></textarea>
    </vue-tribute>
    <br>
    <h3>contenteditable element</h3>
    <vue-tribute :options="options">
      <div
        class="content-editable"
        contenteditable="true"
        placeholder="@..."
      ></div>
    </vue-tribute>
    <br>
    <button
      @click="append"
      class="btn"
    >Append New Item</button>
  </div>
</template>
<script>
import VueTribute from "../src";
export default {
  components: {
    VueTribute
  },
  data() {
    return {
      options: {
        trigger: "@",
        values: [
          { key: "Collin Henderson", value: "syropian" },
          { key: "Sarah Drasner", value: "sarah_edo" },
          { key: "Evan You", value: "youyuxi" },
          { key: "Adam Wathan", value: "adamwathan" }
        ],
        positionMenu: false,
        menuContainer: document.querySelector(".menu-container")
      }
    };
  },
  mounted() {
    this.options.menuContainer = this.$refs.menuContainer;
  },
  methods: {
    noMatchFound() {
      console.log("No matches found!");
    },
    append() {
      let kv = Math.random()
        .toString(36)
        .slice(2);
      this.options.values.push({
        key: kv,
        value: kv
      });
    }
  }
};
</script>
<style lang="scss">
* {
  box-sizing: border-box;
}
html,
body {
  height: 100vh;
  width: 100vw;
}
body {
  background: linear-gradient(to right, #fc466b, #3f5efb);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: 'Helvetica Neue', 'Arial', sans-serif;
}
.scroll {
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
  position: relative;
}
.container {
  max-width: 355px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px;
}
.v-tribute {
  width: 100%;
}
input[type='text'],
.content-editable {
  appearance: none;
  border: none;
  background: #eee;
  padding: 1rem 1rem;
  color: #666;
  width: 100%;
  border-radius: 0.25rem;
  font-size: 16px;
  outline: none;
  &:focus {
    background: #fff;
  }
}
.content-editable:empty:before {
  content: attr(placeholder);
  display: block;
  color: #666;
}
textarea {
  appearance: none;
  border: none;
  background: #eee;
  padding: 1rem;
  width: 100%;
  border-radius: 0.25rem;
  font-size: 16px;
  height: 100px;
  outline: none;
  &:focus {
    background: #fff;
  }
}

.btn {
  appearance: none;
  border: none;
  cursor: pointer;
  margin: 20px 0;
  background: #fc466b;
  color: #fff;
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(#000, 0.18);
  &:hover {
    background: darken(#fc466b, 3%);
  }
}

// Tribute-specific styles
.tribute-container {
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  max-height: 300px;
  max-width: 500px;
  overflow: auto;
  display: block;
  z-index: 999999;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(#000, 0.13);
}
.tribute-container ul {
  margin: 0;
  margin-top: 2px;
  padding: 0;
  list-style: none;
  background: #fff;
  border-radius: 4px;
  border: 1px solid rgba(#000, 0.13);
  background-clip: padding-box;
  overflow: hidden;
}
.tribute-container li {
  color: #3f5efb;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;
}
.tribute-container li.highlight,
.tribute-container li:hover {
  background: #3f5efb;
  color: #fff;
}
.tribute-container li span {
  font-weight: bold;
}
.tribute-container li.no-match {
  cursor: default;
}
.tribute-container .menu-highlighted {
  font-weight: bold;
}
</style>
