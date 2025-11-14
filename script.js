function about() {
    window.location.href = 'about.html';
}
function avestore() {
    window.location.href = 'index.html';
}
function layanan() {
    window.location.href = 'layanan.html';
}
let isShown = false;

function showlayanan() {
    const button = document.querySelector(".dropdown.type-white");
    const items = document.querySelectorAll(".dropdown.menu-item");

    if (!isShown) {
        // Ubah tulisan tombol
        button.textContent = ">Tutup<";

        items.forEach((item, i) => {
            item.classList.remove("hidden", "close");
            item.style.animationDelay = `${i * 0.15}s`;
            item.classList.add("show");
        });

        isShown = true;
    } else {
        // Ubah tulisan tombol
        button.textContent = ">Cek Disini<";

        items.forEach((item, i) => {
            item.classList.remove("show");
            item.style.animationDelay = `${i * 0.1}s`;
            item.classList.add("close");

            // sembunyikan setelah animasi selesai
            setTimeout(() => {
                item.classList.add("hidden");
            }, 400 + (i * 100));
        });

        isShown = false;
    }
}
// Ambil semua elemen kecuali yang punya class no-reveal
const elements = document.querySelectorAll("body *:not(.no-reveal)");
elements.forEach(el => el.classList.add("reveal-init"));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Hitung delay berdasarkan urutan untuk efek stagger
      const index = Array.from(elements).indexOf(entry.target);
      const delay = index * 0.05;
      entry.target.style.animation = `fadeUp 0.6s ease forwards ${delay}s`;
      // Setelah animasi dijalankan, kita unobserve supaya tidak diulang
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2 // elemen terlihat 20% sudah trigger
});

elements.forEach(el => observer.observe(el));
function wa(){window.location.href = 'https://wa.me/+6285881330296';}
function email(){window.location.href = 'mailto:contactavestudiocs@gmail.com';}
function dc(){window.location.href = 'https://discord.gg/VWe5vZSx';}
function ig(){window.location.href = 'https://www.instagram.com/ave.studio_01';}

//(function () {
    //const isMobile = /android|iphone|ipad|ipod|blackberry|windows phone|mobile/i.test(navigator.userAgent);

    //if (isMobile) {
        // Ganti dengan lokasi file peringatan kamu
        //window.location.href = "no-mobile.html";
    //}
//})();