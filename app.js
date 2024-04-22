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

aca_states = ["AK",
    "AL",
    "AR",
    "AZ",
    "CA",
    "CT",
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
    "MA",
    "MI",
    "MN",
    "MO",
    "MS",
    "MT",
    "NC",
    "ND",
    "NE",
    "NH",
    "NJ",
    "NV",
    "NY",
    "OH",
    "RI",
    "SC",
    "TN",
    "TX",
    "UT",
    "VA",
    "WI",
    "WV",
    "WY"]
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