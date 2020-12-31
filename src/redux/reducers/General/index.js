import {SET_LOADING} from '../../../constants/initType';

const initGeneralState = {
  loading: false,
};

const GeneralState = (state = initGeneralState, action) => {
  if (action.type === SET_LOADING) {
    return {
      ...state,
      loading: action.value,
    };
  }

  return state;
};

export default GeneralState;
