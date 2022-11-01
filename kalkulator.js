const tombolWrapper = document.querySelector('.tombol-tombol');
const display = document.querySelector('#display');
/* use event delegation instead of loop each button to add event on click */
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
            /* javascript able to translate math in string to get result using eval() */
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