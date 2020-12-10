/*
 * @Author: xinghe
 * @LastEditors: xinghe
 * @Date: 2020-12-10 09:23:33
 * @FilePath: /vue3-project/src/hooks/useMouse.ts
 * @LastEditTime: 2020-12-10 09:28:52
 */
import { ref, onMounted,onUnmounted } from 'vue'
const useMouse = ()=> {
    const x = ref(0),y = ref(0);

    const updateMouse = (e: MouseEvent) =>{
        const {pageX,pageY} = e;
        x.value = pageX;
        y.value = pageY;
    }

    onMounted(()=>{
        document.addEventListener('click',updateMouse)
    });

    onUnmounted(()=>{
        document.removeEventListener('click',updateMouse)
    })

    return {x,y}
}

export default useMouse;