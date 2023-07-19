const initialState = {
  books: [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKS_LOADED':
      return {
        books: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;
