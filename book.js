let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
// }

const gridOuter = document.querySelector('.grid-outer')

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');

const subBtn = document.querySelector('.submit')
const printBtn = document.querySelector('.print')




function addBookToLibrary() {
    let newBook;
    if (title.value !== '' && author.value !== '' && pages.value !== '') {
        newBook = new Book(title.value, author.value, pages.value, read.checked)
        // myLibrary.push(newBook)
        clearInputs();
    }
    const newCard = document.createElement('div')
    newCard.classList.add('card')

    const newTitle = document.createElement('p');
    newTitle.classList.add('title');
    newTitle.innerText = `"${newBook.title}"`;

    const newAuthor = document.createElement('p');
    newAuthor.classList.add('author');
    newAuthor.innerText = newBook.author;

    const newPages = document.createElement('p');
    newPages.classList.add('pages');
    newPages.innerText = `${newBook.pages} pages`


    const newReadBox = document.createElement('button');
    newReadBox.classList.add('readBox');
    if (newBook.read == true) {
        newReadBox.innerText = 'Read';
        newReadBox.classList.add('beenRead');
    } else {
        newReadBox.innerText = 'Not read';
        newReadBox.classList.add('notRead');
    }
    newReadBox.addEventListener('click', () => {
        if (newReadBox.classList.contains('beenRead')) {
            newReadBox.innerText = 'Not read';
            newReadBox.classList.remove('beenRead');
            newReadBox.classList.add('notRead');
        } else {
            newReadBox.innerText = 'Read';
            newReadBox.classList.remove('notRead');
            newReadBox.classList.add('beenRead')
        }
    })


    const newRemove = document.createElement('button');
    newRemove.classList.add('remove-btn');
    newRemove.innerText = 'Remove';

    newCard.appendChild(newTitle);
    newCard.appendChild(newAuthor);
    newCard.appendChild(newPages)
    newCard.appendChild(newReadBox);
    newCard.appendChild(newRemove);
    gridOuter.appendChild(newCard);

    const lastCard = gridOuter.lastChild;
    lastCard.lastChild.addEventListener('click', () => {
        gridOuter.removeChild(gridOuter.lastChild)
    })
}

function clearInputs() {
    title.value = '';
    author.value = '';
    pages.value = '';
    read.checked = false;
}

subBtn.addEventListener('click', addBookToLibrary)



