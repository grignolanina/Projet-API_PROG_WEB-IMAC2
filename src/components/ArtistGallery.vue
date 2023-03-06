<template>
	<div class="artist_gallery">
		<ArtistCard />
		<ArtistCard />
		<ArtistCard />
	</div>
</template>

<script>
import ArtistCard from './ArtistCard.vue';

export default {
	name: "ArtistGallery",
	components: { ArtistCard }
}
</script>

<style>
.artist_gallery {
	display: flex;
	flex-wrap: wrap;
}
</style>
