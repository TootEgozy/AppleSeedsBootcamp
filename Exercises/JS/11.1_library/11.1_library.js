var library = [
    {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
    },
    {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true
    },
    {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false
    }
    ];


// Write a JavaScript function that receives the following library object as an
// input and displays the books that can be read (the reading status is true).
// Log the book name, author name and reading status.

//Using "filter" method to filter in only readingStatus == "true" objects.

function isReading (book) {
    return book.readingStatus;
}

const readableBooks = library.filter(book => isReading(book));


//A function that logs each property in an object
function logProp (obj) {
    for (property in obj) console.log(property+": "+obj[property]);
}

readableBooks.forEach(logProp);