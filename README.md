# vue-input-autosize

[![Build Status](https://travis-ci.org/syropian/vue-input-autosize.svg?branch=master)](https://travis-ci.org/syropian/vue-input-autosize)

> A simple Vue.js directive for autosizing a text input based on its content.

## Install

```js
$ npm install vue-input-autosize --save
```

## Usage

```js
import Vue from "vue";
import VueInputAutosize from "vue-input-autosize";

Vue.use(VueInputAutosize, { maxWidth: 500, minWidth: 20, comfortZone: 0 });
```

...and inside your template:

`<input type='text' :value='msg' v-input-autosize />`

## License

MIT © [Collin Henderson](https://github.com/syropian)
