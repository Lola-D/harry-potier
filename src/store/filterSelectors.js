export const filterSelector = ({ books, filter }) => {
  const filteredState = books.filter((book) => {
    return book.title.toLowerCase().search(filter) !== -1;
  });
  return filteredState;
};