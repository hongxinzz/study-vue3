<!--
 * @Author: xinghe
 * @LastEditors: xinghe
 * @Date: 2020-12-09 22:56:58
 * @FilePath: /vue3-project/src/components/count.vue
 * @LastEditTime: 2020-12-10 09:29:21
-->
<template>
  <div>
    <div>
      {{count}}
    </div>
    <div>
      {{double}}
    </div>
    <div v-for="item in numbers" :key="item">
        {{item}}
    </div>
    <div>
        {{person.name}}
    </div>
    <div>x:{{x}},y:{{y}}</div>
    <div @click="increase"> 👍 + 1</div>
  </div>
</template>

<script lang="ts">
import { computed, ref, reactive, toRefs, onMounted, onUpdated, onRenderTriggered, watch} from 'vue';
import useMouse from '../hooks/useMouse'
interface DataProps{
    count: number;
    double: number;
    increase: () => void;
    numbers: number[];
    person: {name?: string};
}
export default {
  name:'app',
  setup(){
      onMounted(()=>{
          console.log('mounted')
      })
    //   onUpdated(() => {
    //       console.log('updated')
    //   })
    //   onRenderTriggered(e => {
    //       console.log(e,'onRenderTriggered')
    //   })
    //   const count = ref(0);

    //   const double = computed(() => {
    //     return count.value * 2
    //   });
    //   const increase = () => {
    //     count.value++
    //   }
    const { x, y } = useMouse();
    const data: DataProps = reactive({
        count: 0,
        increase: () => { data.count++ },
        double: computed(() => data.count * 2),
        numbers:[0,1,2],
        person:{}
    })

    watch(() => data.count, (newVal,oldVal) => {
        console.log(newVal,oldVal)
        if(newVal % 2 === 0){
            document.title = 'hello:' + newVal;
        }else{
            document.title = 'hello'
        }
    })

    data.numbers[0] = 5;
    data.person.name = "test"
    const refData = toRefs(data)
    // refData.count

      return {
        // count,
        // increase,
        // double
        // ...data
        // count:data.count
        ...refData,
        x,
        y
      }
  }
};
</script>
<style scoped>

</style>