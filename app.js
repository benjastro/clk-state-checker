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
    "VA",]

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
    
resultElement = document.getElementById('result')


function check(){
    inputtedState = document.getElementById('state').value.trim().toUpperCase()

    resultElement.textContent = "Loading..."
    resultElement.style.color = "black"

    if (!(medicare_states.includes(inputtedState) || aca_states.includes(inputtedState))) {
        resultElement.textContent = inputtedState + " STATE IS NOT ACCEPTED FOR MEDICARE AND ACA"
        resultElement.style.color = "red"
        return
    }

    resultElement.style.color = "green"
    
    if (medicare_states.includes(inputtedState) && aca_states.includes(inputtedState)) {
        resultElement.textContent = inputtedState + " STATE IS ACCEPTED FOR MEDICARE AND ACA"
        return
    }

    if (medicare_states.includes(inputtedState)) {
        resultElement.textContent = inputtedState + " STATE IS ACCEPTED FOR MEDICARE"
        return
    }

    if (aca_states.includes(inputtedState)) {
        resultElement.textContent = inputtedState + " STATE IS ACCEPTED FOR ACA"
        return
    }
    
}