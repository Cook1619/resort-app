import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navbar';
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:id" component={SingleRoom} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
