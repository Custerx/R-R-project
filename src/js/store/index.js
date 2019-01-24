import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/index'
import { forbiddenWordsMiddleware } from '../middleware/index'
import thunk from 'redux-thunk'
import { fetchMiddleware } from '../middleware/fetch'

// For using Redux Dev Tools together with other middlewares.
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk, fetchMiddleware))
)

export default store
