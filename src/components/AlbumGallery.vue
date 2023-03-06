<template>
	<div class="album-gallery">
		<AlbumInfos/>
		<AlbumInfos/>
		<AlbumInfos/>
		<AlbumInfos/>

	</div>
	

	
</template>
<script>
import AlbumInfos from './AlbumInfos.vue';

export default{
	name: "AlbumGallery",
	components: {
		AlbumInfos
	}
}
</script>

<style>
.album-gallery{
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin: 2% 0;
}

</style>