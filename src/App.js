import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home'
import './App.css';
import StoryForm from './StoryForm';
import Stories from './Stories'
import Navigation from './Navigation'
import Story from './Story'


const App = () =>{
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

export default App;
