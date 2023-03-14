<template>
	<main>
		<HeaderPart/>
		<!-- <header>
			<h1>FYTISPO</h1>
		</header> -->
		<section>
			<h1>New Release</h1>
			<NewReleasedGallery/>
			
		</section>
		<section>
			<h1>Autres groupes</h1>
			<!-- <ArtistGallery/>
			<ArtistGallery/>
			<ArtistGallery/> -->

			
		</section>
	</main>
</template>
  
<script>
import NewReleasedGallery from './NewReleasedGallery.vue';
import HeaderPart from './HeaderPart.vue';
export default {
	name: "ContentPart",
	components: {
		NewReleasedGallery,
		HeaderPart
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
  