import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Routes/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
