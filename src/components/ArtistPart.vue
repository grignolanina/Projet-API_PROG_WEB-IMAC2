<template>
	<main>
		<header>
			<ArtistBan/>
		</header>
		<section>
			<h1>Populaires</h1>
			<MusicInfos/>
			<MusicInfos/>
			<MusicInfos/>
			<MusicInfos/>
			<MusicInfos/>
		</section>
		<section>
			<h1>Albums</h1>
			<AlbumGallery/>
			<AlbumGallery/>
		</section>
	</main>
</template>
  
<script>
import AlbumGallery from './AlbumGallery.vue';
import ArtistBan from "./ArtistBanniere.vue";
import MusicInfos from './MusicInfos.vue';

export default {
	name: "ArtistPart",
	components: {
		ArtistBan,
		MusicInfos,
		AlbumGallery
	}
	
}
</script>
  
<style>
main{
	right:0;
	width: 75%;
	position: absolute;
}

section{
	margin: 2% 5%;
}
</style>
  