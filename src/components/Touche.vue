<script>
export default {
	name: 'Touche',
	props: {
		letter: {
			type: String, //! types première lettre en majuscule, pas de quotes!
			required: true,
		},
		tested: {
			type: Boolean,
			default: false
			},
		present:{
			type: Boolean,
			default: false
			}
	},
    methods: {
        test() {
            this.tested = true;
        }
    }

}
</script>
<template>
<div>
<button v-if="tested" class='Testee' v-bind:value="letter" >	{{ this.letter }} </button>
<button v-else class='Normale' v-bind:value="letter" @click="test" >	{{ this.letter }} </button>
</div>
</template>
<style lang=scss>

.Normale
{
    width: 40px;
    height:40px;
    background-color: burlywood;
    color: maroon;
    margin: 10px;
}

.Testee
{
    width: 40px;
    height:40px;
    background-color: #CCC;
    color: #888;
    margin: 10px;
}

/* .Clavier
{
   
    align-items: center;
    display: flex;
    
}
.masque
{
  font-size: 45px;
  letter-spacing: 4px;
  margin: 50px;
}

#encore
{
    width: 80px;
    height:40px;
    background-color: burlywood;
    color: maroon;
    margin: 10px;
} */
</style>