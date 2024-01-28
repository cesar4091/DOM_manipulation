
const measures = {
    "in": 0.0254,
    "ft": 0.3048,
    "yd": 0.9144,
    "mi": 1609.34,

    "mm": 0.001,
    "cm": 0.01,
    "dc": 0.1,
    "m": 1,
    "dam": 10,
    "hm": 100,
    "km": 1000
}

//Get element with the initial data/input.
const quantityInput = document.getElementById("m-quantity");
const initialMeasure = document.getElementById("initial-measure");
const toMeasure = document.getElementById("to-measure");
//configuration elements
const configContainer = document.getElementById("config");
const checkInputs = configContainer.querySelectorAll(".checks");
const initialSelectOptions = document.querySelectorAll("#initial-measure  option");
const toSelectOptions = document.querySelectorAll("#to-measure  option");

//Get the element where I will output the response.
const response = document.getElementById("response");


//Add the event listeners when the options are changed on the imperial table.
quantityInput.addEventListener('change', function (){ convertToMeters(quantityInput.value, initialMeasure.value) });
initialMeasure.addEventListener('change', function () { convertToMeters(quantityInput.value, initialMeasure.value) });
toMeasure.addEventListener('change', function () { convertToMeters(quantityInput.value, initialMeasure.value) });
//Add the event listeners when the config is changed
checkInputs[0].addEventListener('change', function () {
    showMesures("imperial", checkInputs[0].checked)
});

checkInputs[1].addEventListener('change', function () {
    showMesures("uncommon", checkInputs[1].checked)
});


function showMesures(kind, boolean) {
    console.log(kind + " esta seleccionado? " + boolean);

    initialSelectOptions.forEach(function (item, index) {
        console.log(item.className, index)
        if (item.className == kind && !boolean) {
            item.style.display = "none";//don't show the option
        } else if (item.className == kind && boolean) {
            item.style.display = "";//this is the default display option in css
        }
    });
    //second select
    toSelectOptions.forEach(function (item, index) {
        if (item.className == kind && !boolean) {
            item.style.display = "none";
        } else if (item.className == kind && boolean) {
            item.style.display = "";
        }
    });
}

function convertToMeters(quantity, from) {
    var value = quantity * measures[from];
    metersToImp(value, toMeasure.value);
    return value;
}

function metersToImp(meters, to) {
    var value = meters / measures[to];
    //After I get the exact value to avoid having the UI overflow I remove decimal places.
    value = value.toString().length > 8 ? value.toFixed(8) : value;

    changeText(response, value + " " + toMeasure.value);
    return value;
}

function changeText(outputElement, newText) {
    if (outputElement) {
        outputElement.innerHTML = newText;
    }
}

//This Just because I want the default values on the metric table like this:
quantityInput.value = 5;
initialMeasure.value = "m";
toMeasure.value = "cm";
convertToMeters(quantityInput.value, initialMeasure.value);
