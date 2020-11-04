import LoadingActionTypes from '../actionTypes/loadingActionTypes';

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case LoadingActionTypes.LOADING_START:
      return true;
    case LoadingActionTypes.LOADING_STOP:
      return false;
    default:
      return state;
  }
}

export default loadingReducer;