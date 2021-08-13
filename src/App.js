import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Detail from "./components/Detail";
function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/detail'>
            <Detail></Detail>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
