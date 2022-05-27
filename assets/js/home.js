// Slider

let prev = document.querySelector('.fa-chevron-left');
let next = document.querySelector('.fa-chevron-right');
let slide = document.querySelector('.wrapper');
let x = 0;

function calculator() {
    let y = x * -100;
    slide.style.left = y + '%';
}

function slider() {
    if (x == 3) {
        calculator(x = 0);
    } else {
        calculator(x++);
    }
}

prev.addEventListener('click', function() {
    if (x != 0) {
        calculator(x--);
    } else {
        calculator(x = 3);
    }
    clearInterval(timer)
    timer = setInterval(slider, 5000);
    timer;
})

next.addEventListener('click', function() {
    if (x != 3) {
        calculator(x++);
    } else {
        calculator(x = 0);
    }
    clearInterval(timer)
    timer = setInterval(slider, 5000);
    timer;
})

let timer = setInterval(slider, 5000);
timer;