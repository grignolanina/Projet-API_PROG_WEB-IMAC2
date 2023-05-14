<!-- <template>
	<div class="artist_search">
		<input class="search_bar" type="text" :value="searchArtistKey" @input="launchSearch" placeholder="Search artists">
		<button class="search_button" @click="launchSearch">Search</button>
	</div>
</template>
<script>
export default {
	name: "SearchOption",
	props: {
		searchArtistKey: String
	},
	emits: ["update:searchArtistKey", "search"],
	watch: {
		searchArtistKey: function (newSearch) {
			localStorage.setItem("searchArtistKey", newSearch)
		}
	},
	methods: {
		launchSearch(event) {
			this.$emit("update:searchArtistKey", event.target.value)
			this.$emit("search");
		},
	}
}
</script> -->

<template>
	<div class="artist_search">
		<input class="search_bar" type="text" :value="searchArtistKey" @input="updateSearchArtistKey"
			placeholder="Search artists">
		<button class="search_button" @click="launchSearch">Search</button>
	</div>
</template>
  
<script>
export default {
	name: "SearchOption",
	props: {
		searchArtistKey: String
	},
	emits: ["update:searchArtistKey", "search"],
	watch: {
		searchArtistKey: function (newSearch) {
			localStorage.setItem("searchArtistKey", newSearch);
		}
	},
	methods: {
		updateSearchArtistKey(event) {
			this.$emit("update:searchArtistKey", event.target.value);
		},
		launchSearch() {
			this.$emit("search");
		}
	}
};
</script>
  
<style scoped>
.artist_search {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #6F4BF2;
	border-width: 0;
	border-radius: 20px;
	margin: 2% 0;


}

.artist_search input[type="text"] {
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
</style>
