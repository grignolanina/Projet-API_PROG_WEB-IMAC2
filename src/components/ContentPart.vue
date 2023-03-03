<template>
	<main>
		<header>
			<SearchBar/>
		</header>
		<section>
			<h1>Recherche récentes</h1>
			<ArtistGallery />
		</section>
		<section>
			<h1>Tendances</h1>
			<ArtistGallery />
			<ArtistGallery/>
			<ArtistGallery/>
		</section>
	</main>
</template>
  
<script>
import ArtistGallery from './ArtistGallery.vue';
import SearchBar from './SearchBar.vue';
export default {
	name: "ContentPart",
	components: {
		ArtistGallery,
		SearchBar
	}
}
</script>
  
<style>
main{
	right:0;
	width: 75%;
	position: absolute;
}

header{
	margin: 2% 5%;
}
section{
	margin: 2% 5%;
}
</style>
  