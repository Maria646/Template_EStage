<template>


    <div v-if="intershipRequestsCount && intershipOffersCount && candidatesCount && enterprisesCount" class="mb-12 w-full flex flex-col lg:flex-row gap-y-2 gap-x-2 justify-between">
        <div class="w-full lg:w-2/3 gap-x-2 gap-y-2 flex flex-col sm:flex-row">
            <div class="bg-yellow-500 h-full w-full sm:w-1/2 lg:w-1/2 rounded-lg">
                <div class="py-2 lg:py-4 px-2 lg:px-4 w-11/12 flex flex-row items-center text-white bg-yellow-400 rounded-tl-lg rounded-bl-lg">
                    <div class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-file-text w-3 sm:w-3.5 md:w-4 lg:w-5 xl:w-6 h-3 sm:h-3.5 md:h-4 lg:h-5 xl:h-6" viewBox="0 0 16 16">
                            <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"/>
                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"/>
                        </svg>
                    </div>
                    <div>
                        <p class="text-xs xl:text-sm font-medium">Demandes de stage</p>
                        <p class="text-base lg:text-xl font-bold">{{ intershipRequestsCount }}</p>
                    </div>
                </div>
            </div>
            <div class="bg-red-900 h-full w-full sm:w-1/2 lg:w-1/2 rounded-lg">
                <div class="py-2 lg:py-4 px-2 lg:px-4 h-full w-11/12 flex flex-row items-center text-white bg-red-800 rounded-tl-lg rounded-bl-lg">
                    <div class="mr-3 ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-send w-3 sm:w-3.5 md:w-4 lg:w-5 xl:w-6 h-3 sm:h-3.5 md:h-4 lg:h-5 xl:h-6" viewBox="0 0 16 16">
                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                        </svg>
                    </div>
                    <div>
                        <p class="text-xs xl:text-sm font-medium">Offres de stage</p>
                        <p class="text-base lg:text-xl font-bold">{{ intershipOffersCount }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-row w-full lg:w-1/3 lg:max-w-1/3 rounded-lg">
            <div class="bg-fuchsia-900 h-full w-1/2 flex flex-row justify-start rounded-tl-lg rounded-bl-lg">
                <div class="py-2 lg:py-4 pl-2 lg:pl-3.5 pr-6 lg:pr-8 w-11/12 flex flex-row items-center text-white bg-fuchsia-800  rounded-tl-lg rounded-bl-lg">
                    <div class="mr-2 ml-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-person w-2.5 sm:w-3 md:w-3.5 lg:w-4 xl:w-5 h-2.5 sm:h-3 md:h-3.5 lg:h-4 xl:h-5" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                        </svg>
                    </div>
                    <div>
                        <p class="text-[11px] xl:text-xs font-medium">Candidats</p>
                        <p class="text-base lg:text-xl font-bold">{{ candidatesCount }}</p>
                    </div>
                </div>
            </div>
            <div class="bg-blue-500 h-full w-1/2 flex flex-row justify-end rounded-tr-lg rounded-br-lg">
                <div class="py-2 lg:py-4 pl-2 lg:pl-3.5 pr-6 lg:pr-8 w-11/12 flex flex-row items-center text-white bg-blue-400  rounded-tr-lg rounded-br-lg">
                    <div class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-person w-2.5 sm:w-3 md:w-3.5 lg:w-4 xl:w-5 h-2.5 sm:h-3 md:h-3.5 lg:h-4 xl:h-5" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                        </svg>
                    </div>
                    <div>
                        <p class="text-[11px] xl:text-xs font-medium">Entreprises</p>
                        <p class="text-base lg:text-xl font-bold">{{ enterprisesCount }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div v-if="allDemandeDeStagesResults" class="mt-4 mb-16 px-4 py-6 lg:px-10 lg:py-16 bg-white rounded-lg">
        <div class="mb-16">
            <h2 class="text-lg font-bold">Dernières <span class="text-yellow-600">demandes</span> de stage</h2>
            <p class="text-sm text-red-700">En attente de validation</p>
        </div>
        <table class="w-full">
            <EnteteTableau :isDemandes="true" :isTableauDeBord="true" />
            <template v-for="demandeDeStage in demandeDeStageIsNotActive.slice(0, 5)" :key="demandeDeStage._id">
                <ElementTableau :element="demandeDeStage" :isDemandes="true" :isTableauDeBord="true" />
            </template>
        </table>
    </div>

    <div v-if="allOffreDeStagesResults" class="mt-4 px-4 py-6 lg:px-10 lg:py-16 bg-white rounded-lg">
        <div class="mb-16">
            <h2 class="text-lg font-bold">Dernières <span class="text-red-700">offres</span> de stage</h2>
            <p class="text-sm text-red-700">En attente de validation</p>
        </div>
        <table class="w-full">
            <EnteteTableau :isDemandes="false" :isTableauDeBord="true" />
            <template v-for="offreDeStage in offreDeStagesIsNotActive.slice(0, 5)" :key="offreDeStage._id">
                <ElementTableau :element="offreDeStage" :isDemandes="false" :isTableauDeBord="true" />
            </template>
        </table>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import axios from 'axios';
import { useAllDemandeDeStages } from '@/composables/demandeDeStage';
import { useAllOffreDeStages } from '@/composables/offreDeStage';
import ElementTableau from '../components/elementTableau.vue'
import EnteteTableau from '../components/enteteTableau.vue'

const { allDemandeDeStagesResults, getAllDemandeDeStages } = useAllDemandeDeStages();
const { allOffreDeStagesResults, getAllOffreDeStages } = useAllOffreDeStages();

let intershipRequestsCount = ref(null);
let intershipOffersCount = ref(null);
let candidatesCount = ref(null);
let enterprisesCount = ref(null);
let demandeDeStageIsNotActive = reactive([]);
let offreDeStagesIsNotActive = reactive([]);

const baseUrl = "https://api-4.fly.dev/";
const intershipRequests = "internship-requests/";
const intershipOffers = "internship-offers/";
const candidates = "candidates/";
const enterprises = "enterprises/";


const getDataCount = async (endpoint, variable) => {
    try {
        const res = await axios.get(`${baseUrl}${endpoint}count`);
        if (res) variable.value = res.data;
    } catch (error) {
        console.log(error);
    }
}


onMounted(async () => {
    await getAllDemandeDeStages();
    await getAllOffreDeStages();
    demandeDeStageIsNotActive = allDemandeDeStagesResults.filter(request => !request.isActive);
    offreDeStagesIsNotActive = allOffreDeStagesResults.filter(offer => !offer.isActive);
    getDataCount(intershipRequests, intershipRequestsCount);
    getDataCount(intershipOffers, intershipOffersCount);
    getDataCount(candidates, candidatesCount);
    getDataCount(enterprises, enterprisesCount);

})
</script>