import { ADD_ARTICLE, FOUND_BAD_WORD, DATA_LOADED, FETCH_FAILURE, LOAD_DATA } from '../constants/action-types'

export function addArticle (payload) {
  return { type: ADD_ARTICLE, payload }
}

export function foundBadWord (payload) {
  return { type: FOUND_BAD_WORD, payload }
}

export function dataLoaded (payload) {
  return { type: DATA_LOADED, payload }
}

export function fetchFailure (payload) {
  return { type: FETCH_FAILURE, payload }
}

export function getData () {
  return function (dispatch) {
    dispatch({ type: LOAD_DATA })
  }
}
