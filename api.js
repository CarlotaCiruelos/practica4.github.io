
// include api for currency change
const api = "https://api.exchangerate-api.com/v4/latest/EUR";

// for selecting different controls
var search = document.querySelector(".searchBox");
var convert = document.querySelector(".convert");
var fromCurrecy = document.querySelector(".from");
var toCurrecy = document.querySelector(".to");
var finalValue = document.querySelector(".finalValue");
var finalAmount = document.getElementById("finalAmount");
var resultFrom;
var resultTo;
var searchValue;
var copiaC;

// Event when currency is changed
fromCurrecy.addEventListener('change', (event) => {
    resultFrom = `${event.target.value}`;
});

// Event when currency is changed
toCurrecy.addEventListener('change', (event) => {
    resultTo = `${event.target.value}`;
});

search.addEventListener('input', updateValue);

// function for updating value
function updateValue(e) {
    searchValue = e.target.value;
}

// when user clicks, it calls function getresults
convert.addEventListener("click", getResults);

// function getresults
function getResults() {
    fetch(`${api}`)
        .then(currency => {
            return currency.json();
        }).then(displayResults);
}

// display results after convertion
function displayResults(currency) {

    //copiaC=currency;
    let fromRate = currency.rates[resultFrom];
    let toRate = currency.rates[resultTo];
    finalValue.innerHTML =
        ((toRate / fromRate) * searchValue).toFixed(2);
    finalAmount.style.display = "block";
    document.getElementById("grafica").style.display = "block";

    var yArray = Object.keys(currency.rates);
    var xArray = Object.values(currency.rates);

    var data = [{
        x:xArray,
        y:yArray,
        type:"bar",
        orientation:"h",
    }];

    var layout = {title:"Valor EUR en otras Divisas"};

    Plotly.newPlot("myPlot", data, layout);

}

// when user click on reset button
function clearVal() {
    window.location.reload();
    document.getElementsByClassName("finalValue").innerHTML = "";
}

//hacer un plot de los datos
function dibujarPlot(){
    document.getElementById("myPlot").style.display = "block";

}

