<template>
  <h1 class="text-2xl sm:text-4xl xl:text-5xl font-bold mb-14 text-neutral-500">Demandes de stage</h1>
  <div class="flex">
    <button class="my-3  bg-yellow-600 text-white px-4 py-2  rounded-lg hover:bg-yellow-700" @click="goToFormDO('request')">
      Ajouter une demande
    </button>
  </div>

  <div class="mt-4 px-4 py-6 lg:px-10 lg:py-16 bg-white rounded-lg">
    <table v-if="allDemandeDeStagesResults" class="w-full mb-10">
        <EnteteTableau :isDemandes="true" :isTableauDeBord="false" />
        <template v-for="demandeDeStage in allDemandeDeStagesResults" :key="demandeDeStage._id">
            <ElementTableau :element="demandeDeStage" :isDemandes="true" :isTableauDeBord="false" />
        </template>
    </table>
  </div>

<!--   <RouterLink to="/app/formulaireDo"
    class="bg-fuchsia-800 hover:bg-fuchsia-900 text-white text-sm font-bold p-4 rounded-xl mb-16">
    <i class="ficheDetaillee__icône-consulter fa fa-check"></i>
  </RouterLink>
  <RouterLink to="/app/formulaireDo"
    class="bg-fuchsia-800 hover:bg-fuchsia-900 text-white text-sm font-bold p-4 rounded-xl mb-16">
    <i class="ficheDetaillee__icône-editer fas fa-edit"></i>
  </RouterLink> -->
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router'
import { useAllDemandeDeStages } from '@/composables/demandeDeStage';
import ElementTableau from '../components/elementTableau.vue'
import EnteteTableau from '../components/enteteTableau.vue'

// Fonction pour émettre la route dynamique vers le formulaireDO pour ajouter une demande
const router = useRouter()
const goToFormDO = type => {
  router.push({ name: 'formulairedo', params: { type } })
}

const { allDemandeDeStagesResults, getAllDemandeDeStages } = useAllDemandeDeStages();

onMounted(async () => {
  await getAllDemandeDeStages();
})


</script>
