import { LOAD_DATA } from '../constants/action-types'
import { dataLoaded, fetchFailure } from '../actions/index'

export function fetchMiddleware ({ dispatch }) {
  return function (next) {
    return function (action) {
      // -- Start of middleware logic --
      if (action.type === LOAD_DATA) {
        return window.fetch('madeup') // 'https://jsonplaceholder.typicode.com/posts'
          .then(response => {
            if (response.ok) {
              return response.json()
            } else {
              throw new Error(response.status + ' (' + response.statusText + ')')
            }
          })
          .then(json => {
            dispatch(dataLoaded(json))
          })
          .catch(err => {
            dispatch(fetchFailure(err))
          })
      }
      // -- End of middleware logic --
      return next(action)
    }
  }
}
