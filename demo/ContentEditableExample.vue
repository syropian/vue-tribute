<template>
  <div id="container">
    <vue-tribute :options="options">
      <div class="w-3/4 sm:1/2 input" placeholder="@..." contenteditable>@</div>
    </vue-tribute>
  </div>
</template>
<script setup lang="ts">
import { VueTribute } from '../lib'

const options = {
  trigger: '@',
  values: [
    { key: 'Sarah Drasner', value: 'sarah_edo' },
    { key: 'Evan You', value: 'youyuxi' },
    { key: 'Adam Wathan', value: 'adamwathan' },
    { key: 'Rich Harris', value: 'Rich_Harris' },
  ],
}
</script>
