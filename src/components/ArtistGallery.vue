<template>
	<!-- ok avec données crée perso -->
	<!-- <div class="artist_gallery">
		<ArtistCard 
			:name="artistsData[0].name"
			:style="artistsData[0].style"
			:pictureUrl="artistsData[0].pictureUrl"
		/>
		<ArtistCard 
			:name="artistsData[1].name"
			:style="artistsData[1].style"
			:pictureUrl="artistsData[1].pictureUrl"
		/>
		<ArtistCard 
			:name="artistsData[2].name"
			:style="artistsData[2].style"
			:pictureUrl="artistsData[2].pictureUrl"
		/>
	</div> -->


	

	<!-- donnee avec api spotify -->
	<div class="artist_gallery">
		<ArtistCard 
		:imageUrl="artistData['images'][0]['url']" 
		:name="artistData['name']" 
		:style="artistData['genres'][0]"
		/>

		<ArtistCard 
		:imageUrl="artistData['images'][0]['url']" 
		:name="artistData['name']" 
		:style="artistData['genres'][0]"
		/>
		
		<ArtistCard 
		:imageUrl="artistData['images'][0]['url']" 
		:name="artistData['name']" 
		:style="artistData['genres'][0]"
		/>
	</div>


</template>

<script>
//OK AVEC DONNEE CREE PERSO
// import ArtistCard from './ArtistCard.vue';
// import { getArtistsData } from '@/assets/services/api/artistAPI';

// export default {
// 	name: "ArtistGallery",
// 	components: { 
// 		ArtistCard
// 	},
// 	data(){
// 		return {
// 			artistsData:[]
// 		}
// 	},
// 	created() {
// 		this.getData()
// 	},
// 	methods:{
// 		getData() {
// 			this.artistsData = getArtistsData()
// 		}
// 	}

// }


//donnee avec api spotify
import ArtistCard from './ArtistCard.vue';
import { getApiTrackMacklemore } from '@/assets/services/api/artistAPI';

export default {
	name: "ArtistGallery",
	components: { 
		ArtistCard
	},
	data(){
		return {
			artistData:[]
		}
	},
	created() {
		this.getData()
	},

	methods:{
		async getData() {
			this.artistData = await getApiTrackMacklemore()
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
