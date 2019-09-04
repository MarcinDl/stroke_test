///////////// Part ONE - MEMORIZE A WORD

const wordsArray = ['zero', 'jeden', 'dwa', 'trzy', 'cztery'];
const rememberingTime = 5000;
const rememberingTimeSeconds = rememberingTime/1000;
const counterButton = document.getElementById("counterButton");
const text = document.getElementById("firstPart_text");
const result = document.getElementById('firstPart_result');
counterButton.addEventListener("click", akcja)
let wylosowanaLiczba = Math.floor(Math.random() * 4 + 0);
const wylosowaneSlowo = wordsArray[wylosowanaLiczba];
console.log(wylosowaneSlowo);
function akcja() {
    counterButton.hidden = "true";

    
    text.innerHTML = wylosowaneSlowo;
    setTimeout(function () {
        text.innerHTML = "Mam nadzieję, że zapamiętałeś wszystko";
    }, rememberingTime + 1000);

    setTimeout(function () {
        document.getElementById("firstPart").hidden = "true"
    }, rememberingTime + 3000);


    result.innerHTML = rememberingTimeSeconds;
    countDown(rememberingTimeSeconds);

}

function countDown(rememberingTimeSeconds) {
    setInterval(function () {
        
        if (rememberingTimeSeconds >= 0) {
            result.innerHTML = rememberingTimeSeconds;
            rememberingTimeSeconds--;
            countDown(rememberingTimeSeconds);
        }
    }, 1000);


}(rememberingTimeSeconds);


///////////// Part TWO - CALCULATING

// const randomNumber = () => Math.floor(Math.random() * 100 + 1)
// const numberArray = new Array(6);

// do {
//     for (let i = 0; i < numberArray.length; i++) numberArray[i] = randomNumber();
//     // console.log(numberArray);
// } while (numberArray[0] <= numberArray[1] || numberArray[2] <= numberArray[3] || numberArray[4] <= numberArray[5]);

// console.log("Po while'u", numberArray);
// document.getElementById("zeroNumber").innerHTML = numberArray[0];
// document.getElementById("firstNumber").innerHTML = numberArray[1];
// document.getElementById("secondNumber").innerHTML = numberArray[2];
// document.getElementById("thirdNumber").innerHTML = numberArray[3];
// document.getElementById("fourthNumber").innerHTML = numberArray[4];
// document.getElementById("fifthNumber").innerHTML = numberArray[5];

// document.getElementById("checkingAnswers").addEventListener("click",checkingAnswers);

// function checkingAnswers(){

//     if ((document.getElementById("firstAnswer").value.length == 0) || (document.getElementById("secondAnswer").value.length == 0) || (document.getElementById("thirdAnswer").value.length == 0))
//     {
//         alert("uzupełnij brakujące pola")
//     }
//     else{
//         if ((numberArray[0] - numberArray[1]) != document.getElementById("firstAnswer").value) { alert("źle") }
//         else { alert("dobrze") }
//         if ((numberArray[2] - numberArray[3]) != document.getElementById("secondAnswer").value) { alert("źle") }
//         else { alert("dobrze") }
//         if ((numberArray[4] - numberArray[5]) != document.getElementById("thirdAnswer").value) { alert("źle") }
//         else { alert("dobrze") }
//     }

// }
///////////// Part THREE - REMAINING


document.getElementById("memoryButton").addEventListener("click", memoryButton );

function memoryButton(){
    console.log(wylosowaneSlowo);
    if (document.getElementById("zapamietaneSlowo").value == wylosowaneSlowo)
    {
        alert("dobrze")
    }
    else{
        alert("źle");
    }
}