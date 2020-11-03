const ozi = document.getElementById('ozitag');
const burger = document.getElementById('burger')
const navWrap = document.getElementById('nav-wrap');
const iconDrop = document.querySelectorAll('.js-icon-drop');
// const menu = document.getElementById('menu');

iconDrop.forEach(el => {

    el.addEventListener('click', (event) => {
        openTab(el);
    })

});

function openTab(el) {
    let parentLi = el.parentElement;

    // let navHeight = navWrap.getBoundingClientRect().top;
    // let elHeight = el.getBoundingClientRect().top + - navHeight;
    //
    // menu.scrollTop = elHeight;
    // console.log(menu.scrollTop);

    // const y = el.getBoundingClientRect().top + menu.scrollY;
    // menu.scroll({
    //     top: y,
    //     behavior: 'smooth'
    // });

    if (parentLi.classList.contains('opened')) {
        parentLi.classList.remove('opened');
    } else {
        closeTab(parentLi);
        parentLi.classList.add('opened');
    }
}

function closeTab(el) {

    const ulDropped = el.parentElement.querySelectorAll('.list.opened');

    ulDropped.forEach(elem => {
        elem.classList.remove('opened');
    })
}

function closeAllTabs() {
    const opened = document.querySelectorAll('.list.opened');

    opened.forEach(item => {
        item.classList.remove('opened');
    })
}

function bgCheck() {
    if (burger.classList.contains('active')) {
        ozi.classList.add('bg-res')
    } else {
        ozi.classList.remove('bg-res');
    }
}

function btnCheck() {
    if (burger.classList.contains('active')) {
        navWrap.classList.add('opened')
    } else {
        navWrap.classList.remove('opened');
    }
}

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    btnCheck();
    bgCheck();
    closeAllTabs();
})
