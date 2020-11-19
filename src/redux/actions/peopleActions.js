import * as types from './actionsTypes';
import * as peopleApi from '../../api/peopleApi';
import { beginApiCall, apiCallError } from './apiStatusActions';

export function loadPeopleSuccess(people) {
  return { type: types.LOAD_PEOPLE_SUCCESS, people };
}

export function createPersonSuccess(person) {
  return { type: types.CREATE_PERSON_SUCCESS, person };
}

export function loadPeople() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return peopleApi
      .getPeople()
      .then((people) => {
        dispatch(loadPeopleSuccess(people));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function savePerson(person) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return peopleApi
      .savePerson(person)
      .then((savedPerson) => dispatch(createPersonSuccess(savedPerson)))
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
