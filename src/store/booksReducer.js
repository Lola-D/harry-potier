const FETCH_BOOKS = 'FETCH_BOOKS';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const SUB_QUANTITY = 'SUB_QUANTITY';
const EMPTY_CART = 'EMPTY_CART';

export const booksReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_BOOKS: {
      let newState = [];
      action.payload.map((book) => {
        return newState.push({...book, selected: false, quantity: 0})
      })
      return newState;
    }
    case ADD_TO_CART:
      return state.map((book) =>
          book === action.payload
            ? {...book, selected: true, quantity: book.quantity + 1}
            : book,
        );
    case REMOVE_FROM_CART:
      return state.map((book) =>
          book === action.payload
          ? {
            ...book, selected: false,
            quantity: book.quantity !== 1 ? book.quantity - 1 : 0
            }
            : book,
        );
    case SUB_QUANTITY:
      return state.map((book) =>
          book === action.payload
            ? {
                ...book,
                quantity: book.quantity !== 1 ? book.quantity - 1 : 0,
                selected:  book.quantity !== 1 ? book.selected : false,
              }
            : book,
        );
    case EMPTY_CART:
      return state.map((book) => 
          book.selected
            ? {...book, selected: false, quantity: 0}
            : book,
      );
    default:
      return state;
  };
};