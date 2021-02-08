import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import SellItem from "./components/SellItem/SellItem";
import "./style.css";

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/SellItem">
          <SellItem />
        </Route>


      </Switch>
    </Router>
  );
}

export default App;
