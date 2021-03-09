import { createStore } from 'redux'
import state from './state'
import methods from './methods'

// 初始化
let data = state
let funObj = methods

const reducer = function (state = data, action) {
  if (action.type.indexOf('redux') === -1) {
    state = funObj[action.type](state, action)
    return { ...state }
  } else {
    return state
  }
}

const store = createStore(reducer)

export default store
