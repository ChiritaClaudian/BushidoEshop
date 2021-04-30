import MainPage from "./pages/MainPage"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MarketPage from './pages/MarketPage'
import AboutPage from './pages/AboutPage'
import LoginPage from './pages/LoginPage'
import NavBar from './components/NavbarComponent'
import RegisterPage from './pages/RegisterPage'
import FooterComponent from './components/FooterComponent'
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <Router>
    <NavBar/>
    <Switch>
      <Route exact path="/" > <MainPage/> </Route>
      <Route exact path="/About"> <AboutPage/> </Route>
      <Route path="/Market"> <MarketPage/> </Route>
      <Route path="/login"><LoginPage/></Route>
      <Route path="/register"><RegisterPage/></Route>
      <Route path="/admin"><AdminPage/></Route>
    </Switch>
    <FooterComponent/>
    </Router>
  );
}

export default App;
