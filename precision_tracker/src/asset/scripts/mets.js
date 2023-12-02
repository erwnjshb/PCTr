const mets = document.getElementById("mets-value");
const metsWeight = document.getElementById("mets-weight");
const duration = document.getElementById("duration");
const metsResult = document.getElementById("mets-result");

function calculateMets(mets, weight, duration) {
  const kcalPerMin = mets * 3.5 * (weight / 200) * duration;
  return kcalPerMin.toFixed(2);
}

const metsToResult = () => {
  metsResult.innerHTML = `<i class="fa-solid fa-fire" style="color: #cb6420;"></i> ${calculateMets(
    mets.value,
    metsWeight.value,
    duration.value
  )} kcal`;
};
const durationToResult = () => {
  metsResult.innerHTML = `<i class="fa-solid fa-fire" style="color: #cb6420;"></i> ${calculateMets(
    mets.value,
    metsWeight.value,
    duration.value
  )} kcal`;
};
const weightToResult = () => {
  metsResult.innerHTML = `<i class="fa-solid fa-fire" style="color: #cb6420;"></i> ${calculateMets(
    mets.value,
    metsWeight.value,
    duration.value
  )} kcal`;
};

mets.addEventListener("input", metsToResult);
metsWeight.addEventListener("input", weightToResult);
duration.addEventListener("input", durationToResult);
window.addEventListener("load", metsToResult);

//DISTANCE CONVERTER

let kmRef = document.getElementById("km");
let mRef = document.getElementById("meter");
let mlRef = document.getElementById("miles");

let convertFromKm = () => {
  let km = kmRef.value;
  //toFixed(2) limits the decimals to 2 digits.
  mRef.value = (km * 1000).toFixed(2);
  mlRef.value = (km * 0.621371).toFixed(2);
};

let convertFromM = () => {
  let meter = mRef.value;
  kmRef.value = (meter / 1000).toFixed(2);
  mlRef.value = (meter / 1609.344).toFixed(2);
};

let convertFromMl = () => {
  let miles = mlRef.value;
  kmRef.value = (miles * 1.60934).toFixed(2);
  mRef.value = (miles * 1609.344).toFixed(2);
};

kmRef.addEventListener("input", convertFromKm);
mRef.addEventListener("input", convertFromM);
mlRef.addEventListener("input", convertFromMl);

//DISTANCE CONVERTER

let hrRef = document.getElementById("hours");
let minRef = document.getElementById("minutes");
let secRef = document.getElementById("seconds");

let convertFromHr = () => {
  let hr = hrRef.value;
  //toFixed(2) limits the decimals to 2 digits.
  minRef.value = (hr * 60).toFixed(0);
  secRef.value = (hr * 3600).toFixed(0);
};

let convertFromMin = () => {
  let minutes = minRef.value;
  hrRef.value = (minutes / 60).toFixed(0);
  secRef.value = (minutes * 60).toFixed(0);
};

let convertFromSec = () => {
  let seconds = secRef.value;
  hrRef.value = (seconds / 3600).toFixed(0);
  minRef.value = (seconds / 60).toFixed(0);
};

hrRef.addEventListener("input", convertFromHr);
minRef.addEventListener("input", convertFromMin);
secRef.addEventListener("input", convertFromSec);
