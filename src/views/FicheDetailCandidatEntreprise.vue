<template>

    <template v-if="isCandidate && candidateResult || enterpriseResult">
        <!-- En-tête -->
        <div class="flex mb-10">
            <div>
                <img v-if="!isCandidate" src="../assets/img/enterprises.png" alt="logo-entreprises" class="w-40 mr-5">
            </div>
            <div :class="{'border-l-8 border-fuchsia-800': isCandidate, 'border-l-8 border-blue-400': !isCandidate}">
                <p v-if="isCandidate" class="text-neutral-500 text-md font-semibold ml-5">Candidat</p>
                <p v-if="!isCandidate" class="text-neutral-500 text-md font-semibold ml-5">Entreprise</p>
                <h1 class='text-neutral-500 text-4xl font-bold mb-5 ml-5'>
                    {{ isCandidate ? candidateResult.firstName + ' ' + candidateResult.lastName : enterpriseResult.name }}
                </h1>
                <h2 v-if="isCandidate"
                    class="bg-white text-neutral-500 font-semibold text-xl inline-block text-center p-2 ml-5">
                    Développeur Front-End</h2>
            </div>
        </div>

        <!-- Icônes -->
        <div class="text-right font-extrabold mb-5">
            <i class="ficheDetaillee__icône-consulter fa fa-check text-2xl md:text-4xl mr-3 text-green-400 hover:text-green-500 cursor-pointer" aria-hidden="true"></i>
            <i class="fa-solid fa-pen-to-square text-2xl md:text-4xl ml-3 mr-3 text-blue-800 hover:text-blue-900 cursor-pointer" @click="goToEditForm"></i>
            <i class="ficheDetaillee__icône-supprimer fas fa-trash text-2xl md:text-4xl ml-3 text-red-700 hover:text-red-800 cursor-pointer" @click="ouvrirModalSuppression"></i>
            <modalSuppression
                v-if="modalSuppressionVisible"
                :isCandidate="isCandidate"
                :modalSuppressionVisible="modalSuppressionVisible"
                :elementASupprimer="elementASupprimer"
                @suppressionAnnulee="suppressionAnnulee"
                @confirmationSuppression="isCandidate ? suppressionConfirmer(candidateResult._id) : suppressionConfirmer(enterpriseResult._id)"/>
        </div>

        <!-- Fiche -->
        <div class="bg-white p-8 lg:p-16 rounded-xl">
            <h3 class="text-3xl md:text-4xl font-bold mb-5 lg:mb-10"
                :class="{'text-blue-400': !isCandidate, 'text-fuchsia-800': isCandidate}">Courte présentation</h3>
            <p class="text-neutral-500 text-md mb-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                quidem,
                nam reprehenderit hic dolores iste minima laboriosam. Nam maiores hic blanditiis necessitatibus
                suscipit, quod minima nostrum perspiciatis, odit iusto quas! Quasi magni veniam, repudiandae minus
                similique nihil facere voluptatum beatae ducimus neque et culpa id, deleniti dicta, dolorem saepe ab
                itaque dolorum! Magni a quae voluptatem illum, minima dolorem eum labore asperiores neque impedit
                suscipit amet esse nostrum delectus excepturi.</p>
            <h4 v-if="!isCandidate" class="text-lg text-blue-400 font-bold mb-5">Personne contact</h4>
            <p v-if="!isCandidate" class="text-2xl font-bold text-neutral-500 mb-8">Pierre Boivin</p>
            <h4 class="text-lg font-bold mb-10"
                :class="{'text-blue-400': !isCandidate, 'text-fuchsia-800': isCandidate}">Informations personnelles</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 md:gap-5">
                <div>
                    <div class="border-l-8 border-neutral-500 mb-5">
                        <h5 class="text-lg font-bold text-neutral-500 mb-3 ml-2">Adresse</h5>
                        <p class='text-neutral-500 text-sm ml-2'>
                            {{ isCandidate ? candidateResult.address : enterpriseResult.address }}</p>
                    </div>
                    <div class="border-l-8 border-neutral-500 mb-5">
                        <h5 class="text-lg font-bold text-neutral-500 mb-3 ml-2">Ville</h5>
                        <p class='text-neutral-500 text-sm ml-2'>
                            {{ isCandidate ? candidateResult.city : enterpriseResult.city }}</p>
                    </div>
                    <div class="border-l-8 border-neutral-500 mb-5">
                        <h5 class="text-lg font-bold text-neutral-500 mb-3 ml-2">Province</h5>
                        <p class='text-neutral-500 text-sm ml-2'>
                            {{ isCandidate ? candidateResult.province.value : enterpriseResult.province.value }}</p>
                    </div>
                    <div class="border-l-8 border-neutral-500 mb-5 md:mb-0">
                        <h5 class="text-lg font-bold text-neutral-500 mb-3 ml-2">Code postal</h5>
                        <p class='text-neutral-500 text-sm ml-2'>
                            {{ isCandidate ? candidateResult.postalCode : enterpriseResult.postalCode }}</p>
                    </div>
                </div>
                <div>
                    <div class="border-l-8 border-neutral-500 mb-5">
                        <h5 class="text-lg font-bold text-neutral-500 mb-3 ml-2">Téléphone</h5>
                        <p class='text-neutral-500 text-sm ml-2'>
                            {{ isCandidate ? candidateResult.phone : enterpriseResult.phone }}</p>
                    </div>
                    <div class="border-l-8 border-neutral-500">
                        <h5 class="text-lg font-bold text-neutral-500 mb-3 ml-2">Courriel</h5>
                        <p class='text-neutral-500 text-sm ml-2'>
                            {{ isCandidate ? candidateResult.email : enterpriseResult.email }}</p>
                    </div>
                </div>
            </div>
        </div>
    </template>
    <template v-else>
        <p>Loading...</p>
    </template>
</template>

<script setup>
    import modalSuppression from '@/components/modalSuppression.vue';
    import { onMounted, ref } from 'vue';
    import { useRouter, useRoute } from 'vue-router';
    import { useCandidate } from '@/composables/candidats';
    import { useEnterprise } from '@/composables/entreprises';
    import { useDeleteElement } from '@/composables/suppression';


    // Initialisation des variables
    const {
        candidateResult,
        getCandidateById
    } = useCandidate();
    let candidateId = ref(null);

    const {
        enterpriseResult,
        getEnterpriseById
    } = useEnterprise();
    let enterpriseId = ref(null);

    const {deleteElement} = useDeleteElement();

    const isCandidate = ref(true);
    let elementASupprimer = ref(null);

    const router = useRouter()
    const route = useRoute();

    // Configuration de l'affichage des informations detaillées selon l'identifiant
    onMounted(async () => {
        const urlString = window.location.href;

        if (urlString.includes('candidat')) {
            isCandidate.value = true;
            elementASupprimer.value = 'candidates';
            candidateId = route.params.id;
            await getCandidateById(candidateId);
            console.log(candidateResult);

        } else if (urlString.includes('entreprise')) {
            isCandidate.value = false;
            elementASupprimer.value = 'enterprises';
            enterpriseId = route.params.id;
            await getEnterpriseById(enterpriseId);
            console.log(enterpriseResult);
        }
    });

    // Configuration de l'icône pour modifier un formulaire
    const goToEditForm = () => {
        let id;
        let type;

        if (isCandidate.value) {
            id = candidateId;
            type = 'candidats';
        } else {
            id = enterpriseId;
            type = 'entreprises';
        }
        router.push({ name: 'formulaireCE', params: { type: type, id: id } })
    }

    // Configuration de l'icône pour supprimer un formulaire
    const modalSuppressionVisible = ref(false);
    
    const ouvrirModalSuppression = () => {
    modalSuppressionVisible.value = !modalSuppressionVisible.value;
    console.log(modalSuppressionVisible.value)
    };

    const fermerModalSuppression = () => {
    modalSuppressionVisible.value = false;
    };

    const suppressionAnnulee = () => {
    fermerModalSuppression();
    };

    const suppressionConfirmer = async(id) => {
        deleteElement(elementASupprimer.value ,id);
/*     try {
        const url = isCandidate ? 'https://api-4.fly.dev/candidates' : 'https://api-4.fly.dev/enterprises';
        const response = await axios.delete(`${url}/${id}`);
        console.log(response.data); 
        console.log(`L'entrée avec l'ID ${id} a été supprimée.`);
        alert(`Suppression confirmé !`);
    } catch (error) {
        console.error(`Erreur lors de la suppression de l'entrée avec l'ID ${id}:`, error);
    } */
    console.log("Supprimer l'entrée avec ID:");
    fermerModalSuppression();

    router.push('/app/candidats');
    };

</script>