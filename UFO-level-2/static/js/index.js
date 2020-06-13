var tdata = data;

// console.log(tdata);

// Get a reference to the table body
var tbody = d3.select("tbody");

 
var clickedButton = d3.select("#filter-btn");


clickedButton.on("click", function() {
  
 tbody.html("");
  

  var textboxDate = d3.select("#datetime").node().value;
  var textboxCity = d3.select("#city").node().value;
  var textboxState = d3.select("#state").node().value;
  var textboxCountry = d3.select("#country").node().value;
  var textboxShape = d3.select("#shape").node().value;



  var inputDate = textboxDate; 
  var inputCity = textboxCity; 
  var inputState = textboxState; 
  var inputCountry = textboxCountry; 
  // var inputShape = textboxShape; 

  


  var outputData = tdata
  
  if (inputState.length > 0 && inputDate.length > 0 && inputCity.length > 0) 
    outputData =  tdata.filter(x => (x.datetime === inputDate)).filter(x => (x.state === inputState)).filter(x => (x.city === inputCity))         
  else if (inputState.length > 0 && inputDate.length > 0) 
    outputData =  tdata.filter(x => (x.datetime === inputDate)).filter(x => (x.state === inputState)) 
    //outputData =  tdata.filter(x => (x.datetime === inputDate && x.state === inputState)) 
  else if (inputDate.length > 0) 
    outputData =  tdata.filter(x => (x.datetime === inputDate)) 
  else
    outputData =  tdata



  outputData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });



});
