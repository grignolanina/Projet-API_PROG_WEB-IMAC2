<template>
	<header class="ban">
		<img class="artist-ban" v-bind:src="imageUrl" />
		<button class="back" @click="goBack"> &lt; back previous page</button>
		<div class="artist-infos">
			<h1 class="artist-name">{{ name }}</h1>
			<p class="artist-auditor">{{ audit }} auditeurs</p>
		</div>
	</header>
</template>
  
<script>
export default {
	name: "ArtistBan",
	props: {
		name: String,
		audit: Number,
		imageUrl: { type: String, default: "https://assets-global.website-files.com/60a0ade9a9e15bdd6b98f68b/60d5dc467b950c5ccc8ced95_spotify-for-artists.jpg" }
	},
	methods: {
		goBack() {
			this.$router.go(-1)
		}

	}
}
</script>
  
<style scoped>
header {
	height: 40vh;
	display: flex;
	flex-direction: column;
	justify-content: end;
	margin: 0;
}

.artist-ban {
	object-fit: cover;
	height: auto;
	width: 100%;
}

.artist-infos {
	position: absolute;
	margin: 2%;
}

button {
	border: none;
	cursor: pointer;
}

.back {
	position: absolute;
	top: 0;
	padding: 1% 0;
	margin: 2%;
	color: white;
	background-color: #6F4BF2;
	/* text-shadow: #6F4BF2 2px 2px 5px; */

}

.back:hover {
	color: #b7a6f4;
}

.artist-name {
	color: white;
	padding: 1% 0;
	margin: 2%;
	/* background-color: black; */
	text-shadow: 3px 3px #6F4BF2, #6F4BF2 2px 2px 5px;
}

.artist-auditor {
	color: white;
	/* background-color: black; */
	text-shadow: #6F4BF2 2px 2px 5px;
	/* text-shadow:0 2px 0 #6F4BF2, 0 -2px 0 #4bc0f2; */
	margin: 2% 2%;
}
</style>
  