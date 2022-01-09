import React, { useState, useEffect } from 'react';
import image_1 from '../../../assets/images/temp.jpeg';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import ListCards from '../../ListCards/ListCards';
import configuration from '../../../config';
import './AgentDescription.scss';

const AgentDescription=(props)=>{
    const [image, setImage] = useState();
    useEffect(() => {
        setImage(`${configuration.URL}/file/${props.selectedRealtor.realtor.image}/`)
        
    }, [])
    return(
        <div className="agent-details-main-container">
            {console.log(props.selectedRealtor.realtor)}
            <div className="agent-name">
                <h1 className="header-1">{props.selectedRealtor.realtor.name}</h1>
            </div>
            <div className="agent-details">
                <div className="agent-pic">
                    <img src={image} />
                </div>
                <div className="agent-about-container">
                    <div className="agent-about">
                    {props.selectedRealtor.realtor.description}
                    </div>
                    <div className="agent-contact">
                        <div className="agent-contact-email">
                            <a href=""><FaEnvelope style={{fontSize:'25px', paddingRight:"10px", paddingTop:"13px"}}/> <p className="contact-email">{props.selectedRealtor.realtor.email_id}</p></a> <br/><br/>
                        </div>
                        <div className="agent-contact-phone">
                            <a href=""><FaPhone style={{fontSize:'25px', paddingRight:"10px", paddingTop:"13px"}}/> <p className="contact-email">{props.selectedRealtor.realtor.phone}</p></a> <br/><br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgentDescription;