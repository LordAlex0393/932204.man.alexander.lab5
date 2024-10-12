const buttons = [...document.getElementsByClassName("button")];
const shading = document.getElementById("shading");
const popUp = document.getElementById("popUp");
const popP = document.getElementById("p");
const popH = document.getElementById("h");

function showPopUp(event, buttonNum) {
    event.stopPropagation();
    if (!buttonNum) return;
    const parent = buttonNum.parentElement;
    const child = parent.querySelector("h2");
    shading.classList.remove("empty");
    popH.innerHTML = child.innerHTML;

    if (child.innerHTML === "Новость 1") {
        popP.innerHTML = "Новость 1 : Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet asperiores aut nihil! Corporis debitis labore fugiat id, eligendi ratione veritatis!";
    } else if (child.innerHTML === "Новость 2") {
        popP.innerHTML = "Новость 2 : Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet asperiores aut nihil! Corporis debitis labore fugiat id, eligendi ratione veritatis!";
    } else if (child.innerHTML === "Новость 3") {
        popP.innerHTML = "Новость 3 : Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet asperiores aut nihil! Corporis debitis labore fugiat id, eligendi ratione veritatis!";
    }
}

function closePopUp(event) {
    shading.classList.add("empty");
}

buttons.forEach(element => {
    element.addEventListener("click", (event) => showPopUp(event, element));
});

window.addEventListener("click", closePopUp);
popUp.addEventListener("click", showPopUp);