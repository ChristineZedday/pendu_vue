<script>
// @ is an alias to /src

import Touche from '@/components/Touche.vue'
import Mot from '@/components/Mot.vue'


export default {
  name: 'Home',
  components: {
    Touche,
    Mot
  },
  methods: {
    alphabet()
   {
      return ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
      }
  }
 
}

</script>

<template>
 
  <div class="home">
      <h1>Jeu du pendu</h1>
      <Mot/>
      <div class="ligne">
        <div  v-for ="value in alphabet()" :key="value">
        <Touche :letter="value" />
        </div> 
      </div>
  </div>
</template>
<style lang="scss">
.home
{display: flex;
flex-direction: column;
  .ligne
{
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
}
</style>



