import axios from 'axios';

export const fetchBooks = async (dispatch) => {
  const { data } = await axios.get('https://henri-potier.techx.fr/books');
  dispatch({
    type: 'FETCH_BOOKS',
    payload: data,
  });
};

export const addToCart = (book) => {
  return {
    type: 'ADD_TO_CART',
    payload: book,
  };
};

export const removeFromCart = (book) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: book,
  };
};

export const subQuantity = (book) => {
  return {
    type: 'SUB_QUANTITY',
    payload: book,
  };
};

export const emptyCart = () => {
  return {
    type: 'EMPTY_CART',
  };
};