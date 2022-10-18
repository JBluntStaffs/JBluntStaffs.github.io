import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import TopDown from './views/top-down'
import DeekSpace from './views/deek-space'
import Home from './views/home'
import VideoEssay from './views/video-essay'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={TopDown} exact path="/top-down" />
        <Route component={DeekSpace} exact path="/deek-space" />
        <Route component={Home} exact path="/" />
        <Route component={VideoEssay} exact path="/video-essay" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
