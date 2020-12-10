/*
 * @Author: xinghe
 * @LastEditors: xinghe
 * @Date: 2020-12-10 09:41:00
 * @FilePath: /vue3-project/src/hooks/useURLLoader.ts
 * @LastEditTime: 2020-12-10 10:01:45
 */
import { reactive, toRefs } from "vue";

interface DataType {
    loading: boolean;
    result: string;
}

function useURLLoader(url: string) {
    const data: DataType = reactive({
        loading: false,
        result: "",
    });

    if (url) {
        new Promise((resolve, reject) => {
            data.loading = true;
            setTimeout(() => {
                data.loading = false;
                data.result = "success";
                resolve();
            }, 5000);
        });
    }

    const refData = toRefs(data);

    return {
        ...refData,
    };
}

export default useURLLoader;
