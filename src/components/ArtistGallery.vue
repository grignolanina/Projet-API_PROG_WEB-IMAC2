<template>
	<div class="artist_gallery">
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
	</div>
	
	<!-- OK AVEC L'API DISNEY
	<div class="artist_gallery">
		<ArtistCard 
			:name="mData[0]?.name"
			:imageUrl="mData[0]?.imageUrl"
		/>
		<p>{{ mData }}</p>
		
	</div> -->


</template>

<script>
import ArtistCard from './ArtistCard.vue';
import { getArtistsData } from '@/assets/services/api/artistAPI';

export default {
	name: "ArtistGallery",
	components: { 
		ArtistCard
	},
	data(){
		return {
			artistsData:[]
		}
	},
	created() {
		this.getData()
	},
	methods:{
		getData() {
			this.artistsData = getArtistsData()
		}
	}

}



// OK AVEC L API DISNEY
// import ArtistCard from './ArtistCard.vue';
// import { getApiDisney } from '@/assets/services/api/artistAPI';

// export default {
// 	name: "ArtistGallery",
// 	components: { 
// 		ArtistCard
// 	},
// 	data(){
// 		return {
// 			mData:[]
// 		}
// 	},
// 	created() {
// 		this.getData()
// 	},
// 	methods:{
// 		async getData() {
// 			this.mData = await getApiDisney()
// 			this.mData = this.mData["data"]
// 		}
// 	}
// }
</script>

<style>
.artist_gallery {
	display: flex;
	flex-wrap: wrap;
}
</style>
