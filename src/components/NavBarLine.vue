<template>
	<nav class="nav-background">
    <!-- <h1 class="title">FYTISPO</h1> -->
    <ul class="nav-list">
      <li class="nav-list-elem"><a href="#">Home</a></li>
      <li class="nav-list-elem"><a href="#">Explore</a></li>
      <li class="nav-list-elem"><a href="#">Artist</a></li>
    </ul>
    
	</nav>
  <!-- <footer class="nav-footer-part">
    <ul class="nav-list-footer">
      <li><a href="#">contact@fytispo.com</a></li>
      <li><a href="#">+33 (0)1 65 74 32 43</a></li>
    </ul>
  </footer> -->
	
</template>
<script>
export default {
	name: "NavBarLine"
}
</script>
<style scoped>
.nav-background{
  display: flex;
  background: #F5F1F8;
  width: 100%;
  justify-content: center;
  /* align-items: stretch; */
  /* position: fixed; */
  /* height: 100%; */

}

.nav-list{
  display: flex;
  list-style-type: none;
  justify-content: center;
  /* text-align: center; */
  align-items: center;
  flex-direction: row;
  padding: 1%;
  /* position: fixed; */
}

.nav-list-elem{
  padding: 0 25%;
}

.nav-list a:hover{
  color:#6F4BF2;
}
</style>