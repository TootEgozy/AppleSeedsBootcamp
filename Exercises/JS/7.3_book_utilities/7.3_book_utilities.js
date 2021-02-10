// 1. create 2 book objects with properties: name, author, year.
// 2. create an empty object bookUtils (utils = short for utilities).
// 3. add to to the bookUtils object a function getFirstPublished, that recieves 2
// books and returns the book with the smaller year.
// 4. add to to the bookUtils object a function setNewEdition, that recieves a
// book and an edition year and sets a new property latestEdition with the
// edition year, or updates an existing one.
// 5. add to to the bookUtils object a setLanguage function, that recieves a book
// and a language and sets a new property language with the languahe, or
// updates an existing one.
// 6. add to to the bookUtils object a setTranslation function, that recieves a
// book a language and a translator, and sets a new property of translation,
// which is an object that contains the translator and the language.
// 7. add to to the bookUtils object a setPublisher function, that recieves a book
// a name and a location, and sets a new property named publisher, which is an
// object that contains the name and location.
// 8. add to to the bookUtils object a function isSamePublisher, that recieves 2
// books and checks if the publisher name and location are identical in the 2
// books.

let book1 = {
        name:"Flowers",
        author:"Rose Bloom",
        year: 1999,
}

let book2 = {
        name:"Geology101",
        author: "Brock Diggers",
        year: 2003,
}

let bookUtils = {};

bookUtils.getFirstPublished = function(book1, book2) { return (book1.year > book2.year) ? book2 : book1; }
bookUtils.setNewEdition =  function(book, editionYear) { book.latestEdition = editionYear; } 
bookUtils.setLanguage = function(book, lang) { book.language = lang; }
bookUtils.setTranslation = function(book, lang, trans) { book.translation = {translator: trans, language: lang};}
bookUtils.setPublisher = function(book, pubName, bookLocation) { book.publisher = {name: pubName, location: bookLocation};}
bookUtils.isSamePublisher = function(book1, book2) {return (book1.publisher == book2.publisher && book1.location == book2.location);}

bookUtils.getFirstPublished(book1,book2);
bookUtils.setNewEdition(book1, 2001);
bookUtils.setLanguage(book1, "English");
bookUtils.setTranslation(book1, "English", "Fernando Rosi");
bookUtils.setPublisher(book1, "Hanna", "Israel");
bookUtils.isSamePublisher(book1, book2);

console.log(bookUtils);
console.log(book1);
console.log(book2);
