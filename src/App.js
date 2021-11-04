import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useEffect, Suspense, useState } from "react";

import Layout from "./components/Layout/Layout";
import AnimationLottie from "./components/UI/AnimationLottie";

const Home = React.lazy(() => import("./pages/Home"));
const Blog = React.lazy(() => import("./pages/Blog"));
const Project = React.lazy(() => import("./pages/Project"));
const About = React.lazy(() => import("./pages/About"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const Loading = () => {
  return (
    <div className="flex flex-grow items-center justify-center">
      <AnimationLottie width="30%" height="30%" type="loading" />
    </div>
  );
};

const App = () => {
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
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
