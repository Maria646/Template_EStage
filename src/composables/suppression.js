import axios from 'axios';

const baseUrl = "https://api-4.fly.dev/";

// https://api-4.fly.dev/activity-sectors
export function useDeleteElement() {

    const deleteElement = async (endpoint, id) => {
        try {
            const response = axios.delete(`${baseUrl}${endpoint}/${id}`);
            console.log(response); 
            console.log(`L'entrée avec l'ID ${id} a été supprimée.`);
            alert(`Suppression confirmé !`);
        } catch {
            console.error(`Erreur lors de la suppression de l'entrée avec l'ID ${id}:`, error);
        }
    }

    return {
        deleteElement
    }
}