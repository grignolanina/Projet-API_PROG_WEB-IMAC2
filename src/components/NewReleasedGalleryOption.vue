<template>
	<div class="artist-gallery-option">
		<label for="artist-sort">Sort by</label>
		<select :value="artistSortType" @input="onArtistSortTypeChanged">
			<option value="AZName">Name A to Z - Artists</option>
			<option value="ZAName">Name Z to A - Artists</option>
			<option value="AZTitle">Name A to Z - Titles</option>
			<option value="ZATitle">Name Z to A - Titles</option>
		</select>
	</div>
</template>
<script>
export default {
	name: "NewReleasedGalleryOption",
	props: {
		artistSortType: String
	},
	emits: ["update:artistSortType"],
	watch: {
		artistSortType: function (newArtistSortType) {
			localStorage.setItem("artistSortType", newArtistSortType)
		}
	},
	methods: {
		onArtistSortTypeChanged(event) {
			this.$emit('update:artistSortType', event.target.value)
		}
	}
}
</script>
<style scoped>
.artist-gallery-option {
	display: flex;
	align-items: center;
}

.artist-gallery-option label {
	margin-right: 1%;
}

.artist-gallery-option select {
	padding: 5px;
	border: none;
	background-color: #6F4BF2;
	color: white;
	font-size: 14px;
	border-radius: 15px;
	padding: 1%;
}

.artist-gallery-option select option {
	background-color: #ac97f9;
	color: #6F4BF2;
	font-size: 14px;
}
</style>