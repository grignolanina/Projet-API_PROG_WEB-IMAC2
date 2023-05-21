<template>
	<NewReleasedGalleryOption v-model:artistSortType="artistSortType" />

	<div class="artist_gallery">
		<div v-for="released in newReleaseOrganizeData" :key="released.artists[0].id">
			<router-link :to="'/' + released.artists[0].id">
				<NewReleasedCard class="artist_gallery_card" :name="released.artists[0].name" :title="released.name"
					:pictureUrl="released.images[0].url" />
			</router-link>
		</div>
	</div>
</template>

<script>
import { getNewRelease } from '@/assets/services/api/artistAPI';
import NewReleasedCard from './NewReleasedCard.vue';
import NewReleasedGalleryOption from './NewReleasedGalleryOption.vue';

export default {
	name: "NewReleasedGallery",
	components: {
		NewReleasedCard,
		NewReleasedGalleryOption

	},
	computed: {
		newReleaseOrganizeData: function () {
			let data = [...this.newReleaseData]
			const reversed = ["ZAName", "ZATitle"].includes(this.artistSortType)

			if (this.artistSortType == "AZName" || this.artistSortType == "ZAName") {
				data.sort(function (a, b) { return a.artists[0]["name"].localeCompare(b.artists[0]["name"]) })
			} else {
				data.sort(function (a, b) { return a["name"].localeCompare(b["name"]) })
			}
			if (reversed) data = data.reverse()
			return data
		}

	},

	data() {
		return {
			newReleaseData: [],
			artistSortType: localStorage.getItem("artistSortType") || "AZName"

		}
	},
	created() {
		this.newReleaseInfo()
	},

	methods: {
		async newReleaseInfo() {
			this.newReleaseData = await getNewRelease()
			this.newReleaseData = this.newReleaseData.albums.items
		}

	}


}
</script>

<style scoped>
label {
	color: #6F4BF2;
	font-weight: 500;
}


select {
	margin-left: 1%;
	padding: 0.5%;
	color: #F5F1F8;
	background: #6F4BF2;
	border: 0px;
	border-radius: 25px;
}

.artist_gallery {
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-wrap: wrap;
}

.artist_gallery_card {
	margin: 5%;
}

@media (max-width: 768px) {
	.artist_gallery_card {
		margin: 2%;
	}
}

@media (max-width: 480px) {

	.artist_gallery_card {
		margin: 1%;
	}
}
</style>
