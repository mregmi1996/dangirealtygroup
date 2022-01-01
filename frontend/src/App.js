import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomescreenPane from "./components/HomescreenPane/HomescreenPane";
import Layout from "./components/Layout/Layout";
import BuyScreen from "./components/BuyScreen/BuyScreen";
import Agents from "./components/Agents/Agents";
import PropertyDetails from "./components/PropertyDetails/PropertyDetails";
import './App.css';
import AgentDetails from "./components/Agents/AgentDetails/AgentDetails";
import { useSelector } from "react-redux";

function App() {
  const selectedRealtor=useSelector(state=>state.realtorReducer)
  return (
    <div className="dr_wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<Layout component={<HomescreenPane />} />} />
          <Route path="/buy" element={<Layout component={<BuyScreen />} />} />
          <Route path="/agents" element={<Layout component={<Agents />} />} />
          <Route path="/agentDetails" element={<Layout component={<AgentDetails selectedRealtor={selectedRealtor}/>} />} />
          <Route path="/viewProperty" element={<Layout component={<PropertyDetails selectedRealtor={selectedRealtor}/>} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
