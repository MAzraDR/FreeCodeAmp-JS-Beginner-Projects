const nav_links = document.getElementById('nav-links')
const hambuger = document.getElementById('hamburger')

function toggleMenu() {
    nav_links.classList.toggle("show"); // Tambah/hapus class 'show'
}

hambuger.addEventListener('click', toggleMenu)

