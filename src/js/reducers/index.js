import { ADD_ARTICLE, FOUND_BAD_WORD } from '../constants/action-types'

const initialState = {
  articles: []
}

const Message = {
  ok: 'Article successfully added',
  error: 'You word is not allowed'
}

function rootReducer (state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, { // Keeps the original state immutable.
      articles: state.articles.concat(action.payload), // Keeps the initial array immutable.
      message: Message.ok
    })
  }

  if (action.type === FOUND_BAD_WORD) {
    return Object.assign({}, state, {
      articles: state.articles,
      message: Message.error
    })
  }

  return state
}

export default rootReducer
