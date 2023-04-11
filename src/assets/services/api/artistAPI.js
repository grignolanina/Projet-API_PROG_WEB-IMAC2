async function getToken() {

	let response = await fetch(
		" https://accounts.spotify.com/api/token",
		{
			method: "POST", // or GET, PUT, DELETE, etc.
			headers: {
				"Content-Type": "application/x-www-form-urlencoded", 
			},
			body: "grant_type=client_credentials&client_id=70481623e64648da9ccf88ec56c08a99&client_secret=ae9dcdd63278487dbfd1f4001b2ada82",
		}		
	)
	return response.json()
}


async function myFunctionToken(){
	let myTokenTab=[] 
	// tokenCaract = await getToken()
	myTokenTab = await getToken();
	let myToken = myTokenTab.access_token;
	return myToken;

}

// let myToken=myFunctionToken();
// console.log(myToken);
// let myToken="BQA5BLYPf7rK64MWdrvQvz8N_vMJ-krKHUifh4fbez23Lyb_2l2p_IpVikfDL2al8SnPci77zrAKc5Igq69EJ16Fpe_niYdlm4DJ5Nani1yDCuwxoAQI"


// let id = "3JhNCzhSMTxs9WLGJJxWOY"
let id ="4FpJcNgOvIpSBeJgRg3OfN"

async function getArtistInfo() {
	let myToken = await getToken()

	let response = await fetch(
		"https://api.spotify.com/v1/artists/"+id,
		{
			method: "GET", // or GET, PUT, DELETE, etc.
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json", // to have JSON content in body
				'Authorization': 'Bearer ' + myToken.access_token, // set JWT token
			},
		}		
	)
	return response.json()
}

//rajoute en param id
async function getTopTrack() {

	let myToken = await getToken()

	let response = await fetch(
		"https://api.spotify.com/v1/artists/"+id+"/top-tracks?market=fr",
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

async function getAlbums() {
	let myToken = await getToken()

	let response = await fetch(
		"https://api.spotify.com/v1/artists/"+id+"/albums?market=FR&limit=6",
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
	// console.log(myToken)

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

// let research = "christophe"

async function searchArtist(research){
	let myToken = await getToken()
	

	let response = await fetch(
	"https://api.spotify.com/v1/search?query="+research+"&type=artist&market=FR&offset=0&limit=12",
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
export {searchArtist}

