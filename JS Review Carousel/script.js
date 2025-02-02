const btn_before = document.getElementById('btn-before')
const btn_next = document.getElementById('btn-next')

let rev = 0
    carousel(rev)

    function previousReview() {
        const reviews = document.getElementsByClassName('card');
        rev = (rev - 1 + reviews.length) % reviews.length        
        carousel(rev);
    }
    
    function nextReview() {
        const reviews = document.getElementsByClassName('card');
        rev = (rev + 1) % reviews.length;         
        carousel(rev);
    }

    function carousel(index) {
        const reviews = document.getElementsByClassName('card');
    
        // Sembunyikan semua elemen terlebih dahulu
        for (let i = 0; i < reviews.length; i++) {
            reviews[i].style.display = 'none';
        }
    
        // Tampilkan hanya elemen dengan index `rev`
        reviews[index].style.display = 'flex';
    }

btn_before.addEventListener('click', previousReview)
btn_next.addEventListener('click', nextReview)