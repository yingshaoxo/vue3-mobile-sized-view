<script lang="ts">
import { defineComponent } from 'vue';
import Vue3MobileSizedView from '@/vue3-mobile-sized-view.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    Vue3MobileSizedView
  }
});
</script>

<template>
  <div id="app">
    <vue3-mobile-sized-view>
      <div class="test"></div>
    </vue3-mobile-sized-view>
  </div>
</template>

<style>
.test {
  background-color: aqua;
  width: 100%;
  height: 100%;
  border: blueviolet;
  border-width: 10px;
  border-style: solid;
}

body {
  margin: 0;
  padding: 0;
}
</style>
