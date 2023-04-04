<template>
    <HeaderPart/>
    <NavBarLine/>
    <ContentPart/>
    <FooterPart/>

</template>

<script>
import ContentPart from './components/ContentPart.vue';
import NavBarLine from './components/NavBarLine.vue';
import HeaderPart from './components/HeaderPart.vue';
import FooterPart from './components/FooterPart.vue';

export default {
  name: "App",
  components: { 
    ContentPart,
    NavBarLine,
    HeaderPart,
    FooterPart
  }
}
</script>



<style>
</style>
