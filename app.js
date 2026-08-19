// ============================================================
// Exotic ER Calc
// app.js
// ============================================================


// ============================================================
// GLOBAL STATE
// ============================================================

let currentSpecies = "avian";

let selectedDrugId = null;
let selectedDrugName = null;
let selectedRoute = null;

let compoundDrugCount = 1;


// ============================================================
// DOM — PATIENT
// ============================================================

const weightInput =
    document.getElementById("weight");

const unitSelect =
    document.getElementById("unit");

const patientSummary =
    document.getElementById("patient-summary");


// ============================================================
// SPECIES NAME
// ============================================================

const speciesName = {

    avian: "🐦 Avian",
    rabbit: "🐰 Rabbit",
    guineapig: "🐹 Guinea pig",
    rodent: "🐹 Rodent"

};


// ============================================================
// UPDATE PATIENT SUMMARY
// ============================================================

function getPatientWeightText() {

    let weight = weightInput.value;

    if (weight === "") {
        weight = "—";
    }

    return `${weight} ${unitSelect.value}`;

}


function updatePatient() {

    if (!patientSummary) {
        return;
    }

    patientSummary.textContent =
        `${speciesName[currentSpecies]} · ${getPatientWeightText()}`;

}


function updateSyrupPatientSummary() {

    const element =
        document.getElementById(
            "syrup-patient-summary"
        );

    if (!element) {
        return;
    }

    element.textContent =
        `${speciesName[currentSpecies]} · ${getPatientWeightText()}`;

}


function updateCriPatientSummary() {

    const element =
        document.getElementById(
            "cri-patient-summary"
        );

    if (!element) {
        return;
    }

    element.textContent =
        `${speciesName[currentSpecies]} · ${getPatientWeightText()}`;

}


// ============================================================
// GET WEIGHT IN KG
// ============================================================

function getWeightKg() {

    const weight =
        Number(weightInput.value);

    if (weight <= 0) {
        return 0;
    }

    if (unitSelect.value === "g") {
        return weight / 1000;
    }

    return weight;

}


// ============================================================
// PATIENT EVENTS
// ============================================================

document
    .querySelectorAll(".species-buttons button")
    .forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    currentSpecies =
                        button.dataset.species.toLowerCase();

                    document
                        .querySelectorAll(
                            ".species-buttons button"
                        )
                        .forEach(
                            function (item) {

                                item.classList.remove(
                                    "active"
                                );

                            }
                        );

                    button.classList.add(
                        "active"
                    );

                    updatePatient();
                    updateSyrupPatientSummary();
                    updateCriPatientSummary();

                    refreshSelectedDoseLookup();
                    refreshDrugCalculatorDose();
                    refreshAllSyrupDrugDoses();

                }
            );

        }
    );


weightInput.addEventListener(
    "input",
    function () {

        updatePatient();
        updateSyrupPatientSummary();
        updateCriPatientSummary();

    }
);


unitSelect.addEventListener(
    "change",
    function () {

        updatePatient();
        updateSyrupPatientSummary();
        updateCriPatientSummary();

    }
);


// ============================================================
// ============================================================
// DOSE LOOKUP
// ============================================================
// ============================================================

const doseLookup =
    document.getElementById(
        "dose-lookup"
    );

const doseLookupToggle =
    document.getElementById(
        "dose-lookup-toggle"
    );

const doseLookupContent =
    document.getElementById(
        "dose-lookup-content"
    );

const doseLookupSearch =
    document.getElementById(
        "dose-lookup-search"
    );

const doseLookupResults =
    document.getElementById(
        "dose-lookup-results"
    );

const doseLookupResult =
    document.getElementById(
        "dose-lookup-result"
    );


// ============================================================
// DOSE LOOKUP — COLLAPSE
// ============================================================

if (
    doseLookup &&
    doseLookupToggle
) {

    doseLookupToggle.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();

            doseLookup.classList.toggle(
                "collapsed"
            );

            const collapsed =
                doseLookup.classList.contains(
                    "collapsed"
                );

            doseLookupToggle.textContent =
                collapsed
                    ? "+"
                    : "−";

            doseLookupToggle.setAttribute(
                "aria-expanded",
                String(!collapsed)
            );

        }
    );

}


// ============================================================
// DOSE LOOKUP — RECENT
// ============================================================

const RECENT_DRUGS_KEY =
    "exoticER_doseLookupRecentDrugs";


function getDoseLookupRecentDrugs() {

    try {

        const data =
            localStorage.getItem(
                RECENT_DRUGS_KEY
            );

        if (!data) {
            return [];
        }

        const parsed =
            JSON.parse(data);

        return Array.isArray(parsed)
            ? parsed
            : [];

    } catch (error) {

        return [];

    }

}


function addDoseLookupRecentDrug(
    drugId
) {

    if (
        !drugDatabase ||
        !drugDatabase[drugId]
    ) {
        return;
    }

    let recent =
        getDoseLookupRecentDrugs();

    recent =
        recent.filter(
            function (id) {

                return id !== drugId;

            }
        );

    recent.unshift(
        drugId
    );

    recent =
        recent.slice(
            0,
            3
        );

    localStorage.setItem(
        RECENT_DRUGS_KEY,
        JSON.stringify(recent)
    );

    renderDoseLookupRecentDrugs();

}


function renderDoseLookupRecentDrugs() {

    const list =
        document.getElementById(
            "dose-lookup-recent-list"
        );

    if (!list) {
        return;
    }

    list.innerHTML = "";

    const recent =
        getDoseLookupRecentDrugs();

    recent.forEach(
        function (drugId) {

            const drug =
                drugDatabase[drugId];

            if (!drug) {
                return;
            }

            const button =
                document.createElement(
                    "button"
                );

            button.type =
                "button";

            button.className =
                "dose-lookup-recent-button";

            button.textContent =
                drug.name;

            button.dataset.drug =
                drugId;

            list.appendChild(
                button
            );

        }
    );

}


// ============================================================
// SEARCH DRUG DATABASE
// ============================================================

function searchDrugDatabase(
    keyword
) {

    const search =
        keyword
            .trim()
            .toLowerCase();

    if (!search) {
        return [];
    }

    return Object.entries(
        drugDatabase
    )
        .filter(
            function ([drugId, drug]) {

                const name =
                    String(
                        drug.name || ""
                    ).toLowerCase();

                const id =
                    String(
                        drugId || ""
                    ).toLowerCase();

                const aliases =
                    Array.isArray(
                        drug.aliases
                    )
                        ? drug.aliases
                        : [];

                return (
                    name.includes(search) ||
                    id.includes(search) ||
                    aliases.some(
                        function (alias) {

                            return String(alias)
                                .toLowerCase()
                                .includes(search);

                        }
                    )
                );

            }
        );

}


// ============================================================
// DOSE LOOKUP — INPUT
// ============================================================

if (doseLookupSearch) {

    doseLookupSearch.addEventListener(
        "input",
        function () {

            const keyword =
                doseLookupSearch.value
                    .trim()
                    .toLowerCase();

            doseLookupResults.innerHTML =
                "";

            if (!keyword) {

                doseLookupResult.innerHTML = `
                    <p>
                        Select a drug...
                    </p>
                `;

                renderDoseLookupRecentDrugs();

                return;

            }

            const matches =
                searchDrugDatabase(
                    keyword
                );

            if (!matches.length) {

                doseLookupResults.innerHTML = `
                    <div class="search-no-result">
                        No matching drug.
                    </div>
                `;

                doseLookupResult.innerHTML = `
                    <p>
                        No dose information available.
                    </p>
                `;

                return;

            }

            matches.forEach(
                function ([drugId, drug]) {

                    const button =
                        document.createElement(
                            "button"
                        );

                    button.type =
                        "button";

                    button.className =
                        "dose-lookup-search-result";

                    button.textContent =
                        drug.name;

                    button.dataset.drug =
                        drugId;

                    doseLookupResults.appendChild(
                        button
                    );

                }
            );

        }
    );


    doseLookupSearch.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key !== "Enter"
            ) {
                return;
            }

            const first =
                doseLookupResults.querySelector(
                    ".dose-lookup-search-result"
                );

            if (!first) {
                return;
            }

            event.preventDefault();

            first.click();

        }
    );

}


// ============================================================
// DOSE LOOKUP — SEARCH RESULT CLICK
// ============================================================

if (doseLookupResults) {

    doseLookupResults.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(
                    ".dose-lookup-search-result"
                );

            if (!button) {
                return;
            }

            selectDoseLookupDrug(
                button.dataset.drug
            );

        }
    );

}


// ============================================================
// DOSE LOOKUP — RECENT CLICK
// ============================================================

document.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest(
                ".dose-lookup-recent-button"
            );

        if (!button) {
            return;
        }

        selectDoseLookupDrug(
            button.dataset.drug
        );

    }
);


// ============================================================
// SELECT DOSE LOOKUP DRUG
// ============================================================

function selectDoseLookupDrug(
    drugId
) {

    const drug =
        drugDatabase[drugId];

    if (!drug) {
        return;
    }

    if (doseLookupSearch) {
        doseLookupSearch.value =
            drug.name;
    }

    if (doseLookupResults) {
        doseLookupResults.innerHTML =
            "";
    }

    addDoseLookupRecentDrug(
        drugId
    );

    showDoseLookupDrug(
        drugId
    );

}


// ============================================================
// FORMAT DOSE
// ============================================================

function formatDose(
    dose
) {

    if (!dose) {
        return "Not specified";
    }

    const min =
        dose.min;

    const max =
        dose.max;

    const unit =
        dose.unit || "";

    if (
        min !== null &&
        min !== undefined &&
        max !== null &&
        max !== undefined
    ) {

        if (min === max) {
            return `${min} ${unit}`;
        }

        return `${min}–${max} ${unit}`;

    }

    if (
        min !== null &&
        min !== undefined
    ) {

        return `${min} ${unit}`;

    }

    if (
        max !== null &&
        max !== undefined
    ) {

        return `${max} ${unit}`;

    }

    return "Not specified";

}


// ============================================================
// GET DOSE NUMBERS
// ============================================================

function getDoseValues(dose) {

    if (!dose) {
        return [];
    }

    const values = [];

    if (
        dose.min !== null &&
        dose.min !== undefined &&
        !Number.isNaN(Number(dose.min))
    ) {

        values.push(
            Number(dose.min)
        );

    }

    if (
        dose.max !== null &&
        dose.max !== undefined &&
        !Number.isNaN(Number(dose.max)) &&
        Number(dose.max) !== Number(dose.min)
    ) {

        values.push(
            Number(dose.max)
        );

    }

    return values;

}


// ============================================================
// BUILD USE DOSE BUTTON
// ============================================================

function createUseDoseButton(
    dose,
    route,
    drugId
) {

    const values =
        getDoseValues(dose);

    if (!values.length) {
        return "";
    }

    return values
        .map(
            function (value) {

                return `
                    <button
                        type="button"
                        class="use-dose-btn"
                        data-dose="${value}"
                        data-route="${route}"
                        data-drug="${drugId}"
                    >
                        Use ${value} ${dose.unit || ""}
                    </button>
                `;

            }
        )
        .join("");

}


// ============================================================
// SHOW DOSE LOOKUP DRUG
// ============================================================

function showDoseLookupDrug(
    drugId
) {

    const drug =
        drugDatabase[drugId];

    if (!drug) {
        return;
    }

    const speciesData =
        drug.species?.[currentSpecies];

    if (!speciesData) {

        doseLookupResult.innerHTML = `
            <div class="dose-lookup-drug">

                <h3>
                    💊 ${drug.name}
                </h3>

                <p>
                    No dose information available for
                    ${speciesName[currentSpecies]}.
                </p>

            </div>
        `;

        return;

    }

    let html = `

        <div class="dose-lookup-drug">

            <h3>
                💊 ${drug.name}
            </h3>

            <div class="dose-lookup-species">

                <h4>
                    ${speciesName[currentSpecies]}
                </h4>

    `;

    const routes =
        speciesData.routes || {};

    Object.entries(
        routes
    ).forEach(
        function ([route, routeData]) {

            if (!routeData) {
                return;
            }

            const dose =
                routeData.dose;

            html += `

                <div class="dose-lookup-route">

                    <strong>
                        ${route}
                    </strong>

                    <div>
                        Dose:
                        ${formatDose(dose)}
                    </div>

            `;

            if (
                routeData.frequency
            ) {

                html += `

                    <div>
                        Frequency:
                        ${routeData.frequency}
                    </div>

                `;

            }

            if (
                routeData.note
            ) {

                html += `

                    <div class="dose-lookup-note">
                        ⚠️ ${routeData.note}
                    </div>

                `;

            }

            html +=
                createUseDoseButton(
                    dose,
                    route,
                    drugId
                );

            html += `

                </div>

            `;

        }
    );

    html += `

            </div>

        </div>

    `;

    doseLookupResult.innerHTML =
        html;

}


// ============================================================
// REFRESH SELECTED DOSE LOOKUP
// ============================================================

function refreshSelectedDoseLookup() {

    if (!doseLookupSearch) {
        return;
    }

    const keyword =
        doseLookupSearch.value.trim();

    if (!keyword) {
        return;
    }

    const matches =
        searchDrugDatabase(
            keyword
        );

    if (!matches.length) {
        return;
    }

    const exact =
        matches.find(
            function ([drugId, drug]) {

                return (
                    drug.name || ""
                ).toLowerCase() ===
                keyword.toLowerCase();

            }
        );

    if (exact) {

        showDoseLookupDrug(
            exact[0]
        );

    }

}


// ============================================================
// ============================================================
// DRUG CALCULATOR
// ============================================================
// ============================================================

const drugSearch =
    document.getElementById(
        "drug-search"
    );

const drugSearchResults =
    document.getElementById(
        "drug-search-results"
    );

const doseResult =
    document.getElementById(
        "dose-result"
    );

const doseInput =
    document.getElementById(
        "dose"
    );

const concentrationInput =
    document.getElementById(
        "concentration"
    );

const calculateButton =
    document.getElementById(
        "calculate"
    );

const clearButton =
    document.getElementById(
        "clear"
    );

const totalDoseOutput =
    document.getElementById(
        "total-dose"
    );

const volumeOutput =
    document.getElementById(
        "result"
    );


// ============================================================
// DRUG CALCULATOR — SEARCH
// ============================================================

if (drugSearch) {

    drugSearch.addEventListener(
        "input",
        function () {

            const keyword =
                drugSearch.value
                    .trim()
                    .toLowerCase();

            drugSearchResults.innerHTML =
                "";

            if (!keyword) {

                doseResult.innerHTML =
                    "Select a drug...";

                return;

            }

            const matches =
                searchDrugDatabase(
                    keyword
                );

            if (!matches.length) {

                drugSearchResults.innerHTML = `
                    <div class="search-no-result">
                        No matching drug.
                    </div>
                `;

                doseResult.innerHTML =
                    "No dose information available.";

                return;

            }

            matches.forEach(
                function ([drugId, drug]) {

                    const button =
                        document.createElement(
                            "button"
                        );

                    button.type =
                        "button";

                    button.className =
                        "drug-search-result";

                    button.textContent =
                        drug.name;

                    button.dataset.drug =
                        drugId;

                    drugSearchResults.appendChild(
                        button
                    );

                }
            );

        }
    );


    drugSearch.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key !== "Enter"
            ) {
                return;
            }

            const first =
                drugSearchResults.querySelector(
                    ".drug-search-result"
                );

            if (!first) {
                return;
            }

            event.preventDefault();

            first.click();

        }
    );

}


if (drugSearchResults) {

    drugSearchResults.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(
                    ".drug-search-result"
                );

            if (!button) {
                return;
            }

            selectDrugCalculatorDrug(
                button.dataset.drug
            );

        }
    );

}


// ============================================================
// DRUG CALCULATOR — SHOW DOSE
// IM / SC / IV ONLY
// ============================================================

const drugCalculatorRoutes = [
    "IM",
    "SC",
    "IV"
];


function selectDrugCalculatorDrug(
    drugId
) {

    const drug =
        drugDatabase[drugId];

    if (!drug) {
        return;
    }

    selectedDrugId =
        drugId;

    selectedDrugName =
        drug.name;

    selectedRoute =
        null;

    if (drugSearch) {
        drugSearch.value =
            drug.name;
    }

    if (drugSearchResults) {
        drugSearchResults.innerHTML =
            "";
    }

    showDrugCalculatorDose(
        drugId
    );

}


function showDrugCalculatorDose(
    drugId
) {

    const drug =
        drugDatabase[drugId];

    if (!drug) {
        return;
    }

    const speciesData =
        drug.species?.[currentSpecies];

    if (!speciesData) {

        doseResult.innerHTML = `
            <p>
                No dose information available for
                ${speciesName[currentSpecies]}.
            </p>
        `;

        return;

    }

    const routes =
        speciesData.routes || {};

    let html = `
        <h3>
            💊 ${drug.name}
        </h3>
    `;

    let foundRoute = false;

    drugCalculatorRoutes.forEach(
        function (route) {

            const routeData =
                routes[route];

            if (!routeData) {
                return;
            }

            foundRoute = true;

            html += `

                <div class="dose-lookup-route">

                    <strong>
                        ${route}
                    </strong>

                    <div>
                        Dose:
                        ${formatDose(routeData.dose)}
                    </div>

            `;

            if (
                routeData.frequency
            ) {

                html += `
                    <div>
                        Frequency:
                        ${routeData.frequency}
                    </div>
                `;

            }

            if (
                routeData.note
            ) {

                html += `
                    <div class="dose-lookup-note">
                        ⚠️ ${routeData.note}
                    </div>
                `;

            }

            html +=
                createUseDoseButton(
                    routeData.dose,
                    route,
                    drugId
                );

            html += `
                </div>
            `;

        }
    );

    if (!foundRoute) {

        html += `
            <p>
                No IM / SC / IV dose information
                available for
                ${speciesName[currentSpecies]}.
            </p>
        `;

    }

    doseResult.innerHTML =
        html;

}


// ============================================================
// DRUG CALCULATOR — REFRESH SPECIES
// ============================================================

function refreshDrugCalculatorDose() {

    if (!selectedDrugId) {
        return;
    }

    if (!drugDatabase[selectedDrugId]) {
        return;
    }

    showDrugCalculatorDose(
        selectedDrugId
    );

}


// ============================================================
// DRUG CALCULATOR — CALCULATE
// ============================================================

if (calculateButton) {

    calculateButton.addEventListener(
        "click",
        function () {

            const weightKg =
                getWeightKg();

            const dose =
                Number(doseInput.value);

            const concentration =
                Number(
                    concentrationInput.value
                );

            if (
                weightKg <= 0 ||
                dose <= 0 ||
                concentration <= 0
            ) {

                totalDoseOutput.textContent =
                    "請完整輸入資料";

                volumeOutput.textContent =
                    "—";

                return;

            }

            const totalDose =
                weightKg * dose;

            const volume =
                totalDose /
                concentration;

            totalDoseOutput.textContent =
                `${totalDose.toFixed(2)} mg`;

            volumeOutput.textContent =
                `${volume.toFixed(4)} mL`;

        }
    );

}


// ============================================================
// DRUG CALCULATOR — CLEAR
// ============================================================

if (clearButton) {

    clearButton.addEventListener(
        "click",
        function () {

            doseInput.value =
                "";

            concentrationInput.value =
                "";

            totalDoseOutput.textContent =
                "— mg";

            volumeOutput.textContent =
                "— mL";

            if (drugSearch) {
                drugSearch.value =
                    "";
            }

            if (drugSearchResults) {
                drugSearchResults.innerHTML =
                    "";
            }

            if (doseResult) {
                doseResult.innerHTML =
                    "Select a drug...";
            }

            selectedDrugId =
                null;

            selectedDrugName =
                null;

            selectedRoute =
                null;

        }
    );

}


// ============================================================
// USE DOSE
// ============================================================

function useThisDose(
    doseValue,
    route,
    drugId
) {

    const drug =
        drugDatabase[drugId];

    if (!drug) {
        return;
    }

    selectedDrugId =
        drugId;

    selectedDrugName =
        drug.name;

    selectedRoute =
        route;

    doseInput.value =
        doseValue;

    switchCalculator(
        "drug"
    );

    doseInput.focus();

    doseInput.select();

}


// ============================================================
// USE DOSE BUTTON CLICK
// ============================================================

document.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest(
                ".use-dose-btn"
            );

        if (!button) {
            return;
        }

        const dose =
            Number(
                button.dataset.dose
            );

        const route =
            button.dataset.route;

        const drugId =
            button.dataset.drug;

        if (
            Number.isNaN(dose)
        ) {
            return;
        }

        useThisDose(
            dose,
            route,
            drugId
        );

    }
);


// ============================================================
// ============================================================
// SYRUP CALCULATOR
// ============================================================
// ============================================================

const doseVolume =
    document.getElementById(
        "dose-volume"
    );

const finalVolumeInput =
    document.getElementById(
        "final-volume"
    );

const frequency =
    document.getElementById(
        "frequency"
    );

const duration =
    document.getElementById(
        "duration"
    );

const compoundDrug =
    document.getElementById(
        "compound-drug"
    );

const targetDose =
    document.getElementById(
        "target-dose"
    );

const formulation =
    document.getElementById(
        "formulation"
    );

const strength =
    document.getElementById(
        "strength"
    );

const strengthUnit =
    document.getElementById(
        "strength-unit"
    );

const calculateCompoundButton =
    document.getElementById(
        "calculate-compound"
    );

const clearCompoundButton =
    document.getElementById(
        "clear-compound"
    );

const compoundResult =
    document.getElementById(
        "compound-result"
    );


// ============================================================
// SYRUP — STRENGTH UNIT
// ============================================================

function updateStrengthUnitForGroup(
    group
) {

    if (!group) {
        return;
    }

    const formulationInput =
        group.querySelector(
            "#formulation"
        ) ||
        group.querySelector(
            ".compound-formulation"
        );

    const unit =
        group.querySelector(
            "#strength-unit"
        ) ||
        group.querySelector(
            ".compound-strength-unit"
        );

    if (
        !formulationInput ||
        !unit
    ) {
        return;
    }

    switch (
        formulationInput.value
    ) {

        case "tablet":

            unit.textContent =
                "mg/tablet";

            break;

        case "capsule":

            unit.textContent =
                "mg/capsule";

            break;

        case "liquid":

            unit.textContent =
                "mg/mL";

            break;

    }

}


function updateStrengthUnit() {

    const group =
        getFirstCompoundDrugGroup();

    updateStrengthUnitForGroup(
        group
    );

}


// ============================================================
// SYRUP — GET GROUPS
// ============================================================

function getCompoundDrugGroups() {

    return document.querySelectorAll(
        "#syrup-calculator .compound-drug-group"
    );

}


function getFirstCompoundDrugGroup() {

    return document.querySelector(
        "#syrup-calculator .compound-drug-group"
    );

}


// ============================================================
// SYRUP — FIND DRUG ID
// ============================================================

function findDrugIdByName(
    name
) {

    const keyword =
        String(name || "")
            .trim()
            .toLowerCase();

    if (!keyword) {
        return null;
    }

    const matches =
        Object.entries(
            drugDatabase
        )
            .filter(
                function ([drugId, drug]) {

                    return (
                        String(drug.name || "")
                            .toLowerCase() ===
                        keyword
                    );

                }
            );

    return matches.length
        ? matches[0][0]
        : null;

}


// ============================================================
// SYRUP — SEARCH
// ============================================================

function searchSyrupDrug(
    input,
    resultBox
) {

    const keyword =
        input.value
            .trim()
            .toLowerCase();

    resultBox.innerHTML =
        "";

    if (!keyword) {
        return;
    }

    const matches =
        searchDrugDatabase(
            keyword
        );

    if (!matches.length) {

        resultBox.innerHTML = `
            <div class="search-no-result">
                No matching drug.
            </div>
        `;

        return;

    }

    matches.forEach(
        function ([drugId, drug]) {

            const button =
                document.createElement(
                    "button"
                );

            button.type =
                "button";

            button.className =
                "syrup-drug-search-result";

            button.textContent =
                drug.name;

            button.dataset.drug =
                drugId;

            resultBox.appendChild(
                button
            );

        }
    );

}


// ============================================================
// SYRUP — GET PO DOSE
// ============================================================

function getSyrupPoData(
    drugId
) {

    const drug =
        drugDatabase[drugId];

    if (!drug) {
        return null;
    }

    const speciesData =
        drug.species?.[currentSpecies];

    if (!speciesData) {
        return null;
    }

    const poData =
        speciesData.routes?.PO;

    if (
        !poData ||
        !poData.dose
    ) {
        return null;
    }

    return poData;

}


// ============================================================
// SYRUP — SELECT DRUG
// ============================================================

function selectSyrupDrug(
    input,
    resultBox,
    drugId
) {

    const drug =
        drugDatabase[drugId];

    if (!drug) {
        return;
    }

    input.value =
        drug.name;

    input.dataset.drugId =
        drugId;

    resultBox.innerHTML =
        "";

    const group =
        input.closest(
            ".compound-drug-group"
        );

    if (group) {

        group.dataset.drugId =
            drugId;

        showSyrupDrugDose(
            group,
            drugId
        );

    }

}


// ============================================================
// SYRUP — SHOW PO DOSE
// ============================================================

function showSyrupDrugDose(
    group,
    drugId
) {

    const drug =
        drugDatabase[drugId];

    if (!drug) {
        return;
    }

    const poData =
        getSyrupPoData(
            drugId
        );

    let doseBox =
        group.querySelector(
            ".syrup-drug-dose-info"
        );

    if (!doseBox) {

        doseBox =
            document.createElement(
                "div"
            );

        doseBox.className =
            "syrup-drug-dose-info";

        const input =
            group.querySelector(
                "#compound-drug"
            ) ||
            group.querySelector(
                ".compound-drug-input"
            );

        if (input) {

            input.insertAdjacentElement(
                "afterend",
                doseBox
            );

        }

    }

    if (!poData) {

        doseBox.innerHTML = `
            <strong>
                💊 ${drug.name}
            </strong>

            <p>
                No PO dose information available
                for ${speciesName[currentSpecies]}.
            </p>
        `;

        return;

    }

    const dose =
        poData.dose;

    const values =
        getDoseValues(
            dose
        );

    let buttonsHTML =
        "";

    values.forEach(
        function (value) {

            buttonsHTML += `
                <button
                    type="button"
                    class="syrup-dose-select"
                    data-dose="${value}"
                >
                    ${value} ${dose.unit || ""}
                </button>
            `;

        }
    );

    doseBox.innerHTML = `

        <strong>
            💊 ${drug.name}
        </strong>

        <div class="syrup-dose-item">

            <strong>
                PO
            </strong>

            <div>
                Dose:
                ${formatDose(dose)}
            </div>

            ${
                buttonsHTML
                    ? `
                        <div>
                            <small>
                                Select dose:
                            </small>
                        </div>

                        ${buttonsHTML}
                    `
                    : ""
            }

            ${
                poData.frequency
                    ? `
                        <p>
                            Frequency:
                            ${poData.frequency}
                        </p>
                    `
                    : ""
            }

            ${
                poData.note
                    ? `
                        <div class="dose-lookup-note">
                            ⚠️ ${poData.note}
                        </div>
                    `
                    : ""
            }

        </div>

    `;


    doseBox
        .querySelectorAll(
            ".syrup-dose-select"
        )
        .forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const selectedDose =
                            Number(
                                button.dataset.dose
                            );

                        const doseInput =
                            group.querySelector(
                                "#target-dose"
                            ) ||
                            group.querySelector(
                                ".compound-target-dose"
                            );

                        if (!doseInput) {
                            return;
                        }

                        doseInput.value =
                            selectedDose;

                        doseInput.focus();

                    }
                );

            }
        );

}


// ============================================================
// SYRUP — REFRESH ALL PO DOSES
// ============================================================

function refreshAllSyrupDrugDoses() {

    getCompoundDrugGroups()
        .forEach(
            function (group) {

                const drugId =
                    group.dataset.drugId ||
                    group
                        .querySelector(
                            ".compound-drug-input"
                        )
                        ?.dataset.drugId;

                if (!drugId) {
                    return;
                }

                showSyrupDrugDose(
                    group,
                    drugId
                );

            }
        );

}


// ============================================================
// SYRUP — SETUP DRUG LOOKUP
// ============================================================

function setupSyrupDrugLookup(
    group
) {

    if (!group) {
        return;
    }

    const input =
        group.querySelector(
            "#compound-drug"
        ) ||
        group.querySelector(
            ".compound-drug-input"
        );

    if (!input) {
        return;
    }

    if (
        input.dataset.lookupReady ===
        "true"
    ) {
        return;
    }

    input.dataset.lookupReady =
        "true";

    const resultBox =
        document.createElement(
            "div"
        );

    resultBox.className =
        "syrup-drug-search-results";

    input.insertAdjacentElement(
        "afterend",
        resultBox
    );


    input.addEventListener(
        "input",
        function () {

            input.dataset.drugId =
                "";

            group.dataset.drugId =
                "";

            const doseBox =
                group.querySelector(
                    ".syrup-drug-dose-info"
                );

            if (doseBox) {
                doseBox.remove();
            }

            searchSyrupDrug(
                input,
                resultBox
            );

        }
    );


    input.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key !== "Enter"
            ) {
                return;
            }

            const first =
                resultBox.querySelector(
                    ".syrup-drug-search-result"
                );

            if (!first) {
                return;
            }

            event.preventDefault();

            first.click();

        }
    );


    resultBox.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(
                    ".syrup-drug-search-result"
                );

            if (!button) {
                return;
            }

            selectSyrupDrug(
                input,
                resultBox,
                button.dataset.drug
            );

        }
    );

}


// ============================================================
// SYRUP — GET DRUG DATA
// ============================================================

function getCompoundDrugData() {

    const groups =
        getCompoundDrugGroups();

    const drugs = [];

    groups.forEach(
        function (group) {

            const nameInput =
                group.querySelector(
                    "#compound-drug"
                ) ||
                group.querySelector(
                    ".compound-drug-input"
                );

            const doseInput =
                group.querySelector(
                    "#target-dose"
                ) ||
                group.querySelector(
                    ".compound-target-dose"
                );

            const formulationInput =
                group.querySelector(
                    "#formulation"
                ) ||
                group.querySelector(
                    ".compound-formulation"
                );

            const strengthInput =
                group.querySelector(
                    "#strength"
                ) ||
                group.querySelector(
                    ".compound-strength"
                );

            if (!nameInput) {
                return;
            }

            drugs.push({

                name:
                    nameInput.value.trim(),

                drugId:
                    group.dataset.drugId ||
                    nameInput.dataset.drugId ||
                    findDrugIdByName(
                        nameInput.value
                    ),

                dose:
                    Number(
                        doseInput?.value
                    ),

                formulation:
                    formulationInput?.value,

                strength:
                    Number(
                        strengthInput?.value
                    )

            });

        }
    );

    return drugs;

}


// ============================================================
// SYRUP — ADD DRUG BUTTON
// ============================================================

let addCompoundDrugButton = null;


function createAddCompoundDrugButton() {

    if (
        addCompoundDrugButton ||
        !syrupCalculatorPage
    ) {
        return;
    }

    addCompoundDrugButton =
        document.createElement(
            "button"
        );

    addCompoundDrugButton.type =
        "button";

    addCompoundDrugButton.className =
        "add-compound-drug";

    addCompoundDrugButton.textContent =
        "＋ Add Drug";

    const firstGroup =
        getFirstCompoundDrugGroup();

    if (firstGroup) {

        firstGroup.insertAdjacentElement(
            "afterend",
            addCompoundDrugButton
        );

    }


    addCompoundDrugButton.addEventListener(
        "click",
        function () {

            addCompoundDrug();

        }
    );

}


// ============================================================
// SYRUP — ADD DRUG
// ============================================================

function addCompoundDrug() {

    compoundDrugCount++;

    const group =
        document.createElement(
            "div"
        );

    group.className =
        "compound-group compound-drug-group";

    group.dataset.drugNumber =
        compoundDrugCount;

    group.innerHTML = `

    <div class="compound-drug-header">

        <h3>
            Drug #${compoundDrugCount}
        </h3>

        <button
            type="button"
            class="remove-compound-drug"
        >
            ✕
        </button>

    </div>


    <div class="drug-row">

        <div class="drug-field">

            <label>
                Drug
            </label>

            <input
                type="text"
                class="compound-drug-input"
                placeholder="Type drug name..."
                autocomplete="off"
            >

        </div>


        <div class="drug-field">

            <label>
                Target dose
            </label>

            <div class="input-with-unit">

                <input
                    type="number"
                    class="compound-target-dose"
                    placeholder="25"
                    min="0"
                    step="0.01"
                >

                <span>
                    mg/kg/dose
                </span>

            </div>

        </div>

    </div>


    <div class="drug-row">

        <div class="drug-field">

            <label>
                Formulation
            </label>

            <select
                class="compound-formulation"
            >

                <option value="tablet">
                    Tablet
                </option>

                <option value="capsule">
                    Capsule
                </option>

                <option value="liquid">
                    Liquid
                </option>

            </select>

        </div>


        <div class="drug-field">

            <label>
                Strength
            </label>

            <div class="input-with-unit">

                <input
                    type="number"
                    class="compound-strength"
                    placeholder="250"
                    min="0"
                    step="0.01"
                >

                <span class="compound-strength-unit">
                    mg/tablet
                </span>

            </div>

        </div>

    </div>

`;


    const removeButton =
        group.querySelector(
            ".remove-compound-drug"
        );

    removeButton.addEventListener(
        "click",
        function () {

            group.remove();

            renumberCompoundDrugs();

        }
    );


    const formulationSelect =
        group.querySelector(
            ".compound-formulation"
        );

    formulationSelect.addEventListener(
        "change",
        function () {

            updateStrengthUnitForGroup(
                group
            );

        }
    );


    const insertBefore =
        addCompoundDrugButton ||
        calculateCompoundButton;

    if (insertBefore) {

        insertBefore.insertAdjacentElement(
            "beforebegin",
            group
        );

    }
    else {

        syrupCalculatorPage.appendChild(
            group
        );

    }


    setupSyrupDrugLookup(
        group
    );

    updateStrengthUnitForGroup(
        group
    );

}


// ============================================================
// SYRUP — RENUMBER
// ============================================================

function renumberCompoundDrugs() {

    const groups =
        getCompoundDrugGroups();

    groups.forEach(
        function (group, index) {

            const number =
                index + 1;

            group.dataset.drugNumber =
                number;

            const title =
                group.querySelector(
                    "h3"
                );

            if (title) {

                title.textContent =
                    `Drug #${number}`;

            }

        }
    );

    compoundDrugCount =
        groups.length;

}


// ============================================================
// SYRUP — CALCULATE
// ============================================================

if (calculateCompoundButton) {

    calculateCompoundButton.addEventListener(
        "click",
        function () {

            const weightKg =
                getWeightKg();

            const volumePerDose =
                Number(
                    doseVolume.value
                );

            const totalVolume =
                Number(
                    finalVolumeInput.value
                );

            const dosesPerDay =
                Number(
                    frequency.value
                );

            const days =
                Number(
                    duration.value
                );

            const drugs =
                getCompoundDrugData();


            if (
                weightKg <= 0 ||
                volumePerDose <= 0 ||
                totalVolume <= 0 ||
                dosesPerDay <= 0 ||
                days <= 0
            ) {

                compoundResult.innerHTML = `
                    <p>
                        請完整輸入所有資料。
                    </p>
                `;

                return;

            }


            if (!drugs.length) {

                compoundResult.innerHTML = `
                    <p>
                        請至少輸入一項藥物。
                    </p>
                `;

                return;

            }


            const invalidDrug =
                drugs.some(
                    function (drug) {

                        return (
                            !drug.name ||
                            drug.dose <= 0 ||
                            drug.strength <= 0
                        );

                    }
                );


            if (invalidDrug) {

                compoundResult.innerHTML = `
                    <p>
                        請完整輸入所有藥物資料。
                    </p>
                `;

                return;

            }


            const totalDoses =
                dosesPerDay *
                days;

            const courseVolume =
                totalDoses *
                volumePerDose;


            const frequencyName = {

                1: "SID",
                2: "BID",
                3: "TID",
                4: "QID"

            };


            let resultHTML =
                "";


            drugs.forEach(
                function (drug) {

                    const mgPerDose =
                        weightKg *
                        drug.dose;


                    const targetConcentration =
                        mgPerDose /
                        volumePerDose;


                    const totalDrug =
                        targetConcentration *
                        totalVolume;


                    const formulationUnits =
                        totalDrug /
                        drug.strength;


                    let formulationName;


                    if (
                        drug.formulation ===
                        "tablet"
                    ) {

                        formulationName =
                            "tablet";

                    }

                    else if (
                        drug.formulation ===
                        "capsule"
                    ) {

                        formulationName =
                            "capsule";

                    }

                    else {

                        formulationName =
                            "mL";

                    }


                    resultHTML += `

                        <div class="result-section">

                            <h3>
                                💊 ${drug.name}
                            </h3>

                            <strong>
                                ${mgPerDose.toFixed(2)}
                                mg / dose
                            </strong>

                            <br>

                            Target concentration:

                            <strong>
                                ${targetConcentration.toFixed(2)}
                                mg/mL
                            </strong>

                            <br>

                            Total drug required:

                            <strong>
                                ${totalDrug.toFixed(2)}
                                mg
                            </strong>

                            <br>

                            ${drug.strength.toFixed(2)}
                            mg/${formulationName}

                            →

                            <strong>
                                ${formulationUnits.toFixed(2)}
                                ${formulationName}
                            </strong>

                        </div>

                    `;

                }
            );


            resultHTML += `

                <div class="result-section">

                    <h3>
                        📅 Course check
                    </h3>

                    <strong>
                        ${frequencyName[dosesPerDay]}
                        × ${days} days
                    </strong>

                    =

                    <strong>
                        ${totalDoses}
                        doses
                    </strong>

                    <br>

                    ${volumePerDose.toFixed(2)}
                    mL × ${totalDoses}

                    =

                    <strong>
                        ${courseVolume.toFixed(2)}
                        mL administered
                    </strong>

                </div>

            `;


            compoundResult.innerHTML =
                resultHTML;

        }
    );

}


// ============================================================
// SYRUP — CLEAR
// ============================================================

if (clearCompoundButton) {

    clearCompoundButton.addEventListener(
        "click",
        function () {

            doseVolume.value =
                "";

            finalVolumeInput.value =
                "";

            frequency.value =
                "1";

            duration.value =
                "";


            const groups =
                Array.from(
                    getCompoundDrugGroups()
                );


            groups.forEach(
                function (group, index) {

                    if (index > 0) {
                        group.remove();
                    }

                }
            );


            compoundDrugCount =
                1;


            const firstGroup =
                getFirstCompoundDrugGroup();

            if (firstGroup) {

                firstGroup.dataset.drugId =
                    "";

                const inputs =
                    firstGroup.querySelectorAll(
                        "input"
                    );

                inputs.forEach(
                    function (input) {

                        input.value =
                            "";

                    }
                );

                const selectFormulation =
                    firstGroup.querySelector(
                        "#formulation"
                    );

                if (selectFormulation) {

                    selectFormulation.value =
                        "tablet";

                }

                const doseBox =
                    firstGroup.querySelector(
                        ".syrup-drug-dose-info"
                    );

                if (doseBox) {
                    doseBox.remove();
                }

                const resultBox =
                    firstGroup.querySelector(
                        ".syrup-drug-search-results"
                    );

                if (resultBox) {
                    resultBox.innerHTML =
                        "";
                }

                const drugInput =
                    firstGroup.querySelector(
                        "#compound-drug"
                    );

                if (drugInput) {

                    drugInput.dataset.drugId =
                        "";

                }

                updateStrengthUnitForGroup(
                    firstGroup
                );

            }


            compoundResult.innerHTML = `
                <p>
                    Enter the required information to calculate.
                </p>
            `;

        }
    );

}


// ============================================================
// ============================================================
// CRI CALCULATOR
// ============================================================
// ============================================================

const criDose =
    document.getElementById(
        "cri-dose"
    );

const criDoseUnit =
    document.getElementById(
        "cri-dose-unit"
    );

const criInfusionRate =
    document.getElementById(
        "cri-infusion-rate"
    );

const criDrugAmount =
    document.getElementById(
        "cri-drug-amount"
    );

const criFinalVolume =
    document.getElementById(
        "cri-final-volume"
    );

const calculateCriButton =
    document.getElementById(
        "calculate-cri"
    );

const clearCriButton =
    document.getElementById(
        "clear-cri"
    );

const criResult =
    document.getElementById(
        "cri-result"
    );


// ============================================================
// CRI — CALCULATE
// ============================================================

if (calculateCriButton) {

    calculateCriButton.addEventListener(
        "click",
        function () {

            const weightKg =
                getWeightKg();

            const dose =
                Number(
                    criDose.value
                );

            const infusionRate =
                Number(
                    criInfusionRate.value
                );

            const stockConcentration =
                Number(
                    criDrugAmount.value
                );

            const finalVolume =
                Number(
                    criFinalVolume.value
                );


            if (
                weightKg <= 0 ||
                dose <= 0 ||
                infusionRate <= 0 ||
                stockConcentration <= 0 ||
                finalVolume <= 0
            ) {

                criResult.innerHTML = `
                    <p>
                        請完整輸入所有資料。
                    </p>
                `;

                return;

            }


            let doseMgKgHr;


            switch (
                criDoseUnit.value
            ) {

                case "mg/kg/hr":

                    doseMgKgHr =
                        dose;

                    break;


                case "mg/kg/min":

                    doseMgKgHr =
                        dose * 60;

                    break;


                case "ug/kg/hr":

                    doseMgKgHr =
                        dose / 1000;

                    break;


                case "ug/kg/min":

                    doseMgKgHr =
                        dose * 60 / 1000;

                    break;

            }


            const requiredMgPerHr =
                doseMgKgHr *
                weightKg;


            const finalConcentration =
                requiredMgPerHr /
                infusionRate;


            const totalDrugRequired =
                finalConcentration *
                finalVolume;


            const stockVolume =
                totalDrugRequired /
                stockConcentration;


            criResult.innerHTML = `

                <div class="result-section">

                    <h3>
                        💊 Required concentration
                    </h3>

                    <strong class="big-result">
                        ${finalConcentration.toFixed(4)}
                        mg/mL
                    </strong>

                </div>


                <div class="result-section">

                    <h3>
                        🧪 Preparation
                    </h3>

                    <strong class="big-result">
                        ${stockVolume.toFixed(3)}
                        mL
                    </strong>

                    <p>
                        Stock solution
                    </p>

                    <p>
                        Dilute to
                        <strong>
                            ${finalVolume.toFixed(2)}
                            mL
                        </strong>
                    </p>

                </div>


                <div class="result-section">

                    <h3>
                        ⚕️ CRI
                    </h3>

                    <p>
                        Target dose:
                        <strong>
                            ${dose}
                            ${criDoseUnit.value}
                        </strong>
                    </p>

                    <p>
                        Infusion rate:
                        <strong>
                            ${infusionRate.toFixed(2)}
                            mL/hr
                        </strong>
                    </p>

                </div>

            `;

        }
    );

}


// ============================================================
// CRI — CLEAR
// ============================================================

if (clearCriButton) {

    clearCriButton.addEventListener(
        "click",
        function () {

            criDose.value =
                "";

            criDoseUnit.value =
                "mg/kg/hr";

            criInfusionRate.value =
                "";

            criDrugAmount.value =
                "";

            criFinalVolume.value =
                "";


            criResult.innerHTML = `
                <p>
                    Enter the required information to calculate.
                </p>
            `;

        }
    );

}


// ============================================================
// ============================================================
// CALCULATOR TABS
// ============================================================
// ============================================================

const calculatorTabs =
    document.querySelectorAll(
        ".calculator-tab"
    );

const drugCalculatorPage =
    document.getElementById(
        "drug-calculator"
    );

const syrupCalculatorPage =
    document.getElementById(
        "syrup-calculator"
    );

const criCalculatorPage =
    document.getElementById(
        "cri-calculator"
    );


// ============================================================
// SWITCH CALCULATOR
// ============================================================

function switchCalculator(
    calculator
) {

    if (
        drugCalculatorPage
    ) {

        drugCalculatorPage.hidden =
            calculator !== "drug";

    }

    if (
        syrupCalculatorPage
    ) {

        syrupCalculatorPage.hidden =
            calculator !== "syrup";

    }

    if (
        criCalculatorPage
    ) {

        criCalculatorPage.hidden =
            calculator !== "cri";

    }


    calculatorTabs.forEach(
        function (tab) {

            tab.classList.remove(
                "active"
            );

        }
    );


    const activeTab =
        document.querySelector(
            `.calculator-tab[data-calculator="${calculator}"]`
        );


    if (activeTab) {

        activeTab.classList.add(
            "active"
        );

    }


    if (
        calculator === "syrup"
    ) {

        updateSyrupPatientSummary();

    }


    if (
        calculator === "cri"
    ) {

        updateCriPatientSummary();

    }

}


// ============================================================
// TAB CLICK
// ============================================================

calculatorTabs.forEach(
    function (tab) {

        tab.addEventListener(
            "click",
            function () {

                switchCalculator(
                    tab.dataset.calculator
                );

            }
        );

    }
);


// ============================================================
// ============================================================
// INITIAL SETUP
// ============================================================
// ============================================================


// ------------------------------------------------------------
// Initial species
// ------------------------------------------------------------

const initialSpeciesButton =
    document.querySelector(
        '.species-buttons button[data-species="avian"]'
    );

if (initialSpeciesButton) {

    initialSpeciesButton.classList.add(
        "active"
    );

}


// ------------------------------------------------------------
// Initial patient
// ------------------------------------------------------------

updatePatient();

updateSyrupPatientSummary();

updateCriPatientSummary();


// ------------------------------------------------------------
// Dose Lookup
// ------------------------------------------------------------

renderDoseLookupRecentDrugs();


// ------------------------------------------------------------
// Syrup
// ------------------------------------------------------------

const firstCompoundGroup =
    getFirstCompoundDrugGroup();

if (firstCompoundGroup) {

    setupSyrupDrugLookup(
        firstCompoundGroup
    );

    updateStrengthUnitForGroup(
        firstCompoundGroup
    );

}


// ------------------------------------------------------------
// Add Drug
// ------------------------------------------------------------

createAddCompoundDrugButton();


// ------------------------------------------------------------
// Calculator
// ------------------------------------------------------------

switchCalculator(
    "drug"
);