export const filterBooks = (filter) => {
  return {
    type: 'FILTER_BOOKS',
    payload: filter,
  };
};