import React, { Component } from 'react';
// RHL only for front end development
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Components/Home.jsx'
import Book from './Components/Book.jsx'
import Navigation from './Components/Navigation.jsx'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/book" component={Book} />
            </Switch>
        </div>
      </BrowserRouter>

    )
  }
}

// hot export works with RHL. Remove line 11 when starting fullstack integration
export default App;
// Uncomment line 13 & delete line 11 when starting fullstack integration
// export default App;
