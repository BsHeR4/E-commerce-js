let slides = 0;
let indecators = 0;
const initializeSlider = () => {
    slides = document.querySelectorAll('.card');
    indecators = document.querySelector('.indecators');
    indecators.innerHTML = '';
    for (let index = 0; index < products.length - 2; index++) {
        indecators.innerHTML += `<div class="point${index == 0 ? ' active' : ''}" id=point-${index} onclick="sliderMovment(${index})"></div>`;
    }
}



const activateIndecator = (index) => {
    let activeIndecator = document.querySelector('.point.active');
    let clickedIndecator = document.querySelector(`#point-${index}`);
    activeIndecator.classList.toggle('active');
    clickedIndecator.classList.toggle('active');

    clickedIndecator.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
    });
}

const sliderMovment = (index) => {

    activateIndecator(index);
    slides.forEach((slide) => {
        slide.style.transform = `translateX(calc(-${index * 100}% - ${25 * index}px)`

    });
}

const rightClick = () => {
    let activePoint = document.querySelector('.point.active');
    let pointsNumber = document.querySelectorAll('.point');

    if (activePoint.id == `point-${pointsNumber.length - 1}`)
        return sliderMovment(index = 0);

    for (let index = 0; index < slides.length; index++) {
        if (pointsNumber[index] == activePoint)
            sliderMovment(index + 1);
    }
}

const leftClick = () => {
    let activePoint = document.querySelector('.point.active');
    let pointsNumber = document.querySelectorAll('.point');

    if (activePoint.id == 'point-0')
        return sliderMovment(index = pointsNumber.length - 1);

    for (let index = 0; index < slides.length; index++) {
        if (pointsNumber[index] == activePoint)
            sliderMovment(index - 1);
    }
}