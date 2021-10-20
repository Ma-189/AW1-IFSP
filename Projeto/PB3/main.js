const icon = document.getElementById('icon');
let nav = document.getElementById ('nav');

icon.addEventListener('click', () => {
    if(nav.style.left === '0rem') {
        nav.style.left = '-21rem';
    }
    else {
        nav.style.left = '0rem';
    }
})

function countText() {
    let text = document.form_main.cont.value;
    document.getElementById('cDisplay').innerText = text.replace(/\s/g, '').length;
    document.getElementById('pDisplay').innerText = text.split(/\s+/).length;
    document.getElementById('lDisplay').innerText = text.split(/\n/).length;
}

const t = document.getElementById('texto')
const result = document.getElementById('resultado')

function maiuscula() {
    result.innerText = t.value.toUpperCase()
}

function minuscula() {
    result.innerText = t.value.toLowerCase()
}

function primeiraLetrap() {
    result.innerText = t.value.toLowerCase().replace(/(?:^|\s)\S/g, function(a) {
        return a.toUpperCase();
    });

    return result;
}

function primeiraLetraf() {
    result.innerText = t.value.toLowerCase().charAt(0).toUpperCase() + t.value.slice(1);
}
    