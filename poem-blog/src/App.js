import Navbar from './Navbar';
import Homes from './ContentHome';
import CreatePost from './CreatePost';
import Postpage from './Postpage';
import NotFound from './NotFound';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
           <Route exact path="/">
            <Homes/>
           </Route>
           <Route path="/createpost">
             <CreatePost/>
           </Route>
           <Route path="/posts/:id">
             <Postpage/>
           </Route>
           <Route path="*">
             <NotFound/>
           </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
