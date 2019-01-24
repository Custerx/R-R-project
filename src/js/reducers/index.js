import { ADD_ARTICLE, FOUND_BAD_WORD, DATA_LOADED, FETCH_FAILURE } from '../constants/action-types'
import { OK, ERROR, FETCH_ERROR } from '../constants/message-strings'

const initialState = {
  articles: [],
  remoteArticles: []
}

function rootReducer (state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, { // Keeps the original state immutable.
      articles: state.articles.concat(action.payload), // Keeps the initial array immutable.
      message: OK
    })
  }

  if (action.type === FOUND_BAD_WORD) {
    return Object.assign({}, state, {
      articles: state.articles,
      message: ERROR
    })
  }

  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    })
  }

  if (action.type === FETCH_FAILURE) {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles,
      message: FETCH_ERROR + action.payload
    })
  }

  return state
}

export default rootReducer
