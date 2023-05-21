<template>
  <nav class="nav-background">
    <ul class="nav-list">
      <li class="nav-list-elem"><router-link to="/">Home</router-link></li>
      <li class="nav-list-elem"><router-link to="/SearchPage">Explore</router-link></li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "NavBarLine"
}
</script>
<style scoped>
.nav-background {
  display: flex;
  background: #F5F1F8;
  width: 100%;
  justify-content: center;
}

.nav-list {
  display: flex;
  list-style-type: none;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 1%;
}

.nav-list-elem {
  padding: 0 25%;
}

.nav-list a:hover {
  color: #6F4BF2;
}
</style>