<template>
	<nav class="nav-background">
    <ul class="nav-list">
      <h2>MENU</h2>
      <li><a href="#">Home</a></li>
      <li><a href="#">Explore</a></li>
      <li><a href="#">Artist</a></li>
    </ul>
    
	</nav>
	
</template>
<script>
export default {
	name: "NavBar"
}
</script>
<style scoped>
.nav-background{
  display: flex;
  background: #F5F1F8;
  width: 25%;
  justify-content: center;
  align-items: stretch;
  position: fixed;
  height: 100%;

}

.nav-list{
  display: flex;
  list-style-type: none;
  justify-content: center;
  /* text-align: center; */
  align-items: center;
  flex-direction: column;
  /* position: fixed; */
}

.nav-list a:hover{
  color:#6F4BF2;
}
</style>