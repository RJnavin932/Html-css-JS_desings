
let darkmode = localStorage.getItem('darkmode');

const darkmodeToggle = document.querySelector("#btn");

const enableDarkMode = ()=>{
    document.body.classList.add('darkClass');
    localStorage.setItem('darkmode','enabled');
}

const disableDarkMode = ()=>{
    document.body.classList.remove('darkClass')
    localStorage.setItem('darkmode',null);
}

if(darkmode === 'enabled'){
    enableDarkMode();
}
   darkmodeToggle.addEventListener('click',()=>{
    darkmode = localStorage.getItem('darkmode');
    
    if(darkmode !== 'enabled'){
        enableDarkMode();
    }
    else{
        disableDarkMode();
    }
})

