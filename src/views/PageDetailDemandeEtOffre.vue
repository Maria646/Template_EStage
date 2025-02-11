<template>

  <template v-if="isFicheDetailDemandeDeStage && demandeDeStageResult || offreDeStagesResult">
    <!-- En-tête -->
    <div class="mb-10"
      :class="{'border-l-8 border-yellow-600': isFicheDetailDemandeDeStage, 'border-l-8 border-red-800': !isFicheDetailDemandeDeStage}">
      <p v-if="isFicheDetailDemandeDeStage" class="text-neutral-500 text-md font-semibold ml-5">Demande de stage</p>
      <p v-if="!isFicheDetailDemandeDeStage" class="text-neutral-500 text-md font-semibold ml-5">Offre de stage</p>
      <h1 class="text-neutral-500 text-4xl font-bold mb-5 ml-5">
        {{ isFicheDetailDemandeDeStage ? demandeDeStageResult.title : offreDeStagesResult.title }}</h1>
      <h2 v-if="!isFicheDetailDemandeDeStage"
        class="bg-white inline-block text-neutral-500 font-semibold text-xl text-center p-3 ml-5">
        {{ offreDeStagesResult.enterprise.name }}</h2>
    </div>
    
    <!-- Icônes -->
   <div class="text-right font-extrabold mb-5">
     <i class="ficheDetaillee__icône-consulter fa fa-check text-2xl md:text-4xl mr-3 text-green-400 hover:text-green-500 cursor-pointer" aria-hidden="true" @click="activateIntership(elementASupprimer, elementId)"></i>
     <i class="fa-solid fa-pen-to-square text-2xl md:text-4xl ml-3 mr-3 text-blue-800 hover:text-blue-900 cursor-pointer" @click="goToEditForm"></i>
     <i class="ficheDetaillee__icône-supprimer fas fa-trash text-2xl md:text-4xl ml-3 text-red-700 hover:text-red-800 cursor-pointer" @click="ouvrirModalSuppression"></i>
      <modalSuppression
        v-if="modalSuppressionVisible"
        :modalSuppressionVisible="modalSuppressionVisible"
        :elementASupprimer="elementASupprimer"
        @suppressionAnnulee="suppressionAnnulee"
        @confirmationSuppression="confirmationSuppression"/>
   </div>

    <!-- Fiche -->
    <div class="bg-white p-8 lg:p-16 rounded-xl h-auto">
      <h3 v-if="isFicheDetailDemandeDeStage" class="text-3xl md:text-4xl font-bold mb-5 lg:mb-10"
        :class="{'text-yellow-600': isFicheDetailDemandeDeStage }">
        {{ demandeDeStageResult.candidate.firstName + ' ' + demandeDeStageResult.candidate.lastName }}</h3>
      <p v-if="isFicheDetailDemandeDeStage" class="text-neutral-500 mb-16">{{ demandeDeStageResult.candidate.description }}</p>
      <h3 v-if="!isFicheDetailDemandeDeStage" class="text-red-800 text-3xl md:text-4xl font-bold mb-5 lg:mb-10">
        Description de la tâche</h3>
      <p v-if="!isFicheDetailDemandeDeStage" class="text-neutral-500 mb-16">{{ offreDeStagesResult.description }}</p>
      <div class="grid grid-cols-1 mb-16" :class="{'md:grid-cols-2 md:gap-5': isFicheDetailDemandeDeStage, 'md:grid-cols-1': !isFicheDetailDemandeDeStage}">
        <div>
          <div class="border-l-8 border-neutral-500 mb-8">
            <h5 v-if="isFicheDetailDemandeDeStage" class="text-lg font-bold text-neutral-500 mb-3 ml-2">Programme de formation</h5>
            <h5 v-if="!isFicheDetailDemandeDeStage" class="text-lg font-bold text-neutral-500 mb-3 ml-2">Formations demandées</h5>
            <p v-if="isFicheDetailDemandeDeStage" class="text-neutral-500 text-sm ml-2">{{ demandeDeStageResult.skills.slice(0,10) .join(', ') }}</p>
            <p v-if="!isFicheDetailDemandeDeStage" class="text-neutral-500 text-sm ml-2">Diplôme d'études collégiales ou équivalent</p>
          </div>
          <div class="border-l-8 border-neutral-500" :class="{'mb-8': isFicheDetailDemandeDeStage }">
            <h5 v-if="isFicheDetailDemandeDeStage" class="text-lg font-bold text-neutral-500 mb-3 ml-2">Secteur d'activité</h5>
            <h5 v-if="!isFicheDetailDemandeDeStage" class="text-lg font-bold text-neutral-500 mb-3 ml-2">Exigences</h5>
            <p v-if="isFicheDetailDemandeDeStage" class="text-neutral-500 text-sm ml-2">Nouvelles technologies de l'information</p>
            <p v-if="!isFicheDetailDemandeDeStage" class="text-neutral-500 mb-5 ml-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error a nostrum modi, maiores voluptates recusandae
              odit dolorum iure exercitationem aperiam velit ipsam saepe. Ad praesentium sunt reprehenderit, perspiciatis
              cumque aut commodi unde quod mollitia laudantium vitae iure eaque, voluptas rem nesciunt labore, culpa illum
              accusamus dicta dolor illo ducimus deserunt excepturi. Vitae totam nulla ullam sunt vero iusto, non molestiae
              autem placeat alias modi, quod minus error sed impedit adipisci repudiandae facilis a mollitia quam officiis
              aperiam nisi?</p>
              <p v-if="!isFicheDetailDemandeDeStage" class="text-neutral-500 ml-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nisi laborum aliquid corrupti possimus
                aliquam quia officia provident cupiditate dolorem perferendis iusto consequatur at animi molestiae natus, rerum
                tenetur porro, sed ducimus? Perspiciatis, corporis animi quasi ex quam molestias! Alias quas architecto
                provident officia ad, saepe laudantium suscipit eaque inventore nostrum ipsa esse beatae.</p>
          </div>
          <div v-if="isFicheDetailDemandeDeStage" class="border-l-8 border-neutral-500">
            <h5 class="text-lg font-bold text-neutral-500 mb-3 ml-2">Compétences</h5>
            <p class="text-neutral-500 text-sm ml-2">{{ demandeDeStageResult.candidate.skills.slice(0,10) .join(', ') }}</p>
          </div>
        </div>
        <div>
          <div v-if="isFicheDetailDemandeDeStage" class="border-l-8 border-neutral-500 mb-8">
            <h5 class="text-lg font-bold text-neutral-500 mb-3 ml-2">Établissement d'enseignement</h5>
            <p class="text-neutral-500 text-sm ml-2">Cégep de Trois-Rivières</p>
          </div>
          <div v-if="isFicheDetailDemandeDeStage" class="border-l-8 border-neutral-500 mb-8">
            <h5 class="text-lg font-bold text-neutral-500 mb-3 ml-2">Ville</h5>
            <p class="text-neutral-500 text-sm ml-2">{{ demandeDeStageResult.candidate.city }}</p>
          </div>
          <div v-if="isFicheDetailDemandeDeStage" class="border-l-8 border-neutral-500">
            <h5 class="text-lg font-bold text-neutral-500 mb-3 ml-2">Région</h5>
            <p class="text-neutral-500 text-sm ml-2">{{ demandeDeStageResult.province.value }}</p>
          </div>
        </div>
      </div>
      <h4 v-if="isFicheDetailDemandeDeStage" class="text-yellow-600 text-lg font-bold mb-10">Informations sur le stage recherché</h4>
      <h4 v-if="!isFicheDetailDemandeDeStage" class="text-red-800 text-lg font-bold mb-10">Informations sur le stage</h4>
      <div class="grid grid-cols-1 mb-16 md:grid-cols-2 md:gap-5">
        <div>
          <div class="border-l-8 border-neutral-500 mb-8">
            <h5 class="text-lg font-bold text-neutral-500 mb-3 ml-2">Type de stage</h5>
            <p class="text-neutral-500 text-sm ml-2">{{ isFicheDetailDemandeDeStage ? demandeDeStageResult.internshipType.value : offreDeStagesResult.internshipType.value }}</p>
          </div>
          <div class="border-l-8 border-neutral-500 mb-8">
            <h5 class="text-lg font-bold text-neutral-500 mb-3 ml-2">Nombre d'heures par semaine</h5>
            <p class="text-neutral-500 text-sm ml-2">{{ isFicheDetailDemandeDeStage ? demandeDeStageResult.weeklyWorkHours : offreDeStagesResult.weeklyWorkHours }} heures par semaine</p>
          </div>
          <div class="border-l-8 border-neutral-500">
            <h5 class="text-lg font-bold text-neutral-500 mb-3 ml-2">Rémunération</h5>
            <p v-if="isFicheDetailDemandeDeStage" class="text-neutral-500 text-sm ml-2">À la discrétion de l'entreprise</p>
            <p v-if="!isFicheDetailDemandeDeStage" class="text-neutral-500 text-sm ml-2">{{ offreDeStagesResult.paid }}</p>
          </div>
        </div>
        <div>
          <div class="border-l-8 border-neutral-500 mb-8">
            <h5 class="text-lg font-bold text-neutral-500 mb-3 ml-2">Date de début</h5>
            <p class="text-neutral-500 text-sm ml-2">{{ isFicheDetailDemandeDeStage ? formatDate(demandeDeStageResult.startDate) : formatDate(offreDeStagesResult.startDate) }}</p>
          </div>
          <div class="border-l-8 border-neutral-500 mb-8">
            <h5 class="text-lg font-bold text-neutral-500 mb-3 ml-2">Date de fin</h5>
            <p class="text-neutral-500 text-sm ml-2">{{ isFicheDetailDemandeDeStage ? formatDate(demandeDeStageResult.endDate) : formatDate(offreDeStagesResult.endDate) }}</p>
          </div>
        </div>
      </div>
      <h4 class="text-lg font-bold mb-10" :class="{'text-yellow-600': isFicheDetailDemandeDeStage, 'text-red-800': !isFicheDetailDemandeDeStage }">Informations supplémentaires</h4>
      <p class="text-neutral-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error a nostrum modi, maiores voluptates recusandae
        odit dolorum iure exercitationem aperiam velit ipsam saepe. Ad praesentium sunt reprehenderit, perspiciatis
        cumque aut commodi unde quod mollitia laudantium vitae iure eaque, voluptas rem nesciunt labore, culpa illum
        accusamus dicta dolor illo ducimus deserunt excepturi. Vitae totam nulla ullam sunt vero iusto, non molestiae
        autem placeat alias modi, quod minus error sed impedit adipisci repudiandae facilis a mollitia quam officiis
        aperiam nisi?
      </p>
      <button
        v-if="isFicheDetailDemandeDeStage"
        type="button"
        class="text-white focus:ring-4 
        focus:outline-none focus:ring-blue-300  bg-yellow-600 mt-20 text-xl
        font-medium rounded-lg px-5 py-2.5 
        text-center inline-flex items-center me-2">
        <i class="fa-solid fa-cloud-arrow-down mr-2"></i>
        <span class="font-semibold">Télécharger le C.V.</span>
      </button>
    </div>
  </template>

  <div v-else>
  Chargement en cours ...
  </div>

</template>

<script setup>
  import modalSuppression from "@/components/modalSuppression.vue";
  import suppressionDesDonnees from '../composables/suppressionDesDonnees'
  import { useRouter, useRoute} from "vue-router";
  import { onMounted, ref } from "vue";
  import { useDemandesDeStages } from "@/composables/demandeDeStage";
  import { useOffreDeStages } from "@/composables/offreDeStage";
  import { useActivateIntership } from '@/composables/activerStage';


  // Initialisation des variables
  const {
    demandeDeStageResult,
    getDemandeDeStagesById
  } = useDemandesDeStages();
  let demandeDeStageId = ref(null);
  let elementId = ref(null);

  const {
    offreDeStagesResult,
    getOffreDeStageById
  } = useOffreDeStages();
  let offreDeStageId = ref(null);

  const { suppression } = suppressionDesDonnees();

  const isFicheDetailDemandeDeStage = ref(true);
  let elementASupprimer = ref(null);

  const {activateIntership} = useActivateIntership();

  const router = useRouter()
  const route = useRoute();
    
  // Configuration de l'affichage des informations detaillées selon l'identifiant
  onMounted(async () => {
    const urlString = window.location.href;
    elementId = route.params.id;

    if (urlString.includes("pagedetaildemandedestage")) {
      isFicheDetailDemandeDeStage.value = true;
      elementASupprimer.value = 'internship-requests';
/*       demandeDeStageId = route.params.id; */
      await getDemandeDeStagesById(elementId);

    } else if (urlString.includes("pagedetailoffredestage")) {
      isFicheDetailDemandeDeStage.value = false;
      elementASupprimer.value = 'internship-offers';
/*       offreDeStageId = route.params.id; */
      await getOffreDeStageById(elementId);
    }
  });

  // Configuration de l'icône pour editer un formulaire
  const goToEditForm = () => {
    let id;
    let type;
    
    if (isFicheDetailDemandeDeStage.value) {
      id = elementId;
      type = 'request';
    } else {
      id = elementId;
      type = 'offer';
    }
    router.push({ name: 'formulairedo', params: { type: type, id: id } })
  }

  /* Format de date 'année-mois-jours' */
const formatDate = (dateString) => {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Ajout de 1 puisque le mois commence à 0
    const day = ('0' + date.getDate()).slice(-2);

    return `${year}-${month}-${day}`;
};

  // Configuration de l'icône pour supprimer un formulaire
  const modalSuppressionVisible = ref(false);

  const ouvrirModalSuppression = () => {
    modalSuppressionVisible.value = !modalSuppressionVisible.value;
  };

  const fermerModalSuppression = () => {
    modalSuppressionVisible.value = false;
  };

  const suppressionAnnulee = () => {
    fermerModalSuppression();
  };

  const confirmationSuppression = () => {
    if(isFicheDetailDemandeDeStage){
      suppression(demandeDeStageResult._id, elementASupprimer.value = 'intership-requests' )
      fermerModalSuppression();
      router.push('/app/demandesdestages');
    }
    else if(!isFicheDetailDemandeDeStage){
      suppression(offreDeStagesResult._id, elementASupprimer.value = 'intership-offers' )
      fermerModalSuppression();
      router.push('/app/offresdestages');
    }
  }
</script>