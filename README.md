# vue-input-autosize

[![Build Status](https://travis-ci.org/syropian/vue-input-autosize.svg?branch=master)](https://travis-ci.org/syropian/vue-input-autosize)

> A simple Vue.js directive for autosizing a text input based on its content.

## Install

```js
$ npm install vue-input-autosize --save
```

**or** include the UMD build, hosted by [npmcdn](https://npmcdn.com) in a `<script>` tag:

```js
<script src="//npmcdn.com/vue-input-autosize"></script>
```

## Usage

```js
import Vue from "vue";
import VueInputAutosize from "vue-input-autosize";

Vue.use(VueInputAutosize, { maxWidth: 500, minWidth: 20, comfortZone: 0 });
```

...and inside your template:

`<input type='text' :value='msg' v-input-autosize />`

### Why bind to `value` instead of using `v-model`?
Currently, there's no easy way to track changes to a `v-model` value from a directive. However, since the `value` property of a text field controls its content, and is also a valid parameter to watch for updates from the directive, we can dynamically bind to that instead.

## License

MIT © [Collin Henderson](https://github.com/syropian)
