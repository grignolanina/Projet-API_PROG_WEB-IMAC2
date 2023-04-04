<template>
	<footer>
		<ul>
			<li><a class="footer-elem" href="">contact@fytispo.com</a></li>
			<li><a class="footer-elem" href="">+33 (0)1 65 74 32 43</a></li>
		</ul>
		<p class="footer-elem">©grignolanina | 2023</p>
	</footer>
</template>
<script>
export default {
	name: "FooterPart",	
}
</script>
<style scoped>
footer{
	background: linear-gradient(to bottom right, #6F4BF2, #AB64E2); 
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin: 6% 0 0 0;
	padding: 3% 0;	
}
ul{
	list-style: none;
}

.footer-elem{
	color: #F5F1F8;
	opacity: 0.33;
}

</style>