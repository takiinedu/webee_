// selection2 click
let number_item = 2;
const selection2 = document.querySelector("#selection2__item2");
const selection3 = document.querySelector("#selection2__item3");
const selection4 = document.querySelector("#selection2__item4");
let number_array = [0 , 0 , 0];
function itemclick(){
    if (number_array[number_item - 2] == 0) {
        number_array[number_item - 2] = 1;
    }else{
        number_array[number_item - 2] = 0;
    }
    for (let i = 0; i < 3; i++) {
        if (number_array[i] == 1) {
            document.querySelector(`#selection2__item${i + 2}`).style.backgroundColor = "#3B3B3B";
            document.querySelector(`#selection2__item${i + 2}`).style.color = "white";
        }else{
            document.querySelector(`#selection2__item${i + 2}`).style.backgroundColor = "transparent";
            document.querySelector(`#selection2__item${i + 2}`).style.color = "#666666";
        }
    }
}

selection2.addEventListener('click', function () {
    number_item = 2;
    itemclick();
});
selection3.addEventListener('click', function () {
    number_item = 3;
    itemclick();
});
selection4.addEventListener('click', function () {
    number_item = 4;
    itemclick();
});