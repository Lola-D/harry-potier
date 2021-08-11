
const FILTER_BOOKS = 'FILTER_BOOKS';

export const filterReducer = (state = [], action) => {
  switch (action.type) {
    case FILTER_BOOKS: {
      return action.payload;
    }
    default:
      return state;
  };
}