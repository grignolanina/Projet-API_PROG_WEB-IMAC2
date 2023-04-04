function getArtistsData() {
	return [
		{ id: 0, name: "Christophe Maé", style: "Pop Française", pictureUrl: "http://media.nrj.fr/1900x1200/2016/09/christophemae-jpg-8806288.jpg" },
		{ id: 1, name: "Amel Bent", style: "Rnb", pictureUrl: "https://img.nrj.fr/xzK3wcWhQZMeMJXH2Z9dJFT4YGo=/1060x596/smart/medias%2F2022%2F10%2F633fc108cc13c_633fc10a370b5.jpg" },
		{ id: 2, name: "Shym", style: "Pop Française", pictureUrl: "https://img.nrj.fr/mdKNPJkv9ACgUJIIiUHdf1dNsqY=/1060x596/smart/medias%2F2018%2F03%2Fshy-m.jpg" },
	]
}

let myToken="BQAm9Ne7z1AI_Cbn8P19PQbcR22Rli8V9dLFiv5TMDjPBPlDDEKVbIy-eKBQRn1F-m31Bemyr0bdRjxZN_jSmV4xQzYtOyl82vif_ynFedvITFO8Ppqd"

// let id = "3JhNCzhSMTxs9WLGJJxWOY"
let id ="4FpJcNgOvIpSBeJgRg3OfN"

async function getArtistInfo() {

	let response = await fetch(
		"https://api.spotify.com/v1/artists/"+id,
		{
			method: "GET", // or GET, PUT, DELETE, etc.
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json", // to have JSON content in body
				'Authorization': 'Bearer ' + myToken, // set JWT token
			},
		}		
	)
	return response.json()
}

//rajoute en param id
async function getTopTrack() {

	let response = await fetch(
		"https://api.spotify.com/v1/artists/"+id+"/top-tracks?market=fr",
		{
			method: "GET",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
				'Authorization': 'Bearer ' + myToken, 
			},
		}
	)
	return response.json()
}

async function getAlbums() {

	let response = await fetch(
		"https://api.spotify.com/v1/artists/"+id+"/albums?market=FR&limit=3",
		{
			method: "GET", 
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json", 
				'Authorization': 'Bearer ' + myToken, 
			},
		}
	)
	return response.json()
}

async function getNewRelease() {

	let response = await fetch(
		"https://api.spotify.com/v1/browse/new-releases?country=FR&limit=12",
		{
			method: "GET", 
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json", 
				'Authorization': 'Bearer ' + myToken, 
			},
		}
	)
	return response.json()
}

// let research = "christophe"

async function searchArtist(research){
	let response = await fetch(
	"https://api.spotify.com/v1/search?query="+research+"&type=artist&market=FR&offset=0&limit=9",
	{
		method: "GET", 
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json", 
			'Authorization': 'Bearer ' + myToken, 
		},
	}
)

	return response.json()
}






export { getArtistsData }
export { getArtistInfo }
export { getTopTrack }
export { getAlbums }
export { getNewRelease }
export {searchArtist}

