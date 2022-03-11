# vue-tribute [![Tests](https://github.com/syropian/vue-tribute/actions/workflows/test.yml/badge.svg?branch=next)](https://github.com/syropian/vue-tribute/actions/workflows/test.yml)

A tiny Vue.js wrapper around Zurb's Tribute library for ES6 native @mentions.

> 🚦 Looking for Vue 2 support? Check out the [master branch](https://github.com/syropian/vue-tribute).

[View Demo](https://vue-tribute.netlify.app/)

## Install

```bash
$ npm install tributejs vue-tribute@next --save
# or...
$ yarn add tributejs vue-tribute@next
```

_or_

Use the UMD build from [Unpkg](https://unpkg.com/vue-tribute), available as `VueTribute` in the global scope. You will need to include Tribute.js yourself as it is a peer dependency.

```html
<script src="/vendor/vue.js" />
<script src="https://unpkg.com/tributejs" />
<script src="https://unpkg.com/vue-tribute@next" />
```

### Globally

Import and register the module as a plugin.

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import VueTribute from 'vue-tribute'

createApp(App).use(VueTribute).mount('#app')
```

### Per-component

```javascript
import { VueTribute } from 'vue-tribute'

export default {
  components: { VueTribute },
  setup() {
    ...
  },
}
```

## Usage

Wrap a single **text input**, **textarea**, or **contenteditable** element within the `VueTribute` component. You should then pass a [valid Tribute options object](https://github.com/zurb/tribute#initializing) to the component.

```vue
<template>
  <vue-tribute :options="options">
    <input type="text" placeholder="@..." />
  </vue-tribute>
</template>
```

## Events

All [custom Tribute events](https://github.com/zurb/tribute#events) will work as expected. Simply attach listeners for them like you would any other event.

```vue
<template>
  <vue-tribute :options="options">
    <input type="text" placeholder="@..." @tribute-replaced="doSomething" />
  </vue-tribute>
</template>
```

## License

MIT © [Collin Henderson](https://github.com/syropian)
