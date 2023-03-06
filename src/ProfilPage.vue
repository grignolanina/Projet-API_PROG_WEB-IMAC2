<template>
	<NavBar/>
	<ArtistPart/>
</template>

<script>
import NavBar from './components/NavBar.vue';
import ArtistPart from './components/ArtistPart.vue';


export default {
  name: "ProfilPage",
  components: {
	NavBar,
	ArtistPart
  }
}
</script>

<style>

</style>
