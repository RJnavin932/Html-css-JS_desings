var increment=document.getElementById('incr');
var decrement=document.getElementById('decr');
var reset=document.getElementById('reset');
var num=document.getElementById('num');

let number=parseInt(num.innerText,10);

increment.addEventListener('click',()=>{
    num.innerText=number++;
})
decrement.addEventListener('click',()=>{
    num.innerText=number--;
})
reset.addEventListener('click',()=>{
    number=0;
    num.innerText=number;
})
