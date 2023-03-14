<template>
	<!-- <div class="album-card">
		<img class="album-picture" src="https://i.discogs.com/1mMlyP9I8Nt1ERi6fHL9Jr6gDVD_YSW6LwiDBQWQuEY/rs:fit/g:sm/q:90/h:600/w:589/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk4OTY2/NjctMTQ4ODEzMjU4/OS02MjQxLmpwZWc.jpeg" />
		<div class="album-infos">
			<h2 class="album-name">Nom de l'album</h2>
			<p class="album-date">Date</p>
		</div>
	</div> -->

	<div class="album-card">
		<img class="album-picture" :src="imageUrl" />
		<div class="album-infos">
			<h2 class="album-name">{{name}}</h2>
			<p class="album-date">{{releaseDate}}</p>
		</div>
	</div>
</template>
<script>
export default{
	name: "AlbumInfos",
	props:{
		imageUrl:String,
		name:String,
		releaseDate:String
	}
}
</script>

<style>
.album-card{
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	flex: auto;
	/* width: 15vw; */
	background-color: rgb(203, 203, 203);
	margin: 1%;
}

.album-picture{
	object-fit: cover;
	border-radius: 20px;
	height: 250px;
	/* flex:auto; */
}

.album-infos{
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 4%;
}


.album-date {
	color:#6F4BF2;
}
</style>