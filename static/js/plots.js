function mapping(data) {
  var container = L.DomUtil.get('map'); 
  if(container != null){ 
    container._leaflet_id = null; 
  }

  // Creating the map object
  let myMap = L.map("map", {
    center: [52.489471, -1.898575],
    zoom: 11
  });

  //myMap.removeLayer(markers);

  // Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  // Create a new marker cluster group.
  let markers = L.markerClusterGroup();

  // Loop through the data.
  let bar_labels = []
  let bar_data = []
  for (let i = 0; i < data.length; i++) {
    // Add a new marker to the cluster group, and bind a popup.
    markers.addLayer(L.marker([data[i].location.latitude, data[i].location.longitude])
      .bindPopup(data[i].category));

    //console.log(data[i].category)
    bar_labels.push(data[i].category)
  };
  myMap.addLayer(markers);
  console.log(bar_labels)

  let uniquebarlabels = [...new Set(bar_labels)];
  console.log(uniquebarlabels)

  function elementCount(arr, element){
    return arr.filter((currentElement) => currentElement == element).length;
  };

  for (let i = 0; i < uniquebarlabels.length; i++) {
    bar_data.push(elementCount(bar_labels, uniquebarlabels[i]))
  }; 

  console.log(bar_data);

  var bar_graph_data = [
  {
    x: uniquebarlabels,
    y: bar_data,
    type: 'bar'
  }];

  Plotly.newPlot('bar', bar_graph_data);
}

// Add our marker cluster layer to the map.
//myMap.addLayer(markers);
//change charts function
function optionChanged(value) {
  if (value == 'mar_2023') {newValue = mar_2023;
  } else if (value == 'feb_2023') {newValue = feb_2023;
  } else if (value == 'jan_2023') {newValue = jan_2023;
  } else if (value == 'dec_2022') {newValue = dec_2022;
  } else if (value == 'nov_2022') {newValue = nov_2022;
  } else {newValue = oct_2022;
  }

  mapping(newValue);
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
  //let march_Data = mar_2023;
  //let feb_Data = feb_2023;

  mapping(mar_2023);
}
//initialize function
Init();