const message = document.querySelector('div.output');
const buttonClick = document.querySelector('button');

buttonClick.addEventListener('click', getDate);
let dinMessage;

function getDate() {
    const date = new Date();
    var time = date.getHours();
    console.log(time);
    if (time <= 6 || time >= 21) {
        dinMessage = "It's night  time";
        message.style.backgroundColor = "black";
        message.style.color = "white";

    } else if (time <= 12) {
        dinMessage = "It's morning time";
        message.style.backgroundColor = "lightblue";
        message.style.color = "blue";
    } else {
        dinMessage = "It's afternoon";
        message.style.backgroundColor = "darkorange";
        message.style.color = "orange";
    }
    message.style.fontSize = "40px";
    message.textContent = dinMessage;

}