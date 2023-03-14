<template>
	<div class="album-gallery">
		
		<AlbumInfos
		v-for="album in albumData"
		:key="album.id"
		:imageUrl="album.images[1].url"
		:name="album.name"
		:releaseDate="album.release_date"
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