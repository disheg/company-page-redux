import * as types from '../actions/actionsTypes';
import initialState from './initialState';

export default function peopleReducer(state = initialState.people, action) {
  switch (action.type) {
    case types.CREATE_PERSON_SUCCESS:
      return [...state, { ...action.person }];
    case types.LOAD_PEOPLE_SUCCESS:
      return action.people;
    default:
      return state;
  }
}
