const fetch = require('node-fetch')
const data = require('./solaire.json')
const communes = require('./communes.json')
import L from 'leaflet';

// GMDNR
// MunicipalityNumber

const getCommune = (MunicipalityNumber, features) =>
  features.find(f => f.properties.GMDNR === Number(MunicipalityNumber))

const resultat = data.map(d => {
  const feature = getCommune(d.MunicipalityNumber, communes.features)
  if (feature) {
    return {
      ...feature,
      properties: {
        ...feature.properties,
        ...d,
      }
    }
  }
  return d
})

const map = initMap('map').setView([46.5579, 9.5471], 9)

const osmCH = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

/*
console.log(
  JSON.stringify(resultat.filter(f => f.type === 'Feature'))
)
*/

osmCH.addTo(map)