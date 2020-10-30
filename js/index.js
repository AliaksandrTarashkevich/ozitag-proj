const ozi = document.querySelector('.ozitag');
const burger = document.querySelector('.ozitag__burger');
const navList = document.querySelector('.ozitag__navlist');


function bgCheck() {
    if (burger.classList.contains('active')) {
        ozi.classList.add('bg-res')
    } else {
        ozi.classList.remove('bg-res');
    }
}

function checkBtn() {
    if (burger.classList.contains('active')) {
        navList.classList.add('show')
    } else {
        navList.classList.remove('show');
    }
}

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    checkBtn();
    bgCheck();
})