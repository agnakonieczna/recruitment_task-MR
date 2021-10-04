import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_FAILURE, REMOVE_DATA_ITEM, ADD_DATA_ITEM } from './actions';
import { combineReducers } from 'redux';

const initialState = {
  loading: false,
  error: '',
  data: []
};

const dataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DATA: {
      return {
        ...state,
        loading: true
      };
    }

    case GET_DATA_SUCCESS: {
      return {
        loading: false,
        error: '',
        data: payload
      };
    }

    case GET_DATA_FAILURE: {
      return {
        loading: false,
        error: payload,
        data: null
      };
    }

    case REMOVE_DATA_ITEM: {
      return {
        ...state,
        data: state.data.filter((item) => item._id !== payload)
      }
    }

    case ADD_DATA_ITEM: {
      return {
        ...state,
        data: [...state.data, payload]
      }
    }

    default: {
      return state;
    }
  }
};

export default combineReducers({
  data: dataReducer
});
