import { searchAlbums } from '../src/search'

global.fetch = require('node-fetch')

const albums = searchAlbums('Incubus')

albums.then(data => console.log(data))
// albums.then(data => data.albums.item.map(item => console.log(item.name))
