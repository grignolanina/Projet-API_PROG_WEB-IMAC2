<template>
		<div class="artist-gallery-option">
			<label for="artist-sort">Sort by</label>
			<select v-model="artistSortType">
				<option value="AZName">Name A to Z - Artists</option>
				<option value="ZAName">Name Z to A - Artists</option>
				<option value="AZTitle">Name A to Z - Titles</option>
				<option value="ZATitle">Name Z to A - Title</option>
			</select>

		</div>
		<div class="artist_gallery">
			<NewReleasedCard
			v-for="released in newReleaseOrganizeData"
			:key="released.artists.id"
			:name="released.artists[0].name"
			:title="released.name"
			:pictureUrl="released.images[0].url"
			/>
		</div>
		
</template>

<script>
import { getNewRelease } from '@/assets/services/api/artistAPI';
import NewReleasedCard from './NewReleasedCard.vue';

export default {
	name: "NewReleasedGallery",
	components: { 
		NewReleasedCard
	},
	computed: {
		newReleaseOrganizeData: function(){
			const reversed = ["ZAName", "AZName"].includes(this.artistSortType)
			let data = this.newReleaseData
			if (reversed) data = data.reverse()
			return data
		}
		// newReleaseOrganizeData: function(){
		// 	const field = ["AZName", "ZAName"].includes(this.artistSortType) ? "name" : "title"
		// 	const reversed = ["ZAName", "ZATitle"].includes(this.artistSortType)
		// 	const comparator = (a, b) => a[field].localeCompare(b[field]) 
		// 	let data = this.newReleaseData.sort(comparator)
		// 	if (reversed) data = data.reverse()
		// 	return data
		// }

		
	},

	data(){
		return{
			newReleaseData:[],
			artistSortType:"AZName",
		}
	},
	created(){
		this.newReleaseInfo()
		// this.artistSortType 


	},

	methods:{
		async newReleaseInfo(){
			this.newReleaseData = await getNewRelease()
			this.newReleaseData = this.newReleaseData.albums.items
			// if(this.artistSortType=="AZName"){
			// 	this.newReleaseData.sort();
			// }else if(this.artistSortType=="ZAName"){
			// 	this.newReleaseData.reverse()
			// }
		}

	}
	

}
</script>

<style scoped>

label {
	color: #6F4BF2;
	font-weight:500;
}


select {
	margin-left: 1%;
	padding: 0.5%;
	color:#F5F1F8;
	background: #6F4BF2;
	border: 0px;

	border-radius: 25px;
	/* background-color: #; */
}
.artist_gallery {
	display: flex;
	flex-wrap: wrap;
}
</style>
