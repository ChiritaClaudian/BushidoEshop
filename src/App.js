import MainPage from "./pages/MainPage"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import MarketPage from './pages/MarketPage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" > <MainPage/> </Route>
      <Route exact path="/About"> <AboutPage/> </Route>
      <Route path="/Market"> <MarketPage/> </Route>
    </Switch>
    </Router>
  );
}

export default App;
