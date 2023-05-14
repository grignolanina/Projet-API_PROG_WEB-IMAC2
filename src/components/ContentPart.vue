<template >
	<main>
		<section>
			<h2>Welcome</h2>
			<p>Découvrez une expérience unique grâce à notre site web FYTISPO qui utilise l'API Spotify pour vous offrir un accès facile aux artistes, albums et chansons de la plateforme. Recherchez, explorez et découvrez de la musique sans quitter notre plateforme conviviale et intuitive. Restez à jour avec les dernières nouveautés. Explorez notre bibliothèque musicale dès maintenant.</p>
		</section>
		
		<section>
			<h2>New Release</h2>
			<NewReleasedGallery/>
		</section>
	</main>
</template>
  
<script>
import NewReleasedGallery from './NewReleasedGallery.vue';
import { getNewRelease } from '@/assets/services/api/artistAPI';

export default {
	name: "ContentPart",
	components: {
		NewReleasedGallery,
	},
	data(){
		return{
			newReleaseData:[],
			artistId:"",
			artistImageUrl:"",
			artistName:"",
			titleName:"",
			releasedDate:"",
		}
	},
	created(){
		this.newReleaseInfo()

	},

	methods:{
		async newReleaseInfo(){
			this.newReleaseData = await getNewRelease()
			this.newReleaseData = this.newReleaseData.albums.items
			this.artistId = this.newReleaseData[0].artists.id
			this.artistImageUrl = this.newReleaseData[0].images[0].url
			this.artistName = this.newReleaseData[0].artists[0].name
			this.titleName = this.newReleaseData[0].name
			this.releasedDate = this.newReleaseData[0].release_date

		}

	}
}
</script>
  
<style scoped>
section{
	margin: 2% 5%;
}

h2{
	padding: 1% 0;
}
</style>
  