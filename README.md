# vue3-mobile-sized-view

[![NPM](https://nodei.co/npm/vue-mobile-sized-view.png)](https://nodei.co/npm/vue-mobile-sized-view/)

> Responsive Mobile-sized Wrapper for Vuejs - Easily prototype your mobile-sized web apps with desktop support  

> This project's source and idea are fully based on [`react-mobile-sized-view`](https://github.com/junhoyeo/react-mobile-sized-view)  
> Special thanks to [@junhoyeo](https://github.com/junhoyeo)
> Special thanks to [@UX&I GmbH](https://github.com/UX-and-I)
> Special thanks to [@yingshaoxo](https://github.com/yingshaoxo)

## 🚀 Demo & Examples
> Find out [here](https://github.com/junhoyeo/react-mobile-sized-view#-examples)

## 📦 Usage

```bash
yarn add vue3-mobile-sized-view
```

```ts
<script setup lang="ts">
import { onBeforeMount, reactive, ref } from 'vue'
import Vue3MobileSizedView from 'vue3-mobile-sized-view';

const dict = reactive({
    css: {
        backgroundColor: "#f6dadb",
        screenBackgroundColor: "#fefefe",
        screenLightShadow: "-31px -31px 62px #FAE0E0",
        screenDarkShadow: "31px 31px 62px #EAB6BE",
        isRounded: true,
    },
})
```

```html
<template>
    <vue3-mobile-sized-view
        :background-color="dict.css.backgroundColor"
        :screen-background-color="dict.css.screenBackgroundColor"
        :screen-light-shadow="dict.css.screenLightShadow"
        :screen-dark-shadow="dict.css.screenDarkShadow"
        :is-rounded="dict.css.isRounded"
    >
    <div>Replace here with your contents.</div>
  </vue3-mobile-sized-view>
</template>
```
