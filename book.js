let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');

const subBtn = document.querySelector('.submit')
const printBtn = document.querySelector('.print')

function addBookToLibrary() {
    let newBook = new Book(title.value, author.value, pages.value, read.value)
    myLibrary.push(newBook)
    clearInputs();
}
function clearInputs() {
    title.value = '';
    author.value = '';
    pages.value = '';
    read.value = '';
}

subBtn.addEventListener('click', addBookToLibrary)

printBtn.addEventListener('click', () => {
    console.log(myLibrary)
    for (let book of myLibrary) {
        console.log(book)
    }
}
)


