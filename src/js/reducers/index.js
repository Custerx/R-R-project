import { ADD_ARTICLE, FOUND_BAD_WORD } from '../constants/action-types'

const initialState = {
  articles: [],
  message: {
    ok: 'Article successfully added',
    error: 'You word is not allowed'
  }
}

function Validate (state, action) {
  if (action.type === FOUND_BAD_WORD) {
    return Object.assign({}, state, {
      articles: state.articles,
      message: state.message.error
    })
  }
}

function rootReducer (state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    Validate(state, action)
    return Object.assign({}, state, { // Keeps the original state immutable.
      articles: state.articles.concat(action.payload), // Keeps the initial array immutable.
      message: state.message.ok
    })
  }

  return state
}

export default rootReducer
