<template>
	<div class="album-gallery">
		<AlbumInfos
		:pictureUrl="albumData[1]['images'][1]?.url"
		:name="albumData[1]?.name"
		:releaseDate="albumData[1]?.release_date"
		/>

	

		<AlbumInfos
		:pictureUrl="albumData[2]['images'][1]?.url"
		:name="albumData[2]?.name"
		:releaseDate="albumData[2]?.release_date"
		/>

	

		<AlbumInfos
		:pictureUrl="albumData[4]['images'][1]?.url"
		:name="albumData[4]?.name"
		:releaseDate="albumData[4]?.release_date"
		/>

		<AlbumInfos
		:pictureUrl="albumData[6]['images'][1]?.url"
		:name="albumData[6]?.name"
		:releaseDate="albumData[6]?.release_date"
		/>

		<AlbumInfos
		:pictureUrl="albumData[8]['images'][1]?.url"
		:name="albumData[8]?.name"
		:releaseDate="albumData[8]?.release_date"
		/> 

		<AlbumInfos
		:pictureUrl="albumData[10]['images'][1]?.url"
		:name="albumData[10]?.name"
		:releaseDate="albumData[10]?.release_date"
		/> 
	</div>
	

	
</template>
<script>
import AlbumInfos from './AlbumInfos.vue';
import { getAlbums } from '@/assets/services/api/artistAPI';


export default{
	name: "AlbumGallery",
	components: {
		AlbumInfos
	},

	data(){
		return {
			albumData:[]
		}
	},
	created() {
		this.albumArtist()
	},

	methods:{
		async albumArtist(){
			this.albumData = await getAlbums()
			this.albumData = this.albumData['items']

		}
	}

	
}

//get album of one artist
</script>

<style>
.album-gallery{
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin: 2% 0;
}

</style>