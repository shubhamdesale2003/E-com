let btn = document.querySelector('span');
let NavBar = document.querySelector('.res-nav');
let links = document.querySelector('.link');
let link1 = document.querySelector('.link1');
let link2 = document.querySelector('.link2');
let link3 = document.querySelector('.link3');
let count=0;
btn.addEventListener('click', ()=>{
   
     if(count == 0){
      //  NavBar.style.width="50%";
        NavBar.style.height="50%"
        links.style.display='block';
        link1.style.display='block';
        link2.style.display='block';
        link3.style.display='block';
        count = 1;
     }
     else{
       // NavBar.style.width="0";
        NavBar.style.height="0"
        links.style.display='none';
        link1.style.display='none';
        link2.style.display='none';
        link3.style.display='none';
        count = 0;
     }
  })
