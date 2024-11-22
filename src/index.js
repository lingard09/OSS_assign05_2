import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import ShowList from "./components/Pages/ShowList";

const myComponent = (
  <div className="App">
    <h1 className="header">Book Management System</h1>
    <header className="App-header">
    <ShowList />
    </header>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(myComponent);