<template>
	<div class="album-gallery">

		<AlbumInfos v-for="album in albumData" :key="album.id" :imageUrl="album.images[1].url" :name="album.name"
			:releaseDate="album.release_date" />
	</div>
</template>
<script>
import AlbumInfos from './AlbumInfos.vue';
import { getAlbums } from '@/assets/services/api/artistAPI';


export default {
	name: "AlbumGallery",
	components: {
		AlbumInfos
	},

	data() {
		return {
			albumData: []

		}
	},
	created() {
		const id = this.$route.params.id;
		this.albumArtist(id)
	},

	methods: {
		async albumArtist(id) {
			this.albumData = await getAlbums(id)
			this.albumData = this.albumData['items']

		}
	}


}

//get album of one artist
</script>

<style scoped>
.album-gallery {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin: 2% 0;
}
</style>