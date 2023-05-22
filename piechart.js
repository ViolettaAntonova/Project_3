// Display the default plot
function init() {
    d3.json("https://data.police.uk/api/crimes-street/all-crime?poly=52.450,-1.894:52.5006,-1.86:52.479,-1.95&date=2023-03").then(function (data) {
        console.log(data);
      
    // Loop through the data.
  let pie_labels = []
  let pie_data = []
  for (let i = 0; i < data.length; i++) {
    // Add a new marker to the cluster group, and bind a popup.
    markers.addLayer(L.marker([data[i].outcome_status.category])
      .bindPopup(data[i].category));
    //console.log(data[i].category)
    pie_labels.push(data[i].category)
  };
  myMap.addLayer(markers);
  console.log(pie_labels)
  let uniquepielabels = [...new Set(pie_labels)];
  console.log(uniquepielabels)
  function elementCount(arr, element){
    return arr.filter((currentElement) => currentElement == element).length;
  };
  for (let i = 0; i < uniquepielabels.length; i++) {
    pie_data.push(elementCount(pie_labels, uniquepielabels[i]))
  };
  console.log(pie_data);
  var pie_chart_data = [
  {
    x: uniquepielabels,
    y: pie_data,
    type: 'pie'
  }];
  Plotly.newPlot('pie', pie_chart_data);
}







