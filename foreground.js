const btnFirst = document.createElement("button");
const btnSecond = document.createElement('button');

btnFirst.classList.add("btn", "btn-1");
btnFirst.textContent = "SET DATA";

btnSecond.classList.add("btn", "btn-2");
btnSecond.textContent = "SHOUTOUT TO BACK END";

document.querySelector('body').appendChild(btnFirst);
document.querySelector('body').appendChild(btnSecond);

btnFirst.addEventListener('click', () => {
    chrome.storage.local.set({"password": "123"});
});

btnSecond.addEventListener('click', () => {
    chrome.runtime.sendMessage({message: "message to backend"});
});

let indexUrl = 25;
let e = "event";

function simulator () {
    if(e) return -1 < 25 ? "setStorage" : -1 < 30 ? "getStorage" : -1 < 35 && -1 < 40, {}
}


