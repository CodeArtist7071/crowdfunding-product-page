function toggle(){
    var x = document.getElementById("right-navbar");
    if(window.matchMedia("max-width:700px")){
        if(x.style.display === "none"){
            x.style.display = "block"
        }else{
            x.style.display = "none"
        }
    }
   

}
