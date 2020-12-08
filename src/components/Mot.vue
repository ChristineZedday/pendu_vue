<script>
export default {
	name: 'Mot',
	
	
	methods: {
		dico()
		{
			const jsonData = require('../assets/mondico.json');
			const regAccentA = new RegExp('[àâä]', 'gi');
			const regAccentE = new RegExp('[éèêë]', 'gi');
			const regAccentU = new RegExp('[ûùü]', 'gi');
			const regAccentO = new RegExp('[ôö]', 'gi');
			const regAccentI = new RegExp('[îï]', 'gi');

			let tabdico = new Array();

			for (let i=0; i<1455; i++) 
			{
				let mot  = jsonData[i];
				mot = mot.replace(regAccentA,'a' );
				mot = mot.replace(regAccentE,'e' );
				mot = mot.replace(regAccentI,'i' );
				mot = mot.replace(regAccentU,'u' );
				mot = mot.replace(regAccentO,'o' );
				mot = mot.toUpperCase();
				
				tabdico[i] = mot;
				
			}
			return tabdico;
		},
		
		genere() {
			let dic = this.dico();
			let lang = dic.length;
			let mot = dic[getRandomInt(lang-1)];
			this.$store.dispatch('nouveauMot',mot);
			this.$store.dispatch('display');
			
		},
	}
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
</script>

<template>
<button v-if="this.$store.state.mot == 'init'" @click="genere">
		Nouveau mot
	</button>
	<p class="mot" v-else>
		{{ $store.state.affiche }}
	</p>
	
</template>
<style lang="scss">
button {
	width: 100px;
	height: 40px;
	margin: 20px;
	align-self: center;
}
</style>
