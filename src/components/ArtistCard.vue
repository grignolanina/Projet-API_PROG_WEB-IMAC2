<template>
	<!-- <a href="#" class="artist-card">
		<img class="artist-picture" src="http://media.nrj.fr/1900x1200/2016/09/christophemae-jpg-8806288.jpg" />
		<div class="infos">
			<h2 class="name">Christophe Maé</h2>
			<p class="style">Pop française</p>
		</div>
	</a> -->
	<a href="#" class="artist-card">
		<img class="artist-picture" :src="pictureUrl" />
		<div class="infos">
			<h2 class="name">{{name}}</h2>
			<p class="style">{{style}}</p>
		</div>
	</a>
</template>

<script>
export default {
	name: "ArtistCard",
	props : {
		name: String,
		style: String,
		pictureUrl: String 
	}
}
</script>

<style>
.artist-card {
	
	border-radius: 20px;
	display: flex;
	flex-direction: row;
	/* justify-content: space-between; */
	flex: auto;
	margin: 1%;
	/* width: 20vw;
	height: 20vh; */
	background-color: rgb(203, 203, 203);
}

.infos{
	display: flex;
	flex:auto;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	padding: 0 5%;
}

.artist-picture {
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