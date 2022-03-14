//import logo from './logo.svg';
import "./App.css";
//import Form from "./component/Form";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import Homepage from "./page/Homepage";
import DashBoard from "./page/DashBoard";
import ProductPage from "./page/ProductPage";
import { Route, Switch, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />

          <Route path="/dashboard" component={DashBoard} />
          <Route path="/productpage" component={ProductPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
