<!--
 * @Author: xinghe
 * @LastEditors: xinghe
 * @Date: 2020-12-09 22:56:58
 * @FilePath: /vue3-project/src/components/count.vue
 * @LastEditTime: 2020-12-09 23:10:47
-->
<template>
  <div>
    <div>
      {{count}}
    </div>
    <div>
      {{double}}
    </div>
    <div @click="increase"> 👍 + 1</div>
  </div>
</template>

<script lang="ts">
import { computed, ref, reactive, toRefs} from 'vue';
interface DataProps{
    count: number;
    double: number;
    increase: () => void;
}
export default {
  name:'app',
  setup(){
    //   const count = ref(0);

    //   const double = computed(()=>{
    //     return count.value * 2
    //   });
    //   const increase = () => {
    //     count.value++
    //   }
    const data: DataProps = reactive({
        count: 0,
        increase: () => { data.count++ },
        double: computed(() => data.count * 2)
    })

    const refData = toRefs(data)
    // refData.count

      return {
        // count,
        // increase,
        // double
        // ...data
        // count:data.count
        ...refData
      }
  }
};
</script>
<style scoped>

</style>