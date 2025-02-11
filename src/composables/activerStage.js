import axios from 'axios';

const baseUrl = "https://api-4.fly.dev/";


export function useActivateIntership() {
    const activateIntership = (endpoint, id) => {
        const patchUrl = `${baseUrl}${endpoint}/${id}`;
        console.log(patchUrl);
        const patchData = {
            "isActive": true
        }

        axios.patch(patchUrl, patchData)
        .then(res => {
            console.log('PATCH requête réussie');
            console.log('Réponse:', res.data);
        })
        .catch(error => {
            console.error('Erreur:', error)
        });
    }

    return {
        activateIntership
    }
}