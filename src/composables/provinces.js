import { reactive } from "vue";
import axios from 'axios';

const baseUrl = "https://api-4.fly.dev/";




// https://api-4.fly.dev/provinces
export function useProvinces() {
    const allProvincesResults = reactive([]);

    const getAllProvinces= () => {
        return axios.get(`${baseUrl}provinces`)
        .then((res) => allProvincesResults.push(...res.data))
        .catch((error) => console.log(error))
    }

    return {
        allProvincesResults,
        getAllProvinces
    }
}