const box=document.getElementById('box');
const code=document.getElementById('code');
const btn=document.getElementById('color');
 

function colorgenerate(){
    let values ='0123456789abcdef';
    let color='#';

  for(let i=0;i<6;i++){
    let randomvalue=Math.floor(Math.random()*16);
    
    color += values[randomvalue];  
    // console.log(color);
}
// console.log(color);  
code.innerHTML=color;
box.style.backgroundColor=color;
}
btn.addEventListener('click',colorgenerate);