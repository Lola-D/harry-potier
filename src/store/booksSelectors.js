export const booksSelector = ({ books }) => books;

export const selectedBooksSelector = ({ books }) => books.filter((book) => book.selected);