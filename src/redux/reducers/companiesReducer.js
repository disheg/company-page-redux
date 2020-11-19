import * as types from '../actions/actionsTypes';
import initialState from './initialState';

export default function companiesReducer(
  state = initialState.companies,
  action
) {
  switch (action.type) {
    case types.LOAD_COMPANIES_SUCCESS:
      return action.companies;
    default:
      return state;
  }
}
