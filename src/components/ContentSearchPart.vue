<template>
	<main>
		<section>
			<h1>Recherche d'artistes</h1>
			<div class="artist_search">
				<input class="search_bar" type="text" v-model="searchArtistKey" placeholder="Search artists">
				<button class="search_button" v-on:click="search">Search</button>	
			</div>	
			
			<div class="artist_research">
				<ResearchCard
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
import ResearchCard from './ResearchCard.vue';

export default {
	name: "ContentPart",
	components:{
		ResearchCard
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
			search : function() {
				this.searchText()
			},
			async searchText(){
				this.artistSearchData = await searchArtist(this.searchArtistKey)
				this.artistSearchData = this.artistSearchData['artists']['items']
			}
	},

}
</script> 
  
<style scoped>

.artist_search {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color:#6F4BF2;
	border-width: 0;
	border-radius: 20px;
	margin: 2% 0;


}
.artist_search input[type= "text"]{
	background: transparent;
	border-width: 0;
	outline: none;
	border-radius: 20px;
	display: flex;
	justify-content: center;
    margin: 0px 0px 0px 12px;
    padding: 5px 0px 5px 10px;
	font-family: 'Inter', sans-serif;
    font-size: 1.2em;
    width: 60vw;
	height: 5vh;
    color: white;
    display: inline-table;
    vertical-align: top;

}

.search_button {
    background: #4e2ec2;
	color: white;

	padding: 25px;
	border-radius: 20px;
    border-width: 1px;
    cursor: pointer;
    width: auto;
    height: 5vh;
	font-size: 1.2em;

}
.artist_research{
	display: flex;
	flex-wrap:wrap;
}
section{
	margin: 2% 5%;
}
</style>
  