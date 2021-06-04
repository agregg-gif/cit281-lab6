class Book {
    constructor(title, author, pubDate, isbn) {
      this.title = title;
      this.author = author;
      this.pubDate = pubDate;
      this.isbn = isbn;
    }
  }

  class Library {
    constructor(name) {
      this._name = name;
      this._books = [];
    }
    get books() {
      // Return copy of books
      return JSON.parse(JSON.stringify(this._books));
    }
    get count() {
      return this._books.length;
    }
    addBook(book = {}) {
      const { title = "", author = "", pubDate = "", isbn = ""} = book;
      if (title.length > 0 && author.length > 0) {
        const newBook = { title, author, pubDate, isbn };
        this._books.push(newBook);
      }
    }
    listBooks() {
      for (const book of this._books) {
        const {title, author, pubDate, isbn} = book;
        console.log(`Title: ${title}, Author: ${author}, PubDate: ${pubDate}, ISBN: ${isbn}`)
      }
    }
    deleteBook(isbn) {
        // find the book to remove(via isbn)
        //loop over all books
        //filter
        //move to step 2 once a condition has been met (this condition may be equal to the filter)
        //remove the book from the "this._books"

        let indexOfBookToRemove = null; //step 1
        for (let index = 0; index < this._books.length; index++) {// step 2
            let currentBook = this._books[index];
            if (currentBook.isbn == isbn) {
                indexOfBookToRemove = index; //step 4
                break; //step 4*
            }
        }
        //move on and use indexOfBookToRemove in the subsequent removal process
        this._books.splice(indexOfBookToRemove, 1);
    }
  }
  
const myBook = new Book("AP Calc Crash Course", "Banu et al.", "01/01/2013", "5478390234");
const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018", "54738902345");
const crawdadsSing = new Book("Where the Crawdads Sing", "Delia Owens", "06/14/2018", "09875432");
const everything = new Book("Everything I Never Told You", "Celeste Ng", "05/12/2015", "12347890");

const uoLibrary = new Library("Knight Library");

uoLibrary.addBook(myBook);
uoLibrary.addBook(atomicHabits);
uoLibrary.addBook(crawdadsSing);
uoLibrary.addBook(everything);
uoLibrary.listBooks();

console.log("Deleting Book");
uoLibrary.deleteBook("54738902345");
uoLibrary.listBooks();

