const myLibrary = [];

function Book(title, author, read, pages) {
  this.title = title;
  this.author = author;
  this.read = read;
  this.pages = pages;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, read, pages) {
  const newBook = new Book(title, author, read, pages);
  myLibrary.push(newBook);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", false, 295);

const container = document.querySelector('.library-container');

function displayBooks() {
  container.innerHTML = "";

  myLibrary.forEach((element, index) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = element.title + " by " + element.author + " | Read: " + element.read;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';

  
    removeBtn.addEventListener("click", () => {
      myLibrary.splice(index, 1) 
      displayBooks();
    });

    newDiv.appendChild(removeBtn);


  const toggleBtn = document.createElement('button');
toggleBtn.textContent = 'Toggle Read';

toggleBtn.addEventListener('click', () => {
  if(element.read === true) {
    element.read = false
  } else {
    element.read =true;
  }
  displayBooks();
})

newDiv.appendChild(toggleBtn)
    container.appendChild(newDiv);


  });
}


displayBooks();


const form = document.querySelector('#submit-btn');

form.addEventListener("click", (event) => {

  event.preventDefault();
 
  const titleInput = document.querySelector("#title").value;
  const authorInput = document.querySelector("#author").value;
  const pagesInput = document.querySelector("#pages").value;
  

  addBookToLibrary(titleInput, authorInput, false, pagesInput);
  
  displayBooks();
});