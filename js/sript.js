document.addEventListener('DOMContentLoaded', function() {

const nav = document.querySelector('.navbar')

function addShadow() {

    if(window.scrollY >=300) {
        nav.classList.add('shadow-bg')
    } else {
        nav.classList.remove('shadow-bg')
    }
}

    window.addEventListener('scroll', addShadow)
})


const orderBtn = document.querySelector(".order-btn");
const orderBtn1 = document.querySelector(".order-btn1");
const orderBtn2 = document.querySelector(".order-btn2");
const orderBtn3 = document.querySelector(".order-btn3");
const orderBtn4 = document.querySelector(".order-btn4");
const orderBtn5 = document.querySelector(".order-btn5");



function goToForm() {
    window.open("form.html")
}




orderBtn.addEventListener('click', goToForm)
orderBtn1.addEventListener('click', goToForm)
orderBtn2.addEventListener('click', goToForm)
orderBtn3.addEventListener('click', goToForm)
orderBtn4.addEventListener('click', goToForm)
orderBtn5.addEventListener('click', goToForm)

