let hamburger = document.getElementById('label');
let main = document.getElementById('main');

hamburger.addEventListener('click', function(){
    main.classList.toggle("active");
});