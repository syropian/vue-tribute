# vue-tribute

[![Build Status](https://travis-ci.org/syropian/vue-tribute.svg?branch=master)](https://travis-ci.org/syropian/vue-tribute)

> A Vue.js wrapper for Zurb's [Tribute](https://github.com/zurb/tribute) library for native @mentions.

## Install

```js
$ npm install vue-tribute --save
```

**or** include the UMD build, hosted by [unpkg](https://unpkg.com) in a `<script>` tag. You will also need to include the main Zurb Tribute library:

```js
<script src="js/tribute.js"></script>
<script src="//unpkg.com/vue-tribute"></script>
```

## Usage

```js
import Vue from "vue";
import VueTribute from "vue-tribute";

Vue.use(VueTribute, globalOptions);
```

> The `globalOptions` parameter is optional.

...and inside your template, bind a dynamic `values` parameter to some data:

```
<input type='text'
    v-tribute='tributeUsers'
    :tributeoptions='{ trigger:"#" }' />
```

The value of `v-tribute` should be an array of objects that contain a `key` to search and a `value` to be inserted. We recommend using a Vue computed property to format your data like so:

```
computed: {
  tributeUsers: function() {
    return [
      {key: "Phil Heartman", value: "pheartman"},
      {key: "Gordon Ramsey", value: "gramsey"}
    ]
  },
},
```

The `tributeoptions` attribute is optional. It is merged with `globalOptions` and takes precendence.

See the available options [here](https://github.com/zurb/tribute#a-collection).

## Events

Tribute broadcasts two events — a `tribute-replaced` event, and a `tribute-no-match` event (see docs [here](https://github.com/zurb/tribute#replace-event)). For your convenience, whenever Tribute triggers these events, vue-tribute also [emits](http://vuejs.org/api/#vm-emit) these events from the Vue instance the bound element is attached to. 

## License

MIT © [Collin Henderson](https://github.com/syropian), [Aurélien Nicolas](https://github.com/deckardai)
