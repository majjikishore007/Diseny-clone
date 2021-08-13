import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Detail from "./components/Detail";
import Login from "./components/Login";
import { Provider } from "react-redux";
import { store } from "./store";
function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/detail'>
              <Detail></Detail>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
