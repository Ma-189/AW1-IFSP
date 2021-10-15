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

function countText() {
    let text = document.form_main.cont.value;
    document.getElementById('cDisplay').innerText = text.length;
    document.getElementById('pDisplay').innerText = text.split(/\s+/).length;
    document.getElementById('eDisplay').innerText = text.split(/[\s]+/).length;
    document.getElementById('lDisplay').innerText = text.split(/\n/).length;
}
