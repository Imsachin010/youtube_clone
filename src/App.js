import React from "react";
import Home from "./pages/Home";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Watch from "./pages/Watch";
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/watch/:id" element={<Watch/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
