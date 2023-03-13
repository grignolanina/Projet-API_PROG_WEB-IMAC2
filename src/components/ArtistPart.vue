<template>
	<main>
		<header>
			<ArtistBan 
			:imageUrl="artistData['images'][0]?.url"
			:name="artistData['name']" 
			:audit="artistData['followers']?.total"
			/>
		</header>
		<section>
			<h1>Populaires</h1>
			<MusicInfos 
			:musicClassement="1"
			:pictureUrl="trackData[0]['album']['images'][0]?.url"
			:title="trackData[0]?.name"
			:releasedDate="trackData[0]['album']?.release_date"
			:time="trackData[0]?.duration_ms"
			/>

			<MusicInfos 
			:musicClassement="2"
			:pictureUrl="trackData[1]['album']['images'][0]?.url"
			:title="trackData[1]?.name"
			:releasedDate="trackData[1]['album']?.release_date"
			:time="trackData[1]?.duration_ms"
			/>

			<MusicInfos 
			:musicClassement="3"
			:pictureUrl="trackData[2]['album']['images'][0]?.url"
			:title="trackData[2]?.name"
			:releasedDate="trackData[2]['album']?.release_date"
			:time="trackData[2]?.duration_ms"
			/>

			<MusicInfos 
			:musicClassement="4"
			:pictureUrl="trackData[3]['album']['images'][0]?.url"
			:title="trackData[3]?.name"
			:releasedDate="trackData[3]['album']?.release_date"
			:time="trackData[3]?.duration_ms"
			/>

			<MusicInfos 
			:musicClassement="5"
			:pictureUrl="trackData[4]['album']['images'][0]?.url"
			:title="trackData[4]?.name"
			:releasedDate="trackData[4]['album']?.release_date"
			:time="trackData[4]?.duration_ms"
			/>

	


		</section>
		<section>
			<h1>Albums</h1>
			<AlbumGallery/>
		</section>
	</main>
</template>
  
<script>
import AlbumGallery from './AlbumGallery.vue';
import ArtistBan from "./ArtistBanniere.vue";
import MusicInfos from './MusicInfos.vue';
import { getApiTrackMacklemore } from '@/assets/services/api/artistAPI';
import { getTopTrack } from '@/assets/services/api/artistAPI';



export default {
	name: "ArtistPart",
	components: {
		ArtistBan,
		MusicInfos,
		AlbumGallery
	},

	data(){
		return {
			artistData:[],
			trackData:[],
		}
	},
	created() {
		this.artistInfo(),
		this.topTrack()
	},

	methods:{
		async artistInfo() {
			this.artistData = await getApiTrackMacklemore()
		},

		async topTrack(){
			this.trackData = await getTopTrack()
			this.trackData = this.trackData['tracks']
		}
	}

	
}
</script>
  
<style>
main{
	right:0;
	width: 75%;
	position: absolute;
}

section{
	margin: 2% 5%;
}
</style>
  