async function getToken() {

	let response = await fetch(
		" https://accounts.spotify.com/api/token",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: "grant_type=client_credentials&client_id=70481623e64648da9ccf88ec56c08a99&client_secret=ae9dcdd63278487dbfd1f4001b2ada82",
		}
	)
	return response.json()
}

//sert à qlq chose ?
async function myFunctionToken() {
	let myTokenTab = []
	myTokenTab = await getToken();
	let myToken = myTokenTab.access_token;
	return myToken;
}

async function getArtistInfo(id) {
	let myToken = await getToken()

	let response = await fetch(
		"https://api.spotify.com/v1/artists/" + id,
		{
			method: "GET",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
				'Authorization': 'Bearer ' + myToken.access_token,
			},
		}
	)
	return response.json()
}

async function getTopTrack(id) {

	let myToken = await getToken()


	let response = await fetch(
		"https://api.spotify.com/v1/artists/" + id + "/top-tracks?market=fr",
		{
			method: "GET",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
				'Authorization': 'Bearer ' + myToken.access_token,
			},
		},

	)

	return response.json()
}



async function getAlbums(id) {
	let myToken = await getToken()

	let response = await fetch(
		"https://api.spotify.com/v1/artists/" + id + "/albums?market=FR&limit=6",
		{
			method: "GET",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
				'Authorization': 'Bearer ' + myToken.access_token,
			},
		}
	)
	return response.json()
}

async function getNewRelease() {
	let myToken = await getToken()

	let response = await fetch(
		"https://api.spotify.com/v1/browse/new-releases?country=FR&limit=12",
		{
			method: "GET",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
				'Authorization': 'Bearer ' + myToken.access_token,
			},
		}
	)
	return response.json()
}

async function searchArtist(research) {
	let myToken = await getToken()


	let response = await fetch(
		"https://api.spotify.com/v1/search?query=" + research + "&type=artist&market=FR&offset=0&limit=12",
		{
			method: "GET",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
				'Authorization': 'Bearer ' + myToken.access_token,
			},
		}
	)

	return response.json()
}






export { getToken }
export { myFunctionToken }
export { getArtistInfo }
export { getTopTrack }
export { getAlbums }
export { getNewRelease }
export { searchArtist }

