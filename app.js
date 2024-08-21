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
    "AK",
    "AL",
    "AR",
    "AZ",
    "CA",
    "CO",
    "DE",
    "FL",
    "GA",
    "HI",
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
    "NJ",
    "NY",
    "OH",
    "OK",
    "OR",
    "SC",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VA",
    "WI",
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