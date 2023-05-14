<template>
      <HeaderPart/>
      <NavBarLine/>
      <ContentSearchPart/>
      <FooterPart/>
</template>

<script>
import ContentSearchPart from './components/ContentSearchPart.vue';
// import NavBar from './components/NavBar.vue';
import NavBarLine from './components/NavBarLine.vue';
import HeaderPart from './components/HeaderPart.vue';
import FooterPart from './components/FooterPart.vue';

export default {
  name: "SearchPage",
  components: { 
    ContentSearchPart,
    NavBarLine,
    HeaderPart,
    FooterPart
  }
}
</script>

<style>
/* .test1{
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
} */
/* 
.test2{
  display: flex;
  flex-direction: column;
} */

</style>
