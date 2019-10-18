// PART 1: Append a table to the web page and add new rows of data for each UFO sighting.
// Define variables. Use d3 to select and change/modify the table body (so that you populate data underneath column headers)

let tbody = d3.select("tbody");
let columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"];
let datetimeinput = d3.select("#datetime");
let button = d3.select("#filter-btn");
let filterByDate = "";

console.log(data)

// Define function called "populate" to populate data into table.
// Use forEach to call a function on each element. 
let populate = (getData) => {
    getData.forEach(ufoSightings => {
        let row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}

// Populate table with the input "data" (the data file)
populate(data)

// PART 2: Use a date form in your HTML document and write JavaScript code that will listen for events 
// and search through the date/time column to find rows that match user input.
button.on("click", () => {
    let dateInput = d3.select("#datetime").property("value").trim();
    filterByDate = data.filter(data => data.datetime === dateInput);
    tbody.html("");
    let response = {
        filterByDate
    }
    
    if (response.filterByDate.length !== 0) {
        populate(filterByDate);
    }
    else {
        tbody.append("tr").append("td").text("No results found.");
    }
}
)