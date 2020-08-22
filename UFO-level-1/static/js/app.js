// from data.js
let tableData = data;

// YOUR CODE HERE!

let table = d3.select('tbody');

function runEnter() {
    data.forEach((tableData) => {
        var row = table.append('tr');
        Object.entries(tableData).forEach(([key, value]) => {
            var cell = row.append('td');
            cell.text(value);
        });
    })
};

var button = d3.select("#filter-btn");

button.on("click", function() {
    table.html("");
    let filteredData = tableData;

    date = d3.selectAll("#datetime");
    city = d3.selectAll("#city");
    state = d3.selectAll("#state");
    country = d3.selectAll("#country");
    shape = d3.selectAll("#shape");
    filters = {'datetime':date, 'city':city, 'state':state, 'country':country, 'shape':shape};


    Object.entries(filters).forEach(([key, value]) => {
        if (value === "") {
            delete filters[key];
        }
    });

    Object.entries(filters).forEach(([key, value]) => {
        filteredData = filteredData.filter(row => row[key] === value );
        
        filteredData.forEach((filteredData) => {
            var row = tbody.append("tr");
            Object.entries(filteredData).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            })
        })

    });

});

runEnter();
