# vue-tribute

[![Build Status](https://travis-ci.org/syropian/vue-tribute.svg?branch=master)](https://travis-ci.org/syropian/vue-tribute)

> A Vue.js wrapper for Zurb's [Tribute](https://github.com/zurb/tribute) library for native @mentions.

## Install

```js
$ npm install vue-tribute --save
```

**or** include the UMD build, hosted by [npmcdn](https://npmcdn.com) in a `<script>` tag. You will also need to include the main Zurb Tribute library:

```js
<script src="js/tribute.js"></script>
<script src="//npmcdn.com/vue-tribute"></script>
```

## Usage

```js
import Vue from "vue";
import VueTribute from "vue-tribute";

Vue.use(VueTribute, options);
```

> The `options` parameter is optional.

...and inside your template, bind a dynamic `values` parameter to some data:

`<input type='text' :values='items' v-tribute />`

The `values` array should be an array of objects that contain a key and value like so:

```
[
  {key: "Phil Heartman", value: "pheartman"},
  {key: "Gordon Ramsey", value: "gramsey"}
]
```

You can modify this structure using the built-in [Tribute options](https://github.com/zurb/tribute#a-collection).

## License

MIT © [Collin Henderson](https://github.com/syropian)
