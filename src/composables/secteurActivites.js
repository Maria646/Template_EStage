import { reactive, ref } from "vue";
import axios from 'axios';

const baseUrl = "https://api-4.fly.dev/";




// https://api-4.fly.dev/activity-sectors
export function useActivitySectors() {
    const allActivitySectorsResults = reactive([]);

    const getAllActivitySectors= () => {
        return axios.get(`${baseUrl}activity-sectors`)
        .then((res) => allActivitySectorsResults.push(...res.data))
        .catch((error) => console.log(error))
    }

    return {
        allActivitySectorsResults,
        getAllActivitySectors
    }
}


// https://api-4.fly.dev/activity-sectors/65f8df6040965a2e23d73271
export function useActivitySector() {
    const activitySectorResult = ref(null);

    const getActivitySectorById = (id) => {
        return axios.get(`${baseUrl}activity-sectors/${id}`)
        .then((res) => activitySectorResult.value = res.data)
        .catch((error) => console.log(error))
    }

    return {
        activitySectorResult,
        getActivitySectorById
    }
}

