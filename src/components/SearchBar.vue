<template>
	<form id="searchbox" method="get" action="/search" autocomplete="off">
		<input name="q" type="text" placeholder="Artist"/>
		<input id="button-submit" type="submit" value=""/>
	</form>
</template>
<script>
export default {
	name: "SearchBar"
}
</script>
<style>
#searchbox {
    width: 100%;
	background:#6F4BF2;
    /* margin: 0px 0px 0px 12px; */
    padding: 5px 0px 5px 0px;
    border-radius: 20px;
}


input:focus:-moz-placeholder {
    color: transparent;
}

#searchbox input {
    outline: none;
	padding: 0 2%;
}


#searchbox input[type="text"] {
    background: transparent;
	border: 0px;
	color: white;
    font-size: 12px;
    width: 81%;
}
#button-submit {
	background: transparent;
	border: 0px;
    cursor: pointer;
    width: 15%;
}

</style>
