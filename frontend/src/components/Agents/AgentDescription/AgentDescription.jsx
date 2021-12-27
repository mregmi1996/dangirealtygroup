import React from 'react';
import image_1 from '../../../assets/images/temp.jpeg';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import ListCards from '../../ListCards/ListCards';
import './AgentDescription.scss';

const AgentDescription=(props)=>{
    return(
        <div className="agent-details-main-container">
            <div className="agent-name">
                <h2 className="header-1">Agent Name</h2>
            </div>
            <div className="agent-details">
                <div className="agent-pic">
                    <img src={image_1} />
                </div>
                <div className="agent-about-container">
                    <div className="agent-about">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className="agent-contact">
                        <div className="agent-contact-email">
                            <a href=""><FaEnvelope style={{fontSize:'25px', paddingRight:"10px", paddingTop:"13px"}}/> <p className="contact-email">email@email.com</p></a> <br/><br/>
                        </div>
                        <div className="agent-contact-phone">
                            <a href=""><FaPhone style={{fontSize:'25px', paddingRight:"10px", paddingTop:"13px"}}/> <p className="contact-email">(888)-888-8888</p></a> <br/><br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgentDescription;