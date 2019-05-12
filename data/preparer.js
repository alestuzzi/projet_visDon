const { LV03toWGS } = require('swiss-projection')
const fs = require('fs')
const communes_data = require('./communes.json')
const solaire_data = require('./Solarenergiepotenziale_Gemeinden_Daecher_und_Fassaden_2019.01.01.json')

// GEODONNEES COMMUNES
// seulement besoin d'un point et de l'id
const getCoords = feature => LV03toWGS([
  feature.properties.X_CNTR,
  feature.properties.Y_CNTR,
])

const nettoyerGeo = feature => ({
  commune_id: feature.properties.GMDNR,
  coordinates: getCoords(feature),
})

const geo = communes_data.features.map(nettoyerGeo)

// SOLAIRE COMMUNES
// change le nom des propriétés pour qu'ils soient plus courts
// enlève Methodology (toujours la même) et Factsheet (basé sur le no. de commune)
// utilise Number pour transformer les chaines de charactères en nombres

const nettoyerSolaire = commune => ({
  commune_id:  Number(commune.MunicipalityNumber),
  commune_name: commune.MunicipalityName,
  canton: commune.Canton,
  roofs_1: Number(commune.Scenario1_RoofsOnly_PotentialSolarElectricity_GWh),
  roofs_2: Number(commune.Scenario2_RoofsOnly_PotentialSolarElectricity_GWh),
  heat_roofs: Number(commune.Scenario2_RoofsOnly_PotentialSolarHeat_GWh),
  facades_3: Number(commune.Scenario3_RoofsFacades_PotentialSolarElectricity_GWh),
  facades_4: Number(commune.Scenario4_RoofsFacades_PotentialSolarElectricity_GWh),
  heat_facades: Number(commune.Scenario4_RoofsFacades_PotentialSolarHeat_GWh),
})

const solaire = solaire_data.map(nettoyerSolaire)

// JOINDRE SOLAIRE ET COMMUNE

const getGeo = commune_id => {
  const found = geo.find(c => c.commune_id === commune_id)
  if (found) {
    return found.coordinates
  } else {
    return null
  }
}

const result = solaire
  .map(d => ({
    ...d,
    coordinates: getGeo(d.commune_id),
  }))
  .filter(d => d.coordinates !== null)

// SAUVER

fs.writeFileSync(
  'data.json',
  JSON.stringify(result, null, 2),
  'utf-8'
)