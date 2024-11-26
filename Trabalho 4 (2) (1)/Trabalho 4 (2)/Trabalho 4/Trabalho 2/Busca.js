
function filterBooks() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase(); 
    const bookList = document.getElementById('bookList');
    const books = bookList.getElementsByClassName('book-item');

    
    for (let i = 0; i < books.length; i++) {
        const book = books[i];
        const textValue = book.textContent || book.innerText; 

        
        if (textValue.toLowerCase().includes(filter)) {
            book.style.display = ""; 
        } else {
            book.style.display = "none"; 
        }
    }
}

        function toggleMenu() {
            const menu = document.querySelector('.menu');
            menu.classList.toggle('active');
        }
        