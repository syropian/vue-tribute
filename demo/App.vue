<template>
  <div class="px-8 mt-16 mb-6 sm:mt-32 sm:mb-6 md:px-0">
    <div class="flex items-center justify-between w-full mx-auto mt-8 max-w-prose">
      <h1 class="flex items-center text-3xl font-bold sm:text-4xl">
        <span class="inline-block text-gray-600 dark:text-gray-300">vue-tribute</span>
      </h1>
      <nav class="absolute top-[20px] right-[20px] flex items-center sm:relative sm:top-0 sm:right-0">
        <a
          href="https://github.com/syropian/vue-tribute"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block text-black transition-colors dark:text-gray-300 hover:text-purple-500"
          aria-label="GitHub"
        >
          <GitHubIcon class="w-6 h-6 stroke-current" aria-hidden="true" />
        </a>
      </nav>
    </div>
    <div class="w-full mx-auto mt-4 prose dark:prose-dark max-w-prose prose-a:text-purple-500">
      <h2 class="pb-6 border-b border-gray-800">
        A tiny Vue wrapper for
        <a href="https://github.com/zurb/tribute" target="_blank" rel="noopener noreferrer" class="text-purple-500"
          >Tribute</a
        >
      </h2>
      <div class="mt-16 space-y-10">
        <div>
          <h3>Basic Example</h3>
          <BasicExample />
        </div>
        <div>
          <h3>With a Textarea</h3>
          <TextareaExample />
        </div>
        <div>
          <h3>With contenteditable</h3>
          <ContentEditableExample />
        </div>
        <div>
          <h3>Install</h3>
          <highlightjs language="bash" :code="installCode" />
        </div>
        <div>
          <h3>Add the Plugin</h3>
          <div class="mt-4">
            <h4>Globally</h4>
            <highlightjs language="javascript" :code="addGlobalCode" />
          </div>
          <div class="mt-4">
            <h4>Per-component</h4>
            <highlightjs language="javascript" :code="perComponentCode" />
          </div>
        </div>
        <div>
          <h3>Usage</h3>
          <p>
            Wrap a single <strong>text input</strong>, <strong>textarea</strong>, or
            <strong>contenteditable</strong> element within the <code>VueTribute</code> component. You should then pass
            a
            <a href="https://github.com/zurb/tribute#initializing" target="_blank" rel="noopener noreferrer"
              >valid Tribute collection(s) object</a
            >
            to the component.
          </p>
          <highlightjs language="xml" :code="usageCode" />
        </div>
      </div>
    </div>
    <footer class="w-full pt-4 mx-auto mt-8 border-t border-gray-200 dark:border-gray-700 sm:mt-12 max-w-prose">
      <p class="text-gray-500">
        &copy; {{ new Date().getFullYear() }}
        <a
          href="https://syropia.net"
          target="blank"
          rel="noopener noreferrer"
          class="font-semibold text-purple-500 hover:underline"
          >Collin Henderson</a
        >
      </p>
    </footer>
  </div>
</template>
<script setup lang="ts">
import GitHubIcon from './GitHubIcon.vue'
import BasicExample from './BasicExample.vue'
import TextareaExample from './TextareaExample.vue'
import ContentEditableExample from './ContentEditableExample.vue'

const installCode = `$ npm install vue-input-autowidth@next --save
# or...
$ yarn add vue-input-autowidth@next`

const addGlobalCode = `import { createApp } from 'vue'
import App from './App.vue'
import VueTribute from 'vue-tribute'

createApp(App).use(VueTribute).mount("#app")
`

const perComponentCode = `import { VueTribute } from 'vue-tribute'

export default {
  components: { VueTribute },
  setup() {
    ...
  },
}`

const usageCode = `<template>
  <vue-tribute :options="options">
    <input type="text" placeholder="@..." />
  </vue-tribute>
</template>
<script setup>
import { VueTribute } from 'vue-tribute'

const options = {
  trigger: '@',
  values: [
    { key: 'Sarah Drasner', value: 'sarah_edo' },
    { key: 'Evan You', value: 'youyuxi' },
    { key: 'Adam Wathan', value: 'adamwathan' },
    { key: 'Rich Harris', value: 'Rich_Harris' },
  ],
}
\</script\>
`
</script>

<style>
/* Inputs */
.input {
  @apply transition-colors min-w-0 px-2 sm:px-3 py-2 rounded-md text-base sm:text-lg focus:outline-none border-2 border-gray-300 dark:border-gray-700 focus:border-purple-500 bg-white dark:bg-gray-800 dark:text-gray-200;
}

/* Tribute Styles */
.tribute-container {
  @apply absolute top-0 left-0 h-auto overflow-y-auto block z-10 rounded mt-6 shadow-md;
  max-height: 300px;
  max-width: 500px;
}

.tribute-container ul {
  @apply p-0 list-none rounded overflow-hidden;
}

.tribute-container li {
  @apply text-gray-800 pl-2 pr-6 py-2 cursor-pointer text-sm bg-white dark:bg-gray-700 dark:text-gray-100;
}
.tribute-container li.highlight,
.tribute-container li:hover {
  @apply dark:bg-purple-900 dark:text-purple-300 text-purple-800 bg-purple-100;
}
.tribute-container li span {
  @apply font-bold;
}
.tribute-container li.no-match {
  @apply cursor-default;
}
.tribute-container .menu-highlighted {
  @apply font-bold;
}
</style>
