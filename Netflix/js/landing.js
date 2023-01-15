let menu = document.querySelector('#menu_bar');
let sign = document.querySelector('.sign_eng');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    sign.classList.toggle('slide');
}

let acc = document.getElementsByClassName("accordion");
let i;
let pan = document.getElementsByClassName("panel")

for(i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");

    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
    })
}

