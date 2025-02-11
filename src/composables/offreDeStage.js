import { reactive, ref } from "vue";
import axios from 'axios';

const baseUrl = "https://api-4.fly.dev/";

// https://api-4.fly.dev/internship-offers
export function useAllOffreDeStages() {
    const allOffreDeStagesResults = reactive([]);

    const getAllOffreDeStages = () => {
        return axios.get(`${baseUrl}internship-offers`)
        .then((res) => allOffreDeStagesResults.push(...res.data))
        .catch((error) => console.log(error))
    }

    return {
        allOffreDeStagesResults,
        getAllOffreDeStages
    }
}


// https://api-4.fly.dev/internship-offers/65fce770f433c3500b32f6be
export function useOffreDeStages() {
    const offreDeStagesResult = ref(null);

    const getOffreDeStageById = (id) => {
        return axios.get(`${baseUrl}internship-offers/${id}`)
        .then((res) => offreDeStagesResult.value = res.data)
        .catch((error) => console.log(error))
    }

    return {
        offreDeStagesResult,
        getOffreDeStageById
    }
}