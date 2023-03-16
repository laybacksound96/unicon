import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
