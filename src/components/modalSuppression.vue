<template>
  <div
    class="fixed inset-0 flex items-center justify-center modal-container z-50 bg-transparent"
    style="background-color: rgba(0, 0, 0, 0.75)"
  >
    <div class="modal-content bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
      <!-- Message d'accueil du modal -->
      <div class="donnees">
        <p v-if="elementASupprimer === 'internship-requests'" class="text-red-600 text-xl mb-6">
          Voulez-vous vraiment supprimer cette demande de stage ?
        </p>

        <p v-if="elementASupprimer === 'candidates'"
          class="text-red-600 text-xl mb-6"
        >
          Voulez-vous vraiment supprimer ce candidat ou cette candidate ?
        </p>

        <p v-if="elementASupprimer === 'enterprises'"
          class="text-red-600 text-xl mb-6"
        >
          Voulez-vous vraiment supprimer cette entreprise ?
        </p>

        <p v-if="elementASupprimer === 'internship-offers'" class="text-red-600 text-xl mb-6">
          Voulez-vous vraiment supprimer cette offre de stage ?
        </p>

        <div class="flex justify-center gap-5 mt-15 button-container">
          <button
            class="cancel-button bg-transparent border-none text-gray-700 hover:bg-gray-200 hover:text-gray-600 px-4 py-2 rounded-md text-base transition-colors duration-300"
            @click="annulerSuppression"
          >
            Annuler
          </button>
          <button
            class="delete-button bg-red-800 text-white hover:bg-red-900 px-4 py-2 rounded-md text-base transition-colors duration-300"
            @click="confirmerSuppression"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, onMounted } from "vue";

const {
  modalSuppressionVisible,
  elementASupprimer
} = defineProps({
  modalSuppressionVisible: Boolean,
  elementASupprimer: String
});


const emits = defineEmits(["suppressionAnnulee", "confirmationSuppression"]);

const annulerSuppression = () => {
  emits("suppressionAnnulee");
};

const confirmerSuppression = () => {
  emits("confirmationSuppression");
};
</script>
