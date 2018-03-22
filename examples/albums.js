import { searchAlbums } from '../src/app'

global.fetch = require('node-fetch')

const albums = searchAlbums('Incubus')

albums.then(data => console.log(data))
