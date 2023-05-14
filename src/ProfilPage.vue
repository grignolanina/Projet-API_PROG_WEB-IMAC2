<template>
	<ArtistBan :imageUrl="artistImageUrl" :name="artistName" :audit="artistFollowers" />
	<ArtistPart v-if="artistLoaded" :id="artistId" />
	<FooterPart />
</template>

<script>
import ArtistPart from './components/ArtistPart.vue';
import ArtistBan from './components/ArtistBanniere.vue';
import FooterPart from './components/FooterPart.vue';
import { getArtistInfo } from '@/assets/services/api/artistAPI';


export default {
	name: "ProfilPage",
	components: {
		// NavBar,
		ArtistBan,
		ArtistPart,
		FooterPart
	},
	data() {
		return {
			artistData: [],
			artistImageUrl: "",
			artistName: "",
			artistFollowers: "",
			artistId: "",
			artistLoaded: false,

		}
	},
	created() {
		const id = this.$route.params.id;
		this.artistInfo(id)
	},

	methods: {
		async artistInfo(id) {
			this.artistData = await getArtistInfo(id)
			this.artistImageUrl = this.artistData.images[0].url
			this.artistName = this.artistData.name
			this.artistFollowers = this.artistData.followers.total
			this.artistId = this.artistData.id
			this.artistLoaded = true
		},
	}


}

</script>

<style></style>
