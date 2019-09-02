function creategroup_showmodal(){
    var modal = document.getElementById("modal-creategroup");
    modal.style.display = "block";    
}

function close_creategroup_modal(){
    var modal = document.getElementById("modal-creategroup");
    modal.style.display = "none";    
}

function load() { 
    var el = document.getElementById("button-creategroup"); 
    el.addEventListener("click", creategroup_showmodal, false); 

    var el = document.getElementById("close-creategroup"); 
    el.addEventListener("click", close_creategroup_modal, false); 
} 

document.addEventListener("DOMContentLoaded", load, false);