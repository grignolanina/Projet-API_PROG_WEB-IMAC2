<template>
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

<style scoped>
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