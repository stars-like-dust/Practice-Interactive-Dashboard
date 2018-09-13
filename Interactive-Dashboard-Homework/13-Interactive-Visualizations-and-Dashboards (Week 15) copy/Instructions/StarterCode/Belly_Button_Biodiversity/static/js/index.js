function buildMetadata(sample) {

  // @TODO: Complete the following function that builds the metadata panel
  d3.json('/metadata/${sample}').then((data) => {
  

  // Use `d3.json` to fetch the metadata for a sample
    
    // Use d3 to select the panel with id of `#sample-metadata`
    var panel = d3.json('#sample-metadata')
    // Use `.html("") to clear any existing metadata
     
      panel.html("");
      // Use `Object.entries` to add each key and value pair to the panel
      object.entries(data).forEach(([key, value]) => {
        panel.append('h6').text(${key}:${value});
          // Append a cell to the row for each value
          // in the weather report object
        
        cell.text(value);
        });
       });
}

    
    
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.

    // BONUS: Build the Gauge Chart
    // buildGauge(data.WFREQ);


function buildCharts(sample) {

  // @TODO: Use `d3.json` to fetch the sample data for the plots
    
  
  d3.json('/samples/<sample>').then((data) => {

    sortedData = sample_values.sort
    sortedData = sortedData.slice(0,10)


  // @TODO: Build a Pie Chart
    // HINT: You will need to use slice() to grab the top 10 sample_values,
    // otu_ids, and labels (10 each).


    //Pie chart trace
    var trace1 = {
    labels: ['otu_ids'],
    values: ['sortedData'],
    type: 'pie'
    }

    Ploty.newPlot('pie', sortedData);


    //skeloten for scatter plot

    trace2 = go.Scatter(
        x=[1, 2, 3, 4],
        y=[10, 11, 12, 13],
        mode='markers',
        marker=dict(
            color=['rgb(93, 164, 214)', 'rgb(255, 144, 14)',
                   'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
            opacity=[1, 0.8, 0.6, 0.4],
            size=[40, 60, 80, 100],
        )
    )
    
    data = [trace0]
    py.iplot(data, filename='bubblechart-color')



    // @TODO: Build a Bubble Chart using the sample data

    // @TODO: Build a Pie Chart
    // HINT: You will need to use slice() to grab the top 10 sample_values,
          }  // otu_ids, and labels (10 each).
}

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
