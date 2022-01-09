import React, {useEffect, useState} from 'react';
import './BuyScreen.scss';
import ListCards from '../ListCards/ListCards';
import ActionAreaCard from '../ComponentCard/ComponenetCard';
import Searchbox from '../Searchbox/Searchbox';
import Filter from '../Filter/Filter';

const BuyScreen = (props) => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch("http://localhost:4000/getListings/", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
        }).then((response) => response.json())
            .then((resp) => {
                setProperties(resp);
                setLoading(false)
            })
    }, [])
    if (!loading) {
        return (
            <div>
                <div className="buy-container">
                    <div className="searchbox">
                        <Searchbox />
                    </div>
                </div>
                <div className="properties">
                    <Filter address={props.address} />
                    <ListCards properties={properties} text="Our Listings:" />
                </div>
            </div>
        )
    }

    else {
        return (
            <div>
                Loading.......
            </div>
        )
    }
}
export default BuyScreen;