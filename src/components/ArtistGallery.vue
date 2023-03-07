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
	
	<!-- <div class="artist_gallery">
		<ArtistCard 
			:name="mData[0]?.name"
			:style="mData[0]?.style"
			:pictureUrl="mData[0]?.pictureUrl"
		/>
		
	</div> -->
</template>

<script>
import ArtistCard from './ArtistCard.vue';
import { getArtistData } from '@/assets/services/api/artistAPI';

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
			this.artistsData = getArtistData()
		}
	}

}

// import ArtistCard from './ArtistCard.vue';
// import { getApi } from '@/assets/services/api/spotifyAPI';

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
// 			this.mData = await getApi()
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
