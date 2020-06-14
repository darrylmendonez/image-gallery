const URL = `https://api.unsplash.com/photos/`
const KEY = `?client_id=Ec1n2AKEb00jiprb4C_6LFncc57yZHxst8TYXNPvp7s`

const fetchImages = async page => {
  const response = await fetch(`${URL}${KEY}&per_page=3&page=${page}`)
  const data = await response.json()
  if (response.status >= 400) {
    throw new Error(data.errors)
  }
  return data
}

const fetchImageStats = async id => {
  const response = await fetch(`${URL}/${id}/statistics${KEY}`)
  const data = await response.json()
  if (response.status >= 400) {
    throw new Error(data.errors)
  }
  return data
}

export { fetchImages, fetchImageStats }