<template>
	<div class="music-line">

		<div class="music-data">
			<p class="music-classement">{{ musicClassement }}</p>
			<img class="music-cover" v-bind:src="pictureUrl" />
			<p class="music-title">{{ title }}</p>
		</div>


		<p class="music-released">{{ releasedDate }}</p>

		<p class="music-time">{{ time }}</p>
	</div>
</template>
<script>
export default {
	name: "MusicInfos",
	props: {
		musicClassement: Number,
		pictureUrl: String,
		title: String,
		releasedDate: String,
		time: String
	},
}
</script>
<style scoped>
.music-line {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: end;
	margin: 2% 0;
	flex-wrap: wrap;
	padding-bottom: 2%;
	border-bottom: solid 1px #6F4BF2;
}

.music-data {
	display: flex;
	flex-direction: row;
	justify-content: start;
	align-items: end;
	flex: 2;
}

.music-classement {
	color: #6F4BF2;
}

.music-cover {
	object-fit: cover;
	border-radius: 100px;
	width: 4vh;
	height: 4vh;
	margin: 0 5%;
}


.music-released {
	display: flex;
	justify-content: end;
	flex: 1;
}

.music-time {
	display: flex;
	justify-content: end;
	flex: 1;
}

p {
	font-size: 0.9em;
}
</style>