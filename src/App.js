import MainPage from "./pages/MainPage"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" component={MainPage}/>
    </Router>
  );
}

export default App;
