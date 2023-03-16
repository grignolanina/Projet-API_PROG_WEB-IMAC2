<template>
	<!-- ok avec données crée perso -->
	<div class="artist_gallery">
		<NewReleasedCard
			v-for="artist in artistSearchData"
			:key="artist.artists.id"
			:name="artist.artists[0].name"
			:title="artist.name"
			:pictureUrl="artist.images[0].url"
		/>
	</div>
</template>

<script>
// import { getNewRelease } from '@/assets/services/api/artistAPI';
import NewReleasedCard from './NewReleasedCard.vue';

export default {
	name: "NewReleasedGallery",
	props : {
		nameResearch : String,
	},
	components: { 
		NewReleasedCard
	},
	data(){
		return{
			artistSearchData:this.nameResearch,
		}
	},
	// created(){
	// 	this.newReleaseInfo()

	// },

	// methods:{
	// 	async newReleaseInfo(){
	// 		this.newReleaseData = await getNewRelease()
	// 		this.newReleaseData = this.newReleaseData.albums.items
	// 	}

	// }

}
</script>

<style>
.artist_gallery {
	display: flex;
	flex-wrap: wrap;
}
</style>
