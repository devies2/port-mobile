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
const mainBtn3 = document.querySelector('.btn3');
const mainBtn4 = document.querySelector('.btn4');
const plusBtn = document.querySelector('#plusBtn');
const btnWrap1 = document.querySelector('.btn-wrap1')
const btnWrap2 = document.querySelector('.btn-wrap2')
const btnWrap3 = document.querySelector('.btn-wrap3')
const btnWrap4 = document.querySelector('.btn-wrap4')
// document.addEventListener('scroll', ()=>{
//     if(window.scrollY>headerHeight/2){
//     }
// })

mainBtn1.addEventListener('click', (e)=>{
    console.log('daf')
    plusBtn.classList.add('on');
    btnWrap1.style.display='none';
})
mainBtn2.addEventListener('click', ()=> {
    plusBtn.classList.remove('on');
    btnWrap1.style.display='block';
})

mainBtn3.addEventListener('click', ()=>{
    btnWrap3.classList.toggle('active');
})

mainBtn4.addEventListener('click', ()=>{
    btnWrap4.classList.toggle('active');
})