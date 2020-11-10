'use strict';


// tab창 구현
const tabBtn = document.querySelector('.tabTit');
const tabItm = document.querySelectorAll('.tab__item');
document.addEventListener('load', () => {
    console.log('page is fully loaded');
  });

tabBtn.addEventListener('click', (e)=>{
    console.log('adfa')
    const btnOn = document.querySelector('.tab.on');
    e.preventDefault();
   btnOn.classList.remove('on');
    e.target.classList.add('on');
    const target = e.target.dataset.cuisine;
    tabItm.forEach(item => {
        if(target === '*' || target === item.dataset.filter){
            item.classList.remove('invisible');
        } else {
            item.classList.add('invisible');
        }
    });
})

// scroll header
const header = document.querySelector('#header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    const mainContent = document.querySelector('.mainContent');
    if(window.scrollY>headerHeight){
        header.classList.add('on');
    } else if(!mainContent) {
        header.classList.add('on');
    } else{
        header.classList.remove('on');
    }
})

// scroll btn
const mainBtn1 = document.querySelector('.btn1');
const mainBtn2 = document.querySelector('.btn2');
const plusBtn = document.querySelector('#plusBtn');

// document.addEventListener('scroll', ()=>{
//     if(window.scrollY>headerHeight/2){
//     }
// })

mainBtn1.addEventListener('click', (e)=>{
    console.log('daf')
    plusBtn.classList.add('on');
    e.target.style.display='none';
})
mainBtn2.addEventListener('click', ()=> {
    plusBtn.classList.remove('on');
})