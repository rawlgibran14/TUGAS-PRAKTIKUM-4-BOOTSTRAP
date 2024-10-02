
document.getElementById('contactButton').addEventListener('click', function() {
    alert('Instagram: @raulgbrn__');
});
// Ambil elemen-elemen yang ingin digerakkan
const pengenalanDiri = document.getElementById('pengenalanDiri');
const pengalamanPertama = document.getElementById('pengalamanPertama');
const mataKuliah = document.getElementById('mataKuliah');
const daftarDosen = document.getElementById('daftarDosen');
const temanDekat = document.getElementById('temanDekat');

// Fungsi untuk menambahkan dan menghapus kelas move
function addMoveEffect(element) {
    element.classList.add('move');
    setTimeout(() => {
        element.classList.remove('move');
    }, 300); // Durasi animasi 0.3 detik
}

// Tambahkan event listener untuk klik dan sentuhan
pengenalanDiri.addEventListener('click', () => addMoveEffect(pengenalanDiri));
pengalamanPertama.addEventListener('click', () => addMoveEffect(pengalamanPertama));
mataKuliah.addEventListener('click', () => addMoveEffect(mataKuliah));
daftarDosen.addEventListener('click', () => addMoveEffect(daftarDosen));
temanDekat.addEventListener('click', () => addMoveEffect(temanDekat));
