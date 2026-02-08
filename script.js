const myLibrary = [];

function Book(title, author, read, pages) {
  this.title = title
  this.author = author
  this.read = read
  this.pages = pages
  this.id = crypto.randomUUID()
}

function addBookToLibrary(title, author, read, pages) {
const newBook = new Book(title, author, read, pages)
myLibrary.push(newBook)
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", false, 295)

console.log(myLibrary)

const container = document.querySelector('.library-container')

function displayBooks() {
  myLibrary.forEach((element) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = element.title
    container.appendChild(newDiv);

})
}

displayBooks();