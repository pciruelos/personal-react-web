import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import FullProjects from './components/FullProjects'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<><Navbar /><Home /><About /><Projects /><Contact /></>} />
      <Route path="/allprojects" element={<FullProjects />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
