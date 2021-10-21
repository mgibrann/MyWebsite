import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
// import Loading from "./components/UI/Loading";

import Lottie from "react-lottie";
import { LoadingSpinner } from "./assets";
import Layout from "./components/Layout/Layout";

const Home = React.lazy(() => import("./pages/Home"));
const Blog = React.lazy(() => import("./pages/Blog"));
const Project = React.lazy(() => import("./pages/Project"));
const About = React.lazy(() => import("./pages/About"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: LoadingSpinner,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const App = () => {
  return (
    <BrowserRouter>
      <React.Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            <Lottie options={defaultOptions} height={"30%"} width={"30%"} />
          </div>
        }
      >
        <Layout>
          <Main />
        </Layout>
      </React.Suspense>
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
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default App;
