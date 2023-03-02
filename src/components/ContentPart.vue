<template>
	<main>
		<header>

		</header>
		<section>
			<h1>Recherche récentes</h1>
			<ArtistGallery />
		</section>
		<section>
			<h1>Tendances</h1>
			<ArtistGallery />
		</section>
	</main>
</template>
  
<script>
import ArtistGallery from './ArtistGallery.vue';
export default {
	name: "ContentPart",
	components: {
		ArtistGallery
	}
}
</script>
  
<style>
section{
	margin: 0 5%;
}
</style>
  