import "./App.scss";
import Upload from "./pages/Upload/Upload";
import MainVideoPage from "./pages/MainVideoPage/MainVideoPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <MainVideoPage />
        </Route>
        <Route path="/upload">
          <Upload />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
