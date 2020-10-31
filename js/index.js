const ozi = document.querySelector('.ozitag');
const burger = document.querySelector('.ozitag__burger');
const navList = document.querySelector('.ozitag__navlist');
const iconDrop = document.querySelectorAll('.js-icon-drop');

// iconDrop.addEventListener('click', openAccordion)

// const openAccordion = (event) => {
//     let icon = event.target;
//     let wrap = icon.closest('.wrap');
//     let accordion = wrap.querySelector('.accordion');
//
//     accordion.classList.toggle('opened');
//     if (icon.style.transform = 'rotate(0)') {
//         icon.style.transform = 'rotate(180deg)';
//     } else if (icon.style.transform = 'rotate(180deg)') {
//         icon.style.transform = 'rotate(0)';
//     }
//     event.preventDefault();
// 

const closeAcc = () => {
    const openedAcs = document.querySelectorAll('.opened');

    openedAcs.forEach(item => {
        item.classList.remove('opened');

        if(item.closest('.level-2')) {
            item.closest('.level-2').classList.add('opened')
        }
    })
}

iconDrop.forEach(item => {
    item.addEventListener('click', () => {
        console.log(item);
        closeAcc();
        let parent = item.parentElement;
        let accord = parent.nextElementSibling;
        let activeItem = accord.querySelector('.active');
        accord.classList.toggle('opened');
        item.classList.toggle('opened')
        activeItem.scrollIntoView({ block: "center", behavior: "smooth" });

        // if (accord.classList.contains('.level-3')) {
        //     let activeItem = accord.querySelector('.active');
        //     activeItem.scrollIntoView({ block: "center", behavior: "smooth" });
        // }

        // if(item.style.transform = 'rotate(0deg)') {
        //     item.style.transform = 'rotate(-45deg)';
        // } else if(item.style.transform = 'rotate(-45deg)') {
        //     item.style.transform = 'none';
        // }
    })
})

// function rotateIcon(parent) {
//     console.log(this);
//     this = parent;
//     if (this.style.transform = 'rotate(0deg)') {
//         this.style.transform = 'rotate(180deg)';
//     } else {
//         this.style.transform = 'rotate(0deg)';
//     }
// }




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