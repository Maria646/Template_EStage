<template>
    <div>
        <div v-if="!showEnterpriseForm">
            <div class="p-4">
                <div class="flex  items-center mb-4  ">
                    <h1 class=" text-4xl font-bold text-neutral-500 pl-2 border-l-4 border-fuchsia-800 mb-9 ">
                        {{ editing ? '' :' Ajouter un Candidat'  }}</h1>
                    <div v-if="editing">

                        <div class=" pl-2 border-l-4 border-fuchsia-800 mb-9">
                            <p class="text-neutral-500">Candidat</p>
                            <h1 class="text-neutral-500  text-4xl font-bold">{{ candidate.firstName }}
                                {{ candidate.lastName }}</h1>
                            <p class="text-s mb-3 text-neutral-500 bg-white mt-4">Développeur Front-End</p>
                        </div>

                    </div>
                </div>
                <form @submit.prevent="submitForm">
                    <div class="flex justify-end my-10">
                        <router-link to="/app/Candidats">
                            <button type="button"
                                class="btn-secondary mr-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                @click="cancelForm">Annuler</button>
                        </router-link>

                        <button type="submit" 
                            class="btn-primary focus:outline-none text-white bg-fuchsia-800  hover:bg-fuchsia-900 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 inline-flex">

                            <svg class="w-6 h-6 text-gray-100 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                    d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
                                    clip-rule="evenodd" />
                            </svg>
                            {{ editing ? 'Mettre à jour' : 'Sauvegarder' }}</button>

                    </div>

                    <div class="nom_poste mb-4">
                        <label for="fullName" class="block mb-1  text-neutral-500 font-bold">Nom et prénom </label>
                        <input type="text" id="fullName" v-model="formData.fullName" @input="validateFullName"
                            class="w-full border-gray-300 rounded-md p-2">
                        <span v-if="fieldsError.fullName" class="text-red-500">{{ fieldsError.fullName }}</span>
                    </div>
                    <div class="nom_poste mb-4">
                        <label for="skills" class="block mb-1  text-neutral-500 font-bold">Poste</label>
                        <input type="text" id="skills" v-model="formData.skills" @input="validateSkills"
                            class="w-full border-gray-300 rounded-md p-2">
                        <span v-if="fieldsError.skills" class="text-red-500">{{ fieldsError.skills}}</span>
                    </div>
                    <div class="block_info-perso my-9">
                        <div class="mb-4">
                            <label for="description" class="block mb-4">
                                <h2 class="text-fuchsia-800 text-lg font-bold">Courte présentation</h2>
                            </label>
                            <textarea id="description" v-model="formData.description" @input="validateDescription"
                                class="block  w-full border-gray-300 rounded-md p-2"></textarea>
                            <span v-if="fieldsError.description "
                                class="text-red-500">{{ fieldsError.description }}</span>
                        </div>
                        <h3 class="  my-8 text-fuchsia-800  font-bold">Informations personnelles</h3>
                        <div class="block_info-perso-all">
                            <div class="block_info-perso-adresse">
                                <div class="mb-4 input_barre-modifier">
                                    <label for="address" class="block mb-1 text-neutral-500 font-bold">Adresse</label>
                                    <input type="text" id="address" v-model="formData.address" @input="validateAddress"
                                        class="w-full border-gray-300 rounded-md p-2">
                                    <span v-if="fieldsError.address"
                                        class="text-red-500">{{ fieldsError.address }}</span>
                                </div>
                                <div class="mb-4 input_barre-modifier">
                                    <label for="city" class="block mb-1  text-neutral-500 font-bold">Ville</label>
                                    <input type="text" id="city" v-model="formData.city" @input="validateCity"
                                        class="w-full border-gray-300 rounded-md p-2">
                                    <span v-if="fieldsError.city " class="text-red-500">{{fieldsError.city }}</span>
                                </div>
                                <div class="mb-4 input_barre-modifier">
                                    <label for="province"
                                        class="block mb-1  text-neutral-500 font-bold">Province</label>
                                    <select id="province" v-model="formData.provinceId" @change="validateProvince"
                                        class="w-full border-gray-300 rounded-md p-2">
                                        <option value="" disabled selected>Choisissez une province</option>
                                        <option v-for="province in provinces" :value="province._id" :key="province._id">
                                            {{ province.value }}
                                        </option>
                                    </select>
                                    <span v-if="fieldsError.province"
                                        class="text-red-500">{{ fieldsError.province }}</span>
                                </div>
                                <div class="mb-4 input_barre-modifier">
                                    <label for="postalCode" class="block mb-1  text-neutral-500 font-bold">Code
                                        postal</label>
                                    <input type="text" id="postalCode" v-model="formData.postalCode"
                                        @input="validatePostalCode" class="w-full border-gray-300 rounded-md p-2">
                                    <span v-if="fieldsError.postalCode"
                                        class="text-red-500">{{ fieldsError.postalCode }}</span>
                                </div>
                            </div>
                            <div class="block_info-perso-contact">
                                <div class="mb-4 input_barre-modifier">
                                    <label for="phone" class="block mb-1  text-neutral-500 font-bold">Téléphone</label>
                                    <input type="text" id="phone" v-model="formData.phone" @input="validatePhone"
                                        class="w-full border-gray-300 rounded-md p-2">
                                    <span v-if="fieldsError.phone" class="text-red-500">{{ fieldsError.phone}}</span>
                                </div>
                                <div class="mb-4 input_barre-modifier">
                                    <label for="email" class="block mb-1  text-neutral-500 font-bold">Courriel</label>
                                    <input type="email" id="email" v-model="formData.email" @input="validateEmail"
                                        class="w-full border-gray-300 rounded-md p-2">
                                    <span v-if="fieldsError.email" class="text-red-500">{{ fieldsError.email }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-end">
                        <router-link to="/app/candidats">
                            <button type="button"
                                class="btn-secondary mr-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                @click="cancelForm">Annuler</button>
                        </router-link>

                        <button type="submit" 
                            class="btn-primary focus:outline-none text-white bg-fuchsia-800  hover:bg-fuchsia-900 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 inline-flex">

                            <svg class="w-6 h-6 text-gray-100 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                    d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
                                    clip-rule="evenodd" />
                            </svg>
                            {{ editing ? 'Mettre à jour' : 'Sauvegarder' }}</button>

                    </div>
                </form>
            </div>
        </div>









        <div v-else>
            <div class="p-4">
                <div class="flex  items-center mb-4">
                    <h1 class="text-4xl font-bold text-neutral-500 pl-2 border-l-4 border-blue-400 mb-9">
                        {{ editing ? '' : 'Ajouter une entreprise' }}</h1>
                    <div v-if="editing">
                        <div class="titre_barre-modifier">
                            <img src="/src/assets/img/enterprises.png" alt="candidat" class="logo ">
                            <div class=" pl-2 border-l-4 border-blue-400">
                                <p class="text-neutral-500">Entreprise</p>
                                <h1 class="text-neutral-500 text-4xl">{{ formData.name }}</h1>

                            </div>
                        </div>
                    </div>
                </div>
                <form @submit.prevent="submitForm">
                    <div class="flex justify-end my-10">
                        <router-link to="/app/Entreprises">
                            <button type="button"
                                class="btn-secondary mr-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                @click="cancelForm">Annuler</button>
                        </router-link>

                        <button type="submit" 
                            class="btn-primary focus:outline-none text-white bg-blue-400  hover:bg-blue-900 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 inline-flex">

                            <svg class="w-6 h-6 text-gray-100 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                    d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
                                    clip-rule="evenodd" />
                            </svg>
                            {{ editing ? 'Mettre à jour' : 'Sauvegarder' }}</button>
                    </div>
                    <div class="nom_poste mb-4">
                        <label for="name" class="block mb-1  text-neutral-500 font-bold">Nom </label>
                        <input type="text" id="name" v-model="formData.name" @input="validateName"
                            class="w-full border-gray-300 rounded-md p-2">
                        <span v-if="fieldsError.name" class="text-red-500">{{ fieldsError.name}}</span>
                    </div>
                    <div class="nom_poste mb-4">
                        <label for="image" class="block mb-1 text-neutral-500 font-bold">Logo</label>
                        <div class="flex items-center">
                            <input type="text " id="image" v-model="formData.image" @input="validateLogo"
                                class="w-full border-gray-300 rounded-md p-2">
                            <label for="image"
                                class="cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                Parcourir
                            </label>
                        </div>
                        <span v-if="fieldsError.logo" class="text-red-500">{{ fieldsError.logo }}</span>
                    </div>
                    <div class="block_info-perso my-9">
                        <div class="mb-4">
                            <label for="description" class="block mb-4">
                                <h2 class="text-blue-400 text-lg font-bold">Courte présentation</h2>
                            </label>
                            <textarea id="description" v-model="formData.description" @input="validateDescription"
                                class="block  w-full border-gray-300 rounded-md p-2"></textarea>
                            <span v-if="fieldsError.description"
                                class="text-red-500">{{ fieldsError.description }}</span>
                        </div>
                        <div class="mb-4 input_barre-modifier">
                            <label for="contact" class="block mb-1 text-neutral-500 font-bold">Personne Contact</label>
                            <input type="text" id="contact" v-model="formData.contact" @input="validateContact"
                                class="w-full border-gray-300 rounded-md p-2">
                            <span v-if="fieldsError.contact" class="text-red-500">{{ fieldsError.contact }}</span>
                        </div>
                        <h3 class="  my-8 text-blue-400  font-bold">Information de contact</h3>
                        <div class="block_info-perso-all">
                            <div class="block_info-perso-adresse">
                                <div class="mb-4 input_barre-modifier">
                                    <label for="address" class="block mb-1 text-neutral-500 font-bold">Adresse</label>
                                    <input type="text" id="address" v-model="formData.address" @input="validateAddress"
                                        class="w-full border-gray-300 rounded-md p-2">
                                    <span v-if="fieldsError.address"
                                        class="text-red-500">{{ fieldsError.address }}</span>
                                </div>
                                <div class="mb-4 input_barre-modifier">
                                    <label for="city" class="block mb-1  text-neutral-500 font-bold">Ville</label>
                                    <input type="text" id="city" v-model="formData.city" @input="validateCity"
                                        class="w-full border-gray-300 rounded-md p-2">
                                    <span v-if="fieldsError.city" class="text-red-500">{{ fieldsError.city }}</span>
                                </div>
                                <div class="mb-4 input_barre-modifier">
                                    <label for="province"
                                        class="block mb-1  text-neutral-500 font-bold">Province</label>
                                    <select id="province" v-model="formData.provinceId" @change="validateProvince"
                                        class="w-full border-gray-300 rounded-md p-2">
                                        <option value="" disabled selected>Choisissez une province</option>
                                        <option v-for="province in provinces" :value="province._id" :key="province._id">
                                            {{ province.value }}
                                        </option>
                                    </select>
                                    <span v-if="fieldsError.province"
                                        class="text-red-500">{{ fieldsError.province }}</span>
                                </div>
                                <div class="mb-4 input_barre-modifier">
                                    <label for="postalCode" class="block mb-1  text-neutral-500 font-bold">Code
                                        postal</label>
                                    <input type="text" id="postalCode" v-model="formData.postalCode"
                                        @input="validatePostalCode" class="w-full border-gray-300 rounded-md p-2">
                                    <span v-if="fieldsError.postalCode"
                                        class="text-red-500">{{ fieldsError.postalCode }}</span>
                                </div>
                            </div>
                            <div class="block_info-perso-contact">
                                <div class="mb-4 input_barre-modifier">
                                    <label for="phone" class="block mb-1  text-neutral-500 font-bold">Téléphone</label>
                                    <input type="text" id="phone" v-model="formData.phone" @input="validatePhone"
                                        class="w-full border-gray-300 rounded-md p-2">
                                    <span v-if="fieldsError.phone" class="text-red-500">{{ fieldsError.phone }}</span>
                                </div>
                                <div class="mb-4 input_barre-modifier">
                                    <label for="email" class="block mb-1  text-neutral-500 font-bold">Courriel</label>
                                    <input type="email" id="email" v-model="formData.email" @input="validateEmail"
                                        class="w-full border-gray-300 rounded-md p-2">
                                    <span v-if="fieldsError.email" class="text-red-500">{{ fieldsError.email }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-end">
                        <router-link to="/app/Entreprises">
                            <button type="button"
                                class="btn-secondary mr-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                @click="cancelForm">Annuler</button>
                        </router-link>
                        <button type="submit" 
                            class="btn-primary focus:outline-none text-white bg-blue-400  hover:bg-blue-900 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 inline-flex">
                            <svg class="w-6 h-6 text-gray-100 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                    d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
                                    clip-rule="evenodd" />
                            </svg>
                            {{ editing ? 'Mettre à jour' : 'Sauvegarder' }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        ref,
        reactive,
        computed,
        onMounted
    } from 'vue';
    import axios from 'axios';
    import {
        RouterLink,
        useRouter,
        useRoute
    } from 'vue-router';
    /*import {
        createSnacbar
    } from 'vue3-snackbar';*/




    export default {
        props: {
            type: {
                type: String,
                required: true
            },

            candidateId: {
                type: String,
                required: false
            },
            entrepriseId: {
                type: String,
                required: false
            }
        },





        setup(props) {
            const router = useRouter();
            const route = useRoute();
            const id = ref(null);
            const editing = ref(false);
            const showEnterpriseForm = ref(false);
            const isCandidat = computed(() => props.type === 'candidat')
            const candidate = ref(null);
            const entrepriseId = ref(null);
            const candidateId = ref(null);
            const mCandidat = ref(null);
            /*const {
                showSnackbar
            } = createSnackbar();*/




            const formData = reactive({
                fullName: '',
                description: '',
                address: '',
                phone: '',
                city: '',
                email: '',
                provinceId: '',
                provinceValue: '',
                postalCode: '',
                skills: [],
                name: '',
                image: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8HwQACgAB/1TD9R8AAAAASUVORK5CYII=',
                contact: '',
                activitySector: {

                    _id: '65f8df6040965a2e23d73271',
                    value: 'Technologies',
                },
                website: 'test.com',
            });



            const errorMessage = reactive({
                empty: 'Le champ ne peut pas être vide',
                minCharacters: 'Le champ doit avoir au moins 2 caractères',
                max50Characters: 'Le champ doit avoir entre 3 et 50 caractères',
                max250Characters: 'Le champ doit avoir entre 3 et 50 caractères',
                maxCharacters: 'Le champ ne peut pas dépasser 500 caractères',
                twoStrings: 'Le champ doit avoir au moins un prénom et un nom',
                option: 'Le champ doit avoir une option valide',
                date: 'Le champ doit avoir une date valide.',
                pastDate: 'La date ne doit pas être dans le passé.',
                endDate: 'La date de fin ne peut pas être avant la date de début.',
                number: 'Le champ doit avoir une nombre positif valide.',
                radio: 'Le champ doit avoir au moins un choix.',
                letterOnly: 'Le champ doit comporter que des lettres minuscule ou majuscules.',
                maxHours: 'Le nombre d\'heures maximum est de 40.',
                string: 'Les compétences doivent être une chaîne de caractères.',
                adressFormat: 'L\'adresse doit contenir à la fois un nombre et un mot.',
                email: 'Veuillez entrer une adresse e-mail valide.',
                postalCode: 'Veuillez entrer un code postal valide.'
            })


            const fieldsError = reactive({
                fullName: '',
                skills: '',
                description: '',
                address: '',
                phone: '',
                city: '',
                email: '',
                province: '',
                postalCode: '',
                name: '',
                logo: '',
                contact: ''
            })



            const resetValidationErrors = () => {
                for (let keyValue in fieldsError) {
                    if (fieldsError.hasOwnProperty(keyValue)) {
                        fieldsError[keyValue] = '';
                    }
                }
            };



            const validateString = (input, field) => {
                if (input.trim() === "") {
                    fieldsError[field] = errorMessage.empty;
                    return;
                }
                if (input.length < 3) {
                    fieldsError[field] = errorMessage.minCharacters;
                    return;
                }
                if (input.length > 50) {
                    fieldsError[field] = errorMessage.max50Characters;
                    return;
                }
                fieldsError[field] = "";
            }

            const validateFullName = () => {
                const fullNameTrimmed = formData.fullName.trim()
                const fullNameWords = fullNameTrimmed.split(' ')
                if (fullNameTrimmed.length < 3 || fullNameTrimmed.length > 50) {
                    fieldsError.fullName = errorMessage.max50Characters;
                    return;
                }
                if (fullNameWords.length !== 2) {
                    fieldsError.fullName = errorMessage.twoStrings;
                    return;
                }
                fieldsError.fullName = "";
            };

            const validateSkills = () => {
                if (typeof formData.skills !== 'string') {
                    fieldsError.skills = errorMessage.string;
                    return;
                }

                const skillsTrimmed = formData.skills.trim();
                if (skillsTrimmed.length < 3 || skillsTrimmed.length > 250) {
                    fieldsError.skills = errorMessage.max250Characters;
                    return;
                }

                // Vérifiez si les compétences sont séparées par une virgule suivie d'un espace
                const skillsArray = skillsTrimmed.split(', ');
                const validSkills = skillsArray.every(skill => skill.trim().length > 0);

                if (!validSkills) {
                    fieldsError.skills = "Les compétences doivent être séparées par une virgule suivie d'un espace";
                    return;
                }

                fieldsError.skills = "";
            };

            const validateDescription = () => {
                const descriptionTrimmed = formData.description.trim()
                if (descriptionTrimmed.length < 3 || descriptionTrimmed.length > 250) {
                    fieldsError.description = errorMessage.max250Characters;
                    return;
                }
                fieldsError.description = "";
            };

            const validateAddress = () => {
                const addressTrimmed = formData.address.trim()
                if (!addressTrimmed) {
                    fieldsError.address = errorMessage.empty;
                    return;
                }
                const containsNumber = /\d/.test(addressTrimmed);
                const containsWord = /[a-zA-Z]/.test(addressTrimmed);
                if (!containsNumber || !containsWord) {
                    fieldsError.address = errorMessage.adressFormat;
                    return;
                }
                fieldsError.address = "";
            };

            const validatePhone = () => {
                const phoneTrimmed = formData.phone.trim()
                const phoneRegex = /^\d{3}-\d{3}-\d{4}$/
                if (!phoneTrimmed) {
                    fieldsError.phone = errorMessage.empty;
                    return;
                } else if (!phoneRegex.test(phoneTrimmed)) {
                    fieldsError.phone = 'Veuillez entrer un numéro de téléphone valide au format 514-555-5555.'
                    return;
                }
                fieldsError.phone = "";
            };

            const validateCity = () => {
                const cityTrimmed = formData.city.trim()
                if (!cityTrimmed) {
                    fieldsError.city = errorMessage.empty;
                    return;
                }
                if (cityTrimmed.length < 3 || cityTrimmed.length > 50) {
                    fieldsError.city = errorMessage.max50Characters;
                    return;
                }
                fieldsError.city = "";
            };

            const validateEmail = () => {
                if (!formData.email.trim()) {
                    fieldsError.email = errorMessage.empty;
                    return;
                } else if (!isEmailValid(formData.email)) {
                    fieldsError.email = errorMessage.email;
                    return;
                }
                fieldsError.email = "";
            };

            const validateProvince = () => {
                if (!formData.provinceId) {
                    fieldsError.province = 'Veuillez sélectionner une province.'
                    return;
                }
                fieldsError.province = "";
            };


            const formatPostalCode = (postalCode) => {
                const cleanedPostalCode = postalCode.replace(/\s/g, '').toUpperCase();
                return cleanedPostalCode.substring(0, 3) + " " + cleanedPostalCode.substring(3);
            };

            const validatePostalCode = () => {
                if (!formData.postalCode.trim()) {
                    fieldsError.postalCode = errorMessage.empty;
                    return;
                } else if (!isPostalCodeValid(formData.postalCode)) {
                    fieldsError.postalCode = errorMessage.postalCode;
                    return;
                }
                fieldsError.postalCode = "";
            };

            const isPostalCodeValid = (postalCode) => {
                const cleanedPostalCode = postalCode.replace(/\s/g, '');
                const postalCodeRegex = /^[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d$/;
                return postalCodeRegex.test(cleanedPostalCode);
            };

            const validateName = () => {
                const nameTrimmed = formData.name.trim()
                if (nameTrimmed.length < 3 || nameTrimmed.length > 50) {
                    fieldsError.name = errorMessage.max50Characters;
                    return;
                }
                fieldsError.name = "";
            };

            const validateContact = () => {
                const contactTrimmed = formData.contact.trim()
                if (contactTrimmed.length < 3 || contactTrimmed.length > 50) {
                    fieldsError.contact = errorMessage.max50Characters;
                    return;
                }
                fieldsError.contact = "";
            };

            const validateLogo = () => {
                const logoTrimmed = formData.image.trim()
                if (!logoTrimmed) {
                    fieldsError.logo = errorMessage.empty;
                    return;
                }
                fieldsError.logo = "";
            };

            const isEmailValid = (email) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                return emailRegex.test(email)
            };


            // Fonction pour décoder une image encodée en base64
            const decodeBase64Image = (base64Image) => {
                const matches = base64Image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);

                if (matches.length !== 3) {
                    throw new Error('Invalid input string');
                }

                return {
                    type: matches[1],
                    data: Buffer.from(matches[2], 'base64')
                };
            };

            // Fonction pour encoder une image en base64
            const encodeBase64Image = (imageBuffer) => {
                return `data:image/png;base64,${imageBuffer.toString('base64')}`;
            };





            let isFormValid = ref(false);

            const validateForm = () => {

                validateDescription();
                validateAddress();
                validateCity();
                validatePhone();
                validateEmail();
                validateProvince();
                validatePostalCode();



                if (!showEnterpriseForm.value) {
                    validateFullName();
                    validateSkills();


                    if (
                        fieldsError.fullName === "" &&
                        fieldsError.skills === "" &&
                        fieldsError.description === "" &&
                        fieldsError.address === "" &&
                        fieldsError.city === "" &&
                        fieldsError.province === "" &&
                        fieldsError.postalCode === "" &&
                        fieldsError.phone === "" &&
                        fieldsError.email === ""
                    ) {
                        isFormValid.value = true;
                        console.log(isFormValid.value);
                        console.log("candidate form valid");
                    } else {
                        isFormValid.value = false;
                        console.log(isFormValid.value);
                        console.log("candidate form invalid");
                    }

                } else {
                    validateName();
                    validateContact();
                    validateLogo();


                    if (
                        fieldsError.fullName === "" &&
                        fieldsError.logo === "" &&
                        fieldsError.contact === "" &&
                        fieldsError.description === "" &&
                        fieldsError.address === "" &&
                        fieldsError.city === "" &&
                        fieldsError.province === "" &&
                        fieldsError.postalCode === "" &&
                        fieldsError.phone === "" &&
                        fieldsError.email === ""
                    ) {
                        isFormValid.value = true;
                        console.log(isFormValid.value);
                        console.log("enterprise form valid");
                    } else {
                        isFormValid.value = false;
                        console.log(isFormValid.value);
                        console.log("enterprise form invalid");
                    }
                }
            }

            const submitForm = async () => {
                validateForm();
                /**  Décode de l'image
            const decodedImage = decodeBase64Image(formData.image);
            console.log(decodedImage.type); // Type de l'image
            console.log(decodedImage.data); // Données de l'image sous forme de Buffer

            // Encodage de l'image
            const encodedImage = encodeBase64Image(decodedImage.data);
            console.log(encodedImage); // Image encodée en base64*/


                const selectedProvince = provinces.value.find(province => province._id === formData.provinceId);

                if (!selectedProvince) {
                    throw new Error('Province non trouvée');
                }
                if (isFormValid.value) {

                    const formattedPostalCode = formatPostalCode(formData.postalCode);
                    const formPayload = {
                        description: formData.description,
                        email: formData.email,
                        address: formData.address,
                        phone: formData.phone,
                        city: formData.city,
                        province: {
                            _id: formData.provinceId,
                            value: selectedProvince.value
                        },
                        postalCode: formattedPostalCode,
                    };
                    if (editing.value) {
                        formPayload._id = props[`${isCandidat.value ? 'candidate' : 'entreprise'}Id`];
                    }


                    if (isCandidat.value || mCandidat.value === true) {
                        const [firstName, lastName] = formData.fullName.split(' ');
                        const skillsArray = formData.skills.split(', ').map(skill => skill.trim());

                        try {
                            const url = editing.value ?
                                `https://api-4.fly.dev/candidates/${id.value}` :
                                'https://api-4.fly.dev/candidates';

                            const method = editing.value ? 'PATCH' : 'post';

                            const response = await axios({
                                method: method,
                                url: url,
                                data: {
                                    ...formPayload,
                                    firstName: firstName,
                                    lastName: lastName,
                                    skills: skillsArray,
                                }
                            });
                            if (response.status === 201 || response.status === 200) {
                                /* const message = editing.value ? "Candidat modifié" : "candidat ajoutée";
                                 showSnackbar(message, {
                                     duration: 3000,
                                     position: 'bottom',
                                 });*/


                                router.push('/app/Candidats');
                            }
                            console.log(response);
                        } catch (error) {
                            console.error(error);
                        }
                    } else {
                        try {
                            let activitySector = null;
                            const activitySectorsResponse = await axios.get(
                                'https://api-4.fly.dev/activity-sectors');
                            const activitySectors = activitySectorsResponse.data;
                            activitySectors.forEach((activity) => {
                                if (activity.value === formData.activitySector.value) {
                                    activitySector = activity;
                                }
                            });

                            if (!activitySector) {
                                throw new Error('Secteur d\'activité non trouvé');
                            }

                            const url = editing.value ?
                                `https://api-4.fly.dev/enterprises/${id.value}` :
                                'https://api-4.fly.dev/enterprises';

                            const method = editing.value ? 'PATCH' : 'post';

                            const response = await axios({
                                method: method,
                                url: url,
                                data: {
                                    ...formPayload,
                                    name: formData.name,
                                    image: formData.image,
                                    activitySector: {
                                        _id: activitySector._id,
                                        value: formData.activitySector.value
                                    },
                                    website: formData.website,
                                }
                            });

                            console.log(response);
                            if (response.status === 201 || response.status === 200) {
                                /**const message = editing.value ? "Entreprise modifié" : "Entreprise ajoutée";
                                showSnackbar(message, {
                                    duration: 3000,
                                    position: 'bottom',
                                });*/

                                router.push('/app/Entreprises');
                            }

                            if (!response.data._id) {
                                throw new Error('Échec de la soumission du formulaire');
                            }
                        } catch (error) {
                            console.error(error);
                        }
                    }
                }
            };

            const cancelForm = () => {
                formData.fullName = '';
                formData.skills = '';
                formData.description = '';
                formData.address = '';
                formData.phone = '';
                formData.city = '';
                formData.email = '';
                formData.provinceId = '';
                formData.postalCode = '';
                formData.name = '';
                formData.image = '';
                formData.contact = '';
                formData.activitySector = {
                    _id: '',
                    value: '',
                };
                formData.website = '';
            }
            const provinces = ref([])
            const fetchProvinces = async () => {
                try {
                    const response = await axios.get('https://api-4.fly.dev/provinces')
                    provinces.value = response.data
                } catch (error) {
                    console.error(error)
                }
            };

            const fetchData = async (id, type) => {


                editing.value = true;
                try {
                    let url;
                    if (type === 'entreprises') {
                        url = `https://api-4.fly.dev/enterprises/${id}`;
                    } else if (type === 'candidats') {
                        url = `https://api-4.fly.dev/candidates/${id}`;
                    }
                    const response = await axios.get(url);
                    const data = response.data;
                    if (type === 'candidats' && data) {
                        candidate.value = data;
                        formData.fullName = `${data.firstName} ${data.lastName}`;
                        formData.provinceId = data.province._id;
                    }
                    formData.provinceId = data.province._id;
                 
                    if (type === 'entreprises'){
                        formData.contact = "Irene Deschamps";
                    }
                    Object.assign(formData, data);
                } catch (error) {
                    console.error(error);
                }
            };

            onMounted(() => {
                id.value = route.params.id;
                console.log(id.value);
                const type = router.currentRoute.value.params.type;
                console.log(type);

                // IL Y A UN ID
                if (id.value) {
                    if (type === 'entreprises') {
                        showEnterpriseForm.value = true;
                        props.entrepriseId = id.value;
                        fetchData(id.value, type);
                    } else if (type === 'candidats') {

                        showEnterpriseForm.value = false;
                        props.candidateId = id.value;
                        mCandidat.value = true;
                        fetchData(id.value, type);
                    }
                }
                // PAS DE ID
                else {
                    if (type === 'entreprises') {
                        showEnterpriseForm.value = true;
                    } else if (type === 'candidats') {
                        showEnterpriseForm.value = false;
                    }
                }
                fetchProvinces();
            });

            return {
                candidate,
                formData,
                editing,
                fieldsError,
                errorMessage,
                validateString,
                isCandidat,
                submitForm,
                cancelForm,
                formatPostalCode,
                validateFullName,
                validateSkills,
                validateDescription,
                validateAddress,
                validatePhone,
                validateCity,
                validateEmail,
                validateProvince,
                validatePostalCode,
                validateName,
                validateLogo,
                validateContact,
                validateForm,
                isFormValid,
                provinces,
                showEnterpriseForm,
                resetValidationErrors,
                fetchData,
                encodeBase64Image,
                decodeBase64Image,
                entrepriseId,
                candidateId,
                mCandidat

            };
        }
    };
</script>




<style scoped>
    .titre_barre-modifier {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

    }

    .logo{
        width: 100px;
        height: auto;
        margin-right: 1rem;
    }

   

    .input_barre-modifier {
        position: relative;
        padding-left: 10px;
    }

    .input_barre-modifier::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 4px;
        height: 70px;
        background-color: rgb(115 115 115);
    }

    .titre_modifer {
        display: flex;
        flex-direction: column;
    }

    .poste {
        background-color: white;
    }

    .nom_poste {
        display: grid;
        gap: 0.3rem;
        grid-template-columns: 1fr 4fr;
        justify-content: space-between;
    }

    .block_info-perso {
        background-color: white;
        padding: 2rem;
    }

    .block_info-perso-all {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }

    @media (max-width: 768px) {
        .block_info-perso-all {
            display: flex;
            flex-direction: column;
        }
    }
</style>