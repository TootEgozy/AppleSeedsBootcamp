// 1. Create an object that represents a book. It should have
// 4-5 properties that make sense for a book to have.
// 2. Then write a function that has one argument, a book,
// that will return the following description from your book
// object:
// `The book <book name> was written by <author name> in
// the year <publishing yeary

let myBook = {
                name: "Sunflowers",
                numOfPages: 450,
                author: "Emma Winthis",
                hasPictures: false,
                genre: "sci-fi", 
                publishingYear: 2012,
            }

bookProperties = (book) => console.log(`The book ${book.name} was written by ${book.author} in the year ${book.publishingYear}`);

bookProperties(myBook);