<template>
	<ArtistBan 
	:imageUrl="artistImageUrl"
	:name="artistName" 
	:audit="artistFollowers"
	/>			
	<ArtistPart/>
	<FooterPart/>

</template>

<script>
// import NavBar from './components/NavBar.vue';
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
  data(){
		return {
			//elem for ban
			artistData:[],
			artistImageUrl:"",
			artistName:"",
			artistFollowers:""
		
		}
	},
	created() {
		this.artistInfo()
	},

	methods:{
		async artistInfo() {
			this.artistData = await getArtistInfo()
			this.artistImageUrl = this.artistData.images[0].url
			this.artistName = this.artistData.name
			this.artistFollowers = this.artistData.followers.total

		},
	}

	
}

</script>

<style>

</style>
