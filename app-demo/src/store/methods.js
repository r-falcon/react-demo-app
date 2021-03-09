let methods = {
  // dati
  random: function (state, action) {
    state.itemList = action.content
    return state
  },
  epidemic: function (state, action) {
    state.epidemicList = action.content
    state.isEpidemicLoading = action.isEpidemicLoading
    return state
  },
  news: function (state, action) {
    state.newsList = action.content
    state.isNewsLoading = action.isNewsLoading
    return state
  },
  add: function (state, action) {
    state.num++
    return state
  },
  sub: function (state, action) {
    state.num--
    return state
  },
}

export default methods
