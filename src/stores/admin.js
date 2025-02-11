import { defineStore } from 'pinia';

export const useAdminStore = defineStore('admin', () => {
    
    const state = {
        nomEtPrenom: localStorage.getItem('nomEtPrenom') || '',
    };

    const setNomEtPrenom = (nomEtPrenom) => {
        state.nomEtPrenom = nomEtPrenom;
        
        localStorage.setItem('nomEtPrenom', nomEtPrenom);
    };

    return {
        state,
        setNomEtPrenom,
    };
});
