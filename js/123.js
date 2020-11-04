// alert('tkd')
var e = document.getElementById('plusBtn');
console.log(e);
// 히히 된다
var btn = document.getElementsByClassName('btn-wrap');
var a = document.getElementsByClassName('btn-wrap')[0];
var b = document.getElementsByClassName('btn-wrap')[1];
var b1 = document.querySelector('.btn1')
var b2 = document.querySelector('.btn2')
var c = document.getElementsByClassName('btn-wrap')[2];
var d = document.getElementsByClassName('btn-wrap')[3];

// 클릭하면 다음 요소 사라지는 함수
// 마지막 순서라면 처음 요소가 다시 나타나게
// for(var i =0; i<=btn.length; i++){
//     btn[i].addEventListener('click', function(){
//         if(this.nextElementSibling==null){
//             this.style.display='none';
//             this.parentElement.children[0].style.display='block';
//         } else {
//             this.style.display='none';
//             this.nextElementSibling.style.display='block';
//         }
//     })
// }

// for(var i =0; i<=btn.length; i++){
//     btn[i].addEventListener('click', function(){
//         if(this.nextElementSibling==null){
//             this.style.display='none';
//             this.parentElement.children[0].style.display='block';
//         } else {
//             this.style.display='none';
//             this.nextElementSibling.style.display='block';
//         }
//     })
// }
console.log(btn[0])

// btn[0].addEventListener('click', function(){
//     // this.nextElementSibling.style.display='block'
//     console.log(this.parentElement.children)
//     for(var i = 0; i<this.parentElement.children.length; i++){
//         this.parentElement.children[i].style.display='block';
//         this.parentElement.children[i].style.backgroundColor='rgba(0,0,0,0.1';
//     }
//     this.style.display='none';
// })

// 토글이 더 낫지않을까?
// 사실 on으로 제어하는게 제일 간단하긴해...
btn[0].addEventListener('click', function(){
    // this.style.display = 'none';
    // var btn2 = this.nextElementSibling;
    // btn2.style.display='block'
    // btn2.addEventListener('click', function(){
    //     this.nextElementSibling.style.display='block'
    //     this.nextElementSibling.nextElementSibling.style.display='block'
    //     // this.nextElementSibling.style.transition='all 10s';
    //     this.nextElementSibling.style.transform='translateY(-80px)'
    //     this.nextElementSibling.nextElementSibling.style.transform='translateY(-160px)'
    //     console.log(this.nextElementSibling.nextElementSibling)
    // })
    this.classList.toggle('on');
})

// btn[0].addEventListener('click', function(){

// }