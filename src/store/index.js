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
  
    },
    LETTRE_TROUVEE(state, lettre)
    {
      
      state.trouvees.push(lettre);
      if (state.lettres.length == state.trouvees.length)
        { 
          state.trouve = true;
        }
    },
    AFFICHE_UPDATE(state)
    {
      let affiche = '';
      for (let lettre of state.mot)
      {
        if (state.trouvees.indexOf(lettre)!=-1)
        {
          affiche = affiche + lettre + ' ';
          
        }
        else {
          affiche = affiche + '_ ';
          
        }
      }
      state.affiche = affiche;
    },
    ADD_COUP(state) 
    {
      state.nbCoups++;
    }
    
  },
  actions: {
    nouveauMot(context, mot) {
      context.commit('NOUV_MOT',mot);
    },
    lettreTrouvee(context, lettre) {
      context.commit('LETTRE_TROUVEE',lettre);
      
    },
    
    display(context) {
   
    context.commit('AFFICHE_UPDATE');
  
  },
  addCoup (context)
  {
    context.commit('ADD_COUP');
  }
},
  modules: {
  }
})
