import logo from "./logo.svg";
import "./App.css";
import Classroom from "./components/Classroom";
import About from "./components/pages/About";
import Header from "./components/layout/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <Classroom nom="JS DEV" />
    // </div>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Classroom nom="JS DEV" />
        </Route>
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
