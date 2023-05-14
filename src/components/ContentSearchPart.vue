<!-- <template>
	<main>
		<section>
			<h1>Recherche d'artistes</h1>
			<SearchOption v-model:searchArtistKey.sync="searchArtistKey" @update:searchArtistKey="searchArtistKey = $event"
				@search="searchText" />
			<div class="artist_research">
				<div v-for="artist in artistSearchData" :key="artist.id">
					<router-link :to="'/' + artist.id">
						<ResearchCard :name="artist.name" :title="artist.genres[0]" :pictureUrl="artist.images[0].url" />
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
			artistSearchData: []
		};

	},
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
				this.artistSearchData = this.artistSearchData['artists']['items']
			}
		}
	}
}
</script> -->

<template>
	<main>
		<section>
			<h1>Recherche d'artistes</h1>
			<SearchOption v-model:searchArtistKey="searchArtistKey" @update:searchArtistKey="searchArtistKey = $event"
				@search="searchText" />
			<div class="artist_research">
				<div v-for="artist in artistSearchData" :key="artist.id">
					<router-link :to="'/' + artist.id">
						<ResearchCard :name="artist.name" :title="artist.genres[0]" :pictureUrl="artist.images[0].url" />
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
	created() {
		this.searchText()
	},
	methods: {
		search: function () {
			this.searchText()
		},
		async searchText() {
			if (this.searchArtistKey) {
				// this.searchArtistKey = ''
				this.artistSearchData = await searchArtist(this.searchArtistKey)
				this.artistSearchData = this.artistSearchData['artists']['items']
			}
		}
	}
}
</script>

  



<style scoped>
.artist_research {
	display: flex;
	flex-wrap: wrap;
}

section {
	margin: 2% 5%;
}
</style>
  