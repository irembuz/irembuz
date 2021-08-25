import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import ProjectsScreen from "./screens/ProjectsScreen";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/projects" component={ProjectsScreen} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
