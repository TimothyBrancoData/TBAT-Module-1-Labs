
const bookLibrary = [];

const book = {
    "title": "Hunger Games Cathcing Fire",
    "description": `Catching Fire is a 2009 dystopian young adult fiction novel by the American novelist Suzanne Collins, the second book in The Hunger Games series`,
    "author": "Suzanne Collins",
    "num_of_pages": 467,
    "online": true
}

book.description = "Catching Fire is Nothing new";
bookLibrary.push(book);
bookLibrary.push({
    "title": "Death Watch",
    "description": `About Death`,
    "author": "Reed Grimes",
    "num_of_pages": 345,
    "online": false
})

console.log(book);
console.log(book.title);
console.log(book.description);
console.log(book.author);
console.log(book.num_of_pages);
console.log(book.online);
console.log(bookLibrary);

console.log('')

bookLibrary.forEach((item) => console.log(item.author));

// NOTE Module 1 Lab Exercise 6

// - Try creating a json object variable for a book. The book should have a title, description, author and number of pages. DONE
// - Try printing these object property values in your console individually and via the whole book object. DONE
// - Update the description of the book. DONE