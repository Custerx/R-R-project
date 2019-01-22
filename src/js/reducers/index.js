import { ADD_ARTICLE } from '../constants/action-types'

const initialState = {
  articles: []
}

function rootReducer (state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, { // Keeps the original state immutable.
      articles: state.articles.concat(action.payload) // Keeps the initial array immutable.
    })
  }

  return state
}

export default rootReducer
