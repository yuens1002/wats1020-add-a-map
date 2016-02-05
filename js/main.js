/* 
WATS 1020, Winter 2016 Quarter - Add A Map Assignment
Sunny Yuen
*/

$(document).ready(function() {

	var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 12, touchZoom: false, attribution: osmAttrib});

	var satLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
		subdomains: ['otile1','otile2','otile3','otile4']
	});

	var drawLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
		subdomains: ['otile1','otile2','otile3','otile4']
	});

	var mapLayers = {
		"Satellite": satLayer,
		"Map View": drawLayer,
		"Open Street Maps": osm
	}

	var map = L.map('map-container', {zoom: 10, minZoom: 8, maxZoom: 11, scrollWheelZoom: false}).setView([46.852, -121.760], 10);

	L.control.layers(mapLayers).addTo(map);
	satLayer.addTo(map);

	/* locations per http://www.whitepassbyway.com/roadtrips/mtrainierloop.html
	
	var marker = L.marker([46.852, -121.760]).addTo(map);
marker.bindPopup("<b>Welcome to Mt. Rainier!</b><br>This peak is 4,392 feet high.");
	
	var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
    denver    = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
    aurora    = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
    golden    = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.'); */
	
	var mtRainer = L.marker([46.852, -121.760]).addTo(map);
	mtRainer.bindPopup("<b>Welcome to Mt. Rainier!</b><br>This peak is 4,392 feet high.").openPopup();
	
	var chrisFalls = L.marker([46.781, -121.779]).addTo(map);
	chrisFalls.bindPopup("<b>Christine Falls</b><br>The final waterfall along Van Trump Creek, falling 69 feet in drops of 32 and 37 feet respectively");
	
	var wonderLandTrail = L.marker([46.768, -121.730]).addTo(map);
	wonderLandTrail.bindPopup("<b>Wonderland Trail</b><br>Trail along this scenic view of the amazing Reflection Lake while visiting Mt. Rainier");

});


/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.

   (Note that you do not need to manually call Bootstrap functions in
   your Javascript because Bootstrap will automatically recognize your
   HTML structures and invoke the proper JS code accordingly. Be sure
   to reference the Bootstrap documentation.)
*/

// TODO: Inside of your on ready handler, invoke the Leaflet.js library
// to draw a map in your `#map-container` div.

// TODO: Add 2 layers to your map you have visuals. Use the Open Street Maps
// tiles served through the MapQuest CDN. Consult this example to set up
// the map tiles layers:


// TODO: Customize that Map to show markers with popups at no fewer than 3
// interesting locations. (You'll need to figure out the latitude/longitude for
// these locations using a mapping tool such as Google Maps.)

