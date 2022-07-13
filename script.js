'use strict';
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"],
       button = document.querySelector('#btn'),
       color = document.querySelector(".color");

button.addEventListener('click', ()=>{
    const random = getRandomNum(colors);
    document.body.style.backgroundColor = colors[random];
    color.textContent = colors[random];
});

function getRandomNum(arr) {
    return Math.floor(Math.random() * arr.length);
};
