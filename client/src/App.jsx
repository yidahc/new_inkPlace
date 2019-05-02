/*
import React from 'react'
import moment from 'moment'
*/
import React, { Component } from 'react';
 
class App extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (

      <BrowserRouter>
        <div >
          <Navigation />


            <Switch>
              <Route exact path="/" render={(props) => <Home {...props} />
            } />
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
