const fetch = require('node-fetch');
const data = require('../data/data.json');
import L from 'leaflet';
import $ from 'jquery';

const { LV03toWGS } = require('swiss-projection')

const map = L.map('map', {
  center: [46.667970, 6.586361],
  zoom: 11,
})

const osmCH = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
});

osmCH.addTo(map)

// afficher les communes sur la carte


const d = data

var panneau = L.icon({
    iconUrl: 'solar.png',
    shadowUrl: 'shadow.png',

    iconSize:     [51, 51], // size of the icon
    shadowSize:   [51, 51], // size of the shadow
    iconAnchor:   [25, 0], // point of the icon which will correspond to marker's location
    shadowAnchor: [17, 0],  // the same for the shadow
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});

$(document).ready(function(){
  $("#btn1").trigger("click");
});

// gestion des scenarii

$("#btn1").on("click", evt => {

  $(":button").removeClass("btn btn-success");
  let btn = $(evt.currentTarget);
  btn.addClass("btn btn-success");

  $.each(data, function(i, obj) {
    L.marker([obj.coordinates[1], obj.coordinates[0]],{icon: panneau}).addTo(map)
    .bindPopup("<b>Nom: </b>" + obj.commune_name + "<br> <b>Potentiel solaire: </b>" 
    + obj.roofs_1 + " GWh")
  });
});

$("#btn2").on("click", evt => {

  $(":button").removeClass("btn btn-success");
  let btn = $(evt.currentTarget);
  btn.addClass("btn btn-success");

  $.each(data, function(i, obj) {
    L.marker([obj.coordinates[1], obj.coordinates[0]],{icon: panneau}).addTo(map)
    .bindPopup("<b>Nom: </b>" + obj.commune_name + "<br> <br> <b>Potentiel solaire: </b>" 
    + obj.roofs_2 + " GWh")
  });
});


$("#btn3").on("click", evt => {

  $(":button").removeClass("btn btn-success");
  let btn = $(evt.currentTarget);
  btn.addClass("btn btn-success");

  $.each(data, function(i, obj) {
    L.marker([obj.coordinates[1], obj.coordinates[0]],{icon: panneau}).addTo(map)
    .bindPopup("<b>Nom: </b>" + obj.commune_name + "<br> <b>Potentiel solaire: </b>" 
    + obj.facades_3 + " GWh")
  });
});