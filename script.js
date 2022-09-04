function newopen() {
    let options = "status = no,toolbar = no";
    return window.open("https://worldoftanks.ru/", "Гитхаб", options)
}

let chooseButton = document.getElementById('chooseTank');
let favDialog = document.getElementById('favDialog');
let outputBox = document.querySelector('output');
let selectE1 = document.querySelector('select');
let confirm = document.getElementById('confitmBtn');

chooseButton.addEventListener('click', function onOpen()
{
    if (typeof favDialog.showModal === "function") {
        favDialog.showModal ();
    } else {
        alert("Тег <dialog> не поддерживается браузером");
    }
});

selectE1.addEventListener('change', function onSelect(e)
{
    confirmBtn.value = selectE1.value;
});

favDialog.addEventListener('close', function onClose()
{
    outputBox.value = "Вы выбрали - " + favDialog.returnValue;
});


let clock;

function Timerstart() {
    clock = setInterval("DisplayTime();", 1000);
}

function DisplayTime() {
    let d = new Date();
    let CurrTime = (d.getHours()<10) ? "0" : "";
    CurrTime += d.getHours();
    CurrTime += (d.getMinutes()<10) ? ":0" : ":";
    CurrTime += d.getMinutes();
    CurrTime += (d.getSeconds()<10) ? ":0" : ":";
    CurrTime += d.getSeconds();
    document.getElementById("div1").innerHTML = CurrTime;
}
function Timerstop() {
    clearInterval(clock);
}

