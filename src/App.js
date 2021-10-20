import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/UI/Header";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Project from "./pages/Project";
import About from "./pages/About";
import Footer from "./components/UI/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
};

const Main = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/blog">
        <Blog />
      </Route>
      <Route path="/project">
        <Project />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Switch>
  );
};

export default App;
