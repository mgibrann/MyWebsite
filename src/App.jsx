import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useEffect, Suspense, useState } from "react";

import Layout from "./components/Layout/Layout";
import Loading from "./components/UI/Loading";

const Home = React.lazy(() => import("./pages/Home"));
const Blog = React.lazy(() => import("./pages/Blog"));
const Projects = React.lazy(() => import("./pages/Projects"));
const About = React.lazy(() => import("./pages/About"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

export default function App() {
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsloading((prev) => !prev);
    }, 2000);
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
}

const Main = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/blog">
        <Blog />
      </Route>
      <Route path="/projects">
        <Projects />
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
