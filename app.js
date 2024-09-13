ingroups_data = new Map();

ingroups_data.set("ClickMedicare", {
    id: "ClickMedicare",
    hex: "PINK",
    label: "PINK"
})

ingroups_data.set("ClickU65", {
    id: "ClickU65",
    hex: "YELLOW",
    label: "YELLOW"
})

ingroups_data.set("IMSACA", {
    id: "IMSACA",
    hex: "GREEN",
    label: "GREEN"
})

ingroups_data.set("SB_Medicare", {
    id: "SB_Medicare",
    hex: "RED",
    label: "RED"
})

ingroups_data.set("SB_NonQua", {
    id: "SB_NonQua",
    hex: "BLUE",
    label: "BLUE"
})

ingroups_data.set("U65JAMES", {
    id: "U65JAMES",
    hex: "PURPLE",
    label: "PURPLE"
})

ingroups_data.forEach((value, key, map) => {
    let idText = document.createElement("td");
    idText.innerHTML = value.id
    let colorBar = document.createElement("td");
    colorBar.style.backgroundColor = value.hex
    colorBar.style.width = "60px"
    let colorText = document.createElement("td");
    colorText.innerHTML = value.hex

    let tableRow = document.createElement("tr")
    tableRow.appendChild(idText)
    tableRow.appendChild(colorBar)
    tableRow.appendChild(colorText)
    document.getElementById("ingroups-div").appendChild(tableRow)
})

medicare_states = [
    "AL",
    "AR",
    "AZ",
    "CO",
    "DE",
    "FL",
    "GA",
    "IA",
    "ID",
    "IL",
    "IN",
    "KS",
    "KY",
    "LA",
    "MD",
    "ME",
    "MI",
    "MO",
    "MS",
    "NC",
    "NE",
    "NJ",
    "NM",
    "NY",
    "OH",
    "OK",
    "PA",
    "SC",
    "TN",
    "TX",
    "VA",
]

aca_states = [
    "AZ",
    "FL",
    "GA",
    "IA",
    "IL",
    "IN",
    "KS",
    "LA",
    "MO",
    "MS",
    "NC",
    "OH",
    "OK",
    "SC",
    "TN",
    "TX",
    "AL",
    "MI",
    "NE",
    "NH",
    "UT",
    "WI"
]   

u65_states = [
    "AL",
    "AR",
    "AZ",
    "CA",
    "CO",
    "CT",
    "DC",
    "FL",
    "GA",
    "IA",
    "ID",
    "IL",
    "IN",
    "KS",
    "KY",
    "LA",
    "MA",
    "ME",
    "MI",
    "MN",
    "MO",
    "MS",
    "MT",
    "NC",
    "NE",
    "NH",
    "NV",
    "NY",
    "OH",
    "OK",
    "RI",
    "SC",
    "TN",
    "TX",
    "UT",
    "VA",
    "WV",
    "WY",
]
    
resultElement = document.getElementById('result')


function check(){
    inputtedState = document.getElementById('state').value.trim().toUpperCase()

    resultElement.textContent = "Loading..."
    resultElement.style.color = "black"

    if (!(medicare_states.includes(inputtedState) || aca_states.includes(inputtedState) || u65_states.includes(inputtedState))) {
        resultElement.textContent = inputtedState + " STATE IS NOT ACCEPTED FOR (MEDICARE) (ACA) (U65)"
        resultElement.style.color = "red"
        return
    }

    resultElement.style.color = "green"

    resultElement.textContent = inputtedState + " STATE IS ACCEPTED FOR"

    if (medicare_states.includes(inputtedState)) {
        resultElement.textContent += " (MEDICARE)"
    }

    if (aca_states.includes(inputtedState)) {
        resultElement.textContent += " (ACA)"
    }

    if (u65_states.includes(inputtedState)) {
        resultElement.textContent += " (U65)"
    }
    
}