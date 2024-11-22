import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import ShowList from "./components/Pages/ShowList";
import DetailPage from "./components/Pages/DetailPage";
import UpdatePage from "./components/Pages/UpdatePage";

const myComponent = (
  <div className="App">
    <h1 className="header">Book Management System</h1>
    <header className="App-header">
      <Router>
        <Routes>
          <Route path="/" element={<ShowList />} />
          <Route path="/list" element={<ShowList />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/update" element={<UpdatePage />} />
        </Routes>
      </Router>
    </header>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(myComponent);
