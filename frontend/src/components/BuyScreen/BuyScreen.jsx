import React from 'react';
import './BuyScreen.scss';
import ListCards from '../ListCards/ListCards';
import ActionAreaCard from '../ComponentCard/ComponenetCard';
import Searchbox from '../Searchbox/Searchbox';
import Filter from '../Filter/Filter';

const BuyScreen = () => {
    return (
        <div>
            <div className="buy-container">
                <div className="searchbox">
                    <Searchbox />
                </div>
            </div>
            <div className="properties">
                <Filter/>
                <ListCards text="Our Listings:"/>
            </div>
        </div>
    )
}

export default BuyScreen;