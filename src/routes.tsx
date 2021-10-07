import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Music from './pages/Music/Music'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/music" component={Music} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
