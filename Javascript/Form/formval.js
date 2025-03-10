
let demoform=document.getElementById('demoform');
let pass;

demoform.addEventListener('submit',(event)=>{
    event.preventDefault();
    let formdata=new FormData (demoform);
    isvalid=true;

    for(let [key , value] of formdata.entries()){
        
        let  errorElement=document.getElementById (`${key}-error`);
       
        errorElement.innerHTML=''

        if(key === 'Password'){
            pass = value;             
        }
        if(key === 'RetypePassword'){
            if(pass !== value){
                isvalid=false
                errorElement.innerHTML=(`${key} is not match`)
                
            }  
       
        }   
    }

    for(let [key , value] of formdata.entries()){

        console.log(key , value);
        let errorElement=document.getElementById (`${key}-error`)

        errorElement.innerHTML=''
        if(value === ''){
            console.log(key,'is empty');
            isvalid=false;
            errorElement.innerHTML=`${key} is required`
        }   
    }

    let genderCheck=document.querySelectorAll("input[type='radio']:checked")
    if(genderCheck.length===0){
        isvalid=false;
        console.log("gender is empty");
        document.getElementById('gender-error').innerHTML='gender is required'
        
    }

    let Study=document.querySelectorAll("input[name='Study']:checked")
    if(Study.length === 0){
        isvalid=false;
        console.log("Study is empty");
        document.getElementById('Study-error').innerHTML='Study is required'
        
    }
console.log('All field fill' , isvalid);

})
