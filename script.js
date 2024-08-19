let toggle = document.getElementById('toggleDark');

let body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-btightness-high-fill')){
        body.style.background = "white";
        body.style.color ='black';
        body.style.transition = '2s';
    }
    else{
        body.style.background = "black";
        body.style.color ='white';
        body.style.transition = '2s';
    }
})