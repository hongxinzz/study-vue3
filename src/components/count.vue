<!--
 * @Author: xinghe
 * @LastEditors: xinghe
 * @Date: 2020-12-09 22:56:58
 * @FilePath: /vue3-project/src/components/count.vue
 * @LastEditTime: 2020-12-10 15:31:42
-->
<template>
  <div>
    <div>
      {{ count }}
    </div>
    <div>
      {{ double }}
    </div>
    <div v-for="item in numbers" :key="item">
      {{ item }}
    </div>
    <div>
      {{ person.name }}
    </div>
    <div>x:{{ x }},y:{{ y }}</div>
    <!-- <template v-if="loading"> loading.... </template>
    <template v-else>
      <img :src="result.message" alt="">
    </template>

    <template v-if="loading2"> loading.... </template>
    <template v-else>
      <img :src="result2[0].url" alt="">
    </template> -->
    <div @click="increase">👍 + 1</div>
    <div>
      <button @click="changeTestDialog">显示弹窗</button>
    </div>

    <TestDialog
      :show="showTestDialog"
      @close="showTestDialog = false"
    ></TestDialog>

    <p v-if="errorMsg">{{ errorMsg }}</p>
    <Suspense>
      <template #default>
        <div>
            <AsyncComponent />
            <DogShow />
        </div>
      </template>
      <template #fallback> async loading.... </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import {
  computed,
  ref,
  reactive,
  toRefs,
  onMounted,
  onUpdated,
  onRenderTriggered,
  watch,
  onErrorCaptured,
} from "vue";

import useMouse from "../hooks/useMouse";
import useURLLoader from "../hooks/useURLLoader";
import TestDialog from "./TestDialog.vue";
import AsyncComponent from "./AsyncComponent.vue";
import DogShow from "./DogShow.vue";

interface DataProps {
  count: number;
  double: number;
  increase: () => void;
  numbers: number[];
  person: { name?: string };
  showTestDialog: boolean;
}
interface DogResult {
  message: string;
  status: string;
}
interface CatResult {
  id: string;
  url: string;
  width: number;
  height: number;
}
export default {
  name: "app",
  props: {
    msg: {
      reuqire: true,
      default: "",
    },
  },
  components: { TestDialog, AsyncComponent, DogShow },
  setup(props, context) {
    onMounted(() => {
      console.log("mounted", props.msg, context);
    });
    const errorMsg = ref(null);
    onErrorCaptured((e: any) => {
      errorMsg.value = e;
    });
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
    const { result, loading } = useURLLoader<DogResult>(
      "https://dog.ceo/api/breeds/image/random"
    );
    const { result: result2, loading: loading2 } = useURLLoader<CatResult[]>(
      "https://api.thecatapi.com/v1/images/search"
    );

    const data: DataProps = reactive({
      count: 0,
      increase: () => {
        data.count++;
      },
      double: computed(() => data.count * 2),
      numbers: [0, 1, 2],
      person: {},
      showTestDialog: false,
    });

    watch(
      () => data.count,
      (newVal, oldVal) => {
        console.log(newVal, oldVal);
        if (newVal % 2 === 0) {
          document.title = "hello:" + newVal;
        } else {
          document.title = "hello";
        }
      }
    );

    const changeTestDialog = () => {
      data.showTestDialog = true;
    };

    data.numbers[0] = 5;
    data.person.name = "test";
    const refData = toRefs(data);
    // refData.count

    return {
      // count,
      // increase,
      // double
      // ...data
      // count:data.count
      ...refData,
      x,
      y,
      loading,
      result,
      loading2,
      result2,
      changeTestDialog,
      errorMsg,
    };
  },
};
</script>
<style scoped>
</style>