<template>
	<!-- ok avec données crée perso -->
	<div class="artist_gallery">
		<NewReleasedCard
			v-for="released in newReleaseData"
			:key="released.artists.id"
			:name="released.artists[0].name"
			:title="released.name"
			:pictureUrl="released.images[0].url"
		/>
	</div>
</template>

<script>
import { getNewRelease } from '@/assets/services/api/artistAPI';
import NewReleasedCard from './NewReleasedCard.vue';

export default {
	name: "NewReleasedGallery",
	components: { 
		NewReleasedCard
	},
	data(){
		return{
			newReleaseData:[],
		}
	},
	created(){
		this.newReleaseInfo()

	},

	methods:{
		async newReleaseInfo(){
			this.newReleaseData = await getNewRelease()
			this.newReleaseData = this.newReleaseData.albums.items
		}

	}

}
</script>

<style>
.artist_gallery {
	display: flex;
	flex-wrap: wrap;
}
</style>
