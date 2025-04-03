const envelope = document.querySelector('.envelope-wrapper');
const letter = document.querySelector('.envelope > .letter');
const buttonContainer = document.querySelector('.button-container');

buttonContainer.style.display = 'none'; // Pastikan tombol tidak terlihat saat halaman dimuat
    
envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
    
    if (envelope.classList.contains('flap')) {
        // Animasi surat keluar (amplop terbuka)
        setTimeout(() => {
            letter.classList.add('after-flap');
            setTimeout(() => {
                letter.style.zIndex = '2500'; // Ubah z-index setelah animasi selesai
                // Kirim event ketika animasi surat selesai
            }, 1000); // Waktu untuk mengubah z-index
        }, 1100); // Waktu awal sebelum animasi dimulai
        envelope.style.pointerEvents = "none"; // Mencegah interaksi dengan amplop selama transisi
    }
});

// Menunggu sampai animasi surat selesai
setTimeout(() => {
    // Menampilkan tombol NEXT setelah animasi surat selesai
    buttonContainer.style.display = 'inline'; // Tampilkan tombol
}, 7000); // Tunggu selama 3500ms (sesuaikan dengan durasi animasi surat)