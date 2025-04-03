const envelope = document.querySelector('.envelope');
const buttonContainer = document.querySelector('.button-container');
const glass = document.querySelector('.glass');
const shine = document.querySelector('#shine');
const letter = document.querySelector('.envelope > .letter');

// Sembunyikan tombol dan surat pada awalnya
buttonContainer.style.display = 'none';
letter.style.display = 'none';

glass.addEventListener("click", function () {
    // Menambahkan animasi untuk shine dan glass
    this.classList.add("animated");
    shine.classList.add("animated");

    // Menunggu animasi selesai, kemudian menampilkan amplop dengan animasi
    setTimeout(() => {
        envelope.style.display = 'block'; // Menampilkan envelope
        envelope.classList.add("slide-in"); // Menambahkan animasi slide-in
    }, 1000); // Delay untuk efek click pada glass

    // Setelah animasi selesai, munculkan tombol "Next"
    setTimeout(() => {
        buttonContainer.style.display = 'flex'; // Munculkan tombol
    }, 1200); // Delay agar animasi envelope selesai dulu
});

// Animasi surat keluar
glass.addEventListener('click', function () {
    setTimeout(() => {
        letter.style.display = 'block'; // Menampilkan surat setelah envelope
        letter.classList.add('pop-out'); // Animasi surat keluar
    }, 1000); // Delay agar surat muncul setelah amplop terlihat
});
