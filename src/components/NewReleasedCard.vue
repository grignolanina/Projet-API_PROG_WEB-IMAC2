<template>
	<a href="#" class="artist-card">
		<img class="artist-picture" :src="pictureUrl" />
		<div class="infos">
			<h2 class="name">{{name}}</h2>
			<p class="style">{{title}}</p>
		</div>
	</a>
</template>

<script>
export default {
	name: "NewReleasedCard",
	props : {
		name: String,
		title: String,
		pictureUrl: String 
		//gerer le href
	}
}
</script>

<style>
.artist-card {
	
	border-radius: 20px;
	display: flex;
	flex-direction: row;
	/* justify-content: space-between; */
	/* flex: auto; */
	flex:auto;
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
	/* font-size: 0.2em; */
	color:#6F4BF2;
}

h2 {
	font-size: 1em;
}

p{
	font-size: 0.8em;
}
</style>