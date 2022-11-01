let karyawan = [
    'Nene',
    'Nana',
    'Nunu'
];
const listKaryawanWrapper = document.querySelector('.list-karyawan');

const btnTambahKaryawan = document.querySelector('button#tambah_karyawan');
btnTambahKaryawan.addEventListener('click', function (e) {
    const input = document.querySelector('#nama');
    tambahKaryawan(input.value);
    tampilKaryawan(listKaryawanWrapper);
    input.value = '';
});

/* use event delegation for button that dynamically added */
listKaryawanWrapper.addEventListener('click', function (e) {
    if (e.target.className.match(/btn-hapus/)) {
        let index = e.target.getAttribute('data-index');
        hapusKaryawan(index);
        tampilKaryawan(listKaryawanWrapper);
    }
    if (e.target.className.match(/btn-edit/)) {
        let index = e.target.getAttribute('data-index');
        let namaBaru = prompt("Inputkan nama baru", karyawan[index]);
        if (namaBaru) {
            updateKaryawan(index, namaBaru);
            tampilKaryawan(listKaryawanWrapper);
        }
    }
}, false);

function tampilKaryawan(wrapper) {
    let content = '';
    /* https://www.w3schools.com/jsref/jsref_entries.asp */
    for (const [index, nama] of karyawan.entries()) {
			content += `<li>${nama} 
                <button class="btn-edit" data-index="${index}">edit</button>
                <button class="btn-hapus" data-index="${index}">hapus</button>
                </li>`;
		}
    if (content) content = `<ul>${content}</ul>`;
    wrapper.innerHTML = content;
}

function tambahKaryawan(nama='') {
    karyawan = [nama, ...karyawan];
}

function updateKaryawan(index, namaBaru='') {    
    if (karyawan[index] !== undefined) {
        karyawan[index] = namaBaru;
    }
}

function hapusKaryawan(index) {
    if (karyawan[index] !== undefined) {
        karyawan.splice(parseInt(index), 1);
    }
}

tampilKaryawan(listKaryawanWrapper, karyawan);