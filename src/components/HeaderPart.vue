<template>
	<header>
		<!-- <img class="artist-ban" v-bind:src="imageUrl"/>
			<div class="artist-infos">
			<h1 class="artist-name">{{name}}</h1>
			<h2 class="title-name">{{title}}</h2>
			<p class="artist-released-date">{{releasedDate}}</p>
		</div>
		<div class="artist-redirection-part">
			<a class="artist-redirection-link" href="#">Voir l'artiste</a>
		</div> -->
		<h1>FYTISPO</h1>
	</header>
</template>
<script>
export default {
	name: "HeaderPart",
	// props:{
	// 	name: String,
	// 	imageUrl: String,
	// 	releasedDate:String,
	// 	title:String
	// }
	
}
</script>
<style scoped>
header{
	background: linear-gradient(to bottom right, #6F4BF2, #AB64E2); 
	height: 40vh;
	/* border:solid 3px red; */
	
	/* z-index: 1; */
	display: flex;
	justify-content: end;
	align-items: end;
	/* right:0; */
	/* padding: 2% 5%; */
	/* margin: 0; */
}

h1{
	color: white;
	/* font-size: 11em; */
	font-size:15vw;

	/* padding: 7% 1%; */

	opacity: 0.33;
}
/*
.artist-ban{
	object-fit: cover;
	height: auto;
	width: 100%;
}

.artist-infos{
	position: absolute;
	margin: 2%;
}

.artist-name{
	color:white;

}
.title-name{
	color:#6F4BF2;
	font-size: 0.8em;
	padding: 1% 0;
	margin: 2%;
}

.artist-released-date{
	color:white;
	margin: 2% 2%;
}

.artist-redirection-part{
	position: absolute;
	margin: 2% 34%;
}

.artist-redirection-link{
	color:white;
	font-style: italic;
	font-weight: bold;

} */

</style>