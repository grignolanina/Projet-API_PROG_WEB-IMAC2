<template>
	<main>
		<section>
			<h1>Recherche d'artistes</h1>	
			<input type="text" v-model="searchArtistKey" placeholder="Search artists">
			<button v-on:click="doStuff">Search</button>	
			<div class="artist_research">
				<NewReleasedCard
					v-for="artist in artistSearchData"
					:key="artist.id"
					:name="artist.name"
					:title="artist.genres[0]"
					:pictureUrl="artist.images[0].url"
				/>
			</div>	
		</section>
	</main>
</template>
  
<script>
import { searchArtist } from '@/assets/services/api/artistAPI';
import NewReleasedCard from './NewReleasedCard.vue';

export default {
	name: "ContentPart",
	components:{
		NewReleasedCard
	},
	data(){
		return {
			searchArtistKey: "",
			artistSearch:"",
			artistSearchData:[]
		};

	},
	created(){
		this.searchText()
	},
	methods: {
			doStuff : function() {
				this.searchText()
			},
			async searchText(){
				this.artistSearchData = await searchArtist(this.searchArtistKey)
				this.artistSearchData = this.artistSearchData['artists']['items']
			}
	},

}
</script> 
  
<style>
main{
	right:0;
	width: 75%;
	position: absolute;
}

.artist_research{
	display: flex;
	flex-wrap:wrap;

}
section{
	margin: 2% 5%;
}
</style>
  