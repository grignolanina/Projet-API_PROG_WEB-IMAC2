<template>
	<main>
		<section>
			<h1>Populaires</h1>
			<MusicInfos v-for="(music, index) in newTrackData" :key="music.id" :musicClassement="index + 1"
				:pictureUrl="music.album.images[0].url" :title="music.name" :releasedDate="music.album.release_date"
				:time="music.duration_ms" />
		</section>
		<section>
			<h1>Albums</h1>
			<AlbumGallery />
		</section>
	</main>
</template>
  
<script>
import AlbumGallery from './AlbumGallery.vue';
import MusicInfos from './MusicInfos.vue';
import { getArtistInfo } from '@/assets/services/api/artistAPI';
import { getTopTrack } from '@/assets/services/api/artistAPI';



export default {
	name: "ArtistPart",
	props: {
		id: String,
	},
	components: {
		// ArtistBan,
		MusicInfos,
		AlbumGallery
	},
	computed: {
		newTrackData: function () {
			let data = [...this.trackData]
			for (const music of data) {
				music.duration_ms = convertTime(music.duration_ms)
			}
			return data
		}
	},

	data() {
		return {
			//elem for ban
			artistData: [],
			artistImageUrl: "",
			artistName: "",
			artistFollowers: "",

			//elem for top music
			trackData: [],

		}
	},
	//ici bug faut que j'enregistre pour que ça fonctionne
	mounted() {
		this.artistInfo(this.id),
			this.topTrack(this.id)
	},

	methods: {
		async artistInfo(id) {
			this.artistData = await getArtistInfo(id)
			this.artistImageUrl = this.artistData.images[0].url
			this.artistName = this.artistData.name
			this.artistFollowers = this.artistData.followers.total
		},

		async topTrack(id) {
			this.trackData = await getTopTrack(id)
			this.trackData = this.trackData['tracks']
		}
	}

}

function convertTime(time) {
	var min = Math.floor((time / 1000 / 60) << 0);
	var sec = Math.floor((time / 1000) % 60);

	if (sec < 10) {
		sec = "0" + sec
	}
	return min + ':' + sec;
}
</script>
  
<style scoped>
main {
	width: 100%;
}

section {
	margin: 2% 5%;
}
</style>
  