# vue-tribute

[![Build Status](https://travis-ci.org/syropian/vue-tribute.svg?branch=master)](https://travis-ci.org/syropian/vue-tribute)

> A Vue.js wrapper for Zurb's [Tribute](https://github.com/zurb/tribute) library for native @mentions.

## Install

```
$ yarn add vue-tribute
```

or

```
$ npm install vue-tribute --save
```

**or** include the UMD build, hosted by [unpkg](https://unpkg.com) in a `<script>` tag.

```js
<script src="//unpkg.com/vue-tribute" />
```

## Usage

Import and register the component.

```js
import VueTribute from 'vue-tribute'

export default {
  ...
  components: {
    VueTribute
  }
}
```

In your template, wrap an `input`, `textarea` or `contenteditable` element in the `vue-tribute` component, and pass your Tribute options in.

```html
<div>
  <vue-tribute :options="tributeOptions">
    <input type="text" placeholder="@..." />
  </vue-tribute>
</div>
```

See the available Tribute options [here](https://github.com/zurb/tribute#a-collection).

## Events

Tribute broadcasts two events — a `tribute-replaced` event, and a `tribute-no-match` event (see docs [here](https://github.com/zurb/tribute#replace-event)). For your convenience, whenever Tribute triggers these events, the vue-tribute component also [emits](http://vuejs.org/api/#vm-emit) these events.

## License

MIT © [Collin Henderson](https://github.com/syropian)
