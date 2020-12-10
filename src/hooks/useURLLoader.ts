/*
 * @Author: xinghe
 * @LastEditors: xinghe
 * @Date: 2020-12-10 09:41:00
 * @FilePath: /vue3-project/src/hooks/useURLLoader.ts
 * @LastEditTime: 2020-12-10 10:54:16
 */
import { ref, toRefs } from "vue";
import axios from "axios"

// interface DataType {
//     loading: boolean;
//     result: string;
// }


function useURLLoader<T>(url: string) {
    const loading = ref(true);
    const result = ref<T | null>(null);

    if (url) {
        // new Promise((resolve, reject) => {
        //     loading.value = true;
        //     setTimeout(() => {
        //         loading.value = false;
        //         result.value = "success";
        //         resolve();
        //     }, 5000);
        // });
        axios.get(url).then(data => {
            loading.value = false;
            result.value = data.data;
        })
    }


    return {
        loading,
        result
    };
}

export default useURLLoader;
