let slides = document.querySelectorAll('.slider-element');
console.log(slides);
let slider = [];
for (let i = 0; i < slides.length; i++){
    slider[i] = slides[i].src;
    slides[i].remove();
}
console.log(slider);

let step = 0;
let offset = 0;

function draw(){
    let img = document.createElement('img');
    img.src = slider[step];
    img.classList.add('slider-element');
    img.style.left = offset*100 + '%';
    document.querySelector('.slider').appendChild(img);
    step++;
    if (step == slider.length){
        step = 0;
    }
    else {
        step++;
    }
    offset = 1;
}

function next(){
    let slides2 = document.querySelectorAll('.slider-element');
    let offset2 = 0;
    for (let i = 0; i < slides2.length; i++){
        slides2[i].style.left = offset2*100 - 100 + '%';
        offset2++;
        setTimeout(function(){
            slides2[0].remove();
            draw();
        }, 1000);
    }
}
draw(); draw();
