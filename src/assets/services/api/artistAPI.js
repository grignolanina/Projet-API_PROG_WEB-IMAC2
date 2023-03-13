function getArtistsData() {
	return [
		{ id: 0, name: "Christophe Maé", style: "Pop Française", pictureUrl: "http://media.nrj.fr/1900x1200/2016/09/christophemae-jpg-8806288.jpg" },
		{ id: 1, name: "Amel Bent", style: "Rnb", pictureUrl: "https://img.nrj.fr/xzK3wcWhQZMeMJXH2Z9dJFT4YGo=/1060x596/smart/medias%2F2022%2F10%2F633fc108cc13c_633fc10a370b5.jpg" },
		{ id: 2, name: "Shym", style: "Pop Française", pictureUrl: "https://img.nrj.fr/mdKNPJkv9ACgUJIIiUHdf1dNsqY=/1060x596/smart/medias%2F2018%2F03%2Fshy-m.jpg" },
	]
}



//api disney ok
// async function getApiDisney(){
// 	let response = await fetch('https://api.disneyapi.dev/characters')
// 	// console.log(response)
// 	return response.json()
// }

let myToken="BQARMk9tNE12Sf2dD7YlQaY8A-LNSNFVGTReQDBl96T3jhg5ztkyWzkEqdqpvdBqIKPvDbO0oLOKUsgMSgb4CkWCJLxGOoUL42FaCodwdK0oe6kjjEv1"


async function getApiTrackMacklemore() {

	let response = await fetch(
		"https://api.spotify.com/v1/artists/3JhNCzhSMTxs9WLGJJxWOY",
		{
			method: "GET", // or GET, PUT, DELETE, etc.
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json", // to have JSON content in body
				'Authorization': 'Bearer ' + myToken, // set JWT token
			},
			// body: JSON.stringify(myData) // set JSON data in request body
		}

		
	)
	return response.json()
}

//rajoute en param id
async function getTopTrack() {

	let response = await fetch(
		"https://api.spotify.com/v1/artists/3JhNCzhSMTxs9WLGJJxWOY/top-tracks?market=fr",
		{
			method: "GET", // or GET, PUT, DELETE, etc.
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json", // to have JSON content in body
				'Authorization': 'Bearer ' + myToken, // set JWT token
			},
			// body: JSON.stringify(myData) // set JSON data in request body
		}

		
	)
	return response.json()
}

async function getAlbums() {

	let response = await fetch(
		"https://api.spotify.com/v1/artists/3JhNCzhSMTxs9WLGJJxWOY/albums?market=FR&limit=12",
		{
			method: "GET", // or GET, PUT, DELETE, etc.
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json", // to have JSON content in body
				'Authorization': 'Bearer ' + myToken, // set JWT token
			},
			// body: JSON.stringify(myData) // set JSON data in request body
		}

		
	)
	return response.json()
}




export { getArtistsData }
export { getApiTrackMacklemore }
export { getTopTrack }
export { getAlbums }


