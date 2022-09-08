document.addEventListener('DOMContentLoaded', function(event) {

    document.querySelector("#nav-toggle").addEventListener('click',function(e){
        e.preventDefault();

        document.querySelector(".main-nav").classList.toggle("main-nav-mobilehide");

    });

});