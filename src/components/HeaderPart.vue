<template>
	<header>
		<h1>FYTISPO</h1>
	</header>
</template>
<script>
export default {
	name: "HeaderPart",
}
</script>
<style scoped>
header {
	background: linear-gradient(to bottom right, #6F4BF2, #AB64E2);
	height: 40vh;
	display: flex;
	justify-content: end;
	align-items: end;
}

h1 {
	color: white;
	font-size: 15vw;
	opacity: 0.33;
}
</style>