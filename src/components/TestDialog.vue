<!--
 * @Author: xinghe
 * @LastEditors: xinghe
 * @Date: 2020-12-10 14:29:17
 * @FilePath: /vue3-project/src/components/testDialog.vue
 * @LastEditTime: 2020-12-10 14:42:51
-->
<template>
  <teleport to="#modal">
      <div class="test-dialog"  v-if="show">
          <div class="test-dialog__content">
              <slot>
                  内容
              </slot>
          </div>
          <div class="test-dialog__button">
              <button @click="handlerClose">关闭弹窗</button>
          </div>
      </div>
  </teleport>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
    props:{
        show:{
            type:Boolean,
            defaule:false
        }
    },
    emits:{
        // 'close':(actions: any) =>{
        //     return actions.type === 'close'
        // },
        'close':null
    },
    setup(props,context){

        const handlerClose = () =>{
            context.emit('close')
        }

        return {
            handlerClose
        }
    }
})
</script>

<style>
.test-dialog{
    position: fixed;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100px;
    width: 100px;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid #000;
    background: #ed4040;
    color:#fff;
}
</style>