import { combineReducers } from 'redux';
import companies from './companiesReducer';
import people from './peopleReducer';
import apiCallsInProgress from './apiStatusReducer';

const rootReducer = combineReducers({
  companies,
  people,
  apiCallsInProgress,
});

export default rootReducer;
