<template>
	<main>
		<HeaderPart/>
		<section>
			<h1>New Release</h1>
			<NewReleasedGallery/>
			
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
  