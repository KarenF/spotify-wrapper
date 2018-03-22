import { API_URL } from './config'

export const getAlbum = id =>
  fetch(`${API_URL}/albums/${id}`)
    .then(data => data.json())

export const getAlbums = id =>
  fetch(`${API_URL}/albums/?ids=${id}`)
    .then(data => data.json())

export const getAlbumTracks = id =>
  fetch(`${API_URL}/albums/${id}/tracks`)
    .then(data => data.json())
