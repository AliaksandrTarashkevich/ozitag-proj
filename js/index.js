// const ozi = document.querySelector('.ozitag');
// const burger = document.querySelector('.ozitag__burger');
// const navList = document.querySelector('.ozitag__navlist');
//
//
// const iconDrop = document.querySelectorAll('.js-icon-drop');
//
// iconDrop.forEach(el => {
//
//     el.addEventListener('click', (event) => {
//         openTab(el);
//     })
//
// });
//
// function openTab(el) {
//     let wrap = el.parentElement;
//     let parentLi = wrap.parentElement;
//     let ulDrop = wrap.nextElementSibling;
//
//     if (ulDrop.classList.contains('opened')) {
//         parentLi.classList.remove('active');
//         ulDrop.classList.remove('opened');
//     } else {
//         closeAllTab(parentLi);
//         parentLi.classList.add('active');
//         ulDrop.classList.add('opened');
//     }
// }
//
// function closeAllTab(el) {
//
//     const ulDropped = el.parentElement.querySelectorAll('.ul-drop.opened');
//     const activeLi = el.parentElement.querySelectorAll('.dropdown.active');
//
//     activeLi.forEach(elem => {
//         elem.classList.remove('active');
//     })
//
//     ulDropped.forEach(elem => {
//         elem.classList.remove('opened');
//     });
// }
//
// function bgCheck() {
//     if (burger.classList.contains('active')) {
//         ozi.classList.add('bg-res')
//     } else {
//         ozi.classList.remove('bg-res');
//     }
// }
//
// function checkBtn() {
//     if (burger.classList.contains('active')) {
//         navList.classList.add('show')
//     } else {
//         navList.classList.remove('show');
//     }
// }
//
// burger.addEventListener('click', () => {
//     burger.classList.toggle('active');
//     checkBtn();
//     bgCheck();
// })

const list = document.querySelectorAll('.list');

function accordion(e){
    e.stopPropagation();
    if(this.classList.contains('opened')){
        this.classList.remove('opened');
    }
    else if(this.parentElement.parentElement.classList.contains('opened')){
        this.classList.add('opened');
    }
    else{
        for(i=0; i < list.length; i++){
            list[i].classList.remove('opened');
        }
        this.classList.add('opened');
    }
}
for(i = 0; i < list.length; i++ ){
    list[i].addEventListener('click', accordion);
}
