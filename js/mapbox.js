// JQuery bootstrap
$(function() {
	startMapBox();
});

function startMapBox() {
	// Our default MapBox's accessToken
	mapboxgl.accessToken = 'pk.eyJ1IjoidnRlcnRvaXMiLCJhIjoiY2l1OXYyYWQ4MDAwNDJvbDc3YXNvMzhnOCJ9.gUf56M93BErFAYA19YoH0g';
	var map = new mapboxgl.Map({
		container: 'map', // Container id
		style: 'mapbox://styles/mapbox/outdoors-v9', // Map style (here, for pedestrian)
		center: [-71.05, 48.4159], // Default position
		zoom: 12 // Default zoom
	});
	map.addControl(new mapboxgl.NavigationControl());
}
