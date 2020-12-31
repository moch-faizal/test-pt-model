import {
  CLEAR_CATEGORY,
  CLEAR_PRODUCT,
  GET_CATEGORY,
  GET_PRODUCT,
} from '../../../constants/initType';

const initState = {
  categoryData: false,
  productData: false,
};

const Home = (state = initState, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        ...state,
        categoryData: action.value,
      };

    case CLEAR_CATEGORY:
      return {
        ...state,
        categoryData: action.value,
      };

    case GET_PRODUCT:
      return {
        ...state,
        productData: action.value,
      };

    case CLEAR_PRODUCT:
      return {
        ...state,
        productData: action.value,
      };
  }

  return state;
};

export default Home;
