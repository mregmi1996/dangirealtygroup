import React, { useState, useEffect } from 'react';
import AgentsCard from './AgentsCard/AgentsCard';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import configuration from '../../config';

import './Agents.scss';

const Agents = () => {
    const [realtors, setRealtors] = useState([]);
    const [agentsList, setAgentsList] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`${configuration.URL}/getAllRealtors`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        }).then((response) => response.json())
            .then((resp) => {
                setRealtors(resp);
                const agentNameList = [];
                resp.map((agents, index) => {
                    agentNameList.push(agents.name)
                })
                setAgentsList(agentNameList);
                setLoading(false);
            })
    }, [])
    if (loading) {
        return (<div>
            Loading.....
        </div>)
    }
    else {
        return (
            <div className="agents-main-container">
                <div className="modal">
                    {/* <ContactModal /> */}
                </div>
                <div>
                    <div className="agents-title">
                        <h1>Meet Our Realtors</h1>
                    </div>
                    <div className="search-by-name">
                        <p className="search-by-name-text">Search by name:</p>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={agentsList}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Agents" />}
                        />
                    </div>
                    <div className="realtors-card">
                        {
                            realtors.map((realtor, index) => {
                                return (<AgentsCard realtor={realtor}/>)
                            })}
                    </div>
                </div>
            </div>
        )
    }
}
export default Agents;