import React from 'react';
import './JoinScreen.scss';

const JoinScreen = () => {
    return (
        <div>
            <div className="join-container">
                <div className="box">
                    <div>
                        <h2 className="join-text-title">
                            Why Join Dangi Realty?
                        </h2>
                        <p className="join-text-para">
                            When you join Dangi Realty, you become part of a global family of agents and partners dedicated to transforming the real estate experience. Learn more about how we empower our agents with world-class education, strategic partnership and stock awards. 
                        </p>
                    </div>
                    <div className="apply-button">
                        <button name="applyForAgent">APPLY FOR BEING AN AGENT</button>
                    </div>
                    {/* <Searchbox /> */}
                </div>
            </div>
        </div>
    )
}

export default JoinScreen;