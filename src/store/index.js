import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mot:  'init',
    affiche: '',
    lettres: [],
    trouvees: [],
    trouve: false,
    nbCoups:  0,
  },
  getters: {
    lettresInMot: (state) => (lettre) => {
      if (state.lettres.indexOf(lettre) != -1)
      {
        return true
      }
    }
  },
  mutations: {
    NOUV_MOT(state, mot) {
      state.mot = mot;
      
      for (let lettre of mot)
     {
       
       if (state.lettres.indexOf(lettre) == -1) //on la met qu'une fois
        {
          state.lettres.push(lettre);
        }
     }
     console.log(state.lettres);
    },
    LETTRE_TROUVEE(state, lettre)
    {
      state.trouvees.push(lettre);
      if (state.lettres.length == state.trouvees.length)
      { state.trouve = true}
    },
    AFFICHE_UPDATE(state, affiche )
    {
      state.affiche = affiche;
    }
    
  },
  actions: {
    nouveauMot(context, mot) {
      context.commit('NOUV_MOT',mot);
    },
    lettreTrouvee(context, lettre) {
      context.commit('LETTRE_TROUVEE',lettre);
    },
    afficheUpdate(context, affiche) {
      context.commit(AFFICHE_UPDATE, affiche);
    }
  },
  modules: {
  }
})
