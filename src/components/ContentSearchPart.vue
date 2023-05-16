<template>
	<main>
		<section>
			<h1>Recherche d'artistes</h1>
			<SearchOption v-model:searchArtistKey="searchArtistKey" @update:searchArtistKey="searchArtistKey = $event"
				@search="searchText" />
			<div class="artist_research">
				<div v-for="artist in artistSearchDataFiltered" :key="artist.id">
					<router-link :to="'/' + artist.id">
						<ResearchCard class="artist_research_card" :name="artist.name" :title="artist.genres[0]"
							:pictureUrl="artist.images[0].url" />
					</router-link>
				</div>
			</div>
		</section>
	</main>
</template>
  
<script>
import { searchArtist } from '@/assets/services/api/artistAPI';
import ResearchCard from './ResearchCard.vue';
import SearchOption from './SearchOption.vue';

export default {
	name: "ContentPart",
	components: {
		ResearchCard,
		SearchOption
	},
	data() {
		return {
			searchArtistKey: localStorage.getItem("searchArtistKey") || "",
			artistSearchData: [],
		};

	},
	// beforeRouteEnter(to, from, next) {
	// 	next(vm => {
	// 		vm.reset()
	// 	})
	// },
	created() {
		this.searchText()
	},
	methods: {
		search: function () {
			this.searchText()
		},

		async searchText() {
			if (this.searchArtistKey) {
				this.artistSearchData = await searchArtist(this.searchArtistKey)
				this.artistSearchData = this.artistSearchData['artists'].items
			}
		},
		// reset() {
		// 	this.artistSearchData = []
		// 	this.searchArtistKey = ""
		// },

	},
	computed: {
		//Manage of the url undefined
		artistSearchDataFiltered: function () {
			let data = [...this.artistSearchData]
			let dataFilter = data.filter(item => {
				return item.images[0] !== undefined;
			})
			return dataFilter
		}

	}



}

</script>

  



<style scoped>
.artist_research {
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-wrap: wrap;
}

.artist_research_card {
	margin: 5%;
}

section {
	margin: 2% 5%;
}
</style>
  