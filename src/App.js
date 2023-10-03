import {BrowserRouter as Router,Route , Switch } from 'react-router-dom';
import Nav from './Nav'
import Home from './Home';
import Create from './create';
import Blogdetails from './Blogdetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav></Nav>
       <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route  path="/create">
              <Create></Create>
            </Route>
            <Route  path="/blogs/:id">
              <Blogdetails></Blogdetails>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
       </div> 
    </div>
    </Router>
  );
}

export default App;
