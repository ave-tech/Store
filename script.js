// Deteksi sekali saat halaman pertama kali load
window.addEventListener('load', function() {
    // Cek URL apakah sudah ada parameter redirect
    const urlParams = new URLSearchParams(window.location.search);
    
    if (!urlParams.has('redirected')) {
        const isDesktop = window.innerWidth >= 768;
        
        if (isDesktop) {
            // Redirect dengan parameter untuk menghindari loop
            window.location.href = 'dekstop-error.html?redirected=true';
        } else {
            window.location.href = 'index.html?redirected=true';
        }
    }
});
function wa() {window.location.href = 'https://wa.me/+6285881330296';}
function email() {window.location.href = 'mailto:contactavestudiocs@gmail.com';}