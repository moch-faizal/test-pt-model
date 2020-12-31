import {
  CLEAR_CATEGORY,
  CLEAR_PRODUCT,
  GET_CATEGORY,
  GET_PRODUCT,
} from '../../../constants/initType';
import {setLoading} from '../General';
import categoryData from '../../../config/dummy/Home/category.json';
import productData from '../../../config/dummy/Home/product.json';

export const getCategory = () => {
  return (dispatch) => {
    dispatch(setLoading(true));
    dispatch({type: GET_CATEGORY, value: categoryData});
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 1000);
  };
};

export const getProduct = () => {
  return (dispatch) => {
    dispatch(setLoading(true));
    dispatch({type: GET_PRODUCT, value: productData});
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 1000);
  };
};

export const clearCategory = () => ({
  type: CLEAR_CATEGORY,
  value: false,
});

export const clearProduct = () => ({
  type: CLEAR_PRODUCT,
  value: false,
});
