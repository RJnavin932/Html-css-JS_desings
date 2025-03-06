let Tamil=document.getElementById('Tamil');
let English=document.getElementById('English');
let Maths=document.getElementById('Maths');
let Science=document.getElementById('Science');
let  Social=document.getElementById('Social');
let total=document.getElementById('total');
let show_total=document.getElementById('show_total');

total.addEventListener('click',function marks(){
      let tvalue=Number(Tamil.value);
      let Engvalue=Number(English.value);
      let Matvalue=Number(Maths.value);
      let Scivalue=Number(Science.value);
      let Socvalue=Number(Social.value);

      let result=tvalue+Engvalue+Matvalue+Scivalue+Socvalue;

      show_total.innerHTML=result;

});

