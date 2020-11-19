import * as types from './actionsTypes';
import * as companiesApi from '../../api/companiesApi';
import { beginApiCall, apiCallError } from './apiStatusActions';

export function loadCompaniesSuccess(companies) {
  return { type: types.LOAD_COMPANIES_SUCCESS, companies };
}
export function loadCompanies() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return companiesApi
      .getCompanies()
      .then((companies) => {
        dispatch(loadCompaniesSuccess(companies));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
