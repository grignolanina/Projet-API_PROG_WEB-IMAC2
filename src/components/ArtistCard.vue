<template>
	<a href="#" class="artist-card">
		<img class="picture" src="http://media.nrj.fr/1900x1200/2016/09/christophemae-jpg-8806288.jpg" />
		<div class="infos">
			<h2 class="name">Christophe Maé</h2>
			<p class="style">Pop française</p>
		</div>
	</a>
</template>

<script>
export default {
	name: "ArtistCard"
}
</script>

<style>
.artist-card {
	
	border-radius: 20px;
	display: flex;
	flex-direction: row;
	margin: 1%;
	width: 20vw;
	height: 20vh;
	background-color: rgb(203, 203, 203);
}

.infos{
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	padding: 0 5%;
}

.picture {
	object-fit: cover;
	border-radius: 20px;
	width: 100px;
	height: auto;
}

.style{
	color:#6F4BF2;
}

h2 {
	font-size: 1em;
}

p{
	font-size: 0.8em;
}
</style>