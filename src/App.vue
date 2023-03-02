<template>
  <div class="test">
    <NavBar/>
    <ContentPart/>
  </div>

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
.test{
  display: flex;
  flex-direction: row;
}

</style>
