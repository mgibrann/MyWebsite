import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useEffect, Suspense, useState } from "react";

import Lottie from "react-lottie";
import { LoadingSpinner } from "./assets";
import Layout from "./components/Layout/Layout";
import useWindowDimensions from "./hooks/useWindowDimensions";

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

const Loading = () => {
  return (
    <div className="flex flex-grow items-center justify-center">
      <Lottie options={defaultOptions} width="30%" height="30%" />
    </div>
  );
};

const App = () => {
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    console.log("haloo");
    setTimeout(() => {
      setIsloading((prev) => !prev);
    }, 3000);
  }, []);
  return (
    <BrowserRouter>
      {isLoading ? (
        <Loading />
      ) : (
        <Layout>
          <Suspense fallback={<Loading />}>
            <Main />
          </Suspense>
        </Layout>
      )}
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
