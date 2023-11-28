//Enabling ToolTip
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

//BMR
let weight = document.getElementById("weight");
let height = document.getElementById("height");
let age = document.getElementById("age");
let gender = document.getElementById("gender");
let result = document.getElementById("result");
let calcBtn = document.getElementById("calculate");
let activity = document.getElementById("activity");
let table = document.getElementById("table");

const toastLiveExample = document.getElementById("liveToast");
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
// formula:
// Sedentary = BMR x 1.2
// Lightly = BMR x 1.375
// Moderately = BMR x 1.55
// Heavy= BMR x 1.725
// Athlete  = BMR x 1.9

const maleBmr = () => {
  const bmr = 10 * weight.value + 6.25 * height.value - 5 * age.value + 5;
  return bmr;
};
const femaleBmr = () => {
  const bmr = 10 * weight.value + 6.25 * height.value - 5 * age.value - 161;
  return bmr;
};

const displayAll = (theBmr) => {
  const bmr = Math.round(theBmr);
  const sed = Math.round(theBmr * 1.2);
  const lig = Math.round(theBmr * 1.375);
  const mode = Math.round(theBmr * 1.55);
  const heav = Math.round(theBmr * 1.725);
  const ath = Math.round(theBmr * 1.9);
  return [bmr, sed, lig, mode, heav, ath];
};
const selectedActivity = (resultedBmr) => {
  if (activity.value == "1") {
    const calorie = Math.round(resultedBmr * 1.2);
    return calorie;
  } else if (activity.value == "2") {
    const calorie = Math.round(resultedBmr * 1.375);
    return calorie;
  } else if (activity.value == "3") {
    const calorie = Math.round(resultedBmr * 1.55);
    return calorie;
  } else if (activity.value == "4") {
    const calorie = Math.round(resultedBmr * 1.725);
    return calorie;
  } else if (activity.value == "5") {
    const calorie = Math.round(resultedBmr * 1.9);
    return calorie;
  } else {
  }
};

const calculate = () => {
  if (
    gender.value == "male" &&
    weight.value != "" &&
    height.value != "" &&
    age.value != "" &&
    activity.value != "Activity"
  ) {
    result.textContent = `${
      activity.options[activity.selectedIndex].text
    }: ${selectedActivity(maleBmr())} calories per day`;

    table.innerHTML = `<tr>
    <td class="table-group-divider">Basal Metabolic Rate</td>
    <td class="table-group-divider">${
      displayAll(maleBmr())[0]
    } calories per day</td>
  </tr>
  <tr>
    <td>Sedentary (Office Job)</td>
    <td>${displayAll(maleBmr())[1]} calories per day</td>
  </tr>
  <tr>
    <td>Light Exercise</td>
    <td>${displayAll(maleBmr())[2]} calories per day</td>
  </tr>
  <tr>
    <td>Moderate Exercise</td>
    <td>${displayAll(maleBmr())[3]} calories per day</td>
  </tr>
  <tr>
    <td>Heavy Exercise</td>
    <td>${displayAll(maleBmr())[4]} calories per day</td>
  </tr>
  <tr>
    <td>Athlete</td>
    <td>${displayAll(maleBmr())[5]} calories per day</td>
  </tr>`;
  } else if (
    gender.value == "female" &&
    weight.value != "" &&
    height.value != "" &&
    age.value != "" &&
    activity.value != "Activity"
  ) {
    result.textContent = `${
      activity.options[activity.selectedIndex].text
    }: ${selectedActivity(femaleBmr())} calories per day`;
    //
    table.innerHTML = `<tr>
    <td class="table-group-divider">Basal Metabolic Rate</td>
    <td class="table-group-divider">${
      displayAll(femaleBmr())[0]
    } calories per day</td>
  </tr>
  <tr>
    <td>Sedentary (Office Job)</td>
    <td>${displayAll(femaleBmr())[1]} calories per day</td>
  </tr>
  <tr>
    <td>Light Exercise</td>
    <td>${displayAll(femaleBmr())[2]} calories per day</td>
  </tr>
  <tr>
    <td>Moderate Exercise</td>
    <td>${displayAll(femaleBmr())[3]} calories per day</td>
  </tr>
  <tr>
    <td>Heavy Exercise</td>
    <td>${displayAll(femaleBmr())[4]} calories per day</td>
  </tr>
  <tr>
    <td>Athlete</td>
    <td>${displayAll(femaleBmr())[5]} calories per day</td>
  </tr>`;
  } else {
    toastBootstrap.show();
  }
};

calcBtn.addEventListener("click", calculate);

//weight converter
let kgRef = document.getElementById("kg");
let lbRef = document.getElementById("lb");
let ozRef = document.getElementById("oz");
function record() {
  var recognition = new webkitSpeechRecognition();

  recognition.lang = "en-US";

  recognition.onresult = function (event) {
    console.log(event);
    kgRef.value = parseInt(event.results[0][0].transcript);
  };
  recognition.start();
}
let convertFromKg = () => {
  let kg = kgRef.value;
  //toFixed(2) limits the decimals to 2 digits.
  lbRef.value = (kg * 2.205).toFixed(2);
  ozRef.value = (kg * 35.274).toFixed(2);
};

let convertFromLb = () => {
  let lb = lbRef.value;
  kgRef.value = (lb / 2.205).toFixed(2);
  ozRef.value = (lb * 16).toFixed(2);
};

let convertFromOz = () => {
  let oz = ozRef.value;
  kgRef.value = (oz / 35.274).toFixed(2);
  lbRef.value = (oz / 16).toFixed(2);
};

kgRef.addEventListener("input", convertFromKg);
lbRef.addEventListener("input", convertFromLb);
ozRef.addEventListener("input", convertFromOz);
window.addEventListener("load", convertFromKg);

//height converter
let incRef = document.getElementById("inc");
let cmRef = document.getElementById("cm");
let ftRef = document.getElementById("ft");

let convertFromInc = () => {
  let inc = incRef.value;
  //toFixed(2) limits the decimals to 2 digits.
  cmRef.value = (inc * 2.54).toFixed(2);
  ftRef.value = (inc / 12).toFixed(2);
};

let convertFromcm = () => {
  let cm = cmRef.value;
  incRef.value = (cm * 0.3937).toFixed(2);
  ftRef.value = (cm * 0.0328).toFixed(2);
};

let convertFromft = () => {
  let ft = ftRef.value;
  incRef.value = (ft * 12).toFixed(2);
  cmRef.value = (ft * 30.48).toFixed(2);
};

incRef.addEventListener("input", convertFromInc);
cmRef.addEventListener("input", convertFromcm);
ftRef.addEventListener("input", convertFromft);
window.addEventListener("load", convertFromcm);

//converterBTN
let converter = document.getElementById("converter");
let whconverter = document.getElementsByClassName("container-w");

converter.addEventListener("click", () => {
  for (let i = 0; i < whconverter.length; i++) {
    if (whconverter[i].classList.contains("hidden")) {
      whconverter[i].classList.remove("hidden");
    } else {
      whconverter[i].classList.add("hidden");
    }
  }
});

//COLOR THEME
let light = document.getElementById("light");
let dark = document.getElementById("dark");
let htmlTheme = document.getElementsByTagName("html");

light.addEventListener("click", () => {
  htmlTheme[0].removeAttribute("data-bs-theme");
});
dark.addEventListener("click", () => {
  htmlTheme[0].setAttribute("data-bs-theme", "dark");
});

//METS
new DataTable("#tablepress-5");

let metValue = document.getElementById("metValue");
let tableMet = document.getElementById("tablepress-5");
let dataMet = document.getElementById("tablepress-5_wrapper");

tableMet.classList.add("hidden");
dataMet.classList.add("hidden");

metValue.addEventListener("click", () => {
  if (
    tableMet.classList.contains("hidden") &&
    dataMet.classList.contains("hidden")
  ) {
    tableMet.classList.remove("hidden");
    dataMet.classList.remove("hidden");
  } else {
    tableMet.classList.add("hidden");
    dataMet.classList.add("hidden");
  }
});
