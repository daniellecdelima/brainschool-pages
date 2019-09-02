function postmaterial_showmodal(){
    var modal = document.getElementById("modal-postmaterial");
    modal.style.display = "block";
}

function postmaterial_closemodal(){
    var modal = document.getElementById("modal-postmaterial");
    modal.style.display = "none";    
}

function load() { 
    var el = document.getElementById("si1"); 
    el.addEventListener("click", postmaterial_showmodal, false); 

    var el = document.getElementById("button-postmaterial"); 
    el.addEventListener("click", postmaterial_closemodal, false); 
} 
document.addEventListener("DOMContentLoaded", load, false);