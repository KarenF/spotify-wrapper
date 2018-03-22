import { API_URL } from './config'
import { toJSON } from './utils'

export const getAlbum = id =>
  // fetch(`${API_URL}/albums/${id}`).then(toJSON)
  fetch(`https://api.spotify.com/v1/albums/${id}`).then(toJSON)

export const getAlbums = id =>
  // fetch(`${API_URL}/albums/?ids=${id}`).then(toJSON)
  fetch(`https://api.spotify.com/v1/albums/?ids=${id}`).then(toJSON)

export const getAlbumTracks = id =>
  // fetch(`${API_URL}/albums/${id}/tracks`).then(toJSON)
  fetch(`https://api.spotify.com/v1/albums/${id}/tracks`).then(toJSON)
