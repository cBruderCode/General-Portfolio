window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {

  const cTemp = document.getElementById("cInput");
  const fTemp = document.getElementById("fInput");
  cTemp.addEventListener("input", clearF);
  fTemp.addEventListener("input", clearC);


  let converter = document.getElementById('convertButton')
  converter.addEventListener('click', decider);

}

function clearF() {
  const cTemp = document.getElementById("cInput");
  const fTemp = document.getElementById("fInput");
  fTemp.value = "";
}

function clearC() {
  const cTemp = document.getElementById("cInput");
  const fTemp = document.getElementById("fInput");
  cTemp.value = "";
}

function decider() {
  const cTemp = document.getElementById("cInput");
  const fTemp = document.getElementById("fInput");

  if (cTemp.value === ""){
    rawF = fTemp.value;
    if (isNaN(fTemp.value)) {
      document.getElementById("errorMessage").textContent = `${rawF} is not a number`;
      return;
    }
    else{
      document.getElementById("errorMessage").textContent = "";
    }
    fTemp.value = parseFloat(fTemp.value);
    let displayTemp = convertFtoC(fTemp.value);
    cTemp.value = displayTemp;
    imageChange(fTemp.value);
  }
  else {
    rawC = cTemp.value;
    if (isNaN(cTemp.value)) {
      document.getElementById("errorMessage").textContent = `${rawC} is not a number`;
      return;
    }
    else{
      document.getElementById("errorMessage").textContent = "";
    }
    cTemp.value = parseFloat(cTemp.value);
    let displayTemp = convertCtoF(cTemp.value);
    fTemp.value = displayTemp;
    imageChange(fTemp.value);
  }

}

function imageChange(value) {
  if (value > 50) {
    document.getElementById("weatherImage").src = "warm.png";
  }
  if (value >= 32 && value <= 50) {
    document.getElementById("weatherImage").src = "cool.png";
  }
  if (value < 32) {
    document.getElementById("weatherImage").src = "cold.png";
  }
}

function convertCtoF(degreesCelsius) {
   return degreesCelsius * (9/5) + 32;
}

function convertFtoC(degreesFahrenheit) {
   return (degreesFahrenheit - 32) * (5/9);
}
