
//Get element with the initial data/input.
const unitIn = document.getElementById("quantity").children[1];

//Here I get the SELECT elements.
const initialMeasure = document.getElementById("initial-measure");
const toMeasure = document.getElementById("to-measure");
//Get the element where I will output the response.
const response = document.getElementById("response");

//Add the event listeners when the options are changed.
unitIn.addEventListener('change', changeText);
initialMeasure.addEventListener('change', changeText);
toMeasure.addEventListener('change', changeText);

const measures = {
    metricSys: ["mm", "cm", "dc", "m", "dam", "hm", "km"]
    //FYI each item multiplied by 10 moves 1 position to the right.
}

function calculateResult(initialUnit, secondUnit) {
    var result = unitIn.value;
    //With this line I know how far they are in the table. A negative value means I gotta divide, a positive means multiply
    const diffInTable = measures.metricSys.indexOf(initialUnit) - measures.metricSys.indexOf(secondUnit);
    /*
     * This is how I was overcoding the process and it was simpler than that I just needed
     * one line of code.
    console.log(unitIn.value);
    console.log("Multiplos de 10: " + diffInTable + " equals " + Math.pow(10, diffInTable));

    if (diffInTable == 0) {
        result = unitIn.value;
    }else if (diffInTable > 0) {
        result = unitIn.value * Math.pow(10, diffInTable);
    }else{
        result = unitIn.value / Math.pow(10, Matf.abs(diffInTable));
    }
    */
    return unitIn.value * Math.pow(10, diffInTable);
}

function changeText() {
    /*
     * Uncomment this to debug
    console.log("Value put in: " + unitIn.value);
    console.log("Conversion: " + initialMeasure.value + " to " + toMeasure.value);
    console.log("result " + calculateResult(initialMeasure.value, toMeasure.value) + " " + toMeasure.value);
    */
    response.innerHTML = calculateResult(initialMeasure.value, toMeasure.value)
        + " " + toMeasure.value;
}
