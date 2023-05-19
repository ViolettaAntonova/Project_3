
function mapping(data) {
  // Creating the map object
  let myMap = L.map("map", {
    center: [52.489471, -1.898575],
    zoom: 11
  });

  // Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  // Create a new marker cluster group.
  //let markers = L.markerClusterGroup();

  let markers = L.markerClusterGroup();
  // Loop through the data.
  for (let i = 0; i < data.length; i++) {
    // Add a new marker to the cluster group, and bind a popup.
    markers.addLayer(L.marker([data[i].location.latitude, data[i].location.longitude])
      .bindPopup(data[i].category));
  };
  myMap.addLayer(markers);
}

  // Add our marker cluster layer to the map.
//myMap.addLayer(markers);
//change charts function
function optionChanged(value) {
  mapping(value);
}

function Init() {

  // dropdown
  let selector = d3.select('#selDataset');

  let sampleNames = [];
  sampleNames.push('mar_2023', 'feb_2023', 'jan_2023',  'dec_2022', 'nov_2022', 'oct_2022');

    // add values to drop down
    for (let i = 0; i < sampleNames.length; i++) {
        let sampleId = sampleNames[i];
        selector.append('option').text(sampleId);
    };

  //first value to charts
  let initialId = mar_2023;
  mapping(initialId);

}
//initialize function
Init();