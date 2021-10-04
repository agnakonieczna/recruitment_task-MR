const GET_DATA = 'GET_DATA';
const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
const GET_DATA_FAILURE = 'GET_DATA_FAILURE';
const REMOVE_DATA_ITEM = 'REMOVE_DATA_ITEM';
const ADD_DATA_ITEM = 'ADD_DATA_ITEM';

const getData = () => {
  return {
    type: GET_DATA
  };
};

const getDataSuccess = (data) => {
  return {
    type: GET_DATA_SUCCESS,
    payload: data
  };
};

const getDataFailure = (error) => {
  return {
    type: GET_DATA_FAILURE,
    payload: error
  };
};

const removeDataItem = (id) => {
  return {
    type: REMOVE_DATA_ITEM,
    payload: id
  };
};

const addDataItem = (data) => {
  return {
    type: ADD_DATA_ITEM,
    payload: data
  };
};

const fetchData = () => (dispatch) => {
  dispatch(getData()); //start fetch
  return fetch('http://mobile-reality-backend.sadek.usermd.net/houses/all')
    .then((resp) => resp.json())
    .then((data) => dispatch(getDataSuccess(data.results)))
    .catch((err) => dispatch(getDataFailure(err)));
};

const deleteData = (id) => (dispatch) => {
  return fetch(`http://mobile-reality-backend.sadek.usermd.net/houses/${id}`, {
    method: 'DELETE'
  })
    .then((resp) => dispatch(removeDataItem(id)))
};

const addData = (data) => (dispatch) => {
  return fetch('http://mobile-reality-backend.sadek.usermd.net/houses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((resp) => dispatch(addDataItem(data)));
};

export {
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
  REMOVE_DATA_ITEM,
  ADD_DATA_ITEM,
  getData,
  getDataSuccess,
  getDataFailure,
  fetchData,
  removeDataItem,
  deleteData,
  addData
};
