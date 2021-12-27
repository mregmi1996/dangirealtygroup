import React from 'react';
import ListCards from '../../ListCards/ListCards';
import AgentDescription from '../AgentDescription/AgentDescription';

const AgentDetails=(props)=>{
    return(
        <div>
           <AgentDescription />
            <div className="agent-listings">
                <ListCards text="My Listings:"/>
            </div>
        </div>
    )
}

export default AgentDetails;