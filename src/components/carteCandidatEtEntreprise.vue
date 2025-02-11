<template>
    <div v-if="isCandidat" class="bg-white p-5 w-84 shrink hover:bg-fuchsia-100 ">
        <div class="flex items-center">
            <div class="bg-fuchsia-800 p-1.5 w-20 h-20 flex justify-center items-center">
                <img src="/src/assets/icons/candidate-48.png" alt="candidat" class="w-14">
            </div>
            <div class="ml-3 w-2/3">
                <h1 class="text-md lg:text-lg font-bold">{{candidate.firstName}} {{ candidate.lastName }}</h1>
                <p class="text-xs mb-3 text-neutral-500">Développeur Front-End</p>
                <p class="text-xs text-neutral-500">{{ candidate.email }}</p>
                <p class="text-xs text-neutral-500">{{ candidate.phone }}</p>
            </div>
        </div>
    </div>

    <div v-if="isEntreprise" class="bg-white px-4 py-12 2xl:py-20 hover:bg-blue-100">
        <div class="xl:flex items-center justify-center">
            <div>
                <img src="../assets/img/enterprises.png" alt="logo-entreprises" class="mx-auto mb-6 xl:mb-0 w-32">
            </div>
            <div class="text-center xl:text-left xl:ml-6">
                <h1 class="text-xl xl:text-xl font-bold mb-2">{{ enterprise.name }}</h1>
                <p class="text-xs">{{ enterprise.address }}</p>
                <p class="text-xs mb-5">{{ enterprise.city }} {{ enterprise.postalCode }}</p>
                <p class="text-xs">Téléphone : {{ enterprise.phone }}</p>
                <p class="text-xs">Télécopieur : 819 373-8805</p>
            </div>
        </div>
    </div>

</template>

<script setup>


const props = defineProps({
        isCandidat: Boolean,
        isEntreprise: Boolean,
        candidate: Object,
        enterprise: Object
})

</script>