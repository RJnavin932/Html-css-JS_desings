
let title=document.querySelectorAll('.title');
title.forEach(data =>{
    let currentcontent=data.nextElementSibling;
    data.children[1].innerHTML='+'
    data.addEventListener('click',()=>{
        document.querySelectorAll('.content').forEach(singlecontent=>{
            if(singlecontent !== currentcontent){
                if(singlecontent.classList.contains('show')){
                    singlecontent.classList.remove('show')
                }
                singlecontent.classList.toggle('hide');
                singlecontent.previousElementSibling.children[1].innerHTML='+'
            }
            else{
                singlecontent.previousElementSibling.children[1].innerHTML='-'
                singlecontent.classList.toggle('show');
                if(singlecontent.classList.contains('show')){
                    singlecontent.classList.remove('hide')
                     singlecontent.previousElementSibling.children[1].innerHTML='-'
                }
                else{
                    singlecontent.previousElementSibling.children[1].innerHTML='+'
                }
            }
        })
    })
})