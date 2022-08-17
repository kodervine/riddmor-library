// Define global variable
const searchBooksInput = document.querySelector('#search-books');
const borrowBookBtn = document.querySelector('.borrow-book');
const returnBookBtn = document.querySelector('.return-book');
const bookName = document.querySelectorAll('.book-name')

// console.log(bookName)

// Array of the books themselves
bookNameArray = []
bookName.forEach(name => {
    const individualBookName = name.innerText;
    bookNameArray.push(individualBookName)
    // console.log(bookNameArray)
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
const borrowSuccessMsg = document.querySelector('.borrow-success-msg');
const returnSuccessMsg = document.querySelector('.return-success-msg');
const redSearchAlert = document.querySelector('.red-search-alert');

// Borrow book event listener
borrowBookBtn.addEventListener('click', ()=> {
  // Conditional to validate input
  if(searchBooksInput.value === ''){
    redSearchAlert.classList.remove('display-none')
        setTimeout(()=> {
        redSearchAlert.classList.add('display-none')}, 1000)
        searchBooksInput.value = '';
  }

  // Search for books proper
  bookName.forEach(name => {
    const individualBookName = name.innerText;

    // Variable to get each quantity
    let bookQty = name.nextElementSibling.nextElementSibling

    // Check if search input is equals any individualBookName and minus quantity
      if(searchBooksInput.value === individualBookName){
        // newBookQty = bookQty.innerText - 1;
        // bookQty.innerText = newBookQty

        if (bookQty.innerText < 1){
          // Conditional if Book has finished
          alert('Book currently not available')
        } else {
           bookQty.innerText = bookQty.innerText - 1;
          
          //Set to local storage
          let localBookQty= {
            qty: bookQty.innerText
          }

          let localBookQty_serialized = JSON.stringify(localBookQty)
          localStorage.setItem("bookQuantityStorage", localBookQty_serialized)

          //  Display success message and remove class after few seconds
          borrowSuccessMsg.classList.remove('display-none')
           setTimeout(()=> {
            borrowSuccessMsg.classList.add('display-none')
           }, 2000)
          searchBooksInput.value = '';
        }
      }
  });
})

// Return book event listener
returnBookBtn.addEventListener('click', ()=> {
  // Conditional to validate input
  if(searchBooksInput.value === ''){
    redSearchAlert.classList.remove('display-none')
      setTimeout(()=> {
      redSearchAlert.classList.add('display-none')}, 1000)
      searchBooksInput.value = '';
  }

  // Search book proper
  bookName.forEach(name => {
    const individualBookName = name.innerText;

    // Variable to get each quantity
    let bookQty = name.nextElementSibling.nextElementSibling

    // Check if search input is equals any individualBookName and minus quantity
      if(searchBooksInput.value === individualBookName){
        // newBookQty = bookQty.innerText - 1;
        // bookQty.innerText = newBookQty

        if (bookQty.innerText < 1){
          // Book has finished
          alert('Book currently not available')
        } else {
           bookQty.innerText = parseInt(bookQty.innerText) + 1;
           //  Display success and remove after few seconds
          returnSuccessMsg.classList.remove('display-none')
           setTimeout(()=> {
            returnSuccessMsg.classList.add('display-none')
           }, 2000)
           searchBooksInput.value = '';
        }
        console.log(individualBookName)
        console.log(bookQty)
      }
  });
})

// trying to make a function for both

// // Borrow and return book function
// function borrowReturnBooks(successmsg, value, num){
//   bookName.forEach(name => {
//     const individualBookName = name.innerText;

//     // Variable to get each quantity
//     let bookQty = name.nextElementSibling.nextElementSibling

//     // Check if search input is equals any individualBookName and minus quantity
//       if(searchBooksInput.value === individualBookName){
//         // newBookQty = bookQty.innerText - 1;
//         // bookQty.innerText = newBookQty

//         if (bookQty.innerText < 1){
//           // Conditional if Book has finished
//           alert('Book currently not available')
//         } else {
//            bookQty.innerText = value.innerText ${num} 1;
//           //  Display success and remove after few seconds
//           successmsg.classList.remove('display-none')
//            setTimeout(()=> {
//             successmsg.classList.add('display-none')
//            }, 2000)
//         }
//       }
//   });
// }


// borrowBookBtn.addEventListener('click', (borrowSuccessMsg, bookQty.innerText - 1 )=> {
  
// })