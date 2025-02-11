<template>


  <header class="bg-white ml-0.5">
    <!-- Icône Menu -->
    <div class="flex flex-row items-center justify-between h-auto md:h-24 pr-2 lg:p-4 lg:ml-12">

      <button @click="toggleNavbar()" class="flex lg:hidden items-center px-3 py-2 rounded text-gray-800 border-gray-800 md:mb-0">
        <span v-if="!mobNavbar">
          <svg class="h-4 w-4 sm:h-6 sm:w-6 text-gray-500" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Icône "bars-sort" -->
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M5 4h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm0 6h6a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm0 6h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2z"
            fill="currentColor" />
        </svg>
        </span>
        <span v-else>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </span>
      </button>


      <nav class="hidden lg:flex lg:flex-row gap-2 mb-1 ">
        <!-- Bouton "Ajouter une offre de stage" -->
        <button @click="goToFormDO('offer')" :class="[
          'ripple inline-block rounded px-2 lg:px-1 py-1 text-center text-[10px] xl:text-xs font-small leading-6 shadow transition hover:shadow-lg focus:outline-none border',
          activeButton === 'offer' ? 'bg-red-50 text-red-800 border-red-800' : 'bg-white text-red-800 border-red-800 hover:bg-red-50 '
        ]">
          <svg class="mr-1 inline-block h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          Ajouter une offre de stage
        </button>


        <!-- Bouton "Ajouter une demande de stage" -->
        <button @click="goToFormDO('request')" :class="[
          'ripple inline-block rounded px-2 py-1 text-center text-[10px] xl:text-xs font-small leading-6 shadow transition focus:outline-none border border-yellow-600',
          activeButton === 'request' ? 'bg-yellow-50 text-yellow-600 hover:bg-yellow-50' : 'bg-white text-yellow-600 hover:bg-yellow-50'
        ]">
          <svg class="mr-1 inline-block h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6">
            </path>
          </svg>
          Ajouter une demande de stage
        </button>


        <!-- Bouton "Ajouter une entreprise" -->
        
          <button @click="goToFormCE('entreprises')" :class="[
          'ripple inline-block rounded px-2 py-1 text-center text-[10px] xl:text-xs font-small leading-6 shadow transition focus:outline-none border border-blue-400',
          activeButton === 'entreprises' ? 'bg-blue-50 text-blue-400 hover:bg-blue-50' : 'bg-white text-blue-400 hover:bg-blue-50'
        ]">
            <svg class="mr-1 inline-block h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6">
              </path>
            </svg>
            Ajouter une entreprise
          </button>
      

        <!-- Bouton "Ajouter un candidat" -->

       
          <button @click="goToFormCE('candidats')" :class="[
          'ripple inline-block rounded px-2 py-1 text-center text-[10px] xl:text-xs font-small leading-6 shadow transition focus:outline-none border border-fuchsia-800',
          activeButton === 'candidats' ? 'bg-fuchsia-100 text-fuchsia-800 hover:bg-fuchsia-100' : 'bg-white text-fuchsia-800 hover:bg-fuchsia-50'
        ]">
            <svg class="mr-1 inline-block h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6">
              </path>
            </svg>
            Ajouter un candidat
          </button>
       
      </nav>


      <!-- Carte utilisateur -->
      <div class="flex md:flex-row items-center gap-2 p-2">
        <!-- Icône utilisateur -->

        <div>
          <p class="text-[9px] md:text-xs text-black font-medium">{{ adminStore.state.nomEtPrenom }}</p>
          <p class="text-[9px] md:text-xs text-gray-400 font-medium">Admin</p>

        </div>
        <img src="../assets/icons/candidate-48.png" alt="Photo de profil" class="h-6 w-6 md:h-10 md:w-10 rounded-full bg-gray-300 object-cover" />
      </div>
      
    </div>
    <nav v-if="mobNavbar" class="flex lg:hidden flex-col gap-2 pl-2 pr-5 transition-all duration-300 max-w-xs mx-auto sm:mr-auto">
          <!-- Bouton "Ajouter une offre de stage" -->
          <button @click="goToFormDO('offer')" :class="[
      'ripple inline-block rounded px-2 py-1 text-center text-xs font-medium leading-6 shadow transition hover:shadow-lg focus:outline-none border w-full',
      activeButton === 'offer'
        ? 'bg-red-50 text-red-800 border-red-800'
        : 'bg-white text-red-800 border-red-800 hover:bg-red-50',]">
            <svg class="mr-1 inline-block h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6">
              </path>
            </svg>
            Ajouter une offre de stage
          </button>

          <!-- Bouton "Ajouter une demande de stage" -->
          <button @click="goToFormDO('request')" :class="[
      'ripple inline-block rounded px-2 py-1 text-center text-xs font-medium leading-6 shadow transition focus:outline-none border border-yellow-600 w-full',
      activeButton === 'request'
        ? 'bg-yellow-50 text-yellow-600 hover:bg-yellow-50'
        : 'bg-white text-yellow-600 hover:bg-yellow-50',]">
            <svg class="mr-1 inline-block h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6">
              </path>
            </svg>
            Ajouter une demande de stage
          </button>

          <!-- Bouton "Ajouter une entreprise" -->
          
            <button @click="goToFormCE('entreprises')" :class="[
      'ripple inline-block rounded px-2 py-1 text-center text-xs font-medium leading-6 shadow transition focus:outline-none border border-blue-400 w-full',
      activeButton === 'entreprises'
        ? 'bg-blue-50 text-blue-400 hover:bg-blue-50'
        : 'bg-white text-blue-400 hover:bg-blue-50',]">
              <svg class="mr-1 inline-block h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6">
                </path>
              </svg>
              Ajouter une entreprise
            </button>
          

          <!-- Bouton "Ajouter un candidat" -->

          
            <button @click="goToFormCE('candidats')" :class="[
      'ripple inline-block rounded px-2 py-1 text-center text-xs font-medium leading-6 shadow transition focus:outline-none border border-fuchsia-800 w-full',
      activeButton === 'candidats'
        ? 'bg-fuchsia-100 text-fuchsia-800 hover:bg-fuchsia-100'
        : 'bg-white text-fuchsia-800 hover:bg-fuchsia-50',]">
              <svg class="mr-1 inline-block h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6">
                </path>
              </svg>
              Ajouter un candidat
            </button>
          
        </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useRouter } from 'vue-router'
import { useAdminStore } from '@/stores/admin';
import { ref } from 'vue';


const adminStore = useAdminStore();

// Fonction pour émettre les routes dynamiques vers le formulaireDO selon si c'est une offre ou un demande
const router = useRouter();
const goToFormDO = type => {
  setActiveButton(type);
  router.push({ name: 'formulairedo', params: { type } })
}

const goToFormCE =type => {
  setActiveButton(type);
  const newUrl = router.resolve({ name: 'formulaireCE', params: { type } }).href;
  window.location.assign(newUrl);
}

//Ajout dun etat local pour un bouton actif
const activeButton = ref('');

const setActiveButton = (button) => {
  activeButton.value = button;
};
const mobNavbar = ref(false);
const toggleNavbar = () => {
  mobNavbar.value = !mobNavbar.value;
};





</script>

