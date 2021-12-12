import "./App.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Upload from "./pages/Upload/Upload";
import MainVideoPage from "./pages/MainVideoPage/MainVideoPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";
import MainVideo from "./components/MainVideo/MainVideo";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MainVideoPage} />
        <Route path="/upload" exact component={Upload} />
        <Route path="/video/:id" exact component={MainVideoPage} />
      </Switch>
    </Router>
  );
}

export default App;
