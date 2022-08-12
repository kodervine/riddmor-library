// Define global variable
const searchBooksInput = document.querySelector('#search-books');
const borrowBookBtn = document.querySelector('.borrow-book');
const returnBookBtn = document.querySelector('.return-book');
const bookName = document.querySelectorAll('.book-name')

console.log(bookName)

// Array of the books themselves
bookNameArray = []
bookName.forEach(name => {
    const individualBookName = name.innerText;
    bookNameArray.push(individualBookName)
    console.log(bookNameArray)
    return individualBookName
  });


function checkComplete () {
  let ulField = document.getElementById('suggestions');
  searchBooksInput.addEventListener('input', changeAutoComplete);
  ulField.addEventListener('click', selectItem);

  function changeAutoComplete({ target }) {
    let data = target.value;
    ulField.innerHTML = ``;
    if (data.length) {
      let autoCompleteValues = autoComplete(data);
      autoCompleteValues.forEach(value => { addItem(value); });
    }
  }

  function autoComplete(inputValue) {
    // let destination = ["Italy", "Spain", "Portugal", "Brazil"];
    return bookNameArray.filter(
      (value) => value.toLowerCase().includes(inputValue.toLowerCase())
    );
  }

  function addItem(value) {
    ulField.innerHTML = ulField.innerHTML + `<li>${value}</li>`;
  }

  function selectItem({ target }) {
    if (target.tagName === 'LI') {
      searchBooksInput.value = target.textContent;
      ulField.innerHTML = ``;
    }
  }
}

checkComplete()

// Reduce quantity when borrowed
const bookQuantity = document.querySelectorAll('.book-quantity');
bookQuantity.forEach((qty)=> {
  console.log(qty.innerText)
})