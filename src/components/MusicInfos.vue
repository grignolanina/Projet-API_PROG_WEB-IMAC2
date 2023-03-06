<template>
	<div class="music-line">
		
		<div class="music-data">
			<p class="music-classement">1</p>
			<img class="music-cover" src="https://i.discogs.com/1mMlyP9I8Nt1ERi6fHL9Jr6gDVD_YSW6LwiDBQWQuEY/rs:fit/g:sm/q:90/h:600/w:589/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk4OTY2/NjctMTQ4ODEzMjU4/OS02MjQxLmpwZWc.jpeg"/>
			<p class="music-title">Dingue Dingue Dingue</p>
		</div>
		

		<p class="music-auditor">4 593345</p>

		<p class="music-time">2:43</p>
	</div>
	
</template>
<script>
export default{
	name: "MusicInfos"
}


</script>
<style>
.music-line{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: end;
	margin: 2% 0;
	flex-wrap: wrap;
}

.music-data{
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: end;
	flex:2;
}
.music-cover{
	object-fit: cover;
	border-radius: 100px;
	width: 5vh;
	height: 5vh;
}
/* .music-classement, .music-cover, .music-title{
	padding: 0 5% 0 0;
} */

.music-auditor{
	display: flex;
	justify-content: end;
	flex:1;
}

.music-time{
	display: flex;
	justify-content: end;
	flex:1;
}

p{
	font-size: 0.9em;
}

</style>