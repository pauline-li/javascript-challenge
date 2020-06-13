var tdata = data;

// console.log(tdata);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
// console.log(tdata);


// tdata.forEach((ufoReport) => {
//   var row = tbody.append("tr");
//   Object.entries(ufoReport).forEach(([key, value]) => {
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });


 
var clickedButton = d3.select("#filter-btn");


clickedButton.on("click", function() {
  
 tbody.html("");
  
  
 //prevent from reloading
 // https://stackoverflow.com/questions/30170944/use-both-d3-event-preventdefault-and-d3-event-which
  // d3.event.preventDefault();
  // d3.event.stopPropagation();



  // grab the value of the input field
  //https://stackoverflow.com/questions/31369347/how-to-get-dynamic-value-of-input-element-with-d3
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

   
