<template>
	<main>
		<header>
			<ArtistBan 
			:imageUrl="artistImageUrl"
			:name="artistName" 
			:audit="artistFollowers"
			/>
			
			<!-- debug -->
			<!-- <p>{{ artistImageUrl }}</p>
			<p>{{ artistName }}</p>
			<p>{{ artistFollowers }}</p> -->

			
		</header>
		<section>
			<h1>Populaires</h1>
			<MusicInfos
				v-for="music in trackData"
				:key="music.id"
				:pictureUrl="music.album.images[0].url"
				:title="music.name"
				:releasedDate="music.album.release_date"
				:time="music.duration_ms"
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
import { getArtistInfo } from '@/assets/services/api/artistAPI';
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
			//elem for ban
			artistData:[],
			artistImageUrl:"",
			artistName:"",
			artistFollowers:"",

			//elem for top music
			trackData:[],
		

			
			
		}
	},
	created() {
		this.artistInfo(),
		this.topTrack()
	},

	methods:{
		async artistInfo() {
			this.artistData = await getArtistInfo()
			this.artistImageUrl = this.artistData.images[0].url
			this.artistName = this.artistData.name
			this.artistFollowers = this.artistData.followers.total

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
  