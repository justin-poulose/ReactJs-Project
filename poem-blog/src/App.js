import Navbar from './Navbar';
import Homes from './ContentHome';
import CreatePost from './CreatePost';
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
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
