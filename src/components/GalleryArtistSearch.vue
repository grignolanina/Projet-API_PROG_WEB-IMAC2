<template>
	<div class="artist_gallery">
		<NewReleasedCard v-for="artist in artistSearchData" :key="artist.artists.id" :name="artist.artists[0].name"
			:title="artist.name" :pictureUrl="artist.images[0].url" />
	</div>
</template>

<script>
import NewReleasedCard from './NewReleasedCard.vue';

export default {
	name: "NewReleasedGallery",
	props: {
		nameResearch: String,
	},
	components: {
		NewReleasedCard
	},
	data() {
		return {
			artistSearchData: this.nameResearch,
		}
	}
}
</script>

<style scoped>
.artist_gallery {
	display: flex;
	flex-wrap: wrap;
}
</style>
