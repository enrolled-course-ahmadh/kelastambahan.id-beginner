const tombolWrapper = document.querySelector('.tombol-tombol');
const display = document.querySelector('#display');
tombolWrapper.addEventListener('click', function (e) {
    let tombol = e.target;
    let nilai = tombol.innerText;
    switch (nilai) {
        case 'C':
            display.value = '';
            break;
        case '<':
            display.value = display.value.slice(0, -1);
            break;
        case '=':
            display.value = eval(display.value);
            break;
        case '.':
            if (!display.value.includes('.')) {
                display.value = display.value + nilai;
            }
            break;
        default:
            display.value = display.value + nilai;
            break;
    }
}, false);