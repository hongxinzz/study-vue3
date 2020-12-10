<!--
 * @Author: xinghe
 * @LastEditors: xinghe
 * @Date: 2020-12-10 15:03:02
 * @FilePath: /vue3-project/src/components/AsyncComponent.vue
 * @LastEditTime: 2020-12-10 15:31:51
-->
<template>
  <div>
    {{ result }}
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "async",
  setup() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve({
          result: "async component",
        });
      }, 2000);
    });
  },
});
</script>

<style>
</style>