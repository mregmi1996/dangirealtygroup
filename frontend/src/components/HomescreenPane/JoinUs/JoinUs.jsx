import React from 'react';
import './JoinUs.scss';
import Button from '@mui/material/Button';

const JoinUs = () => {
    return (
        <div className="join-us-div">
            <div className="text-container">
                <h1>
                    Join Us Today!
                </h1>
                <p className="join-us-para">
                    Whether you’re a real estate agent or have a team, <br />or you’re thinking about a career in real estate, <br />Dangi Realty Group offers every agent the unique <br /> opportunity to become a shareholder in their own company, <br />and celebrate the company’s financial success.<br /> Join more than 60,000 agents worldwide who are growing their<br /> business, income, and skills with Dangi Realty Group.
                </p>
                <Button variant="contained" style={{ backgroundColor: "#323C5A" }}>Join Us</Button>
            </div>
        </div>
    )
}

export default JoinUs