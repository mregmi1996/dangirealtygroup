import React from 'react';
import ListCards from '../../ListCards/ListCards';
import Filter from '../../Filter/Filter';
import AgentDescription from '../AgentDescription/AgentDescription';
import './AgentDetails.scss';

const AgentDetails=(props)=>{
    return(
        <div>
           <AgentDescription selectedRealtor={props.selectedRealtor}/>
        </div>
    )
}

export default AgentDetails;