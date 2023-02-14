<template>
	<div class="artist-card">
		<img class="picture" src="http://media.nrj.fr/1900x1200/2016/09/christophemae-jpg-8806288.jpg" />
		<div>
			<h2 class="name">Christophe Maé</h2>
			<p class="style">Pop française</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "ArtistCard"
}
</script>

<style>
.artist-card {
	display: flex;
	flex-direction: column;
	margin: 2%;
}

.picture {
	width: 200px;
	height: 150px;
}

h2 {
	font-size: 20px;
}
</style>