<template>
	<!-- <div class="music-line">
		
		<div class="music-data">
			<p class="music-classement">1</p>
			<img class="music-cover" src="https://i.discogs.com/1mMlyP9I8Nt1ERi6fHL9Jr6gDVD_YSW6LwiDBQWQuEY/rs:fit/g:sm/q:90/h:600/w:589/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk4OTY2/NjctMTQ4ODEzMjU4/OS02MjQxLmpwZWc.jpeg"/>
			<p class="music-title">Dingue Dingue Dingue</p>
		</div>
		

		<p class="music-released">4 593345</p>

		<p class="music-time">2:43</p>
	</div> -->

	<div class="music-line">
		
		<div class="music-data">
			<p class="music-classement">{{ musicClassement }}</p>
			<img class="music-cover" v-bind:src="pictureUrl"/>
			<p class="music-title">{{ title }}</p>
		</div>
		

		<p class="music-released">{{releasedDate}}</p>

		<p class="music-time">{{time}}</p>
	</div>
	
</template>
<script>
export default{
	name: "MusicInfos",
	props : {
		musicClassement: Number,
		pictureUrl: String,
		title:String,
		releasedDate:String,
		time:String
	},
	// computed: {
	// 	convertTime : function(){
	// 		console.log(this.time)
	// 		return convertTimeF(this.time)
	// 	}
	// },
	// data(){
	// 	return{
	// 		newTime:"00:00"
	// 	}
	// }
}

// function convertTimeF(time){
// 	if(time >=60){
// 		var minutes = floor(time/60)
// 		var secondes = reste%60
// 		return minutes+ ":" +secondes
// 	} else {
// 		return "00:"+time
// 	}
// }


</script>
<style scoped>
.music-line{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: end;
	margin: 2% 0;
	flex-wrap: wrap;
	padding-bottom: 2%;
	border-bottom: solid 1px #6F4BF2;
}

.music-data{
	display: flex;
	flex-direction: row;
	justify-content: start;
	align-items: end;
	flex:2;
}
.music-classement{
	color:#6F4BF2;
}
.music-cover{
	object-fit: cover;
	border-radius: 100px;
	width: 4vh;
	height: 4vh;
	margin: 0 5%;
}


.music-released{
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