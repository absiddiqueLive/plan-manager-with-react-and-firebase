import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/project/ProjectDetails";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
