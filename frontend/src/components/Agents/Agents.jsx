import React from 'react';
import AgentsCard from './AgentsCard/AgentsCard';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import './Agents.scss';
import ContactModal from '../ContactModal/ContactModal';

const Agents = () => {
    const agentsList=[
        {label:"Kumar Sigh Dangi"},
        {label:"Andre Dangi"},
        {label:"David Shepperd"},
    ]
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
                <AgentsCard />
                <AgentsCard />
                <AgentsCard />
                <AgentsCard />
                <AgentsCard />

            </div>
            </div>
        </div>
    )
}
export default Agents;