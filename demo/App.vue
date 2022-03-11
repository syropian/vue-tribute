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
          class="inline-block text-black transition-colors hover:text-purple-500 dark:text-gray-300"
          aria-label="GitHub"
        >
          <GitHubIcon class="w-6 h-6 stroke-current" aria-hidden="true" />
        </a>
      </nav>
    </div>
    <div class="w-full mx-auto mt-4 prose max-w-prose prose-a:text-purple-500 dark:prose-dark">
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
    <footer class="w-full pt-4 mx-auto mt-8 border-t border-gray-200 max-w-prose dark:border-gray-700 sm:mt-12">
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

const installCode = `$ npm install tributejs vue-tribute@next --save
# or...
$ yarn add tributejs vue-tribute@next`

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
  @apply min-w-0 rounded-md border-2 border-gray-300 bg-white px-2 py-2 text-base transition-colors focus:border-purple-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 sm:px-3 sm:text-lg;
}

/* Tribute Styles */
.tribute-container {
  @apply absolute top-0 left-0 z-10 mt-6 block h-auto overflow-y-auto rounded shadow-md;
  max-height: 300px;
  max-width: 500px;
}

.tribute-container ul {
  @apply list-none overflow-hidden rounded p-0;
}

.tribute-container li {
  @apply cursor-pointer bg-white py-2 pl-2 pr-6 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-100;
}
.tribute-container li.highlight,
.tribute-container li:hover {
  @apply bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300;
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
