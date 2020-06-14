// data from data.js
var tdata = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

var clickedButton = d3.select("#filter-btn");

clickedButton.on("click", function () {

  // Clear table body
  tbody.html("");

  // Get textbox value
  var textboxValue = d3.select("#datetime").node().value;
  var inputDate = textboxValue;

  console.log(inputDate)

  // Apply filter
  var outputData = tdata.filter(x => x.datetime === inputDate)
  console.log(outputData);

  // Append data to table
  outputData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

});


