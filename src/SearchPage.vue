<template>
    <NavBar/>
    <ContentSearchPart/>
</template>

<script>
import ContentSearchPart from './components/ContentSearchPart.vue';
import NavBar from './components/NavBar.vue';

export default {
  name: "App",
  components: { 
    ContentSearchPart,
    NavBar 
  }
}
</script>

<style>

</style>
