import { reactive, ref } from "vue";
import axios from 'axios';

const baseUrl = "https://api-4.fly.dev/";




// https://api-4.fly.dev/candidates
export function useAllCandidates() {
    const allCandidatesResults = reactive([]);

    const getAllCandidates = () => {
        return axios.get(`${baseUrl}candidates`)
        .then((res) => allCandidatesResults.push(...res.data))
        .catch((error) => console.log(error))
    }

    return {
        allCandidatesResults,
        getAllCandidates
    }
}



// https://api-4.fly.dev/candidates/65f8e7c27e8a7a318bf937cf
export function useCandidate() {
    const candidateResult = ref(null);

    const getCandidateById = (id) => {
        return axios.get(`${baseUrl}candidates/${id}`)
        .then((res) => candidateResult.value = res.data)
        .catch((error) => console.log(error))
    }

    return {
        candidateResult,
        getCandidateById
    }
}