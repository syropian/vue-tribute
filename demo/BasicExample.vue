<template>
  <div id="container">
    <vue-tribute :options="options">
      <input type="text" class="" placeholder="@..." />
    </vue-tribute>
  </div>
</template>
<script setup lang="ts">
import VueTribute from '../lib'

const options = {
  trigger: '@',
  values: [
    { key: 'Collin Henderson', value: 'syropian' },
    { key: 'Sarah Drasner', value: 'sarah_edo' },
    { key: 'Evan You', value: 'youyuxi' },
    { key: 'Adam Wathan', value: 'adamwathan' },
  ],
  positionMenu: true,
}
</script>
