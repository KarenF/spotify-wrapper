import { API_URL, HEADERS } from './config'
import toJSON from './utils'

export const getAlbum = id =>
  fetch(`${API_URL}/albums/${id}`, HEADERS).then(toJSON)

export const getAlbums = id =>
  fetch(`${API_URL}/albums/?ids=${id}`, HEADERS).then(toJSON)

export const getAlbumTracks = id =>
  fetch(`${API_URL}/albums/${id}/tracks`, HEADERS).then(toJSON)
