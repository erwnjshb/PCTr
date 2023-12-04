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
let idealWeight = document.getElementById("ideal-weight");
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

//weight converter
let kgRef = document.getElementById("kg");
let lbRef = document.getElementById("lb");
let ozRef = document.getElementById("oz");

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

//converterBTN
let converter = document.getElementById("converter");
let whconverter = document.getElementsByClassName("container-w");
let extraConveter = document.getElementById("x-converter");

converter.addEventListener("click", () => {
  for (let i = 0; i < whconverter.length; i++) {
    if (whconverter[i].classList.contains("hidden")) {
      whconverter[i].classList.remove("hidden");
    } else {
      whconverter[i].classList.add("hidden");
    }
  }
});
//IDEAL WEIGHT

// G. J. Hamwi Formula (1964)
function calculateHamwiWeight(height, isMale) {
  const baseWeight = isMale ? 48.0 : 45.5;
  const weightPerInch = isMale ? 2.7 : 2.2;
  return baseWeight + weightPerInch * Math.max(0, height - 60);
}

// B. J. Devine Formula (1974)
function calculateDevineWeight(height, isMale) {
  const baseWeight = isMale ? 50.0 : 45.5;
  const weightPerInch = 2.3;
  return baseWeight + weightPerInch * Math.max(0, height - 60);
}

// J. D. Robinson Formula (1983)
function calculateRobinsonWeight(height, isMale) {
  const baseWeight = isMale ? 52.0 : 49.0;
  const weightPerInch = isMale ? 1.9 : 1.7;
  return baseWeight + weightPerInch * Math.max(0, height - 60);
}

// D. R. Miller Formula (1983)
function calculateMillerWeight(height, isMale) {
  const baseWeight = isMale ? 56.2 : 53.1;
  const weightPerInch = isMale ? 1.41 : 1.36;
  return baseWeight + weightPerInch * Math.max(0, height - 60);
}

//BMI CALCULATE
let display_bmi = document.getElementById("bmi");
let table_bmi = document.getElementById("bmi-table");

function calculateBMI(weight, height) {
  // BMI formula: weight (kg) / (height (m) * height (m))
  const bmi = weight / ((height / 100) * (height / 100));

  let classification;
  if (bmi < 18.5) {
    classification = "Underweight";
  } else if (bmi <= 24.9) {
    classification = "Normal Weight";
  } else if (bmi <= 29.9) {
    classification = "Overweight";
  } else {
    classification = "Obese";
  }

  return {
    bmi: bmi.toFixed(2),
    classification: classification,
  };
}
const bmiResult = calculateBMI(weight.value, height.value);

//COLOR THEME
let light = document.getElementById("light");
let dark = document.getElementById("dark");
let htmlTheme = document.getElementsByTagName("html");
let logo = document.getElementById("logo");

light.addEventListener("click", () => {
  htmlTheme[0].removeAttribute("data-bs-theme");
  logo.src = "asset/images/LOGO PCT/light.png";
});
dark.addEventListener("click", () => {
  htmlTheme[0].setAttribute("data-bs-theme", "dark");
  logo.src = "asset/images/LOGO PCT/dark.png";
});

//METS
new DataTable("#tablepress-5");

let metValue = document.getElementById("metValue");
let tableMet = document.getElementById("tablepress-5");
let dataMet = document.getElementById("tablepress-5_wrapper");
let metsLabel = document.getElementById("mets-label");
let metsRow = document.getElementById("mets-row");

tableMet.classList.add("hidden");
dataMet.classList.add("hidden");

metValue.addEventListener("click", () => {
  if (
    tableMet.classList.contains("hidden") &&
    dataMet.classList.contains("hidden")
  ) {
    tableMet.classList.remove("hidden");
    dataMet.classList.remove("hidden");
    metsLabel.classList.remove("hidden");
    metsRow.classList.remove("hidden");
    metsResult.classList.remove("hidden");
  } else {
    tableMet.classList.add("hidden");
    dataMet.classList.add("hidden");
    metsLabel.classList.add("hidden");
    metsRow.classList.add("hidden");
    metsResult.classList.add("hidden");
  }
});

const calculate = () => {
  const bmiResult = calculateBMI(weight.value, height.value);
  if (
    gender.value == "male" &&
    weight.value != "" &&
    height.value != "" &&
    age.value != "" &&
    activity.value != "Activity"
  ) {
    result.innerHTML = `${
      activity.options[activity.selectedIndex].text
    }: ${selectedActivity(maleBmr())} calories per day <br>
    <span id="x-info" >${activity.options[activity.selectedIndex].text}: ${
      selectedActivity(maleBmr()) * 7
    } calories per week
      <br>
      <i class="fa-solid fa-angles-up" style="color: #5da2b1;"></i> Surplus: ${
        selectedActivity(maleBmr()) + 300
      } kcal/day
      <br>
      <i class="fa-solid fa-angles-down" style="color: #5da2b1;"></i> Deficit: ${
        selectedActivity(maleBmr()) - 250
      } kcal/day
    </span>
    `;

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
    idealWeight.innerHTML = `
    <tr>
          <th>Ideal Weight Formula</th>
          <th>Weight (kg)</th>
        </tr>
  <tr>
          <td class="table-group-divider">Robinson (1983)</td>
          <td class="table-group-divider">${Math.round(
            calculateRobinsonWeight(height.value * 0.3937, true)
          )} kilogram</td>
        </tr>
        <tr>
          <td>Miller (1983)</td>
          <td>${Math.round(
            calculateMillerWeight(height.value * 0.3937, true)
          )} kilogram</td>
        </tr>
        <tr>
          <td>Devine (1974)</td>
          <td>${Math.round(
            calculateDevineWeight(height.value * 0.3937, true)
          )} kilogram</td>
        </tr>
        <tr>
          <td>Hamwi (1964)</td>
          <td>${Math.round(
            calculateHamwiWeight(height.value * 0.3937, true)
          )} kilogram</td>
        </tr>
  `;
    display_bmi.textContent = `BMI: ${bmiResult.bmi}, you are ${bmiResult.classification}`;
    table_bmi.innerHTML = `
        <tr class="table-group-divider">
          <td>Less than 18.5</td>
          <td>Underweight</td>
        </tr>
        <tr>
          <td>18.5 - 24.9</td>
          <td>Normal Weight</td>
        </tr>
        <tr>
          <td>25 - 29.9</td>
          <td>Overweight</td>
        </tr>
        <tr>
          <td>30+</td>
          <td>Obese</td>
        </tr>
    `;
  } else if (
    gender.value == "female" &&
    weight.value != "" &&
    height.value != "" &&
    age.value != "" &&
    activity.value != "Activity"
  ) {
    result.innerHTML = `${
      activity.options[activity.selectedIndex].text
    }: ${selectedActivity(femaleBmr())} calories per day <br> ${
      activity.options[activity.selectedIndex].text
    }: ${selectedActivity(femaleBmr()) * 7} calories per week`;
    //
    table.innerHTML = `
    <tr>
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
    idealWeight.innerHTML = `
      <tr>
          <th>Ideal Weight Formula</th>
          <th>Weight (kg)</th>
      </tr>
      <tr>
        <td class="table-group-divider">Robinson (1983)</td>
        <td class="table-group-divider">${Math.round(
          calculateRobinsonWeight(height.value * 0.3937, false)
        )} kilogram</td>
      </tr>
      <tr>
        <td>Miller (1983)</td>
        <td>${Math.round(
          calculateMillerWeight(height.value * 0.3937, false)
        )} kilogram</td>
      </tr>
      <tr>
          <td>Devine (1974)</td>
          <td>${Math.round(
            calculateDevineWeight(height.value * 0.3937, false)
          )} kilogram</td>
      </tr>
      <tr>
        <td>Hamwi (1964)</td>
        <td>${Math.round(
          calculateHamwiWeight(height.value * 0.3937, false)
        )} kilogram</td>
      </tr>
  `;
    display_bmi.textContent = `BMI: ${bmiResult.bmi}, you are ${bmiResult.classification}`;
    table_bmi.innerHTML = `
        <tr>
          <td>Less than 18.5</td>
          <td>Underweight</td>
        </tr>
        <tr>
          <td>18.5 - 24.9</td>
          <td>Normal Weight</td>
        </tr>
        <tr>
          <td>25 - 29.9</td>
          <td>Overweight</td>
        </tr>
        <tr>
          <td>30+</td>
          <td>Obese</td>
        </tr>
    `;
  } else {
    toastBootstrap.show();
  }
};

calcBtn.addEventListener("click", calculate);
