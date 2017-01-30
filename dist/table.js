//console.log(results);

/* Print results JSON recursive test */
// function appendResults(data) {
//     console.log(Object.keys(data)[0]);
//     for(var i=0; i<data.length; data++) {
//         console.log();
//         var parent = document.getElementById('results');
//         var child = document.createElement('p')
//         parent.append(data[i], child);
//     }
// }

/* Print results JSON */
function printJsonResults(data) {
    if(Object.keys(data).length>0){
        for(var i=0; i<Object.keys(data).length; i++) {
            console.log(Object.keys(data)[i]);
            console.log(data.model);
            console.log(data.model.modelName);
            for(var j=0; j<data.model.optim.length; j++) {
                console.log(data.model.optim[j]);
                for(var k=0; k<data.model.optim[j].variables.length; k++) {
                    console.log(data.model.optim[j].variables[k].name);
                    console.log(data.model.optim[j].variables[k].wtPerc);
                }
            }
        }
    }
}

/* Print results JSON */
function printJsonResults(data) {
    var b = document.body;
    var d = document.createElement('div');
    var p = document.createElement('p');
    b.append(d);
    d.append(p);
    p.append('test document');

    var resultValues = [];
    var resultNames = [];

    if(Object.keys(data).length>0){
        for(var i=0; i<Object.keys(data).length; i++) {
            console.log(Object.keys(data)[i]);
            console.log(data.model);
            console.log(data.model.modelName);
            for(var j=0; j<data.model.optim.length; j++) {
                console.log(data.model.optim[j]);
                for(var k=0; k<data.model.optim[j].variables.length; k++) {
                    var name = data.model.optim[j].variables[k].name;
                    var wt = data.model.optim[j].variables[k].wtPerc;
                    //printNewItem(name, wt);
                    printTableRow(name, wt);

                    //console.log(name, wt);
                    if(data.model.optim[j].optimName == 'amorphous' && data.model.optim[j].variables[k].name.slice(0,7) == 'Phase_X') {
                        console.log(name, wt);
                        resultNames.push(name);
                        resultValues.push(wt);
                    }
                }
            }
        }
    }

    printBarGraph(resultNames, resultValues);
}

function printNewItem(name, value) {
    var res = document.getElementById('results');
    if(res === undefined){
        res = document.createElement('div');
        res.id = 'results';
    }
    var b = document.getElementById('results');
    var p = document.createElement('p');
    b.append(p);
    p.append(name + ': ' + value);
}

function printTableRow(name, value) {
    var res = document.getElementById('resultTbl');
    if(res === null){
        res = document.createElement('table');
        res.id = 'resultTbl';

        document.body.append(res);

        var row = document.createElement('tr');
        var rowNameHead = document.createElement('th');   
        var rowValueHead = document.createElement('th');
        res.append(row);
        row.append(rowNameHead);
        rowNameHead.append('Variable');
        row.append(rowValueHead);
        rowValueHead.append('Wt. Percent');
    }

    var row = document.createElement('tr');
    var rowName = document.createElement('td');   
    var rowValue = document.createElement('td');
    res.append(row);
    row.append(rowName);
    rowName.append(name);
    row.append(rowValue);
    rowValue.append(value);
}

function printBarGraph (names, data) {
    //var data = [4, 8, 15, 16, 23, 42];

var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 420]);

d3.select(".chart")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width", function(d) { return x(d) + "px"; })
    .text(function(d) { return d; });
}

printJsonResults(results);
//printBarGraph();