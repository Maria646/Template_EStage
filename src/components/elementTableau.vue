<template>

    <tr v-if="element" class="border-b-2 xl:border-b-4 border-neutral-200">
        <td>
            <div class="my-5 mr-0.5 pl-2 flex flex-row items-center border-l-2 xl:border-l-4"
                :class="{
                    'border-neutral-500': !isTableauDeBord && !element.isActive,
                    'border-yellow-600-active': !isTableauDeBord && isDemandes && element.isActive,
                    'border-red-800-active': !isTableauDeBord && !isDemandes && element.isActive,
                    'border-yellow-600': isTableauDeBord && isDemandes,
                    'border-red-800/[0.85]': isTableauDeBord && !isDemandes,
                }">
                <template v-if="isTableauDeBord">
                    <div v-if="isDemandes" class="p-1 md:p-2 w-6 lg:w-8 xl:w-10 h-6 lg:h-8 xl:h-10 bg-yellow-600/[.5] rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="bi bi-mortarboard-fill text-yellow-800" viewBox="0 0 16 16">
                            <path
                                d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
                            <path
                                d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
                        </svg>
                    </div>
                    <div v-if="!isDemandes" class="p-1 md:p-2 w-6 lg:w-8 xl:w-10 h-6 lg:h-8 xl:h-10 bg-red-800/[0.85] rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="bi bi-briefcase-fill text-red-300" viewBox="0 0 16 16">
                            <path
                                d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5" />
                            <path
                                d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z" />
                        </svg>
                    </div>
                </template>
                <template v-else>
                    <div v-if="isDemandes && element.isActive" class="p-1 md:p-2 w-6 lg:w-8 xl:w-10 h-6 lg:h-8 xl:h-10 bg-yellow-600/[.5] rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="bi bi-mortarboard-fill text-yellow-800" viewBox="0 0 16 16">
                            <path
                                d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
                            <path
                                d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
                        </svg>
                    </div>
                    <div v-if="!isDemandes && element.isActive" class="p-1 md:p-2 w-6 lg:w-8 xl:w-10 h-6 lg:h-8 xl:h-10 bg-red-800/[0.85] rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="bi bi-briefcase-fill text-red-300" viewBox="0 0 16 16">
                            <path
                                d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5" />
                            <path
                                d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z" />
                        </svg>
                    </div>
                    <div v-if="isDemandes && !element.isActive" class="p-1 md:p-2 w-6 lg:w-8 xl:w-10 h-6 lg:h-8 xl:h-10 bg-neutral-500 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="bi bi-mortarboard-fill text-neutral-900" viewBox="0 0 16 16">
                            <path
                                d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
                            <path
                                d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
                        </svg>
                    </div>
                    <div v-if="!isDemandes && !element.isActive" class="p-1 md:p-2 w-6 lg:w-8 xl:w-10 h-6 lg:h-8 xl:h-10 bg-neutral-500 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="bi bi-briefcase-fill text-neutral-900" viewBox="0 0 16 16">
                            <path
                                d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5" />
                            <path
                                d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z" />
                        </svg>
                    </div>
                </template>
               
                <div class="ml-3 flex flex-col">
                    <p class="text-huit sm:text-neuf md:text-dix lg:text-onze xl:text-xs font-bold" :class="{'text-red-700': !isTableauDeBord && !element.isActive}">{{isDemandes ? "Intégrateur Web" : element.title }}</p>
                    <p class="text-huit sm:text-neuf md:text-dix lg:text-onze xl:text-xs">{{ isDemandes ? element.candidate.firstName + ' ' + element.candidate.lastName : element.enterprise.name }}</p>
                </div>
            </div>
        </td>
        <td v-if="isDemandes && isTableauDeBord">
            <p class="my-5 mr-0.5 text-huit sm:text-neuf md:text-dix lg:text-onze xl:text-xs">Cégep de Trois-Rivières </p>
        </td>
        <td v-if="!isDemandes && isTableauDeBord">
            <p class="my-5 mr-0.5 text-huit sm:text-neuf md:text-dix lg:text-onze xl:text-xs">Trois-Rivières</p>
        </td>
        <td v-if="!isTableauDeBord && !isDemandes && activitySectorResult">
            <p class="my-5 mr-0.5 text-huit sm:text-neuf md:text-dix lg:text-onze xl:text-xs">{{ activitySectorResult.value }}</p>
        </td>
        <td v-if="!isTableauDeBord && isDemandes">
            <p class="my-5 mr-0.5 text-huit sm:text-neuf md:text-dix lg:text-onze xl:text-xs">Nouvelles technologies</p>
        </td>
        <td v-if="!isTableauDeBord">
            <p class="my-5 mr-0.5 text-huit sm:text-neuf md:text-dix lg:text-onze xl:text-xs">Mauricie</p>
        </td>
        <td>
            <p class="my-5 text-huit sm:text-neuf md:text-dix lg:text-onze xl:text-xs">{{ isDemandes ? "2022-03-02" : formatDate(element.startDate) }}</p>
        </td>
        <td>
            <div class="my-5 flex flex-row items-center justify-between">
                <button v-if="isTableauDeBord" @click="activateIntership(intershipType ,element._id,)"
                    class="mr-1 py-1 lg:py-1.5 px-2 lg:px-2.5 bg-green-200/[.6] hover:bg-green-200 focus:bg-green-200 text-green-500 text-huit sm:text-neuf md:text-dix lg:text-xs font-medium rounded-lg">Accepter</button>
                <div class="flex flex-row justify-between">
                    <RouterLink v-if="element.candidate" :to="{name:'pagedetaildemandedestage', params:{id: element._id}}">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="bi bi-eye-fill w-3 lg:w-4 h-3 lg:h-4 text-teal-500 hover:text-teal-600 focus:text-teal-600"
                            viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                            <path
                                d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                        </svg>
                    </RouterLink>
                    <RouterLink v-if="element.enterprise" :to="{name:'pagedetailoffredestage', params:{id: element._id}}">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="bi bi-eye-fill w-3 lg:w-4 h-3 lg:h-4 text-teal-500 hover:text-teal-600 focus:text-teal-600"
                            viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                            <path
                                d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                        </svg>
                    </RouterLink>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" @click="goToEditForm"
                        class="bi bi-pencil-square mx-2.5 w-3 lg:w-4 h-3 lg:h-4 text-yellow-600 hover:text-yellow-900 focus:text-yellow-900"
                        viewBox="0 0 16 16">
                        <path
                            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" @click="ouvrirModalSuppression"
                        class="bi bi-trash-fill w-3 lg:w-4 h-3 lg:h-4 text-red-800 hover:text-red-950 focus:text-red-950" viewBox="0 0 16 16">
                        <path
                            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                    </svg>
                    <modalSuppression
                    v-if="modalSuppressionVisible"
                    :modalSuppressionVisible="modalSuppressionVisible"
                    :elementASupprimer="elementASupprimer" 
                    @suppressionAnnulee="suppressionAnnulee"
                    @confirmationSuppression="confirmationSuppression"/>
                </div>
            </div>
        </td>
    </tr>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import axios from 'axios';
import { useActivitySector } from '@/composables/secteurActivites';
import modalSuppression from "@/components/modalSuppression.vue";


const props = defineProps({
    isDemandes: Boolean,
    isTableauDeBord: Boolean,
    element: Object
})
const router = useRouter()
let isOffer = ref(false);
let intershipType = ref(null);

const { activitySectorResult, getActivitySectorById } = useActivitySector();
let activitySectorId = ref(null);

const {activateIntership} = useActivateIntership();

/* Format de date 'année-mois-jours' */
const formatDate = (dateString) => {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Ajout de 1 puisque le mois commence à 0
    const day = ('0' + date.getDate()).slice(-2);

    return `${year}-${month}-${day}`;
};


const goToEditForm = () => {
        let id;
        let type;

        if (!isOffer) {
            id = props.element._id;
            type = 'request';
        } else {
            id = props.element._id;
            type = 'offer';
        }

        router.push({
            name: 'formulairedo',
            params: {
                type: type,
                id: id,
                
            }
        })
    }


onMounted(async () => {
    if (props.isDemandes) {
        isOffer = false;
        intershipType = 'internship-requests';
    } else {
        isOffer = true;
        intershipType = 'internship-offers';
    }
    if (props.element.enterprise) {
        activitySectorId = props.element.enterprise.activitySector;
        console.log(activitySectorId)
        setTimeout(() => {
            getActivitySectorById(activitySectorId);
        }, 0o200);

    }
})

const modalSuppressionVisible = ref(false);
let elementASupprimer = ref(null);

const ouvrirModalSuppression = () => {
  modalSuppressionVisible.value = !modalSuppressionVisible.value;
  console.log("Ouverture du modal de suppression");
  console.log(modalSuppressionVisible.value)
};

const fermerModalSuppression = () => {
  modalSuppressionVisible.value = false;
};

const suppressionAnnulee = () => {
  fermerModalSuppression();
};

const confirmationSuppression = () => {
    
    if (props.isDemandes) {
        suppression(props.element._id, elementASupprimer.value = "internship-requests");
        fermerModalSuppression();
    } else {
        suppression(props.element._id, elementASupprimer.value = "internship-offers");
        fermerModalSuppression();
    }
};

</script>

<style>
.border-yellow-600-active {
    border-color: rgb(202, 138, 4);
}

.border-red-800-active {
    border-color: rgb(153, 27, 27, 0.85);
}
</style>