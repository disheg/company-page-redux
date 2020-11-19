import { handleResponse, handleError } from './apiUtils';
const baseUrl = process.env.API_URL + '/people/';

export function getPeople() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function savePerson(person) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(person),
  })
    .then(handleResponse)
    .catch(handleError);
}
