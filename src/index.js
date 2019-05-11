const fetch = require('node-fetch')
const data = require('./solaire.json')
const communes = require('./communes.json')
import L from 'leaflet';
import $ from 'jquery';
const { LV03toWGS } = require('swiss-projection')

// GMDNR
// MunicipalityNumber

const getCommune = (MunicipalityNumber, features) =>
  features.find(f => f.properties.GMDNR === Number(MunicipalityNumber))



const map = L.map('map').setView([46.7965, 8.115], 9)

const osmCH = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 8,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

osmCH.addTo(map)

// trier les cantons pour obtenir les 5 premières communes 

//console.log(data[i].properties.Canton);
/*
const resultat = data.map(d => {
  d.sort(data.properties.Canton)  //tri par canton
  //tri par potentiel solaire
  //ne séléctionner que les 5 premiers
  //ajouter au tableau
})

var i;
for (i = 0; i < 6; i++) {
  billboardLeHobbit.map();
} 


*/
/*
const years = Object.keys(o)
 .filter(key => key !== 'Year')
 .map(Number)

const list = years.map(year => ({
 year,
 population: Number(o[year])
}))

console.log(list)
*/


// afficher les communes sur la carte

const getCoords = feature => LV03toWGS([
  feature.properties.X_CNTR,
  feature.properties.Y_CNTR,
])

const d = data.map(getCoords)

$.each(data, function(i, obj) {
  L.marker([d[i][1], d[i][0]]).addTo(map);
});

// rendre les points de communes cliquable

// afficher les informations relatives à la commune