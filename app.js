let next = document.getElementById("next");
let prev = document.getElementById('prev');
let current = 0;
let slides = document.querySelectorAll('.slide');
next.addEventListener('click',()=>{
     slides[current].style.display='none'
     current=current+1;
     if(current>slides.length-1){
          current=0;
     }
      
     slides[current].style.display='block'
     
})
prev.addEventListener('click',()=>{
     slides[current].style.display='none'
     current=current-1;
     if(current<0){
          current=slides.length-1;
     }
      
     slides[current].style.display='block'
     
})