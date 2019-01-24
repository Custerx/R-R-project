import { ADD_ARTICLE, FOUND_BAD_WORD, DATA_LOADED, FETCH_FAILURE } from '../constants/action-types'

export function addArticle (payload) {
  return { type: ADD_ARTICLE, payload }
}

export function foundBadWord (payload) {
  return { type: FOUND_BAD_WORD, payload }
}

export function getData () {
  return function (dispatch) {
    return window.fetch('madeup') // 'https://jsonplaceholder.typicode.com/posts'
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(response.status + ' (' + response.statusText + ')')
        }
      })
      .then(json => {
        dispatch({ type: DATA_LOADED, payload: json })
      })
      .catch(err => {
        dispatch({ type: FETCH_FAILURE, payload: err })
      })
  }
}
