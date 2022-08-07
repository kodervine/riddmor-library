// Define global variable
const searchBooksInput = document.querySelector('.search-books');
const borrowBookBtn = document.querySelector('.borrow-book');
const returnBookBtn = document.querySelector('.return-book');
const bookDetailsContainer = document.querySelector('.book-details');
const bookDetailsTableRow = document.querySelector('.book-details');
const bookName = document.querySelectorAll('.book-name')

let bookNameArray = [...bookName]
console.log(bookNameArray)

// Search autocomplete for books available
  function changeAutoComplete({target}) {
    let data = target.value;
    bookDetailsTableRow.innerHTML = ``;
    if(data.length){
      let autoCompleteValues = autoComplete(data);
      autoCompleteValues.forEach(value => { addItem(value); });
    }
  }

  function autoComplete(inputValue){
    return bookNameArray.filter((value) => value.toLowerCase().includes(inputValue.toLowerCase()));
  }

  function addItem(value){
    bookDetailsTableRow.innerHTML = bookDetailsTableRow.innerHTML + `<th>${value}</th>`
  }

  function selectItem({ target }){
    if (target.tagName === 'th'){
      bookDetailsTableRow.value = target.textContent;
      ulField.innerHTML = ``;
    }
  }