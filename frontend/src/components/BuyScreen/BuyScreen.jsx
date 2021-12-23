import React from 'react';
import './BuyScreen.scss';
import ListCards from '../ListCards/ListCards';
import ActionAreaCard from '../ComponentCard/ComponenetCard';
import Searchbox from '../Searchbox/Searchbox';

const BuyScreen = () => {
    return (
        <div>
            <div className="buy-container">
                <div className="searchbox">
                    <Searchbox />
                </div>
            </div>
            <ListCards text="Our Listings:"/>
        </div>
    )
}

export default BuyScreen;