const form = document.querySelector("form")
const artistName = document.querySelector("#artist-search")
const songList = document.querySelector("#result-list")
const search = artistName.value
const url ='https://proxy-itunes-api.glitch.me/search?'

form.addEventListener ('submit', event => {
    event.preventDefault()
    dataPull()
    

function dataPull () {
    fetch (url + 'term=' + `${search}` + '&limit=12&entity=song')
    .then (resp => resp.json())
    .then(data =>  { 
        for (let result of data.results) {
            songResults(result)
        }
    })
    
}

function songResults (data) {
    const songs = document.createElement("li")
    songs.id = data.trackId
    songInfo(songs, data) 
    songList.appendChild(songs)
}

function songInfo (songs, data) {
    const title = document.createElement('p')
    const bandName = document.createElement('p')
    const albumArt = document.createElement('img')
    const preview = document.createElement('audio')
    const audioSample = document.createElement('source')
    audioSample.src = data.previewUrl
    preview.controls = true
    title.innerHTML = data.trackName
    bandName.innerHTML = data.artistName
    albumArt.src = data.artworkUrl100
    preview.appendChild(audioSample)
    songs.appendChild(title)
    songs.appendChild(bandName)
    songs.appendChild(albumArt)
    songs.appendChild(preview)
}





})
