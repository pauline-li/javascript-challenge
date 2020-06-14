var tdata = data;

// Get a reference to the table body
var tbody = d3.select("tbody");
 
var clickedButton = d3.select("#filter-btn");

clickedButton.on("click", function() {
  
tbody.html("");
  
 // var textboxValue = d3.select("#datetime").property("value");
var textboxValue = d3.select("#datetime").node().value;
var inputDate = textboxValue; 
console.log(inputDate)
var outputData =  tdata.filter(x => x.datetime === inputDate )
console.log(outputData);

outputData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});

});

   
