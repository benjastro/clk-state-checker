medicare_states = ["AL",
    "CO",
    "FL",
    "GA",
    "LA",
    "MI",
    "NY",
    "OH",
    "PA",
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
    "DE",
    "FL",
    "GA",
    "IA",
    "IL",
    "IN",
    "KS",
    "LA",
    "MI",
    "MO",
    "MS",
    "MT",
    "NC",
    "ND",
    "NE",
    "OH",
    "OK",
    "SC",
    "TN",
    "TX",
    "UT",
    "WI",
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