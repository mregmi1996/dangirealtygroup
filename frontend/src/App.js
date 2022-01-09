import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomescreenPane from "./components/HomescreenPane/HomescreenPane";
import Layout from "./components/Layout/Layout";
import BuyScreen from "./components/BuyScreen/BuyScreen";
import JoinScreen from "./components/JoinScreen/JoinScreen";
import SellScreen from "./components/SellScreen/SellScreen";
import Agents from "./components/Agents/Agents";
import PropertyDetails from "./components/PropertyDetails/PropertyDetails";
import './App.css';
import AgentDetails from "./components/Agents/AgentDetails/AgentDetails";
import { useSelector } from "react-redux";
import configuration from "./config";

function App() {
  const [address, setAddress] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`${configuration.URL}/getSearchBar/`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    }).then((response) => response.json())
      .then((resp) => {
        setAddress(resp);
        setLoading(false)
      })
  }, [])
  const selectedRealtor = useSelector(state => state.realtorReducer)
  if (!loading) {
    return (
      <div className="dr_wrapper">
        <Router>
          <Routes>
            <Route path="/" element={<Layout component={<HomescreenPane address={address} />} />} />
            <Route path="/buy" element={<Layout component={<BuyScreen address={address} />} />} />
            <Route path="/sell" element={<Layout component={<SellScreen />} />} />
            <Route path="/agents" element={<Layout component={<Agents />} />} />
            <Route path="/agentDetails" element={<Layout component={<AgentDetails selectedRealtor={selectedRealtor} />} />} />
            <Route path="/viewProperty" element={<Layout component={<PropertyDetails selectedRealtor={selectedRealtor} />} />} />
            <Route path="/join" element={<Layout component={<JoinScreen />} />} />
          </Routes>
        </Router>
      </div>
    );
  }
  else {
    return (<div>Loading</div>)
  }
}

export default App;
