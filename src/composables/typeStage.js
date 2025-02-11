import { reactive } from "vue";
import axios from 'axios';

const baseUrl = "https://api-4.fly.dev/";




// https://api-4.fly.dev/internship-types
export function useIntershipTypes() {
    const allIntershipTypesResults = reactive([]);

    const getAllIntershipTypes= () => {
        return axios.get(`${baseUrl}internship-types`)
        .then((res) => allIntershipTypesResults.push(...res.data))
        .catch((error) => console.log(error))
    }

    return {
        allIntershipTypesResults,
        getAllIntershipTypes
    }
}