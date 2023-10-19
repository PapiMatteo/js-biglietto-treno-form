// 1 DICHIARAZIONE DI VARIABILI

let userNameElem       = document.querySelector("#name");
let travelDistanceElem = document.querySelector("#distance");
const resultSection    = document.querySelector(".result-section");
const sendBtn          = document.querySelector("#send");
let distanceCost;
let discountPrice;


// 2 BUSINESS LOGIC

sendBtn.addEventListener("click", function() {
    // Raccolta Dati
    const userName = userNameElem.value;
    const travelDistance = parseInt(travelDistanceElem.value);
    const userSelected = document.querySelector('#age option:checked').value;

    distanceCost = travelDistance * 0.21;

    if (userSelected === 'old') {
        discountPrice = distanceCost - ((distanceCost / 100) * 40);
    } else if (userSelected === 'adult') {
        discountPrice = distanceCost;
    } else if (userSelected === 'minor') {
        discountPrice = distanceCost - ((distanceCost / 100) * 20);
    }

    console.log('sconto', discountPrice);

    document.querySelector('#user-name').innerText    = userName;
    document.querySelector('#user-age').innerText     = userSelected;
    document.querySelector('#ticket-price').innerText = (discountPrice).toFixed(2);

    resultSection.classList.remove("d-none")
    resultSection.classList.add("d-block");
})

document.getElementById("clear").addEventListener("click", function(){
    userNameElem.value = "";
    travelDistanceElem.value = "";

    resultSection.classList.remove("d-block")
    resultSection.classList.add("d-none");
})