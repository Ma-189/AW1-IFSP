const icon = document.getElementById('icon');
let nav = document.getElementById ('nav');

icon.addEventListener('click', () => {
    if(nav.style.left === '0rem'){
       nav.style.left = '-21rem';
    }
    else{
        nav.style.left = '0rem';
    }
})