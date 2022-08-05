const navslide =()=>{
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const btn = document.querySelectorAll('.select-reward');
    const thanks = document.getElementById("thanks");
    const got_btn = document.getElementById("got-it");
    hamburger.addEventListener('click',()=>{
      nav.classList.toggle("nav-active");
      hamburger.classList.toggle('toggle');
    });
   btn.forEach((e,index)=>{
    e.addEventListener('click',()=>{
    thanks.style.display = "block"
    });
   });
   got_btn.addEventListener('click',()=>{
    thanks.style.display = "none"
   })
  }
  navslide();

