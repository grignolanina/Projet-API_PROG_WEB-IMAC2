<template>
  <HeaderPart />
  <NavBarLine />
  <ContentSearchPart />
  <FooterPart />
</template>

<script>
import ContentSearchPart from './components/ContentSearchPart.vue';
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

<style></style>

