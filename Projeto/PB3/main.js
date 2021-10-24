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

function maiuscula() {
    t.value = t.value.toUpperCase()
}

function minuscula() {
    t.value = t.value.toLowerCase()
}

function primeiraLetrap() {
    t.value = t.value.toLowerCase().replace(/(?:^|\s)\S/g, function(a) {
        return a.toUpperCase();
    });

    return result;
}

function primeiraLetraf() {
    t.value = t.value.toLowerCase().replace(/(?:^|\.|\.\s)\S/g, function(a) {
        return a.toUpperCase();
    });
}

function alternado() {
    t.value = t.value.split("").map((letra,i) =>(i%2)==0 ?
    letra.toUpperCase() : letra.toLowerCase())
    .join("");
}

function inverter() {
    t.value = t.value.split('').reverse().join('');
}

function ordenar() {
    var array = t.value.split(' ');
    array.sort();

    t.value = array.join(' ')
}

