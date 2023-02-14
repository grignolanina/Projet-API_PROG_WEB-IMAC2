<template>
  <div>
    <ArtistGallery />
  </div>
</template>

<script>
import ArtistGallery from './components/ArtistGallery.vue';

export default {
  name: "App",
  components: { ArtistGallery }
}
</script>

<style>
/* .artist_gallery {
    display :flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap : wrap;
    background: rgb(192, 192, 192);
  } */
</style>
