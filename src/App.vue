<!--
 * @Author: xinghe
 * @LastEditors: xinghe
 * @Date: 2020-12-09 22:45:30
 * @FilePath: /vue3-project/src/App.vue
 * @LastEditTime: 2020-12-10 14:17:13
-->
<template>
  <div>
    <img src="./assets/logo.png" alt="" />
    <Count msg="parent msg"  />
  </div>
</template>

<script lang="ts">
import { computed, ref } from "vue";
import Count from "./components/count.vue";
export default {
  name: "app",
  components: { Count },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
