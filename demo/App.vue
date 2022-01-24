<template>
  <div class="px-8 mt-16 mb-6 sm:mt-32 sm:mb-6 md:px-0">
    <div class="w-full mx-auto mt-8 max-w-prose">
      <BasicExample />
    </div>
  </div>
</template>
<script setup lang="ts">
import BasicExample from './BasicExample.vue'
</script>

<style>
.tribute-container {
  @apply absolute top-0 left-0 h-auto overflow-y-auto block z-10 rounded shadow;
  max-height: 300px;
  max-width: 500px;
}

.tribute-container ul {
  @apply mt-5 p-0 list-none bg-white rounded overflow-hidden;
}

.tribute-container li {
  @apply text-blue-600 pl-2 pr-6 py-2 cursor-pointer text-sm;
}
.tribute-container li.highlight,
.tribute-container li:hover {
  @apply bg-blue-600 text-white;
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
