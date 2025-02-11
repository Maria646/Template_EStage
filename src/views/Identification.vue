<template>
  <main class="xl:h-screen xl:overflow-hidden">
    <div>
      <h1><img src="/src/assets/img/logo.png" alt="logo" class="h-24"></h1>
    </div>
    <div class="flex flex-col xl:flex-row">
      <div class="xl:w-1/2">
        <img src="/src/assets/img/home-students.png" alt="home-students" class="w-full h-auto">
      </div>
      <div class="xl:w-1/2 bg-gray-200 flex">
        <div class="p-12 xl:p-16 2xl:p-24 my-auto">
          <h2 class="text-5xl lg:text-7xl mb-5">Identification</h2>
          <p class="md:w-5/6 lg:w-3/4 mb-10 xl:mb-20">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet maiores neque eum quia! Quisquam, nisi voluptate.</p>
          <form @submit.prevent="acceder">
            <div class="flex flex-col mb-5 lg:mb-10">
              <input type="text" id="nomEtPrenom" v-model="nomEtPrenom" placeholder="Votre nom et prénom" @input="validerNomEtPrenom" minlength="2" maxlength="50" class="border-teal-500 border-solid hover:border-4 border-2 p-3 md:w-5/6 lg:w-3/4">
              <span v-if="!nomEtPrenomValid" class="text-red-500">{{ nomEtPrenomErreur}}</span>
            </div>
            <div class="flex flex-col mb-5 lg:mb-10">
              <input type="email" id="courriel" v-model="courriel" placeholder="Votre courriel" @input="validerCourriel" minlength="2" maxlength="100" class="border-teal-500 border-solid hover:border-4 border-2 p-3 md:w-5/6 lg:w-3/4">
              <span v-if="!courrielValid" class="text-red-500">{{ courrielErreur }}</span>
            </div>
            <button type="submit" class="bg-teal-500 border rounded p-3 lg:p-5 text-white">Accéder maintenant</button>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAdminStore } from '@/stores/admin'; 

const nomEtPrenom = ref('');
const courriel = ref('');
const nomEtPrenomValid = ref(true);
const courrielValid = ref(true);
const nomEtPrenomErreur = ref('');
const courrielErreur = ref('');
const router = useRouter();

const validerNomEtPrenom = () => {
  nomEtPrenomErreur.value = '';

  if (!nomEtPrenom.value) {
    nomEtPrenomErreur.value = 'Veuillez entrer votre nom et prénom.';
    nomEtPrenomValid.value = false;
  } else if (nomEtPrenom.value.length < 2 || nomEtPrenom.value.length > 50) {
    nomEtPrenomErreur.value = 'Le nom et prénom doivent contenir entre 2 et 50 caractères.';
    nomEtPrenomValid.value = false;
  } else {
    nomEtPrenomValid.value = true;
  }
}

const validerCourriel = () => {
  courrielErreur.value = '';

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!courriel.value) {
    courrielErreur.value = 'Veuillez entrer votre courriel.';
    courrielValid.value = false;
  } else if (courriel.value.length < 2 || courriel.value.length > 100) {
    courrielErreur.value = 'Le courriel doit contenir entre 2 et 100 caractères.';
    courrielValid.value = false;
  } else if (!emailRegex.test(courriel.value)) {
    courrielErreur.value = 'Veuillez entrer une adresse courriel valide.';
    courrielValid.value = false; 
  } else {
    courrielValid.value = true;
  }

  console.log("Adresse courriel valide", courrielValid.value);
}



const acceder = () => {
  nomEtPrenomErreur.value = '';
  courrielErreur.value = '';

  validerNomEtPrenom();
  validerCourriel();

  if (!nomEtPrenom.value || !courriel.value || !nomEtPrenomValid.value || !courrielValid.value) {
    return;
  }

  useAdminStore().setNomEtPrenom(nomEtPrenom.value);

  router.push('/app/tableaudebord');
}
</script>
  