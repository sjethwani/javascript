// from data.js
var tableData = data;

// Select the submit button
var submit = d3.select("#filter-btn");
var tbody = d3.select("tbody");

submit.on("click", function() {

        // Prevent the page from refreshing
        d3.event.preventDefault();
        //d3.event.preventDefault();
        var tbody = d3.select("tbody");
        
        // Select the input element and get the raw HTML node
        var inputElement = d3.select("#datetime");

        // Get the value property of the input element
        var inputValue  = inputElement.property("value");

        console.log(inputValue);
        
        var UFOTable = document.getElementById('ufotable');
        var UFOTbody = UFOTable.childNodes[3];

        

        for (var i = UFOTbody.childNodes.length - 1; i >= 0; i--) {
            var child = UFOTbody.childNodes[i];
            UFOTbody.removeChild(child);
            //
        }

        data.forEach((ufo) => {
            if (inputValue == "All") {
                var row = tbody.append("tr");
                Object.entries(ufo).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
                return;
                });
            }
            else if (ufo.datetime == inputValue) {
                var row = tbody.append("tr");
                Object.entries(ufo).forEach(([key, value]) => {
                    var cell = row.append("td");
                    cell.text(value);
                });
            }
        });
        
    });



// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");

// Get the value property of the input element
var inputValue  = inputElement.property("value");
data.forEach((ufo) => {
    if (inputValue == "All") {
        var row = tbody.append("tr");
            Object.entries(ufo).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
            return;
            });
    }
});