import React from "react";
import { BrowserRouter as Router, Route,Routes, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import "./App.scss";

function App() {
  return (

    <div className="App">
      <Router>
        <Header/>
        <div className="container">
        <Routes>
         <Route path="/" exact element={<Home/>} />
        <Route path="/movies/:imdbID" element={<MovieDetails/>} />
        <Route path = "*" element={<PageNotFound/>} />
       </Routes>
       </div>
       
        <Footer />
      </Router>
    </div>
  );
}

export default App;
