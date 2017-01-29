//console.log(results);

/* Print results JSON */
function appendResults(data) {
    console.log(Object.keys(data)[0]);
    for(var i=0; i<data.length; data++) {
        console.log();
        var parent = document.getElementById('results');
        var child = document.createElement('p')
        parent.append(data[i], child);
    }
}

/* Print results JSON */
function printJsonKeys(data) {
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
    else {
        return;
    }

}

printJsonKeys(results);