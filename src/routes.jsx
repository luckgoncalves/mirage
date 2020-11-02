import React from 'react'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch } from 'react-router-dom'

import Login from './pages/Login'
import Paper from './pages/Paper'
import NewCompostion from './pages/NewComposition'
// import MyCompostion from './pages/MyComposition'
// import Settings from './pages/Settings'

const routes = () => {
  const hist = createBrowserHistory();

  return (
    <Router history={hist}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/paper"component={Paper} />
        <Route path="/new-composition" component={NewCompostion} />
        {/* <Route path="/my-composition" exact component={MyCompostion} /> */}
        {/* <Route path="/settings" exact component={Settings} /> */}
      </Switch>
    </Router>
  )}

export default routes