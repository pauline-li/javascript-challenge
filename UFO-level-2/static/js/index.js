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
  var textboxcountry = d3.select("#country").node().value;
  var textboxshape = d3.select("#shape").node().value;



  var inputDate = textboxDate; 
  var inputCity = textboxCity; 
  // var inputState = textboxState; 
  // var inputCountry = textboxCountry; 
  // var inputShape = textboxShape; 

  
  if (inputDate.length > 0)
  //  var outputData =  tdata.filter(x => (x.datetime === inputDate && x.city === inputCity))
     var outputData =  tdata.filter(x => (x.datetime === inputDate))
  
  if (inputCity.length > 0)
  //  var outputData =  tdata.filter(x => (x.datetime === inputDate && x.city === inputCity))
     var outputData =  tdata.filter(x => (x.city === inputCity))   
     

  outputData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });



});

   
