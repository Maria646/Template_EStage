<template>
  <h1 class="text-2xl sm:text-4xl xl:text-5xl font-bold mb-14 text-neutral-500">Offres de stage</h1>
  <div class="flex">
    <button class="my-3 bg-red-800 text-white px-4 py-2  rounded-lg hover:bg-red-900" @click="goToFormDO('offer')">Ajouter
      une offre</button>
  </div>

  <div class="mt-4 px-4 py-6 lg:px-10 lg:py-16 bg-white rounded-lg">
    <table v-if="allOffreDeStagesResults" class="w-full mb-10">
        <EnteteTableau :isDemandes="false" :isTableauDeBord="false" />
        <template v-for="offreDeStage in allOffreDeStagesResults" :key="offreDeStage._id">
            <ElementTableau :element="offreDeStage" :isDemandes="false" :isTableauDeBord="false" />
        </template>
    </table>
  </div>



</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router'
import { useAllOffreDeStages } from '@/composables/offreDeStage';
import ElementTableau from '../components/elementTableau.vue'
import EnteteTableau from '../components/enteteTableau.vue'

// Fonction pour émettre la route dynamique vers le formulaireDO pour ajouter une offre
const router = useRouter()
const goToFormDO = type => {
  router.push({ name: 'formulairedo', params: { type } })
}

const { allOffreDeStagesResults, getAllOffreDeStages } = useAllOffreDeStages();


onMounted(async () => {
  await getAllOffreDeStages();
})

</script>