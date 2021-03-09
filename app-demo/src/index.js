import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store/data'
import './assets/css/style.less'
import App from './views/App'
import Random from './views/dati/Random'
import Result from './views/dati/Result'
import Epidemic from './views/yiqing/Epidemic'
import News from './views/news/News'
import Counter from './views/counter/Counter'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" exact component={App}></Route>
      <Route path="/random" component={Random}></Route>
      <Route path="/result" component={Result}></Route>
      <Route path="/epidemic" component={Epidemic}></Route>
      <Route path="/news" component={News}></Route>
      <Route path="/counter" component={Counter}></Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
