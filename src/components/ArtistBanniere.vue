<template>
	<div class="ban">
		<h1 class="artist-name">Christophe Maé</h1>
		<p class="artist-auditor">123 065 auditeurs</p>
	</div>
	
</template>
  
<script>
export default {
	name: "ArtistBan",	
}
</script>
  
<style>
.ban{
	/* background: grey; */
	background-image:  linear-gradient(to bottom, rgba(134, 134, 134, 0), rgba(7, 7, 7, 0.73)), url("https://img.nrj.fr/jNkVifTv5om1ukOWoB1XEN1eU5A=/medias/2019/09/christophe-mae-presente-le-clip-de-les-gens_5d8a3e7b6c690.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	height: 40vh;
	display: flex;
	flex-direction: column;
	justify-content: end;
	padding: 2% 5%;
}

.artist-name{
	color:white;
	padding: 1% 0;
}

.artist-auditor{
	color:white;
}

</style>
  