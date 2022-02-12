import Home from "./pages/Home";
import Apps from "./pages/Apps";
import React from "react";
import "./App.module.css"; //default css
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// todo https://adrianroselli.com/2018/02/github-contributions-chart.html
// Comment for the sake of github workflows.

// Types for colour scheme:
// Saved mode
// type Mode = "light" | "dark" | "system";
// // Visual themes
// type Theme = "light" | "dark";

// const ThemeContext = React.createContext<{
//   mode: Mode;
//   theme: Theme;
//   setMode: (mode);
// }>({
//   mode: "system",
//   theme: "light",
//   setMode: () => {}
// });

function App() {
  return (
    <Router basename={process.env.REACT_APP_BASENAME}>
      <Switch>
        <Route path="/apps">
          <Apps />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/*">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
