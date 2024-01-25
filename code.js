
const unitIn = document.getElementById("quantity").children[1];
const response = document.getElementById("response");
unitIn.addEventListener('change', changeText);


function changeText() {
    response.innerHTML = unitIn.value * 100 + " centimeters";
    console.log(unitIn.value);
}

