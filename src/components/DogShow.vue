<!--
 * @Author: xinghe
 * @LastEditors: xinghe
 * @Date: 2020-12-10 15:18:57
 * @FilePath: /vue3-project/src/components/DogShow.vue
 * @LastEditTime: 2020-12-10 15:32:14
-->
<template>
  <div>
    <img :src="result && result.message" alt="" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "dog",
  async setup() {
    //   https://dog.ceo/api/breeds/image/random444
    const data = await axios.get("https://dog.ceo/api/breeds/image/random");

    return {
      result: data.data,
    };
  },
});
</script>

<style>
</style>