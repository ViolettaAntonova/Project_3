//all plots depending on drop down menu
function mapping(data) {
  //checking if map is already initialized
  var container = L.DomUtil.get('map'); 
  if(container != null){ 
    container._leaflet_id = null; 
  }

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
  let markers = L.markerClusterGroup();

  // Loop through the data.
  let bar_labels = []
  let bar_data = []
  let outcome_data =[]
  for (let i = 0; i < data.length; i++) {
    // Add a new marker to the cluster group, and bind a popup.
    markers.addLayer(L.marker([data[i].location.latitude, data[i].location.longitude])
      .bindPopup(data[i].category));

    //console.log(data[i].category)
    bar_labels.push(data[i].category)
    outcome_data.push(data[i].outcome_status)

  };
  myMap.addLayer(markers);

  let uniquebarlabels = [...new Set(bar_labels)];
  console.log(uniquebarlabels)

  function elementCount(arr, element){
    return arr.filter((currentElement) => currentElement == element).length;
  };

  for (let i = 0; i < uniquebarlabels.length; i++) {
    bar_data.push(elementCount(bar_labels, uniquebarlabels[i]))
  }; 

  console.log(bar_data);

  // Sort into descending order
  //1) combine the arrays:
  var list = [];
  for (var j = 0; j < bar_data.length; j++) 
    list.push({'data': bar_data[j], 'category': uniquebarlabels[j]});

  //2) sort:
  list.sort(function(a, b) {
    return ((a.data > b.data) ? -1 : ((a.data == b.data) ? 0 : 1));
    //Sort could be modified to, for example, sort on the age 
    // if the name is the same. See Bonus section below
  });

  //3) separate them back out:
  for (var k = 0; k < list.length; k++) {
    bar_data[k] = list[k].data;
    uniquebarlabels[k] = list[k].category;
  }
  //bar chart
  var bar_graph_data = [
  {
    x: uniquebarlabels,
    y: bar_data,
    type: 'bar',
  }];

  var layout = {
    title: {
      display: true,
      text: "Crimes per month",
    }
  }

  Plotly.newPlot('bar', bar_graph_data, layout);

 // working to pull outcome status categories for the pie chart
  var res_outcomes = outcome_data.filter(elements => {
  return elements !== null;
 });
 
 let outcome_categories = []
 
 for (let i = 0; i < res_outcomes.length; i++) {
     outcome_categories.push(res_outcomes[i].category)
   };
 
   let uniqueoutcomecat = [...new Set(outcome_categories)];
   console.log(uniqueoutcomecat)
 
 let outcome_cat_data = []
 
   for (let i = 0; i < uniqueoutcomecat.length; i++) {
     outcome_cat_data.push(elementCount(outcome_categories, uniqueoutcomecat[i]))
   }; 
 
 //1) combine the arrays:
 var list = [];
 for (var j = 0; j < outcome_cat_data.length; j++) 
     list.push({'pie_data': outcome_cat_data[j], 'pie_category': uniqueoutcomecat[j]});
 
 //2) sort:
 list.sort(function(a, b) {
     return ((a.pie_data > b.pie_data) ? -1 : ((a.pie_data == b.pie_data) ? 0 : 1));
     
 });
 
 //3) separate them back out:
 for (var k = 0; k < list.length; k++) {
     outcome_cat_data[k] = list[k].pie_data;
     uniqueoutcomecat[k] = list[k].pie_category;
 }
 
 //pie chart
 var pie_data = [{
   values: outcome_cat_data,
   labels: uniqueoutcomecat,
   type: 'pie'
 }];
 
 var layout = {
  title: {
    display: true,
    text: "Crimes outcomes per month",
  }
}
 Plotly.newPlot('pie', pie_data, layout)
}

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
  //counthing lenght of jason file
  mapping(mar_2023);
  function lenarr(y) {
    let cou = 0;
    for (var i in y) {cou++;}
    return(cou);
  }
  //array for line chart
  var data = [
    ["jan", lenarr(jan_2023), lenarr(jan_2022)],
    ["feb", lenarr(feb_2023), lenarr(feb_2022)],
    ["mar", lenarr(mar_2023), lenarr(mar_2022)]
  ];
  // create the line chart
  var dataSet = anychart.data.set(data);
  var firstSeriesData = dataSet.mapAs({x: 0, value: 1});
  var secondSeriesData = dataSet.mapAs({x: 0, value: 2});
  var chart = anychart.line()
  var firstSeries = chart.line(firstSeriesData);
  firstSeries.name("2023");
  var secondSeries = chart.line(secondSeriesData);
  secondSeries.name("2022");
  // set the chart title
  chart.title("Crime level");
  chart.legend().enabled(true);
  firstSeries.hovered().markers().type("circle").size(4);
  chart.yAxis().title("Crime count per month");
  chart.xAxis().title("Month");

  // display the chart in the container
  chart.container('container');
  chart.draw();
}
//initialize function
Init();