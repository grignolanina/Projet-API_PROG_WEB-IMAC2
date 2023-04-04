<template>
	<!-- <div class="ban">
		<h1 class="artist-name">Christophe Maé</h1>
		<p class="artist-auditor">123 065 auditeurs</p>
	</div> -->

	<header class="ban">
		<img class="artist-ban" v-bind:src="imageUrl"/>
		<a class="back" href=""> &lt; back previous page</a>
		<div class="artist-infos">
			<h1 class="artist-name">{{name}}</h1>
			<p class="artist-auditor">{{audit}} auditeurs</p>
		</div>
	</header>
	
</template>
  
<script>
export default {
	name: "ArtistBan",	
	props : {
		name:String,
		audit: Number,
		imageUrl: {type: String, default: "https://assets-global.website-files.com/60a0ade9a9e15bdd6b98f68b/60d5dc467b950c5ccc8ced95_spotify-for-artists.jpg"}
	}
}
</script>
  
<style scoped>
header{
	height: 40vh;
	display: flex;
	flex-direction: column;
	justify-content: end;
	/* padding: 2% 5%; */
	margin: 0;
}

.artist-ban{
	object-fit: cover;
	height: auto;
	width: 100%;
}

.artist-infos{
	position: absolute;
	margin: 2%;
}

.back{
	position: absolute;
	top: 0;
	padding: 1% 0;
	margin: 2%;
	color: white;
}
.back:hover{
	color: #6F4BF2;
}
.artist-name{
	color:white;
	padding: 1% 0;
	margin: 2%;
}

.artist-auditor{
	color:white;
	margin: 2% 2%;
}

</style>
  