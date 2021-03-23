import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home'
import './App.css';
import StoryForm from './containers/StoryForm';
import Stories from './containers/Stories'
import Navigation from './components/Navigation'
import Story from './containers/Story'


class App extends Component {
  render() {
    return (
      <Router>

        <Navigation />
        <div className="App">
        <Switch>

              <Route exact path="/" component={Home} />
              <Route exact path="/stories" component={Stories} />
              <Route exact path='/stories/new' component={StoryForm} />

              <Route path='/stories/:id' component={Story} />
        </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
