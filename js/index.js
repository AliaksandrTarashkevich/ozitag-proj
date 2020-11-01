const ozi = document.querySelector('.ozitag');
const burger = document.querySelector('.ozitag__burger');
const navList = document.querySelector('.ozitag__navlist');


const iconDrop = document.querySelectorAll('.js-icon-drop');

iconDrop.forEach( el => {

	el.addEventListener('click', () => {
		openTab(el);
    })	

});

function openTab(el){
	let wrap = el.parentElement;
	let parentLi = wrap.parentElement;
	let ulDrop = wrap.nextElementSibling;
 
	if(ulDrop.classList.contains('opened')){
		parentLi.classList.remove('active');
		wrap.classList.remove('up');
		ulDrop.classList.remove('opened');
	} else {

		closeAllTab(parentLi);
		parentLi.classList.add('active');
		wrap.classList.add('up');
		ulDrop.classList.add('opened');
	}
}

function closeAllTab(el) {

	const ulDroped = el.parentElement.querySelectorAll('.ul-drop.opened');
	const activeLi = el.parentElement.querySelectorAll('.dropdown.active');

	activeLi.forEach(elem => {
		elem.classList.remove('active');
		elem.children[0].classList.remove('up');
	})


	ulDroped.forEach(elem => {
		elem.classList.remove('opened');
	})
}

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