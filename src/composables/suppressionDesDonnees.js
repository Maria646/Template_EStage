import { ref } from 'vue';
import axios from 'axios';

export default function suppressionDesDonnees() {
  const suppression = async (id, endpoint) => {
    try {
      const url = `https://api-4.fly.dev/${endpoint}`;
      const response = await axios.delete(`${url}/${id}`);
      console.log(response.data);
      console.log(`L'entrée avec l'ID ${id} a été supprimée.`);
      alert(`Suppression confirmée !`);
    } catch (error) {
      console.error(`Erreur lors de la suppression de l'entrée avec l'ID ${id}:`, error);
    }
  };

  return {
    suppression
  };
}
