<template>
	<nav class="nav-background">
    <ul class="nav-list">
      <h1>MENU</h1>
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
<style>
.nav-background{
  display: flex;
  background: rgb(203, 203, 203);
  width: 40%;
  justify-content: center;
  /* position: fixed;
  height: 100%; */

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
</style>