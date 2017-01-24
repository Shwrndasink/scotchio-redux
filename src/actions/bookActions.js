const apiUrl = 'http://57c62fdcc1fc8711008f2a7e.mockapi.io/api/book';
import Axios from 'axios';

export const fetchBooksSuccess = (books) => {
    return {
        type: 'FETCH_BOOK_SUCCESS',
        books
    }
};

//Async Action
export const fetchBooks = () => {
    //Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        return Axios.get(apiUrl)
            .then(response => {
                dispatch(fetchBooksSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            })
    }
}

export const createBookSuccess = (book) => {
    return {
        type: 'CREATE_BOOK_SUCCESS',
        book
    }
};

export const createBook = (book) => {
    return (dispatch) => {
        return Axios.post(apiUrl, book)
            .then(response => {
                dispatch(createBookSuccess(response.data));
            })
            .catch(error => {
                throw(error);
            });
    };
};

// ./src/actions/bookActions.js
// Sync Action
export const fetchBookByIdSuccess = (book) => {
  return {
    type: actionTypes.FETCH_BOOK_BY_ID_SUCCESS,
    book
  }
};
// Async Action
export const fetchBookById = (bookId) => {
  return (dispatch) => {
    return Axios.get(apiUrl + '/' +bookId)
      .then(response => {
        // Handle data with sync action
        dispatch(fetchBookByIdSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};

// ./src/actions/bookActions.js
// Sync add to cart
export const addToCartSuccess = (item) => {
  return {
    type: 'ADD_TO_CART_SUCCESS',
    item
  }
};
// Async add to cart
export const addToCart = (item) => {
  return (dispatch) => {
    return Axios.post('http://57c64baac1fc8711008f2a82.mockapi.io/Cart', item)
      .then(response => {
        dispatch(addToCartSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
// Sync load cart
export const fetchCartSuccess = (items) => {
  return {
    type: 'FETCH_CART_SUCCESS',
    items
  }
};
// Async load cart
export const fetchCart = () => {
  return (dispatch) => {
    return Axios.get('http://57c64baac1fc8711008f2a82.mockapi.io/Cart')
      .then(response => {
        dispatch(fetchCartSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
