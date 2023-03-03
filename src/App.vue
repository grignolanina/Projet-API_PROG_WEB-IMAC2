<template>
    <NavBar/>
    <ContentPart/>

</template>

<script>
import ContentPart from './components/ContentPart.vue';
import NavBar from './components/NavBar.vue';

export default {
  name: "App",
  components: { 
    ContentPart,
    NavBar 
  }
}
</script>

<style>

</style>
