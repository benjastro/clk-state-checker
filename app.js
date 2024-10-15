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

let jsonUrl = "https://script.google.com/macros/s/AKfycbxJ51x1dsBxidtbWY3_0rmg3S5eXx-2mEUeYCZ4aQbjCNalav-kT9hauoGqpM0BqxuC/exec";

let jsonData = {};

resultElement = document.getElementById('result');

function errorDisplay(text, error) {
    console.error(error);
    resultElement.textContent = text;
    resultElement.style.color = "red";
}

function finishLoading() {
    document.getElementById('form').style.display = "block";
    resultElement.style.color = "black";
    resultElement.textContent = "";
}

    
resultElement = document.getElementById('result')

function check(){
    let is_state_exists = false;
    inputtedState = document.getElementById('state').value.trim().toUpperCase();

    resultElement.textContent = "Loading...";
    resultElement.style.color = "black";

    if (!jsonData) {
        errorDisplay("An error has occured!\n Please retry!", error);
        return;
    }

    Object.entries(jsonData).forEach(([key, value]) => {

        let hasState = value.find(state => state.code.includes(inputtedState));
        
        if (hasState) {
            if (!is_state_exists) {
                is_state_exists = true;
                resultElement.textContent = inputtedState + " STATE IS ACCEPTED FOR";
            }

            resultElement.textContent += " (" + key + ")";
            resultElement.style.color = "green";
        }
    })

    if (!is_state_exists) {
        resultElement.textContent = inputtedState + " STATE IS NOT ACCEPTED FOR ALL";
        resultElement.style.color = "red";
    } 
    
}

fetch(jsonUrl)
    .then(response => response.json()
        .then((data) => {
            jsonData = data;
            finishLoading();
        })
    )
    .catch(error => errorDisplay("An error has occured!\n Please retry!", error));


resultElement.textContent = "Loading...";
resultElement.style.color = "black";