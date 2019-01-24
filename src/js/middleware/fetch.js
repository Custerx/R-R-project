import { DATA_LOADED } from '../constants/action-types'
import { getData } from '../actions/index'

export function fetchMiddleware ({ dispatch }) {
  return function (next) {
    return function (action) {
      // -- Start of middleware logic --

      // -- End of middleware logic --
      return next(action)
    }
  }
}
