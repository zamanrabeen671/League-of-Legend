import './App.css';
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ClubDetail from './component/ClubDetail/ClubDetail';
function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/club/:name">
              <ClubDetail/>
          </Route>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route path="*">
            <h1>Error 404 Not Found</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
