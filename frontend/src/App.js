import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomescreenPane from "./components/HomescreenPane/HomescreenPane";
import Layout from "./components/Layout/Layout";
import './App.css';

function App() {
  return (
    <div className="dr_wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<Layout component={<HomescreenPane/>}/>}>
          </Route>
        </Routes>  
      </Router>
    </div>
  );
}

export default App;
