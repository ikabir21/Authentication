import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Form from './Form/Form';
import Home from './Home';
import Posts from './Posts';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Form} />
        <Route path="/posts" exact component={Posts} />
      </Switch> 
    </Router>
  )
}

export default App;
